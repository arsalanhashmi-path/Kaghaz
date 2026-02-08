import 'dart:io';
import 'dart:convert';
import 'package:google_generative_ai/google_generative_ai.dart';

class CnicData {
  final String number;
  final String? dateOfIssue;
  final String? dateOfExpiry;
  final String? dateOfBirth;
  final String? name;
  final String? fatherName;
  final String? gender;
  final String? countryOfStay;
  final String? cnicAddress;
  final String rawText;

  CnicData({
    required this.number,
    this.dateOfIssue,
    this.dateOfExpiry,
    this.dateOfBirth,
    this.name,
    this.fatherName,
    this.gender,
    this.countryOfStay,
    this.cnicAddress,
    required this.rawText,
  });
}

class CnicParser {
  // TODO: Replace with your actual Gemini API Key
  // You can get one at https://aistudio.google.com/app/apikey
  static const String _apiKey = 
  
  late final GenerativeModel _model;

  CnicParser() {
    _model = GenerativeModel(
      model: 'gemini-2.5-flash-lite', 
      apiKey: _apiKey,
      generationConfig: GenerationConfig(responseMimeType: 'application/json'),
    );
  }

  Future<CnicData?> scanImage(String imagePath) async {
    try {
      final file = File(imagePath);
      if (!await file.exists()) return null;

      final imageBytes = await file.readAsBytes();
      final prompt = Content.multi([
        TextPart(_promptText),
        DataPart('image/jpeg', imageBytes),
      ]);

      final response = await _model.generateContent([prompt]);
      final text = response.text;
      
      if (text == null) return null;

      // Clean cleanup json markdown if present
      final cleanText = text.replaceAll('```json', '').replaceAll('```', '').trim();
      final jsonMap = jsonDecode(cleanText) as Map<String, dynamic>;

      return CnicData(
        number: jsonMap['identity_number'] ?? '',
        name: jsonMap['name'],
        fatherName: jsonMap['father_name'],
        gender: jsonMap['gender'],
        countryOfStay: jsonMap['country_of_stay'],
        dateOfBirth: jsonMap['dob'],
        dateOfIssue: jsonMap['date_of_issue'],
        dateOfExpiry: jsonMap['date_of_expiry'],
        cnicAddress: jsonMap['address'], // Urdu or English
        rawText: text,
      );

    } catch (e) {
      // In production, log error properly
      print('Gemini OCR Error: $e');
      return null;
    }
  }

  static const _promptText = '''
    Analyze this Pakistan CNIC image and return specific fields in a strict JSON format.

    JSON SCHEMA:
    {
      "identity_number": "00000-0000000-0",
      "name": "Full Name in English",
      "father_name": "Father Name in English",
      "gender": "M or F",
      "country_of_stay": "Countr Name",
      "dob": "DD.MM.YYYY",
      "date_of_issue": "DD.MM.YYYY",
      "date_of_expiry": "DD.MM.YYYY",
      "address": "Full Address in Urdu or English"
    }

    INSTRUCTIONS:
    1. If a field is not visible (e.g., BACK side of card), return null for that field.
    2. Do NOT format dates differently. use DD.MM.YYYY.
    3. Return ONLY the JSON object. Do not wrap in markdown or backticks.
  ''';

  void dispose() {
    // No cleanup needed for Gemini instance
  }
}
