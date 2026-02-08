import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:image_picker/image_picker.dart';
import '../models/document_model.dart';
import '../services/firestore_service.dart';
import '../utils/cnic_parser.dart';

class AddDocumentScreen extends StatefulWidget {
  final CnicData? scannedData;

  const AddDocumentScreen({super.key, this.scannedData});

  @override
  State<AddDocumentScreen> createState() => _AddDocumentScreenState();
}

class _AddDocumentScreenState extends State<AddDocumentScreen> {
  final _formKey = GlobalKey<FormState>();
  bool _isLoading = false;

  // Controllers
  final _titleController = TextEditingController(text: 'My CNIC');
  final _nameController = TextEditingController();
  final _fatherNameController = TextEditingController();
  final _genderController = TextEditingController();
  final _numberController = TextEditingController();
  final _countryController = TextEditingController();
  final _addressController = TextEditingController();
  
  // Dates
  DateTime? _dob;
  DateTime? _issueDate;
  DateTime? _expiryDate;
  
  // Images (Strings for now, assume paths/URLs)
  String? _frontImagePath;
  String? _backImagePath;

  final ImagePicker _picker = ImagePicker();

  @override
  void initState() {
    super.initState();
    _populateFromScan();
  }

  void _populateFromScan() {
    if (widget.scannedData == null) return;
    final data = widget.scannedData!;

    _numberController.text = data.number;
    if (data.name != null) _nameController.text = data.name!;
    if (data.fatherName != null) _fatherNameController.text = data.fatherName!;
    if (data.gender != null) _genderController.text = data.gender!;
    if (data.countryOfStay != null) _countryController.text = data.countryOfStay!;

    if (data.dateOfExpiry != null) _expiryDate = _parseDate(data.dateOfExpiry!);
    if (data.dateOfIssue != null) _issueDate = _parseDate(data.dateOfIssue!);
    if (data.dateOfBirth != null) _dob = _parseDate(data.dateOfBirth!);
  }

  DateTime? _parseDate(String dateStr) {
    try {
      return DateFormat('dd.MM.yyyy').parse(dateStr);
    } catch (e) {
      return null;
    }
  }

