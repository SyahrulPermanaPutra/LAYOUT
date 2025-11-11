# LAYOUT

# Ujek App - Panduan Instalasi dan Menjalankan Aplikasi

## 📋 Prasyarat Sistem

Sebelum memulai, pastikan komputer Anda telah menginstal:

- **Node.js** (versi 14 atau lebih baru)
  - Download: [https://nodejs.org/](https://nodejs.org/)
  - Verifikasi instalasi: `node --version`

- **npm** (biasanya sudah termasuk dengan Node.js)
  - Verifikasi: `npm --version`

- **Git** (untuk clone repository)
  - Download: [https://git-scm.com/](https://git-scm.com/)
  - Verifikasi: `git --version`

## 📱 Opsi Pengembangan

### Opsi 1: Menggunakan Expo Go (Recommended untuk Pemula)

**Install Expo CLI:**
```bash
npm install -g expo-cli
```

**Verifikasi instalasi:**
```bash
expo --version
```

### Opsi 2: Menggunakan Android Studio (Untuk Emulator Android)

- Download: [Android Studio](https://developer.android.com/studio)
- Ikuti panduan instalasi resmi
- Setup Android Virtual Device (AVD)

### Opsi 3: Menggunakan Xcode (Untuk iOS Simulator - macOS saja)

- Download dari App Store
- Hanya tersedia untuk pengguna macOS

## 🚀 Langkah-langkah Instalasi

### 1. Clone atau Download Project

```bash
# Jika menggunakan Git
git clone <repository-url>
cd ujek-app

# Jika download ZIP, extract dan masuk ke folder project
```

### 2. Install Dependencies

```bash
# Masuk ke folder project
cd ujek-app

# Install semua dependencies
npm install
```

### 3. Install Dependencies Tambahan

```bash
# React Navigation
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs

# Expo Vector Icons (untuk ikon)
npx expo install @expo/vector-icons

# Dependencies React Navigation untuk Expo
npx expo install react-native-screens react-native-safe-area-context
```

## 🔧 Menjalankan Aplikasi

### Metode 1: Menggunakan Expo Go (Paling Mudah)

1. **Install Expo Go di smartphone Anda:**
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)

2. **Jalankan development server:**
   ```bash
   npx expo start
   ```

3. **Scan QR code yang muncul di terminal dengan:**
   - Kamera app (iOS)
   - Expo Go app (Android)
   - Atau buka Expo Go dan ketik URL yang ditampilkan

### Metode 2: Menggunakan Emulator

**Untuk Android Emulator:**
```bash
npx expo start
# Tekan 'a' di terminal untuk membuka di Android emulator
```

**Untuk iOS Simulator (macOS only):**
```bash
npx expo start
# Tekan 'i' di terminal untuk membuka di iOS simulator
```

### Metode 3: Build untuk Production

```bash
# Build untuk Android
npx expo build:android

# Build untuk iOS (hanya di macOS)
npx expo build:ios
```

## 📁 Struktur Project

```
ujek-app/
├── screens/
│   ├── HomeScreen.js
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
│   ├── OrdersScreen.js
│   └── ProfileScreen.js
├── App.js
├── package.json
├── app.json
└── README.md
```

## 🎯 Cara Menggunakan Aplikasi

1. **Register/Login:**
   - Buka aplikasi
   - Daftar akun baru atau login dengan akun yang sudah ada

2. **Menu Utama:**
   - Pilih layanan yang diinginkan (URide, UCar, IFood, dll)
   - Tap pada card layanan untuk memulai

3. **Pesanan:**
   - Lihat pesanan berlangsung di tab "Pesanan"
   - Cek riwayat pesanan yang sudah selesai

4. **Profil:**
   - Edit informasi profil
   - Keluar dari aplikasi

## 🐛 Troubleshooting

### Masalah Umum dan Solusi

**Error: "Module not found"**
```bash
npm install
# atau
npm ci
```

**Error: "Expo command not found"**
```bash
npm install -g expo-cli
```

**Aplikasi tidak bisa di-build:**
```bash
# Clear cache
npx expo start -c
```

**Port sudah digunakan:**
```bash
# Expo akan menawarkan port alternatif secara otomatis
# atau gunakan port spesifik
npx expo start --port 8080
```

## 📞 Support

Jika mengalami masalah:

1. **Cek dokumentasi resmi:**
   - [Expo Documentation](https://docs.expo.dev/)
   - [React Navigation Documentation](https://reactnavigation.org/)

2. **Cek issues yang sudah ada di repository**

3. **Buat issue baru dengan detail:**
   - Error message lengkap
   - Langkah reproduksi
   - Environment (OS, Node version, dll)

## 👥 Kontribusi

Ingin berkontribusi? Silakan:
1. Fork repository
2. Buat feature branch
3. Commit changes
4. Push ke branch
5. Buat Pull Request

## 📄 License

Project ini menggunakan lisensi MIT. Lihat file [LICENSE](LICENSE) untuk detail lengkap.

---

**Happy Coding! 🚀**

Dibuat dengan ❤️ menggunakan React Native dan Expo
