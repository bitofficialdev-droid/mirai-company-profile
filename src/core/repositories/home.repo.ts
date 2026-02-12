import { HomeModel } from "../entities/home/home_model";

export const HomeRepository = {
  getHome: (): HomeModel => {
    return {
      hero: {
        title:
          "Kelola Administrasi <span class='text-[#7efc62]'>Tanpa Ribet</span>",
        description:
          "Bit HRMS, Satu platform untuk semua kebutuhan HR. Pantau kinerja tim via Web Dashboard dan berikan kemudahan akses mandiri bagi karyawan lewat aplikasi Mobile.",
        image: "/mockup.png",
        linkButton: "https://wa.me/6289646616188",
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
        image: "/hr.jpg",
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
            image: ["/factory.jpg"],
          },
          {
            id: "2",
            title: "Efisiensi Korporasi",
            description:
              "Penyederhanaan proses birokrasi dan approval melalui aplikasi.",
            image: ["/corporate.jpg"],
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
