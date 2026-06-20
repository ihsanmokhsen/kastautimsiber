export const TIP_CATEGORIES = [
  {
    id: 'password-management',
    title: 'Kata Sandi Kuat, Akun Aman',
    source: 'NIST SP 800-63B',
    bullets: [
      'Gunakan minimal 12 karakter dengan kombinasi huruf, angka, dan simbol.',
      'Jangan gunakan kata sandi yang sama untuk akun berbeda.',
      'Aktifkan autentikasi dua faktor (2FA) di semua akun penting.',
      'Jangan simpan kata sandi di kertas, chat, atau catatan digital tanpa enkripsi.'
    ]
  },
  {
    id: 'email-usage',
    title: 'Email Aman Setiap Hari',
    source: 'NIST CSF — Protect',
    bullets: [
      'Jangan klik tautan atau lampiran dari pengirim yang tidak dikenal.',
      'Periksa alamat email pengirim dengan teliti — phishing sering meniru domain resmi.',
      'Hati-hati email yang mendesak atau mengancam — itu taktik social engineering.',
      'Verifikasi permintaan transfer dana atau data sensitif melalui saluran lain.'
    ]
  },
  {
    id: 'internet-usage',
    title: 'Bijak Saat Berselancar',
    source: 'CIS Control 9',
    bullets: [
      'Pastikan alamat situs dimulai dengan https:// sebelum memasukkan data apapun.',
      'Jangan login ke akun kerja dari komputer atau jaringan publik.',
      'Hindari mengunduh file dari sumber yang tidak terpercaya.',
      'Perhatikan sertifikat SSL — gembok hijau bukan jaminan situs aman 100%.'
    ]
  },
  {
    id: 'social-media-usage',
    title: 'Saring Sebelum Berbagi',
    source: 'ISO 27001 A.8.10',
    bullets: [
      'Atur privasi akun media sosial ke tingkat paling aman.',
      'Jangan unggah foto atau informasi tentang infrastruktur internal kantor.',
      'Pikirkan dampak jangka panjang sebelum memposting informasi kerja.',
      'Hati-hati terhadap rekayasa sosial — penipu bisa mengumpulkan info dari posting Anda.'
    ]
  },
  {
    id: 'incident-reporting',
    title: 'Lapor Cepat, Risiko Turun',
    source: 'NIST CSF — Respond',
    bullets: [
      'Laporkan hal mencurigakan secepat mungkin — waktu adalah kunci.',
      'Insiden kecil hari ini bisa jadi serangan besar besok jika tidak dilaporkan.',
      'Gunakan fitur laporan anonim jika ragu atau takut.',
      'Dokumentasikan bukti insiden (screenshot, waktu kejadian) sebelum melaporkan.'
    ],
    cta: 'Laporkan sekarang'
  },
  {
    id: 'mobile-devices',
    title: 'Perangkat Mobile Tetap Terjaga',
    source: 'NIST SP 800-124',
    bullets: [
      'Aktifkan kunci layar dengan PIN, sidik jari, atau face unlock.',
      'Setel kunci layar otomatis maksimal 30 detik.',
      'Jangan sambungkan perangkat kerja ke Wi-Fi publik tanpa VPN.',
      'Perbarui sistem operasi dan aplikasi secara berkala untuk menambal celah keamanan.'
    ]
  },
  {
    id: 'information-handling',
    title: 'Kelola Informasi dengan Rapi',
    source: 'ISO 27001 A.8.9',
    bullets: [
      'Klasifikasikan data sesuai tingkat sensitivitas: publik, internal, atau rahasia.',
      'Hancurkan dokumen sensitif dengan penghancur kertas sebelum dibuang.',
      'Jangan tinggalkan dokumen penting di meja terbuka atau printer bersama.',
      'Enkripsi file sensitif sebelum mengirim melalui email atau cloud.'
    ]
  },
  {
    id: 'security-culture',
    title: 'Budaya Aman Dimulai dari Kita',
    source: 'ISO 27001 A.6.3',
    bullets: [
      'Ikuti pelatihan keamanan informasi yang disediakan instansi secara serius.',
      'Saling mengingatkan rekan kerja tentang praktik keamanan yang baik.',
      'Keamanan informasi adalah tanggung jawab semua orang, bukan hanya tim IT.',
      'Laporkan kelemahan atau celah keamanan yang Anda temukan kepada tim IT.'
    ]
  },
  {
    id: 'data-protection',
    title: 'Lindungi Data yang Dikelola',
    source: 'UU PDP No. 27/2022',
    bullets: [
      'Akses data sesuai prinsip least privilege — hanya yang dibutuhkan untuk pekerjaan Anda.',
      'Jangan membagikan data pribadi orang lain tanpa izin tertulis.',
      'Selalu logout/keluar dari sistem saat selesai bekerja.',
      'Backup data penting secara berkala dan simpan salinan di tempat terpisah.'
    ]
  },
  {
    id: 'access-control',
    title: 'Kendalikan Akses dengan Ketat',
    source: 'ISO 27001 A.5.15',
    bullets: [
      'Jangan meminjamkan akun atau kata sandi Anda kepada siapapun.',
      'Kunci komputer (Win+L / Cmd+Ctrl+Q) setiap meninggalkan meja.',
      'Cabut kartu akses atau token USB saat tidak digunakan.',
      'Laporkan akun yang sudah tidak aktif kepada tim IT untuk dinonaktifkan.'
    ]
  },
  {
    id: 'phishing-awareness',
    title: 'Kenali dan Hindari Phishing',
    source: 'NIST CSF — Identify',
    bullets: [
      'Phishing tidak hanya lewat email — bisa lewat SMS (smishing), telepon (vishing), atau WhatsApp.',
      'Periksa URL dengan teliti: bank-indonesia.co.id ≠ bank-indonesia-login.com.',
      'Jangan pernah memberikan OTP, PIN, atau kata sandi kepada siapapun.',
      'Jika ragu, hubungi instansi terkait melalui nomor telepon resmi.'
    ]
  },
  {
    id: 'ransomware-prevention',
    title: 'Cegah Ransomware',
    source: 'NIST SP 800-61 Rev.2',
    bullets: [
      'Jangan membuka lampiran email dari sumber tidak dikenal.',
      'Backup data penting secara rutin — simpan offline atau di cloud terpisah.',
      'Jangan klik pop-up atau iklan yang tampak mencurigakan.',
      'Jika komputer terkunci ransomware, segera putuskan dari jaringan dan laporkan.'
    ]
  },
  {
    id: 'clean-desk-policy',
    title: 'Kebijakan Meja Bersih',
    source: 'ISO 27001 A.7.7',
    bullets: [
      'Simpan dokumen sensitif di laci terkunci saat meninggalkan meja.',
      'Kunci layar komputer setiap kali meninggalkan tempat duduk.',
      'Jangan tempelkan catatan berisi kata sandi atau informasi sensitif di monitor.',
      'Pastikan layar komputer tidak menghadap ke area yang bisa dilihat orang lewat.'
    ]
  },
  {
    id: 'software-updates',
    title: 'Selalu Perbarui Perangkat Lunak',
    source: 'CIS Control 7',
    bullets: [
      'Aktifkan pembaruan otomatis di semua perangkat kerja.',
      'Jangan tunda notifikasi update — patch sering menutup celah keamanan kritis.',
      'Jangan gunakan perangkat lunak bajakan — tidak mendapat patch keamanan.',
      'Laporkan perangkat yang sudah tidak didukung (end-of-life) kepada tim IT.'
    ]
  },
  {
    id: 'physical-security',
    title: 'Keamanan Fisik Sama Pentingnya',
    source: 'ISO 27001 A.7.1',
    bullets: [
      'Jangan biarkan orang asing masuk ke area kerja tanpa pendamping.',
      'Gunakan loker atau brankas untuk menyimpan perangkat dan dokumen penting.',
      'Jangan meninggalkan laptop tanpa pengawasan di ruang rapat atau area publik.',
      'Cabut USB atau media penyimpanan eksternal saat tidak digunakan.'
    ]
  },
  {
    id: 'cloud-security',
    title: 'Aman di Cloud dan Kolaborasi Online',
    source: 'NIST SP 800-144',
    bullets: [
      'Jangan bagikan tautan dokumen sensitif secara publik — atur akses per-orang.',
      'Periksa siapa yang memiliki akses ke folder bersama secara berkala.',
      'Gunakan akun kerja resmi untuk cloud storage — jangan campur dengan akun pribadi.',
      'Hati-hati berbagi layar saat meeting online — pastikan tidak ada data sensitif terlihat.'
    ]
  }
];
export const TIP_CATEGORIES = [
  {
    id: 'password-management',
    title: 'Kata Sandi Kuat, Akun Aman',
    bullets: [
      'Gunakan kombinasi huruf besar, kecil, angka, dan simbol.',
      'Gunakan kata sandi berbeda untuk tiap akun kerja penting.',
      'Jangan simpan kata sandi di kertas atau chat terbuka.'
    ]
  },
  {
    id: 'email-usage',
    title: 'Email Aman Setiap Hari',
    bullets: [
      'Jangan klik tautan dari pengirim yang tidak dikenal.',
      'Periksa alamat email pengirim sebelum merespons.',
      'Jangan buka lampiran yang mencurigakan.'
    ]
  },
  {
    id: 'internet-usage',
    title: 'Bijak Saat Berselancar',
    bullets: [
      'Hindari situs yang tampak tidak resmi atau aneh.',
      'Pastikan alamat situs benar sebelum login.',
      'Jangan isi data penting di halaman yang meragukan.'
    ]
  },
  {
    id: 'social-media-usage',
    title: 'Saring Sebelum Berbagi',
    bullets: [
      'Atur privasi akun media sosial ke tingkat aman.',
      'Pikirkan dampak sebelum memposting informasi kerja.',
      'Jangan unggah data internal kantor ke media sosial.'
    ]
  },
  {
    id: 'incident-reporting',
    title: 'Lapor Cepat, Risiko Turun',
    bullets: [
      'Laporkan hal mencurigakan secepat mungkin.',
      'Laporkan insiden kecil, jangan menunggu membesar.',
      'Gunakan fitur laporan anonim jika ragu.'
    ],
    cta: 'Laporkan sekarang'
  },
  {
    id: 'mobile-devices',
    title: 'Perangkat Mobile Tetap Terjaga',
    bullets: [
      'Aktifkan PIN, sidik jari, atau face unlock.',
      'Kunci layar otomatis dengan durasi singkat.',
      'Hindari kirim data sensitif lewat Wi-Fi publik.'
    ]
  },
  {
    id: 'information-handling',
    title: 'Kelola Informasi dengan Rapi',
    bullets: [
      'Hancurkan dokumen sensitif sebelum dibuang.',
      'Jangan tinggalkan dokumen penting di meja terbuka.',
      'Simpan berkas sensitif di tempat aman.'
    ]
  },
  {
    id: 'security-culture',
    title: 'Budaya Aman Dimulai dari Kita',
    bullets: [
      'Biasakan langkah aman dalam pekerjaan harian.',
      'Ikuti kebijakan keamanan instansi secara konsisten.',
      'Saling mengingatkan rekan kerja tentang praktik aman.'
    ]
  },
  {
    id: 'data-protection',
    title: 'Lindungi Data yang Dikelola',
    bullets: [
      'Akses data sesuai peran dan kebutuhan kerja saja.',
      'Jangan membagikan data pribadi tanpa izin.',
      'Keluar dari sistem saat selesai bekerja.'
    ]
  }
];