  Future<void> _pickBackImage() async {
    final XFile? image = await _picker.pickImage(source: ImageSource.camera);
    if (image != null) {
      setState(() => _backImagePath = image.path);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('New Document')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _buildSectionHeader('Basic Info'),
              TextFormField(
                controller: _titleController,
                decoration: const InputDecoration(labelText: 'Document Title', prefixIcon: Icon(Icons.title)),
                validator: (v) => v!.isEmpty ? 'Required' : null,
              ),
              const SizedBox(height: 10),
              TextFormField(
                controller: _nameController,
                decoration: const InputDecoration(labelText: 'Name', prefixIcon: Icon(Icons.person)),
              ),
               const SizedBox(height: 10),
              TextFormField(
                controller: _fatherNameController,
                decoration: const InputDecoration(labelText: 'Father Name', prefixIcon: Icon(Icons.family_restroom)),
              ),
              const SizedBox(height: 10),
              TextFormField(
                controller: _genderController,
                decoration: const InputDecoration(labelText: 'Gender', prefixIcon: Icon(Icons.male)),
              ),
              const SizedBox(height: 10),
              TextFormField(
                controller: _numberController,
                decoration: const InputDecoration(labelText: 'Identity Number (CNIC)', prefixIcon: Icon(Icons.badge)),
                validator: (v) => v!.isEmpty ? 'Required' : null,
              ),

              const SizedBox(height: 20),
              _buildSectionHeader('Dates'),
              _buildDatePicker('Date of Birth', _dob, (d) => setState(() => _dob = d)),
              const SizedBox(height: 10),
              _buildDatePicker('Date of Issue', _issueDate, (d) => setState(() => _issueDate = d)),
              const SizedBox(height: 10),
              _buildDatePicker('Date of Expiry', _expiryDate, (d) => setState(() => _expiryDate = d)),

              const SizedBox(height: 20),
              _buildSectionHeader('Additional Info'),
              TextFormField(
                controller: _countryController,
                decoration: const InputDecoration(labelText: 'Country of Stay', prefixIcon: Icon(Icons.public)),
              ),
              const SizedBox(height: 10),
              TextFormField(
                controller: _addressController,
                decoration: const InputDecoration(labelText: 'Address (Urdu/English)', prefixIcon: Icon(Icons.home)),
                maxLines: 2,
              ),

              const SizedBox(height: 20),
              _buildSectionHeader('Images'),
              Row(
                children: [
                  Expanded(child: _buildImageCard('Front', _frontImagePath ?? 'scanned')),
                  const SizedBox(width: 10),
                  Expanded(child: InkWell(
                    onTap: _pickBackImage,
                    child: _buildImageCard('Back +', _backImagePath),
                  )),
                ],
              ),

              const SizedBox(height: 30),
              SizedBox(
                width: double.infinity,
                height: 50,
                child: _isLoading
                    ? const Center(child: CircularProgressIndicator())
                    : Column(
                        children: [
                          SizedBox(
                            width: double.infinity,
                            child: ElevatedButton(
                              style: ElevatedButton.styleFrom(
                                backgroundColor: Theme.of(context).primaryColor,
                                foregroundColor: Colors.white,
                              ),
                              onPressed: _saveDocument,
                              child: const Text('Save Document'),
                            ),
                          ),
                          if (widget.scannedData != null)
                            TextButton.icon(
                              onPressed: () {
                                showDialog(
                                  context: context,
                                  builder: (ctx) => AlertDialog(
                                    title: const Text('Raw Gemini Output'),
                                    content: SingleChildScrollView(
                                      child: SelectableText(widget.scannedData!.rawText),
                                    ),
                                    actions: [
                                      TextButton(
                                        onPressed: () => Navigator.pop(ctx),
                                        child: const Text('Close'),
                                      )
                                    ],
                                  ),
                                );
                              },
                              icon: const Icon(Icons.bug_report, size: 16),
                              label: const Text('View Raw JSON', style: TextStyle(fontSize: 12)),
                            ),
                        ],
                      ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildSectionHeader(String title) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
    );
  }

  Widget _buildDatePicker(String label, DateTime? date, Function(DateTime) onPick) {
    return InkWell(
      onTap: () async {
        final picked = await showDatePicker(
          context: context,
          initialDate: date ?? DateTime.now(),
          firstDate: DateTime(1900),
          lastDate: DateTime(2050),
        );
        if (picked != null) onPick(picked);
      },
      child: InputDecorator(
        decoration: InputDecoration(
          labelText: label,
          prefixIcon: const Icon(Icons.calendar_today),
        ),
        child: Text(
          date != null ? DateFormat('dd MMM yyyy').format(date) : 'Select Date',
          style: TextStyle(color: date != null ? Colors.black : Colors.grey),
        ),
      ),
    );
  }

  Widget _buildImageCard(String label, String? path) {
    return Container(
      height: 100,
      decoration: BoxDecoration(
        color: Colors.grey.shade200,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: Colors.grey.shade400),
      ),
      child: Center(
        child: path != null 
            ? Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                   const Icon(Icons.check_circle, color: Colors.green),
                   Text(label),
                ],
              )
            : Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                   const Icon(Icons.camera_alt, color: Colors.grey),
                   Text(label),
                ],
              ),
      ),
    );
  }

  Future<void> _saveDocument() async {
    if (!_formKey.currentState!.validate() || _expiryDate == null) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Please fill required fields')));
      return;
    }

    setState(() => _isLoading = true);
    try {
      final user = FirebaseAuth.instance.currentUser!;
      final doc = VaultDocument(
        id: DateTime.now().millisecondsSinceEpoch.toString(),
        userId: user.uid,
        type: DocumentType.cnic,
        title: _titleController.text,
        documentNumber: _numberController.text,
        expiryDate: _expiryDate!,
        issueDate: _issueDate,
        dob: _dob,
        name: _nameController.text,
        fatherName: _fatherNameController.text,
        gender: _genderController.text,
        countryOfStay: _countryController.text,
        cnicAddress: _addressController.text,
        imageUrl: '', // Need upload logic
        imageUrlBack: '',
        createdAt: DateTime.now(),
      );

      await context.read<FirestoreService>().addDocument(doc);
      if (mounted) context.go('/');
    } catch (e) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Error: $e')));
    } finally {
      if (mounted) setState(() => _isLoading = false);
    }
  }
}
