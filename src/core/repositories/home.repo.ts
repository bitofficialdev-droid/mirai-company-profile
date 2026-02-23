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
        linkButton: "#contact",
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
      feature: {
        title: "Fitur Unggulan Bit Hrms",
        //TODO: update image and label
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
      faq: {
        title: "Frequently Asked Questions",
        description:
          "Temukan jawaban atas pertanyaan umum mengenai solusi HRMS kami untuk efisiensi bisnis Anda.",
        faqs: [
          {
            question: "Apa itu Bit Hrms dan bagaimana cara kerjanya?",
            answer:
              "Bit Hrms adalah platform digital terintegrasi untuk mengelola seluruh administrasi SDM, mulai dari absensi online, perhitungan payroll otomatis, hingga manajemen cuti dan pajak (PPh 21). Sistem bekerja secara cloud, sehingga data tersinkronisasi secara real-time antara aplikasi mobile karyawan dan dasbor admin.",
          },
          {
            question:
              "Apakah data perusahaan dan karyawan terjamin keamanannya?",
            answer:
              "Keamanan data adalah prioritas kami. Kami menggunakan enkripsi tingkat tinggi (SSL), penyimpanan server yang aman, dan sistem backup berkala. Selain itu, Anda dapat mengatur hak akses (role-based access) sehingga data sensitif hanya bisa dilihat oleh pihak yang berwenang.",
          },
          {
            question:
              "Bagaimana jika sistem penggajian kami memiliki aturan lembur yang kompleks?",
            answer:
              "Sistem kami sangat fleksibel. Anda dapat melakukan kustomisasi formula lembur, tunjangan, hingga potongan sesuai dengan peraturan perusahaan atau kebijakan UU Ketenagakerjaan yang berlaku di Indonesia.",
          },
          {
            question:
              "Apakah karyawan bisa melakukan absensi tanpa menggunakan mesin fingerprint?",
            answer:
              "Ya, sistem kami mendukung absensi mobile berbasis GPS dan Face Recognition. Karyawan dapat melakukan absen langsung dari smartphone mereka dengan batasan lokasi (geofencing) yang telah ditentukan oleh perusahaan.",
          },
          {
            question:
              "Berapa lama waktu yang dibutuhkan untuk implementasi sistem ini?",
            answer:
              "Waktu implementasi sangat bergantung pada jumlah data karyawan, namun rata-rata mitra kami dapat melakukan onboarding penuh dalam waktu 3 hingga 7 hari kerja dengan bantuan tim support kami.",
          },
        ],
      },
      contact: {
        title: "Demo Gratis & Konsultasi Solusi HRMS Terbaik",
        address1: "Vasanta Innopark No T-51",
        address2: "Jl. Kalimantan, Kab. Bekasi",
        call1: "+62 21 50 666 222",
        call2: " +62 811 8886 2020",
        email1: "info@miraisoftnet.com",
        openHours1: "Senin - Jumat",
        openHours2: "07.15 - 16.00 WIB",
      },
    };
  },
};
