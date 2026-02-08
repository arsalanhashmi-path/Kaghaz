import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:firebase_auth/firebase_auth.dart';
import '../screens/login_screen.dart';
import '../screens/home_screen.dart';
import '../screens/main_layout.dart';
import '../screens/placeholders.dart';
import '../screens/scan_screen.dart';
import '../screens/add_document_screen.dart';
import '../utils/cnic_parser.dart';
import '../services/auth_service.dart';

class AppRouter {
  final AuthService authService;

  AppRouter(this.authService);

  late final GoRouter router = GoRouter(
    refreshListenable: authService,
    navigatorKey: GlobalKey<NavigatorState>(),
    initialLocation: '/',
    redirect: (context, state) {
      final user = authService.currentUser;
      final loggingIn = state.uri.toString() == '/login';
      
      if (user == null) {
        return loggingIn ? null : '/login';
      }
      
      if (loggingIn) {
        return '/';
      }
      
      return null;
    },
    routes: [
      GoRoute(
        path: '/login',
        builder: (context, state) => const LoginScreen(),
      ),
      ShellRoute(
        builder: (context, state, child) => MainLayout(child: child),
        routes: [
          GoRoute(
            path: '/',
            builder: (context, state) => const HomeScreen(),
          ),
          GoRoute(
            path: '/vault',
            builder: (context, state) => const VaultScreen(),
          ),
          GoRoute(
            path: '/profile',
            builder: (context, state) => const ProfileScreen(),
          ),
        ],
      ),
      GoRoute(
        path: '/scan',
        builder: (context, state) => const ScanScreen(),
      ),
      GoRoute(
        path: '/add-document',
        builder: (context, state) {
          final cnicData = state.extra as CnicData?;
          return AddDocumentScreen(scannedData: cnicData);
        },
      ),
    ],
  );
}
