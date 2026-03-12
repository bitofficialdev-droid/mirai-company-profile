export const PRICE_MENUS = [
  {
    name: "Biaya Berlangganan",
    slug: "subscription-pricing",
  },
  {
    name: "Biaya Tambahan",
    slug: "additional-fees",
  },
];

export const PRICESUBSPRICING = {
  header: {
    label: "Harga Transparan",
    title: "Pilih Paket yang Sesuai dengan Skala Bisnis Anda",
    desc: "Sistem HRMS yang fleksibel dan terukur. Mulai dari tim kecil hingga perusahaan besar, kami menyediakan solusi dengan biaya yang efisien.",
  },
  plans: [
    {
      name: "Starter",
      price: "Gratis",
      period: "Selamanya",
      desc: "Cocok untuk UMKM atau startup yang baru memulai digitalisasi HR.",
      features: [
        "Maksimal 5 Karyawan",
        "Absensi Selfie & GPS",
        "Manajemen Cuti Dasar",
        "Laporan Kehadiran Bulanan",
      ],
      isPopular: false,
      buttonText: "Mulai Gratis",
    },
    {
      name: "Business",
      price: "Rp 15.000",
      period: "/karyawan /bulan",
      desc: "Solusi lengkap untuk perusahaan yang sedang berkembang pesat.",
      features: [
        "Semua fitur Starter",
        "Karyawan Tak Terbatas",
        "Payroll & Slip Gaji Digital",
        "Perhitungan PPh 21 & BPJS",
        "Reimbursement & Claim",
      ],
      isPopular: true,
      buttonText: "Coba Gratis 14 Hari",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Harga Khusus",
      desc: "Fitur kustom dan dukungan prioritas untuk kebutuhan korporasi besar.",
      features: [
        "Semua fitur Business",
        "Integrasi API Custom",
        "Dedicated Account Manager",
        "White-label Dashboard",
        "On-premise Deployment (Opsional)",
      ],
      isPopular: false,
      buttonText: "Hubungi Sales",
    },
  ],
  comparison: {
    title: "Bandingkan Fitur Secara Lengkap",
    desc: "Lihat rincian fitur dari masing-masing paket untuk menemukan yang paling pas.",
    features: [
      {
        name: "Maksimal Karyawan",
        starter: "5 Karyawan",
        business: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Absensi GPS & Selfie",
        starter: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Manajemen Cuti & Izin",
        starter: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Payroll Automation",
        starter: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Kalkulasi PPh 21 & BPJS",
        starter: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Reimbursement System",
        starter: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Custom Report Generator",
        starter: false,
        business: false,
        enterprise: true,
      },
      {
        name: "Dedicated Support",
        starter: false,
        business: false,
        enterprise: true,
      },
    ],
  },
  faq: {
    title: "Pertanyaan yang Sering Diajukan",
    desc: "Temukan jawaban untuk pertanyaan umum seputar langganan Bit HRMS.",
    questions: [
      {
        q: "Apakah ada biaya setup atau instalasi awal?",
        a: "Tidak ada. Untuk paket Starter dan Business, Anda bisa langsung mendaftar dan menggunakan sistem tanpa biaya setup tambahan.",
      },
      {
        q: "Bagaimana jika jumlah karyawan saya bertambah di tengah bulan?",
        a: "Sistem kami akan menagih secara pro-rata. Anda hanya membayar sesuai dengan jumlah hari karyawan tersebut aktif di dalam sistem.",
      },
      {
        q: "Apakah data perusahaan saya aman?",
        a: "Sangat aman. Kami menggunakan enkripsi setara bank (AES-256) dan server berbasis cloud yang rutin dicadangkan (backup) setiap hari.",
      },
      {
        q: "Bisakah saya membatalkan langganan kapan saja?",
        a: "Tentu. Kami tidak mengikat Anda dengan kontrak jangka panjang untuk paket Business. Anda bisa berhenti berlangganan kapan pun dibutuhkan.",
      },
    ],
  },
  cta: {
    title: "Siap Mengubah Cara Anda Mengelola HR?",
    desc: "Bergabung dengan ratusan perusahaan yang telah beralih ke Bit HRMS.",
    buttonText: "Jadwalkan Demo Gratis",
    buttonLink: "https://wa.me/6285218026895",
  },
};

