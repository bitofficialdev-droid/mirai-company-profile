import { HomeModel } from "../entities/home/home_model";

// export const HomeRepository = {
//   getHome: (): HomeModel => {
//     return {
//       hero: {
//         title:
//           "Kelola Administrasi HR & Payroll <span class='text-[#7efc62]'>Lebih Cepat & Akurat</span>",
//         description:
//           "Tinggalkan cara manual yang membuang waktu. Bit Hrms Web menghadirkan solusi manajemen SDM terintegrasi mulai dari absensi, penggajian, hingga pajak PPh 21 dalam satu platform cloud yang aman.",
//       },
//       trusted: [
//         {
//           label: "Bonecom Tricom",
//           image:
//             "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_bt@4x-8.png",
//         },
//         {
//           label: "Toyota Boshoku",
//           image:
//             "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_tbina@4x-8.png",
//         },
//         {
//           label: "Rajawali Mitra Pratama",
//           image:
//             "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_rmp@4x-8.png",
//         },
//         {
//           label: "Rajawali Inti Mandiri",
//           image:
//             "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_rim@4x-8.png",
//         },
//         {
//           label: "Bonecom Tricom Paintech",
//           image:
//             "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_btp@4x-8.png",
//         },
//         {
//           label: "Bonecom Tricom Paintech",
//           image:
//             "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_btp@4x-8.png",
//         },
//       ],
//       service: {
//         title: "Fitur Unggulan Bit Hrms",
//         description:
//           "Dirancang untuk memenuhi kebutuhan kompleks perusahaan manufaktur, jasa, dan korporasi dengan antarmuka yang user-friendly.",
//         services: [
//           {
//             title: "Payroll & Tax Otomatis",
//             description:
//               "Hitung gaji, lembur, BPJS, hingga PPh 21 secara otomatis dan presisi. Minimalkan human error dalam setiap periode penggajian.",
//             url: "#",
//           },
//           {
//             title: "Manajemen Absensi & Shift",
//             description:
//               "Pantau kehadiran karyawan secara real-time, kelola jadwal shift yang kompleks, dan integrasi mudah dengan mesin fingerprint atau mobile.",
//             url: "#",
//           },
//           {
//             title: "Database Karyawan Terpusat",
//             description:
//               "Simpan seluruh data karyawan, kontrak kerja, hingga riwayat karir dalam satu penyimpanan digital yang aman dan mudah diakses.",
//             url: "#",
//           },
//         ],
//       },
//       partner: {
//         title: "Ekosistem Terintegrasi",
//         description:
//           "Bit Hrms Web tidak berdiri sendiri. Kami mendukung integrasi dengan berbagai perangkat dan sistem untuk kelancaran operasional Anda.",
//         sections: [
//           "Integrasi Mesin Fingerprint",
//           "Export Bank Transfer (Payroll)",
//           "Laporan Pajak (e-SPT Support)",
//         ],
//       },
//       stats: [
//         {
//           label: "Karyawan Terkelola",
//           value: "10.000+",
//         },
//         {
//           label: "Perusahaan Pengguna",
//           value: "50+",
//         },
//         {
//           label: "Tahun Pengalaman",
//           value: "8+",
//         },
//         {
//           label: "Akurasi Perhitungan",
//           value: "99.9%",
//         },
//       ],
//       portfolio: {
//         title: "Solusi untuk Berbagai Industri",
//         description:
//           "Lihat bagaimana Bit Hrms membantu berbagai skala bisnis mengefisiensikan operasional HR mereka.",
//         portfolios: [
//           {
//             id: "1",
//             title: "Manufaktur & Pabrik",
//             description:
//               "Pengelolaan ribuan karyawan dengan sistem shift yang kompleks dan lembur otomatis.",
//           },
//           {
//             id: "2",
//             title: "Korporat & Jasa",
//             description:
//               "Sistem approval cuti berjenjang dan penilaian kinerja (KPI) yang transparan.",
//           },
//         ],
//       },
//       review: {
//         title: "Apa Kata Klien Kami?",
//         comments: [
//           {
//             id: "1",
//             name: "Budi Santoso",
//             job: "HR Manager",
//             company: "PT Bonecom Tricom",
//             comment:
//               "Sejak menggunakan Bit Hrms, proses closing payroll yang biasanya butuh 5 hari kini selesai dalam 1 hari. Sangat membantu efisiensi tim HR.",
//           },
//           {
//             id: "2",
//             name: "Siti Aminah",
//             job: "Finance Director",
//             company: "Rajawali Group",
//             comment:
//               "Perhitungan pajak PPh 21 sangat akurat dan selalu update dengan regulasi terbaru. Laporan ke manajemen jadi lebih mudah.",
//           },
//           {
//             id: "3",
//             name: "Rahmat Hidayat",
//             job: "Plant Manager",
//             company: "Toyota Boshoku Indonesia",
//             comment:
//               "Monitoring absensi ribuan karyawan pabrik jadi jauh lebih transparan. Data lembur tercatat rapi dan mengurangi komplain karyawan.",
//           },
//         ],
//       },
//       contact: {
//         title: "Siap Transformasi HR Anda?",
//         description:
//           "Jangan biarkan administrasi menghambat pertumbuhan bisnis. Konsultasikan kebutuhan Anda sekarang dan dapatkan demo gratis.",
//       },
//     };
//   },
// };

