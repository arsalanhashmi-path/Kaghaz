import 'package:cloud_firestore/cloud_firestore.dart';

enum DocumentType {
  cnic,
  passport,
  license,
  registration,
  other,
}

class VaultDocument {
  final String id;
  final String userId;
  final DocumentType type;
  final String title;
  final String documentNumber;
  final DateTime expiryDate;
  final DateTime? issueDate;
  final String imageUrl; // Front Side
  final String? imageUrlBack; // Back Side
  
  // Specific Fields (CNIC / Passport etc)
  final String? name;
  final String? fatherName;
  final String? gender;
  final DateTime? dob;
  final String? countryOfStay;
  final String? cnicAddress; // Urdu or English
  
  final Map<String, dynamic> metadata;
  final DateTime createdAt;

  VaultDocument({
    required this.id,
    required this.userId,
    required this.type,
    required this.title,
    required this.documentNumber,
    required this.expiryDate,
    this.issueDate,
    required this.imageUrl,
    this.imageUrlBack,
    this.name,
    this.fatherName,
    this.gender,
    this.dob,
    this.countryOfStay,
    this.cnicAddress,
    this.metadata = const {},
    required this.createdAt,
  });

  bool get isExpired => DateTime.now().isAfter(expiryDate);
  bool get isExpiringSoon =>
      !isExpired &&
      expiryDate.difference(DateTime.now()).inDays <= 30;

  Map<String, dynamic> toJson() {
    return {
      'userId': userId,
      'type': type.name,
      'title': title,
      'documentNumber': documentNumber,
      'expiryDate': Timestamp.fromDate(expiryDate),
      'issueDate': issueDate != null ? Timestamp.fromDate(issueDate!) : null,
      'imageUrl': imageUrl,
      'imageUrlBack': imageUrlBack,
      'name': name,
      'fatherName': fatherName,
      'gender': gender,
      'dob': dob != null ? Timestamp.fromDate(dob!) : null,
      'countryOfStay': countryOfStay,
      'cnicAddress': cnicAddress,
      'metadata': metadata,
      'createdAt': Timestamp.fromDate(createdAt),
    };
  }

  factory VaultDocument.fromSnapshot(DocumentSnapshot doc) {
    final data = doc.data() as Map<String, dynamic>;
    return VaultDocument(
      id: doc.id,
      userId: data['userId'] ?? '',
      type: DocumentType.values.firstWhere(
        (e) => e.name == data['type'],
        orElse: () => DocumentType.other,
      ),
      title: data['title'] ?? '',
      documentNumber: data['documentNumber'] ?? '',
      expiryDate: (data['expiryDate'] as Timestamp).toDate(),
      issueDate: (data['issueDate'] as Timestamp?)?.toDate(),
      imageUrl: data['imageUrl'] ?? '',
      imageUrlBack: data['imageUrlBack'],
      name: data['name'],
      fatherName: data['fatherName'],
      gender: data['gender'],
      dob: (data['dob'] as Timestamp?)?.toDate(),
      countryOfStay: data['countryOfStay'],
      cnicAddress: data['cnicAddress'],
      metadata: Map<String, dynamic>.from(data['metadata'] ?? {}),
      createdAt: (data['createdAt'] as Timestamp).toDate(),
    );
  }
}
