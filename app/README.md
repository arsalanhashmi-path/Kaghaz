# Kaghaz Vault 🔒

**Kaghaz Vault** is a secure, intelligent document wallet for Pakistani citizens. It allows you to scan, store, and manage your important identity documents (like CNIC) with ease.

## 🚀 Current Features

### 🔐 Authentication

- **Google Sign-In**: Secure and fast login using your Google account.
- **Auto-Redirect**: Smart routing that keeps you logged in or redirects you to login as needed.

### 🧠 Smart OCR (Gemini AI)

- **Multimodal Scanning**: Uses **Google Gemini 2.5 Flash Lite** to "see" your documents.
- **Automatic Extraction**: Scans your CNIC to automatically fill:
  - Identity Number
  - Name (English)
  - Father's Name
  - Gender
  - Date of Birth, Issue, and Expiry
  - **Urdu Address** (extracts address from the back of the card!)
- **Debug Mode**: View the raw JSON data returned by the AI to verify accuracy.

### 📂 Document Management

- **Vault**: Store documents securely in the cloud (Firestore).
- **Premium UI**: A clean, modern interface for managing your digital identity.
- **Expiry Tracking**: (In Progress) logic to track document validity.

## 🛠️ Tech Stack

- **Framework**: Flutter (Mobile)
- **Backend**: Firebase (Auth, Firestore)
- **AI Engine**: Google Generative AI (Gemini)
- **State Management**: Provider
- **Routing**: GoRouter

## ⚡ Getting Started

### Prerequisites

- Flutter SDK installed.
- Android Device (minSdkVersion 24 / Android 7.0+).

### Setup

1.  **Clone the repo**:

    ```bash
    git clone <repo-url>
    cd app
    ```

2.  **Install Dependencies**:

    ```bash
    flutter pub get
    ```

3.  **Configure Gemini API**:
    - Get your API Key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    - Open `lib/utils/cnic_parser.dart`.
    - Paste your key:
      ```dart
      static const String _apiKey = 'YOUR_API_KEY_HERE';
      ```

4.  **Run the App**:
    ```bash
    flutter run
    ```

## 📝 Usage Guide

1.  **Login** with your Google account.
2.  Tap the **"+" (Add)** button on the Home Screen.
3.  Select **Camera** or **Gallery**.
4.  Capture the **Front** of your CNIC.
5.  Watch the form auto-fill!
6.  (Optional) Tap **"Back +"** to capture the rear side for the address.
7.  Save to your Vault.

---

_Last Updated: February 1, 2026_
