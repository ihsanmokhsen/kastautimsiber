export const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: 'password-management',
    question: 'Manakah kata sandi yang paling aman?',
    options: [
      { id: 'a', text: 'password123' },
      { id: 'b', text: 'Budi2024' },
      { id: 'c', text: 'S4y4!ng_Ind0n3s1a#2025' },
      { id: 'd', text: '12345678' }
    ],
    correctId: 'c',
    explanation: 'Kata sandi kuat menggunakan kombinasi huruf besar, kecil, angka, dan simbol dengan minimal 12 karakter.'
  },
  {
    id: 2,
    category: 'email-usage',
    question: 'Anda menerima email dari "admin@bank-indonesia.co.id" yang meminta Anda mengklik tautan untuk memverifikasi akun. Apa yang sebaiknya Anda lakukan?',
    options: [
      { id: 'a', text: 'Langsung klik tautan karena terlihat resmi' },
      { id: 'b', text: 'Abaikan dan hapus email' },
      { id: 'c', text: 'Periksa alamat pengirim dengan teliti dan hubungi bank langsung melalui nomor resmi' },
      { id: 'd', text: 'Teruskan ke rekan kerja untuk meminta pendapat' }
    ],
    correctId: 'c',
    explanation: 'Selalu verifikasi identitas pengirim sebelum mengklik tautan. Phishing sering meniru alamat email resmi dengan domain yang sedikit berbeda.'
  },
  {
    id: 3,
    category: 'incident-reporting',
    question: 'Anda menemukan file mencurigakan di komputer kerja. Apa langkah pertama yang tepat?',
    options: [
      { id: 'a', text: 'Hapus file tersebut segera' },
      { id: 'b', text: 'Buka file untuk melihat isinya' },
      { id: 'c', text: 'Laporkan ke tim IT atau melalui sistem pelaporan insiden' },
      { id: 'd', text: 'Abaikan karena mungkin tidak berbahaya' }
    ],
    correctId: 'c',
    explanation: 'Jangan menghapus atau membuka file mencurigakan. Laporkan segera agar tim IT dapat menangani dengan aman.'
  },
  {
    id: 4,
    category: 'social-media-usage',
    question: 'Rekan kerja meminta Anda membagikan foto ruang server kantor di media sosial. Bagaimana sikap Anda?',
    options: [
      { id: 'a', text: 'Membagikan karena hanya foto ruangan biasa' },
      { id: 'b', text: 'Menolak karena informasi internal kantor tidak boleh dibagikan ke publik' },
      { id: 'c', text: 'Membagikan hanya ke grup tertutup' },
      { id: 'd', text: 'Meminta izin atasan dulu sebelum membagikan' }
    ],
    correctId: 'b',
    explanation: 'Informasi infrastruktur internal seperti ruang server bersifat sensitif dan tidak boleh dibagikan ke media sosial.'
  },
  {
    id: 5,
    category: 'mobile-devices',
    question: 'Anda sedang bekerja di kafe menggunakan Wi-Fi publik. Apa tindakan yang paling aman?',
    options: [
      { id: 'a', text: 'Mengirim data sensitif karena koneksi terlihat aman' },
      { id: 'b', text: 'Menghindari akses ke sistem penting dan menggunakan VPN jika harus bekerja' },
      { id: 'c', text: 'Menggunakan Wi-Fi publik sama amannya dengan Wi-Fi kantor' },
      { id: 'd', text: 'Menonaktifkan antivirus agar koneksi lebih cepat' }
    ],
    correctId: 'b',
    explanation: 'Wi-Fi publik rentan terhadap penyadapan. Hindari mengakses data sensitif dan gunakan VPN untuk enkripsi koneksi.'
  },
  {
    id: 6,
    category: 'data-protection',
    question: 'Setelah selesai bekerja dengan sistem informasi pemerintah, apa yang seharusnya Anda lakukan?',
    options: [
      { id: 'a', text: 'Meminimalkan jendela browser' },
      { id: 'b', text: 'Logout/keluar dari sistem' },
      { id: 'c', text: 'Membiarkan tetap login agar besok lebih cepat' },
      { id: 'd', text: 'Menutup laptop tanpa logout' }
    ],
    correctId: 'b',
    explanation: 'Selalu logout dari sistem setelah selesai bekerja untuk mencegah akses tidak sah oleh orang lain.'
  },
  {
    id: 7,
    category: 'internet-usage',
    question: 'Saat mengakses situs web pemerintah, Anda melihat alamat URL tidak sesuai dengan yang biasa Anda gunakan. Apa yang Anda lakukan?',
    options: [
      { id: 'a', text: 'Tetap login karena tampilannya sama' },
      { id: 'b', text: 'Tidak jadi login dan laporkan ke tim IT' },
      { id: 'c', text: 'Mencoba login dengan akun cadangan' },
      { id: 'd', text: 'Mengabaikan perbedaan alamat' }
    ],
    correctId: 'b',
    explanation: 'URL yang berbeda bisa menandakan situs palsu (phishing). Jangan login dan laporkan ke tim IT segera.'
  },
  {
    id: 8,
    category: 'information-handling',
    question: 'Anda menemukan USB flash drive di parkiran kantor. Apa yang sebaiknya dilakukan?',
    options: [
      { id: 'a', text: 'Colokkan ke komputer untuk melihat siapa pemiliknya' },
      { id: 'b', text: 'Serahkan ke tim IT atau keamanan kantor' },
      { id: 'c', text: 'Simpan untuk digunakan pribadi' },
      { id: 'd', text: 'Buang ke tempat sampah' }
    ],
    correctId: 'b',
    explanation: 'USB yang ditemukan bisa berisi malware. Jangan pernah mencolokkan perangkat tidak dikenal ke komputer kerja.'
  },
  {
    id: 9,
    category: 'security-culture',
    question: 'Rekan kerja Anda menggunakan kata sandi yang sama untuk semua akun kerja. Apa tindakan Anda?',
    options: [
      { id: 'a', text: 'Tidak peduli karena itu urusan pribadi' },
      { id: 'b', text: 'Mengingatkan tentang pentingnya kata sandi berbeda untuk tiap akun' },
      { id: 'c', text: 'Melaporkan ke atasan' },
      { id: 'd', text: 'Ikut menggunakan kata sandi yang sama' }
    ],
    correctId: 'b',
    explanation: 'Membangun budaya keamanan berarti saling mengingatkan. Satu akun yang dibobol bisa membahayakan seluruh sistem.'
  },
  {
    id: 10,
    category: 'password-management',
    question: 'Berapa minimal panjang kata sandi yang direkomendasikan untuk akun kerja penting?',
    options: [
      { id: 'a', text: '4 karakter' },
      { id: 'b', text: '6 karakter' },
      { id: 'c', text: '8 karakter' },
      { id: 'd', text: '12 karakter atau lebih' }
    ],
    correctId: 'd',
    explanation: 'Standar keamanan modern merekomendasikan minimal 12 karakter dengan kombinasi huruf, angka, dan simbol.'
  }
];

export const QUIZ_LEVELS = [
  { min: 0, max: 3, label: 'Perlu Peningkatan', description: 'Pengetahuan keamanan siber Anda masih perlu ditingkatkan. Mulailah dengan membaca tips keamanan di halaman utama.' },
  { min: 4, max: 6, label: 'Cukup Baik', description: 'Anda sudah memiliki dasar yang baik. Tingkatkan terus kesadaran keamanan Anda.' },
  { min: 7, max: 8, label: 'Baik', description: 'Pengetahuan keamanan siber Anda sudah baik. Terus praktikkan dalam pekerjaan sehari-hari.' },
  { min: 9, max: 10, label: 'Sangat Baik', description: 'Luar biasa! Anda memiliki pemahaman keamanan siber yang kuat. Jadilah duta keamanan di instansi Anda.' }
];
