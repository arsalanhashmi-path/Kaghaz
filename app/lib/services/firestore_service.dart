import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/document_model.dart';
import 'package:flutter/foundation.dart';

class FirestoreService {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  // Collection Reference
  CollectionReference<Map<String, dynamic>> _documentsRef(String userId) {
    return _db.collection('users').doc(userId).collection('documents');
  }

  // Stream of User Documents
  Stream<List<VaultDocument>> getUserDocuments(String userId) {
    return _documentsRef(userId)
        .orderBy('createdAt', descending: true)
        .snapshots()
        .map((snapshot) {
      return snapshot.docs
          .map((doc) => VaultDocument.fromSnapshot(doc))
          .toList();
    });
  }

  // Add Document
  Future<void> addDocument(VaultDocument document) async {
    try {
      await _documentsRef(document.userId)
          .doc(document.id)
          .set(document.toJson());
    } catch (e) {
      debugPrint('Error adding document: $e');
      rethrow;
    }
  }

  // Delete Document
  Future<void> deleteDocument(String userId, String documentId) async {
     try {
      await _documentsRef(userId).doc(documentId).delete();
    } catch (e) {
      debugPrint('Error deleting document: $e');
      rethrow;
    }
  }
}