export const PRICEADDFEES = {
  header: {
    label: "Layanan Ekstra",
    title: "Kustomisasi & Biaya Tambahan",
    desc: "Tingkatkan fungsionalitas Bit HRMS Anda dengan layanan tambahan opsional. Bayar hanya untuk apa yang benar-benar Anda butuhkan.",
  },
  addons: [
    {
      name: "Setup & Migrasi Data",
      price: "Rp 1.500.000",
      period: "Satu kali bayar",
      desc: "Bebaskan tim Anda dari kerumitan teknis. Kami bantu masukkan data karyawan, sisa cuti, dan saldo kasbon dari Excel lama Anda ke sistem.",
      features: [
        "Import data master karyawan",
        "Setup hierarki & approval line",
        "Penyesuaian template slip gaji",
        "Sesi training admin HR (2 Jam)",
      ],
      isPopular: true,
      buttonText: "Pesan Layanan Setup",
    },
    {
      name: "Mesin Absensi Face/Fingerprint",
      price: "Mulai Rp 2.500.000",
      period: "Satu kali bayar / unit",
      desc: "Integrasikan mesin absensi biometrik fisik di kantor Anda yang otomatis tersinkronisasi langsung secara real-time ke cloud Bit HRMS.",
      features: [
        "Support Face & Fingerprint",
        "Koneksi via LAN/Wi-Fi",
        "Otomatis masuk ke laporan absensi",
        "Termasuk biaya instalasi standar (Jabodetabek)",
      ],
      isPopular: false,
      buttonText: "Lihat Katalog Mesin",
    },
    {
      name: "Kuota Notifikasi WhatsApp",
      price: "Rp 150.000",
      period: "/ 1000 pesan",
      desc: "Kirimkan notifikasi penting langsung ke WhatsApp karyawan Anda, seperti info slip gaji rilis, reminder absen, hingga persetujuan cuti.",
      features: [
        "Terintegrasi API WhatsApp Resmi",
        "Pengiriman instan & otomatis",
        "Laporan status pengiriman (Terkirim/Dibaca)",
        "Tanpa masa kedaluwarsa kuota",
      ],
      isPopular: false,
      buttonText: "Beli Kuota WA",
    },
    {
      name: "Custom Domain & White-label",
      price: "Rp 500.000",
      period: "/ bulan",
      desc: "Tingkatkan branding perusahaan dengan menggunakan logo sendiri dan akses dashboard HR melalui domain khusus (misal: hr.namaperusahaan.com).",
      features: [
        "Hapus logo & watermark Bit HRMS",
        "Gunakan domain perusahaan",
        "Kustomisasi warna tema dashboard",
        "Prioritas bantuan teknis",
      ],
      isPopular: false,
      buttonText: "Aktifkan White-label",
    },
  ],
  faq: {
    title: "FAQ Biaya Tambahan",
    desc: "Informasi detail mengenai layanan ekstra dan integrasi perangkat keras.",
    questions: [
      {
        q: "Apakah layanan Setup & Migrasi Data ini wajib?",
        a: "Tidak wajib. Anda bisa melakukan input data sendiri secara gratis melalui fitur mass-upload CSV yang sudah kami sediakan di dalam sistem.",
      },
      {
        q: "Saya sudah punya mesin absensi sendiri, bisakah dihubungkan?",
        a: "Bisa, selama mesin Anda mendukung push-protocol SDK (seperti merk ZKTeco atau Solution). Akan dikenakan biaya integrasi API satu kali bayar. Silakan hubungi tim teknis kami untuk pengecekan tipe mesin.",
      },
      {
        q: "Bagaimana sistem pemotongan kuota WhatsApp?",
        a: "Setiap 1 kali pengiriman pesan otomatis (misal: notifikasi slip gaji) akan memotong 1 kuota. Jika pesan gagal terkirim karena nomor tidak valid, kuota tidak akan hangus.",
      },
      {
        q: "Apakah harga mesin absensi sudah termasuk garansi?",
        a: "Ya, semua perangkat keras yang dibeli melalui Bit HRMS memiliki garansi resmi pabrik selama 1 tahun (hardware) dan garansi setup perangkat lunak selama 3 bulan.",
      },
    ],
  },
  cta: {
    title: "Butuh Kustomisasi Spesifik?",
    desc: "Tim engineer kami siap membantu mengembangkan modul atau integrasi khusus sesuai alur kerja perusahaan Anda.",
    buttonText: "Konsultasikan Kebutuhan Anda",
    buttonLink: "https://wa.me/6285218026895",
  },
};