export const HomeRepository = {
  getHome: (): HomeModel => {
    return {
      hero: {
        title:
          "Kelola HR & Payroll <span class='text-[#7efc62]'>Tanpa Ribet</span>",
        description:
          "Bit HRMS, Satu platform untuk semua kebutuhan HR. Pantau kinerja tim via Web Dashboard dan berikan kemudahan akses mandiri bagi karyawan lewat aplikasi Mobile.",
      },
      trusted: [
        {
          label: "Bonecom Tricom",
          image:
            "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_bt@4x-8.png",
        },
        {
          label: "Toyota Boshoku",
          image:
            "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_tbina@4x-8.png",
        },
        {
          label: "Rajawali Mitra Pratama",
          image:
            "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_rmp@4x-8.png",
        },
        {
          label: "Rajawali Inti Mandiri",
          image:
            "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_rim@4x-8.png",
        },
        {
          label: "Bonecom Tricom Paintech",
          image:
            "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_btp@4x-8.png",
        },
        {
          label: "Bonecom Tricom Paintech",
          image:
            "https://miraisoftnet.com/dev/wp-content/uploads/2025/11/cust_btp@4x-8.png",
        },
      ],
      service: {
        title: "Solusi Lengkap dalam Genggaman",
        description:
          "Kami mengintegrasikan sistem administrasi yang kompleks ke dalam tampilan yang simpel untuk semua level pengguna.",
        services: [
          {
            title: "Automated Payroll",
            description:
              "Hitung gaji, lembur, hingga PPh 21 secara otomatis. Semua data terpusat di Web, minim risiko salah hitung.",
            url: "#",
          },
          {
            title: "Employee Self-Service",
            description:
              "Karyawan bisa absen, cek slip gaji, hingga ajukan cuti langsung dari aplikasi Mobile. Lebih praktis, tanpa tumpukan kertas.",
            url: "#",
          },
          {
            title: "Smart Monitoring",
            description:
              "Pantau kehadiran dan progres tim secara real-time. Memudahkan atasan memberikan persetujuan (approval) kapan saja.",
            url: "#",
          },
        ],
      },
      partner: {
        title: "Ekosistem HR Masa Kini",
        description:
          "Bit Hrms dirancang untuk menyederhanakan alur kerja administratif Anda agar bisa lebih fokus pada pengembangan SDM.",
        sections: [
          "Akses Web untuk Admin & Management",
          "Aplikasi Mobile untuk Seluruh Karyawan",
          "Keamanan Data Standar Perusahaan",
        ],
      },
      stats: [
        { label: "User Aktif", value: "10k+" },
        { label: "Perusahaan", value: "50+" },
        { label: "Proses Payroll", value: "100%" },
        { label: "Hemat Waktu", value: "85%" },
      ],
      portfolio: {
        title: "Telah Dipercaya Berbagai Sektor",
        description:
          "Mulai dari industri manufaktur hingga jasa, Bit Hrms menyesuaikan dengan skala bisnis Anda.",
        portfolios: [
          {
            id: "1",
            title: "Optimasi Manufaktur",
            description:
              "Otomasi data ribuan karyawan dengan sistem shift dinamis.",
          },
          {
            id: "2",
            title: "Efisiensi Korporasi",
            description:
              "Penyederhanaan proses birokrasi dan approval melalui aplikasi.",
          },
        ],
      },
      review: {
        title: "Apa Kata Mereka?",
        comments: [
          {
            id: "1",
            name: "Hendra Wijaya",
            job: "HR Director",
            company: "PT Bonecom Tricom",
            comment:
              "Transisi dari manual ke Bit Hrms sangat smooth. Tim lapangan sangat terbantu dengan aplikasi mobile-nya.",
          },
          {
            id: "2",
            name: "Dewi Lestari",
            job: "Finance Manager",
            company: "Rajawali Group",
            comment:
              "Sangat akurat dalam menghitung PPh 21 dan BPJS. Benar-benar memangkas waktu kerja tim Finance kami.",
          },
          {
            id: "3",
            name: "Budi Pratama",
            job: "Operations Manager",
            company: "Toyota Boshoku",
            comment:
              "Sistem approval lewat web bikin kerjaan gak terhambat birokrasi lama. Semuanya jadi serba cepat.",
          },
        ],
      },
      contact: {
        title: "Mulai Transformasi Digital HR Anda",
        description:
          "Gabung bersama puluhan perusahaan lainnya yang telah merasakan kemudahan mengelola SDM dengan Bit Hrms.",
      },
    };
  },
};
