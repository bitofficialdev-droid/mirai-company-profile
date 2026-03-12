export const FEATURE_MENUS = [
  {
    group: "Manajemen Operasional HR",
    description: "Kelola absensi, jadwal, dan kinerja dengan mudah.",
    features: [
      { name: "Kehadiran & Shift", slug: "attendance-shift" },
      { name: "Cuti, Sakit & Izin", slug: "leave-sick-permission" },
      { name: "Manajemen Lembur", slug: "overtime-management" },
    ],
  },
  {
    group: "Manajemen Karyawan",
    description:
      "Kelola data karyawan, onboarding, dan pengembangan karir secara efisien.",
    features: [
      { name: "Data Karyawan", slug: "employee-data" },
      {
        name: "Persetujuan Multilevel Terstruktur",
        slug: "multilevel-approval",
      },
      {
        name: "Struktur Organisasi & Jabatan",
        slug: "org-structure-positions",
      },
    ],
  },
  {
    group: "Manajemen Kompensasi & Penggajian",
    description:
      "Kelola gaji, tunjangan, dan pajak dengan sistem yang akurat dan transparan.",
    features: [
      {
        name: "Manajemen Payroll & Pembayaran Gaji",
        slug: "payroll-management",
      },
      { name: "PPH 21 & Pajak", slug: "pph21-tax" },
      { name: "Jaminan Sosial & Asuransi", slug: "social-security-insurance" },
      { name: "Benefit & Tunjangan", slug: "benefits-allowances" },
    ],
  },
  {
    group: "Analisa Kinerja & Laporan",
    description:
      "Analisa data karyawan dan operasional untuk pengambilan keputusan yang lebih baik.",
    features: [
      {
        name: "Dashboard & Laporan Kinerja",
        slug: "performance-dashboard-reports",
      },
      { name: "Aplikasi Mobile Karyawan", slug: "employee-mobile-app" },
    ],
  },
];

export const FEATURE_DETAILS = {
  "attendance-shift": {
    label: "Kehadiran & Shift",
    title: "Pantau dan Kelola Kehadiran Karyawan dengan Mudah",
    desc: "Sistem absensi yang akurat dan manajemen shift yang fleksibel untuk meningkatkan produktivitas.",
    image: "/web-attendance.png",
    content:
      "Dirancang khusus untuk HR dan Manajer Operasional agar dapat memantau kedisiplinan tim secara real-time. Cocok untuk perusahaan dengan kompleksitas jadwal kerja tinggi seperti manufaktur, retail, dan F&B.",
    benefits: [
      {
        title: "Visibilitas Real-time",
        desc: "Pantau waktu dan lokasi kehadiran staf secara akurat kapan saja, meminimalisir risiko kecurangan absensi.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M14 6a4 4 0 1 1-8 0a4 4 0 0 1 8 0m4.5 13l-1.5-.6V16m-4 2a4 4 0 1 0 8 0a4 4 0 0 0-8 0m-2.5 2H5a2 2 0 0 1-2-2a5 5 0 0 1 5-5h4.5"
            />
          </svg>
        ),
      },
      {
        title: "Otomatisasi Penjadwalan",
        desc: "Kurangi beban administratif HR dalam menyusun roaster shift yang kompleks. Semua dapat diotomatisasi dalam satu dashboard.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#0451bf"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path d="M9 20H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v3M8 2v2m7-2v2M2 8h19m-2.5 7.643l-1.5 1.5" />
              <circle cx="17" cy="17" r="5" />
            </g>
          </svg>
        ),
      },
      {
        title: "Akurasi Data Payroll",
        desc: "Data kehadiran, keterlambatan, dan lembur otomatis terintegrasi ke sistem penggajian tanpa perlu rekapitulasi manual.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 28 28"
          >
            <path
              fill="#0451bf"
              d="M6.778 9.492a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.003 9.016a.75.75 0 0 0 0 1.5h5a.75.75 0 1 0 0-1.5zm-.75-4.516a.75.75 0 0 1 .75-.75h5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1-.75-.75m11.073 11H5.25A3.25 3.25 0 0 1 2 21.742V5.75A2.75 2.75 0 0 1 4.75 3h8.906a2.75 2.75 0 0 1 2.75 2.75v2.238h7.04c1.315-.055 2.679.84 2.679 2.518v6.705a2.75 2.75 0 0 1-2.75 2.75h-2.864l-.66 3.075c-.319 1.481-1.34 1.956-2.747 1.956M4.75 4.5c-.69 0-1.25.56-1.25 1.25v15.992c0 .967.784 1.75 1.75 1.75h9.834a2.7 2.7 0 0 1-.178-.981V5.75c0-.69-.56-1.25-1.25-1.25zm11.656 18.01c0 1.2 1.726 1.383 1.978.21l2.737-12.745q.057-.26.15-.487h-4.865zm6.182-12.22l-1.755 8.17h2.542c.69 0 1.25-.559 1.25-1.25v-6.704c0-.629-.484-.989-.984-1.018h-.138a.97.97 0 0 0-.915.802"
            />
          </svg>
        ),
      },
    ],
    tips: {
      title: "Tips Memaksimalkan Fitur Kehadiran & Shift",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      protip:
        "Efisiensi operasional dimulai dari data kehadiran yang transparan dan akurat.",
      items: [
        {
          title: "Terapkan Radius Geofencing",
          desc: "Pastikan karyawan melakukan absensi tepat di titik lokasi kantor untuk menghindari manipulasi kehadiran dari luar area.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 28 28"
            >
              <path
                fill="#000"
                d="M6.575 5.075c4.1-4.1 10.75-4.1 14.85 0s4.1 10.75 0 14.85q-.006.004-.01.01l-5.51 5.295a2.75 2.75 0 0 1-3.81-.002l-5.51-5.293l-.01-.01c-4.1-4.1-4.1-10.75 0-14.85m13.788 1.06a9 9 0 0 0-12.727 12.73l5.499 5.283a1.25 1.25 0 0 0 1.731 0l5.501-5.289a9 9 0 0 0-.004-12.723M14 8a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 1.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
              />
            </svg>
          ),
        },
        {
          title: "Evaluasi Tren Keterlambatan",
          desc: "Gunakan data laporan bulanan untuk melihat pola keterlambatan tim guna melakukan coaching yang lebih tepat sasaran.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path d="m3 17l6-6l4 4l8-8" />
                <path d="M17 7h4v4" />
              </g>
            </svg>
          ),
        },
        {
          title: "Gunakan Fitur Auto-Shift",
          desc: "Manfaatkan pengenalan shift otomatis berdasarkan jam masuk karyawan untuk mengurangi error koreksi absen manual.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 20 20"
            >
              <path
                fill="#000"
                d="M4.5 5.75c0-.69.56-1.25 1.25-1.25H7.5a.75.75 0 0 0 0-1.5H5.75A2.75 2.75 0 0 0 3 5.75v8.5A2.75 2.75 0 0 0 5.75 17H7.5a.75.75 0 0 0 0-1.5H5.75c-.69 0-1.25-.56-1.25-1.25zm8-2.75a.75.75 0 0 0 0 1.5h1.75c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H12.5a.75.75 0 0 0 0 1.5h1.75A2.75 2.75 0 0 0 17 14.25v-8.5A2.75 2.75 0 0 0 14.25 3zm-2 2.75a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H10.5z"
              />
            </svg>
          ),
        },
        {
          title: "Transparansi ke Karyawan",
          desc: "Biarkan karyawan memantau rekap kehadiran mereka sendiri di aplikasi untuk meminimalisir komplain saat gajian.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 56 56"
            >
              <path
                fill="#000"
                d="M38.446 29.232c4.786 0 8.686-4.263 8.686-9.45c0-5.128-3.88-9.19-8.686-9.19c-4.766 0-8.687 4.122-8.687 9.23c.02 5.167 3.921 9.41 8.687 9.41m-23.164.442c4.142 0 7.54-3.72 7.54-8.284c0-4.464-3.358-8.063-7.54-8.063c-4.142 0-7.56 3.66-7.54 8.103c.02 4.545 3.398 8.244 7.54 8.244m23.164-3.478c-2.936 0-5.45-2.815-5.45-6.374c0-3.5 2.474-6.193 5.45-6.193c2.996 0 5.449 2.654 5.449 6.152c0 3.56-2.473 6.415-5.449 6.415m-23.164.482c-2.453 0-4.544-2.352-4.544-5.248c0-2.835 2.07-5.107 4.544-5.107c2.533 0 4.564 2.232 4.564 5.067c0 2.936-2.091 5.288-4.564 5.288M4.102 48.113h15.785c-.966-.543-1.71-1.75-1.569-2.976H3.6c-.402 0-.603-.16-.603-.543c0-4.986 5.69-9.651 12.266-9.651c2.533 0 4.805.603 6.756 1.749a10.5 10.5 0 0 1 2.272-2.131c-2.594-1.71-5.71-2.594-9.028-2.594C6.837 31.967 0 38.079 0 44.775c0 2.232 1.367 3.338 4.102 3.338m21.716 0h25.256c3.337 0 4.926-1.005 4.926-3.217c0-5.268-6.656-12.89-17.554-12.89c-10.919 0-17.574 7.622-17.574 12.89c0 2.212 1.588 3.217 4.946 3.217m-.965-3.036c-.523 0-.744-.14-.744-.563c0-3.298 5.107-9.47 14.337-9.47c9.21 0 14.316 6.172 14.316 9.47c0 .422-.2.563-.724.563Z"
              />
            </svg>
          ),
        },
        {
          title: "Atur Pengingat Shift",
          desc: "Aktifkan notifikasi jadwal kerja 30 menit sebelum shift dimulai agar karyawan memiliki persiapan waktu yang cukup.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path d="M12 6v6l4 2m4-2v5m0 4h.01" />
                <path d="M21.25 8.2A10 10 0 1 0 16 21.16" />
              </g>
            </svg>
          ),
        },
      ],
    },
  },
  "leave-sick-permission": {
    label: "Cuti, Sakit & Izin",
    title: "Kelola Pengajuan Absensi Karyawan dalam Satu Klik",
    desc: "Sistem pengajuan cuti dan izin yang terdigitalisasi untuk proses persetujuan yang lebih cepat dan transparan.",
    image: "/web-permit.png",
    content:
      "Hilangkan birokrasi kertas yang rumit. Berikan kemudahan bagi karyawan untuk mengajukan cuti atau sakit melalui aplikasi mobile, sementara HR tetap memiliki kontrol penuh atas kuota dan saldo cuti.",
    benefits: [
      {
        title: "Pengajuan Mandiri (Self-Service)",
        desc: "Karyawan dapat mengajukan cuti, izin, atau melampirkan surat sakit secara langsung melalui aplikasi tanpa perlu formulir fisik.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#0451bf"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <rect width="15" height="18.5" x="4.5" y="2.75" rx="3.5" />
              <path d="M8.5 6.755h7m-7 4h7m-7 4H12" />
            </g>
          </svg>
        ),
      },
      {
        title: "Persetujuan Otomatis & Cepat",
        desc: "Notifikasi otomatis ke atasan untuk persetujuan instan, mempercepat proses administrasi tanpa perlu tindak lanjut manual.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M7.5 16.039L4.688 19.5L3 18.346m4.5-8.077l-2.812 3.462L3 12.577M7.5 4.5L4.688 7.962L3 6.808M11 17.5h10M11 12h10M11 6.5h10"
            />
          </svg>
        ),
      },
      {
        title: "Manajemen Saldo Kuota",
        desc: "Sistem secara otomatis memotong saldo cuti tahunan dan menampilkan sisa kuota secara real-time untuk menghindari kelebihan pengambilan.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="#0451bf" stroke-width="1.5">
              <path
                stroke-linecap="round"
                d="M20 15.552A9.215 9.215 0 0 1 11.21 22A9.21 9.21 0 0 1 2 12.79A9.215 9.215 0 0 1 8.448 4"
              />
              <path d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053Z" />
            </g>
          </svg>
        ),
      },
    ],
    tips: {
      title: "Tips Mengelola Cuti & Izin Secara Efektif",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
      protip:
        "Digitalisasi pengajuan izin mengurangi beban kerja admin HR hingga 70%.",
      items: [
        {
          title: "Tetapkan Kebijakan H-Minus",
          desc: "Gunakan sistem untuk membatasi pengajuan cuti tahunan minimal 3-7 hari sebelumnya agar operasional tim tetap terjaga.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75M13.25 8a.75.75 0 0 1 .75.75v2.75h1.5V8.75a.75.75 0 0 1 1.5 0v6.47a.75.75 0 0 1-1.5 0V13h-2.25a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75m-5.75.744C7.847 8.362 8.415 8 9.25 8c1.152 0 1.894.792 2.155 1.661c.253.847.1 1.895-.62 2.618a8 8 0 0 1-.793.67l-.04.031c-.28.216-.53.412-.75.63c-.255.256-.464.535-.585.89h2.133a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75c0-1.247.524-2.083 1.144-2.701c.296-.296.618-.545.89-.756l.003-.002c.286-.221.508-.393.685-.57c.272-.274.367-.725.246-1.13c-.115-.381-.37-.591-.718-.591c-.353 0-.535.137-.64.253a.8.8 0 0 0-.147.229l-.002.003a.75.75 0 0 1-1.427-.462l.035-.096a2.3 2.3 0 0 1 .43-.683"
              />
            </svg>
          ),
        },
        {
          title: "Wajib Lampiran Surat Sakit",
          desc: "Aktifkan fitur wajib unggah dokumen untuk kategori 'Sakit' agar validasi data medis lebih akurat dan tertib administrasi.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="#000" stroke-width="1.5">
                <path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" />
                <path
                  stroke-linecap="round"
                  d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 8"
                />
              </g>
            </svg>
          ),
        },
        {
          title: "Cek Kalender Tim",
          desc: "HR dan Atasan sebaiknya memeriksa kalender kehadiran sebelum menyetujui cuti untuk menghindari kekurangan personel di hari yang sama.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M8.5 6.5A.5.5 0 0 1 9 6h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5M8 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-3 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0"
              />
              <path
                fill="#000"
                d="M13.623 3h-3.246c-1.1 0-1.958 0-2.645.056c-.698.057-1.265.175-1.775.434A4.5 4.5 0 0 0 3.99 5.457c-.26.51-.377 1.077-.434 1.775C3.5 7.92 3.5 8.776 3.5 9.877v4.246c0 1.1 0 1.958.056 2.645c.057.698.175 1.265.434 1.775a4.5 4.5 0 0 0 1.967 1.967c.51.26 1.077.377 1.775.434C8.42 21 9.276 21 10.377 21h3.246c1.1 0 1.958 0 2.645-.056c.698-.057 1.265-.175 1.775-.434a4.5 4.5 0 0 0 1.967-1.967c.26-.51.377-1.077.434-1.775c.056-.687.056-1.544.056-2.645V9.877c0-1.1 0-1.958-.056-2.645c-.057-.698-.175-1.265-.434-1.775a4.5 4.5 0 0 0-1.967-1.967c-.51-.26-1.077-.377-1.775-.434C15.58 3 14.724 3 13.623 3M6.41 4.381c.346-.176.766-.276 1.403-.328C8.455 4 9.272 4 10.4 4h3.2c1.128 0 1.945 0 2.586.053c.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403c.038.457.049 1.002.052 1.686H4.5c.004-.684.014-1.23.052-1.686c.052-.637.152-1.057.328-1.403a3.5 3.5 0 0 1 1.53-1.53M4.5 10h15v4.1c0 1.128 0 1.945-.053 2.586c-.052.637-.152 1.057-.328 1.403a3.5 3.5 0 0 1-1.53 1.53c-.346.176-.766.276-1.402.328C15.545 20 14.728 20 13.6 20h-3.2c-1.128 0-1.945 0-2.586-.053c-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.53-1.53c-.176-.346-.276-.766-.328-1.402C4.5 16.045 4.5 15.228 4.5 14.1z"
              />
            </svg>
          ),
        },
        {
          title: "Otomasi Carry Forward",
          desc: "Atur sistem agar sisa cuti tahun lalu dapat hangus otomatis atau dialihkan ke tahun depan sesuai kebijakan perusahaan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4m-4 4a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"
              />
            </svg>
          ),
        },
        {
          title: "Analisa Alasan Izin",
          desc: "Pantau tren alasan izin karyawan setiap bulan untuk mendeteksi masalah lingkungan kerja atau tingkat burnout tim.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="#000" stroke-width="1.5">
                <path d="M5.5 7H15m-9.5 4H12m4 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm5.5 1.5l-2.671-2.672" />
                <path d="M20 11.643V2H2v20h8.875" />
              </g>
            </svg>
          ),
        },
      ],
    },
  },
  "overtime-management": {
    label: "Manajemen Lembur",
    title: "Kelola Lembur Karyawan Lebih Terukur dan Transparan",
    desc: "Sederhanakan proses pengajuan dan perhitungan lembur secara otomatis untuk efisiensi biaya operasional.",
    image: "/web-overtime.png",
    content:
      "Fitur ini dirancang untuk membantu HR dan Manajer mengontrol jam kerja tambahan. Dengan sistem validasi yang ketat, perusahaan dapat memastikan setiap jam lembur yang dibayar adalah benar-benar produktif dan sesuai dengan regulasi pemerintah.",
    benefits: [
      {
        title: "Kalkulasi Otomatis",
        desc: "Sistem menghitung upah lembur secara otomatis berdasarkan regulasi Depnaker atau kebijakan internal, mengurangi risiko kesalahan hitung manual.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M12 7v5l3 3m6-3a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z" />
              <path d="M16 3h4m-4 18h4" />
            </g>
          </svg>
        ),
      },
      {
        title: "Validasi Pengajuan",
        desc: "Lembur hanya dapat diproses jika ada persetujuan dari atasan, memastikan jam tambahan sesuai dengan kebutuhan proyek atau operasional.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9 12l2 2l4-4m6 2a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
            />
          </svg>
        ),
      },
      {
        title: "Laporan Biaya Lembur",
        desc: "Pantau total pengeluaran biaya lembur per departemen secara real-time untuk menjaga anggaran perusahaan tetap terkendali.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
              <path d="M12 8v4l3 3" />
              <path d="M12 3v2m0 14v2m9-9h-2M5 12H3" />
            </g>
          </svg>
        ),
      },
    ],
    tips: {
      title: "Tips Mengelola Lembur Secara Efisien",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      protip:
        "Kontrol biaya lembur yang ketat dapat menghemat anggaran operasional perusahaan hingga 15% per tahun.",
      items: [
        {
          title: "Tetapkan Kuota Lembur",
          desc: "Gunakan fitur limitasi untuk membatasi maksimal jam lembur per minggu guna menjaga kesehatan dan produktivitas karyawan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
              />
            </svg>
          ),
        },
        {
          title: "Sinkronisasi Absensi",
          desc: "Pastikan jam lembur yang diajukan sesuai dengan data jam pulang pada mesin absensi atau geofencing aplikasi.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 19l9 2l-9-18l-9 18l9-2Zm0 0v-8"
              />
            </svg>
          ),
        },
        {
          title: "Analisa Peak Season",
          desc: "Evaluasi data lembur bulanan untuk mengidentifikasi bulan-bulan sibuk, sehingga Anda bisa merencanakan penambahan staf atau shift.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 3v18h18M7 16l4-4l4 4l5-8"
              />
            </svg>
          ),
        },
        {
          title: "Terapkan Single Approval",
          desc: "Untuk efisiensi, atur alur persetujuan lembur langsung ke manajer lini agar instruksi kerja tambahan lebih cepat tervalidasi.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
          ),
        },
        {
          title: "Kebijakan Overtime Meal",
          desc: "Integrasikan data lembur dengan tunjangan makan tambahan secara otomatis jika karyawan melewati batas jam kerja tertentu.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"
              />
            </svg>
          ),
        },
        {
          title: "Gunakan Notifikasi Real-time",
          desc: "Aktifkan notifikasi mobile untuk atasan agar setiap pengajuan lembur bisa segera disetujui atau ditolak tanpa menunda proses payroll.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9m-4.27 13a2 2 0 0 1-3.46 0"
              />
            </svg>
          ),
        },
      ],
    },
  },
  "employee-data": {
    label: "Data Karyawan",
    title: "Pusat Data Karyawan yang Terpusat dan Aman",
    desc: "Kelola seluruh informasi profil, dokumen, hingga riwayat karir karyawan dalam satu database cloud yang terintegrasi.",
    image: "/web-employee-data.png",
    content:
      "Mudahkan HR dalam mengelola administrasi personalia tanpa ribet dengan spreadsheet. Mulai dari data personal, detail bank, dokumen identitas, hingga kontrak kerja, semuanya tersimpan rapi dan dapat diakses kapan saja sesuai hak akses.",
    benefits: [
      {
        title: "Database Terpusat",
        desc: "Simpan semua informasi karyawan mulai dari kontak darurat hingga detail perpajakan dalam satu platform digital yang aman.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M12 10v4m0 4h.01m-7.01-8h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Zm9-7h1a2 2 0 0 1 2 2v2M8 5a2 2 0 0 1 2-2h1" />
            </g>
          </svg>
        ),
      },
      {
        title: "Penyimpanan Dokumen Digital",
        desc: "Unggah dan kelola dokumen penting seperti KTP, NPWP, dan Sertifikat secara digital untuk mempermudah audit dan verifikasi.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6m-8 5v5m-3-3l3 3l3-3"
            />
          </svg>
        ),
      },
      {
        title: "Riwayat Karir Lengkap",
        desc: "Pantau setiap perubahan jabatan, mutasi, dan promosi karyawan dari awal bergabung hingga saat ini secara otomatis.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 21h18M3 10h3v11H3zm6-4h3v15H9zm6-4h3v19h-3z"
            />
          </svg>
        ),
      },
    ],
    tips: {
      title: "Tips Mengelola Database Karyawan",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
      protip:
        "Data yang rapi adalah kunci utama akurasi perhitungan gaji dan pelaporan pajak yang valid.",
      items: [
        {
          title: "Audit Data Secara Berkala",
          desc: "Lakukan review data setiap kuartal untuk memastikan informasi seperti alamat tinggal atau status pernikahan tetap update.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2l4-4"
              />
            </svg>
          ),
        },
        {
          title: "Gunakan Employee Self-Service",
          desc: "Biarkan karyawan mengupdate data personal mereka sendiri (seperti nomor telepon) untuk mengurangi beban admin HR.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
          ),
        },
        {
          title: "Proteksi Data Sensitif",
          desc: "Atur hak akses (role-based access) agar data sensitif seperti gaji hanya bisa dilihat oleh pihak yang berwenang.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1c1.71 0 3.1 1.39 3.1 3.1v2z"
              />
            </svg>
          ),
        },
        {
          title: "Digitalkan Kontrak Kerja",
          desc: "Simpan scan kontrak kerja atau SK dalam profil karyawan agar mudah dicari saat masa berlaku kontrak akan habis.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10l4 4v10a2 2 0 0 1-2 2Z"
              />
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14 4v4h4m-8 4h4m-4 4h4"
              />
            </svg>
          ),
        },
        {
          title: "Monitor Masa Berlaku Dokumen",
          desc: "Aktifkan pengingat otomatis untuk dokumen yang memiliki masa berlaku seperti sertifikasi profesi atau passport.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
              />
            </svg>
          ),
        },
        {
          title: "Kelola Data Resign",
          desc: "Jangan hapus data karyawan yang sudah keluar; arsipkan agar riwayat kerjanya tetap tersimpan untuk referensi masa depan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.41l.83-1zM5 19V8h14v11H5zm8-7h-2v3H8l4 4l4-4h-3z"
              />
            </svg>
          ),
        },
      ],
    },
  },
  "multilevel-approval": {
    label: "Persetujuan Multilevel",
    title: "Alur Persetujuan yang Teratur dan Akuntabel",
    desc: "Sederhanakan birokrasi internal dengan sistem persetujuan bertingkat yang otomatis dan transparan.",
    image: "/web-approval.png",
    content:
      "Pastikan setiap pengajuan, mulai dari cuti hingga lembur, melewati jalur yang tepat. Dengan fitur multilevel approval, Anda dapat menentukan urutan pemberi izin mulai dari Supervisor, Manager, hingga HR, sehingga keputusan lebih terukur dan sesuai kebijakan perusahaan.",
    benefits: [
      {
        title: "Hierarki Kustom",
        desc: "Atur urutan persetujuan berdasarkan struktur organisasi atau departemen secara fleksibel sesuai kebutuhan internal.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M12 3v18M3 9l9-6l9 6M3 15l9-6l9 6m-18 6l9-6l9 6" />
            </g>
          </svg>
        ),
      },
      {
        title: "Notifikasi Instan",
        desc: "Pemberi persetujuan akan mendapatkan notifikasi real-time melalui aplikasi atau email untuk mempercepat proses pengambilan keputusan.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9m-4.27 13a2 2 0 0 1-3.46 0"
            />
          </svg>
        ),
      },
      {
        title: "Audit Trail Lengkap",
        desc: "Pantau riwayat siapa yang menyetujui atau menolak pengajuan, lengkap dengan catatan (remarks) dan stempel waktu.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
            />
          </svg>
        ),
      },
    ],
    tips: {
      title: "Tips Mengelola Alur Persetujuan",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
      protip:
        "Alur persetujuan yang jelas mengurangi gesekan antar departemen dan meningkatkan kecepatan kerja hingga 50%.",
      items: [
        {
          title: "Gunakan Delegasi Sementara",
          desc: "Aktifkan fitur delegasi jika manajer sedang cuti agar proses persetujuan tetap berjalan dan tidak menumpuk.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m13 0l-3 3m0 0l-3-3m3 3V8"
              />
            </svg>
          ),
        },
        {
          title: "Wajibkan Catatan Penolakan",
          desc: "Pastikan atasan memberikan alasan saat menolak pengajuan agar karyawan memahami apa yang perlu diperbaiki.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586Z"
              />
            </svg>
          ),
        },
        {
          title: "Batasi Level Persetujuan",
          desc: "Hindari terlalu banyak level (maksimal 3) untuk menjaga efisiensi dan mencegah birokrasi yang terlalu lamban.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-5-9h10v2H7z"
              />
            </svg>
          ),
        },
        {
          title: "Monitor Bottleneck",
          desc: "Cek laporan durasi persetujuan secara rutin untuk melihat manajer mana yang paling lama memproses pengajuan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 6V4m0 2a6 6 0 1 0 5.3 3.3M12 6a6 6 0 0 1 5.3 8.7M9 16l3-3l3 3"
              />
            </svg>
          ),
        },
        {
          title: "Terapkan Auto-Approval",
          desc: "Gunakan fitur persetujuan otomatis untuk jenis izin tertentu yang bersifat informatif atau berisiko rendah.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 10V3L4 14h7v7l9-11h-7Z"
              />
            </svg>
          ),
        },
        {
          title: "Gunakan Approval Mobile",
          desc: "Edukasi atasan untuk menyetujui pengajuan langsung dari handphone agar tidak perlu membuka laptop.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <rect
                width="12"
                height="20"
                x="6"
                y="2"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                rx="2"
              />
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 18h.01"
              />
            </svg>
          ),
        },
      ],
    },
  },
  "org-structure-positions": {
    label: "Struktur Organisasi & Jabatan",
    title: "Visualisasikan Hierarki Perusahaan dengan Jelas",
    desc: "Kelola struktur organisasi, departemen, hingga detail jabatan secara dinamis untuk tata kelola perusahaan yang lebih rapi.",
    image: "/web-org-structure.png",
    content:
      "Bangun fondasi organisasi yang kuat dengan memetakan setiap posisi secara akurat. Fitur ini memungkinkan HR untuk mengatur hubungan pelaporan (reporting line), membagi departemen, dan mendefinisikan tanggung jawab setiap jabatan agar tidak ada tumpang tindih peran di dalam tim.",
    benefits: [
      {
        title: "Bagan Organisasi Dinamis",
        desc: "Visualisasikan struktur perusahaan secara otomatis yang terupdate setiap ada perubahan posisi atau mutasi karyawan.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <rect width="6" height="4" x="9" y="3" rx="1" />
              <rect width="6" height="4" x="3" y="11" rx="1" />
              <rect width="6" height="4" x="15" y="11" rx="1" />
              <path d="M12 7v4m0 0H6m6 0h6" />
            </g>
          </svg>
        ),
      },
      {
        title: "Manajemen Jabatan & Role",
        desc: "Definisikan nama jabatan, level manajerial, hingga job description spesifik untuk setiap posisi dalam satu platform.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0M12 14c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z"
            />
          </svg>
        ),
      },
      {
        title: "Pemetaan Departemen",
        desc: "Kelola pengelompokan karyawan berdasarkan departemen, divisi, atau unit kerja untuk mempermudah analisa laporan per bagian.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 21h18M5 21V7l8-4v18m4 0V11l-4-4"
            />
          </svg>
        ),
      },
    ],
    tips: {
      title: "Tips Mengelola Struktur Organisasi",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
      protip:
        "Struktur organisasi yang transparan membantu karyawan memahami jalur karir dan kepada siapa mereka harus melapor.",
      items: [
        {
          title: "Update Reporting Line",
          desc: "Pastikan setiap karyawan memiliki atasan langsung (direct report) yang jelas untuk akurasi alur persetujuan cuti dan lembur.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 10l-5-5l-5 5m5-5v12"
              />
            </svg>
          ),
        },
        {
          title: "Definisikan Job Grade",
          desc: "Gunakan fitur tingkatan jabatan (job grade) untuk mempermudah standarisasi tunjangan dan fasilitas di setiap level.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 17h6v-7l-6 2v5Zm12-10v10h6V7l-6 0Zm-6 10h6V4l-6 2v11Z"
              />
            </svg>
          ),
        },
        {
          title: "Hindari Posisi Kosong",
          desc: "Pantau jabatan yang tidak memiliki personil melalui bagan organisasi untuk mempercepat proses rekrutmen pada posisi krusial.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 9v4m0 4h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
              />
            </svg>
          ),
        },
        {
          title: "Sinkronisasi dengan Payroll",
          desc: "Hubungkan jabatan dengan komponen gaji tertentu agar perubahan promosi otomatis menyesuaikan besaran gaji karyawan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 3v18m9-18H3m18 18H3m14-9H7"
              />
            </svg>
          ),
        },
        {
          title: "Analisa Rentang Kendali",
          desc: "Gunakan visualisasi bagan untuk memastikan seorang manajer tidak membawahi terlalu banyak orang (span of control).",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="3"
                fill="none"
                stroke="#000"
                strokeWidth="1.5"
              />
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"
              />
            </svg>
          ),
        },
        {
          title: "Sosialisasikan Struktur",
          desc: "Berikan akses bagi karyawan untuk melihat bagan organisasi agar mereka saling mengenal rekan antar departemen.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"
              />
            </svg>
          ),
        },
      ],
    },
  },
  "pph21-tax": {
    label: "PPH 21 & Pajak",
    title: "Kelola Pajak Karyawan dengan Akurat dan Patuh Regulasi",
    desc: "Otomatisasi perhitungan PPh 21 sesuai aturan perpajakan terbaru untuk menjamin akurasi pelaporan perusahaan.",
    image: "/web-tax.png",
    content:
      "Hindari risiko denda akibat kesalahan hitung pajak. Fitur ini dirancang untuk menghitung PPh 21 secara otomatis, mulai dari perhitungan PTKP, tarif progresif, hingga pembuatan laporan SPT Masa. Sistem kami selalu diperbarui mengikuti regulasi pajak terbaru dari pemerintah.",
    benefits: [
      {
        title: "Perhitungan Pajak Otomatis",
        desc: "Kalkulasi PPh 21 yang terintegrasi langsung dengan payroll, mencakup metode Net, Gross, maupun Gross Up.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
              <rect width="8" height="4" x="8" y="3" rx="1" />
              <path d="M9 14h6m-6 3h6m-6-6h6" />
            </g>
          </svg>
        ),
      },
      {
        title: "Update Regulasi Otomatis",
        desc: "Sistem diperbarui secara berkala mengikuti aturan perpajakan terbaru (seperti skema TER), memastikan kepatuhan penuh.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 3v3m0 12v3M5.3 5.3l2.1 2.1m9.2 9.2l2.1 2.1M3 12h3m12 0h3m-15.7 6.7l2.1-2.1m9.2-9.2l2.1-2.1M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8"
            />
          </svg>
        ),
      },
      {
        title: "E-Filing & Export CSV",
        desc: "Generate file CSV untuk pelaporan e-SPT Masa Pajak dengan mudah tanpa perlu input manual di aplikasi DJP.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6m-8 5v5m-3-3l3 3l3-3"
            />
          </svg>
        ),
      },
    ],
    tips: {
      title: "Tips Mengelola Pajak Penghasilan",
      image:
        "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&w=1200&q=80",
      protip:
        "Validasi NPWP karyawan di awal tahun sangat krusial untuk menghindari beban tarif pajak 20% lebih tinggi bagi mereka yang tidak memilikinya.",
      items: [
        {
          title: "Update Status PTKP",
          desc: "Pastikan status pernikahan dan jumlah tanggungan karyawan (K/0, K/1, dsb) diperbarui setiap awal tahun pajak.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m12-10a4 4 0 1 0-8 0a4 4 0 0 0 0 8"
              />
            </svg>
          ),
        },
        {
          title: "Monitor Pajak Progresif",
          desc: "Gunakan sistem untuk memantau kenaikan tarif pajak progresif bagi karyawan yang mendapatkan bonus besar di tengah tahun.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M23 6l-9.5 9.5l-5-5L1 18"
              />
            </svg>
          ),
        },
        {
          title: "Simpan Bukti Potong 1721-A1",
          desc: "Otomatisasi pengiriman bukti potong tahunan ke email karyawan saat periode pelaporan SPT Tahunan tiba.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l9 6l9-6m-18 11h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
              />
            </svg>
          ),
        },
        {
          title: "Gunakan Metode Gross Up",
          desc: "Terapkan metode Gross Up untuk memberikan tunjangan pajak bagi karyawan sehingga gaji bersih (take home pay) tetap stabil.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 19V5m0 0l-7 7m7-7l7 7"
              />
            </svg>
          ),
        },
        {
          title: "Validasi NPWP/NIK",
          desc: "Gunakan fitur validasi untuk memastikan nomor identitas pajak benar, guna menghindari penolakan saat upload ke e-Faktur/e-Bupot.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 12l2 2l4-4m6 2a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
              />
            </svg>
          ),
        },
        {
          title: "Rekonsiliasi Pajak Bulanan",
          desc: "Bandingkan total pajak yang dipotong dengan laporan keuangan bulanan untuk memastikan tidak ada selisih sebelum pelaporan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20 6L9 17l-5-5"
              />
            </svg>
          ),
        },
      ],
    },
  },
  "social-security-insurance": {
    label: "Jaminan Sosial & Asuransi",
    title: "Kelola BPJS dan Asuransi Karyawan Tanpa Ribet",
    desc: "Otomatisasi pemotongan iuran BPJS dan asuransi kesehatan lainnya dengan akurasi tinggi setiap bulan.",
    image: "/web-insurance.png",
    content:
      "Pastikan kesejahteraan karyawan terjamin dengan pengelolaan iuran jaminan sosial yang tepat waktu. Sistem kami secara otomatis menghitung iuran BPJS Kesehatan dan BPJS Ketenagakerjaan (JKK, JKM, JHT, JP) berdasarkan upah minimum regional (UMR) maupun gaji pokok, sesuai dengan plafon terbaru yang ditetapkan pemerintah.",
    benefits: [
      {
        title: "Kalkulasi Iuran Otomatis",
        desc: "Sistem menghitung otomatis bagian yang dibayar perusahaan dan karyawan sesuai persentase regulasi terbaru.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"
            />
          </svg>
        ),
      },
      {
        title: "Integrasi Payroll Langsung",
        desc: "Potongan iuran asuransi langsung terhubung ke komponen gaji di slip gaji karyawan tanpa perlu input manual.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13 10V3L4 14h7v7l9-11h-7Z"
            />
          </svg>
        ),
      },
      {
        title: "Export Laporan SIPP & E-Dabu",
        desc: "Dapatkan file laporan yang siap diunggah ke portal BPJS (SIPP dan E-Dabu) untuk sinkronisasi data mutasi karyawan.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 10v4m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"
            />
          </svg>
        ),
      },
    ],
    tips: {
      title: "Tips Mengelola Jaminan Sosial",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
      protip:
        "Ketepatan waktu pendaftaran BPJS bagi karyawan baru meningkatkan tingkat kepuasan dan rasa aman mereka bekerja di perusahaan.",
      items: [
        {
          title: "Update Plafon Upah",
          desc: "Selalu sesuaikan batas atas (plafon) upah BPJS setiap ada perubahan aturan pemerintah agar perhitungan iuran tetap valid.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 4v16m8-8H4"
              />
            </svg>
          ),
        },
        {
          title: "Monitor Tanggungan Tambahan",
          desc: "Pastikan jumlah keluarga yang ditanggung BPJS Kesehatan sesuai dengan data asli karyawan untuk menghindari selisih tagihan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m12-10a4 4 0 1 0-8 0a4 4 0 0 0 0 8"
              />
            </svg>
          ),
        },
        {
          title: "Laporkan Mutasi Segera",
          desc: "Segera nonaktifkan kepesertaan karyawan yang resign melalui sistem agar perusahaan tidak terus membayar iuran mereka.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 12H3m0 0l4-4m-4 4l4 4m14-4V7a2 2 0 0 0-2-2H9v14h10a2 2 0 0 0 2-2v-5"
              />
            </svg>
          ),
        },
        {
          title: "Integrasi Asuransi Swasta",
          desc: "Jika perusahaan menyediakan asuransi tambahan, masukkan premi sebagai komponen tunjangan/potongan di dashboard ini.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 12l2 2l4-4m5.618-4.016A11 11 0 0 0 12 2.25a11 11 0 0 0-8.618 5.734a11 11 0 0 0 1.258 12.014a11 11 0 0 0 14.72 0a11 11 0 0 0 1.258-12.014Z"
              />
            </svg>
          ),
        },
        {
          title: "Rekonsiliasi Tagihan",
          desc: "Lakukan pengecekan antara invoice bulanan dari BPJS dengan hasil perhitungan sistem sebelum melakukan pembayaran.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20 6L9 17l-5-5"
              />
            </svg>
          ),
        },
        {
          title: "Simulasi JHT Karyawan",
          desc: "Berikan edukasi bagi karyawan tentang estimasi saldo JHT mereka melalui transparansi potongan yang ada di aplikasi.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0"
              />
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 8v4l3 3"
              />
            </svg>
          ),
        },
      ],
    },
  },
  "benefits-allowances": {
    label: "Benefit & Tunjangan",
    title: "Kelola Kompensasi Karyawan Secara Fleksibel",
    desc: "Atur berbagai jenis tunjangan dan fasilitas tambahan untuk meningkatkan loyalitas dan kesejahteraan tim Anda.",
    image: "/web-benefits.png",
    content:
      "Setiap perusahaan memiliki kebijakan kompensasi yang unik. Dengan fitur ini, Anda dapat dengan mudah menambahkan berbagai kategori tunjangan—mulai dari tunjangan makan, transportasi, hingga bonus performa—dan menentukan kriteria penerimanya secara otomatis berdasarkan jabatan atau masa kerja.",
    benefits: [
      {
        title: "Kustomisasi Tunjangan",
        desc: "Buat kategori tunjangan tak terbatas (tetap atau tidak tetap) sesuai dengan kebijakan unik di perusahaan Anda.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.5 6h3m-3 4h3m-3 4h3m-6 4h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
            />
          </svg>
        ),
      },
      {
        title: "Klaim & Reimbursement",
        desc: "Proses pengajuan klaim biaya kesehatan atau perjalanan dinas menjadi lebih cepat dengan sistem upload bukti bayar digital.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4Zm0 0V5m0 14v-3m-7-4h3m11 0h-3"
            />
          </svg>
        ),
      },
      {
        title: "Distribusi Bonus Otomatis",
        desc: "Hubungkan pencapaian KPI atau target tertentu dengan distribusi bonus yang otomatis terhitung ke dalam payroll.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 6v12m-5-5l5 5l5-5"
            />
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9s-9-4.03-9-9s4.03-9 9-9Z"
            />
          </svg>
        ),
      },
    ],
    tips: {
      title: "Tips Mengelola Tunjangan Karyawan",
      image:
        "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1200&q=80",
      protip:
        "Tunjangan yang relevan dan transparan dapat menurunkan tingkat 'turnover' karyawan hingga 25%.",
      items: [
        {
          title: "Gunakan Model Flex-Benefit",
          desc: "Berikan poin atau saldo bagi karyawan untuk memilih benefit yang mereka butuhkan (misal: gym membership atau kursus online).",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 12l2 2l4-4m6 2a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
              />
            </svg>
          ),
        },
        {
          title: "Validasi Bukti Reimbursement",
          desc: "Pastikan HR melakukan pengecekan digital terhadap struk atau invoice yang diunggah untuk mencegah pengajuan ganda.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"
              />
            </svg>
          ),
        },
        {
          title: "Terapkan Batas Waktu Klaim",
          desc: "Buat aturan batas pengajuan klaim (misal: maksimal tanggal 25) agar tidak mengganggu proses penutupan payroll bulanan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
              />
            </svg>
          ),
        },
        {
          title: "Gunakan Tunjangan Kehadiran",
          desc: "Integrasikan tunjangan kehadiran dengan data absensi untuk memotivasi kedisiplinan karyawan secara otomatis.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 12l2 2l4-4m5.618-4.016A11 11 0 0 0 12 2.25a11 11 0 0 0-8.618 5.734a11 11 0 0 0 1.258 12.014a11 11 0 0 0 14.72 0a11 11 0 0 0 1.258-12.014Z"
              />
            </svg>
          ),
        },
        {
          title: "Analisa Efektivitas Benefit",
          desc: "Tinjau jenis tunjangan mana yang paling banyak digunakan karyawan untuk membantu perencanaan budget tahun depan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 3v18h18M7 16l4-4l4 4l5-8"
              />
            </svg>
          ),
        },
        {
          title: "Komunikasikan Paket Kompensasi",
          desc: "Tampilkan rincian seluruh benefit di dashboard karyawan agar mereka sadar akan total nilai kompensasi yang mereka terima.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8 3h8m-8 4h8m-10 8l2 2l4-4"
              />
            </svg>
          ),
        },
      ],
    },
  },
  "performance-dashboard-reports": {
    label: "Dashboard & Laporan Kinerja",
    title: "Analisa Data SDM dengan Visualisasi yang Cerdas",
    desc: "Ubah data mentah menjadi wawasan strategis melalui dashboard interaktif dan laporan otomatis.",
    image: "/web-performance-dashboard.png",
    content:
      "Pantau kesehatan organisasi Anda secara real-time. Dashboard ini menyajikan metrik penting seperti tingkat kehadiran, turnover karyawan, hingga efisiensi biaya lembur dalam bentuk grafik yang mudah dipahami. Dengan data yang akurat, Anda bisa mengambil keputusan strategis lebih cepat dan tepat.",
    benefits: [
      {
        title: "Visualisasi Data Real-time",
        desc: "Pantau metrik SDM melalui grafik interaktif yang diperbarui secara otomatis dari data operasional harian.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 3v18h18M18 9l-5 5l-2-2l-4 4"
            />
          </svg>
        ),
      },
      {
        title: "Custom Report Generator",
        desc: "Buat laporan spesifik berdasarkan departemen, periode, atau kategori tertentu dan ekspor ke format PDF atau Excel.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9 17h6m-6-4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"
            />
          </svg>
        ),
      },
      {
        title: "Analisa Trend Karyawan",
        desc: "Identifikasi pola perilaku karyawan, seperti tren keterlambatan atau puncak musim cuti untuk perencanaan SDM yang lebih baik.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"
            />
          </svg>
        ),
      },
    ],
    tips: {
      title: "Tips Memanfaatkan Analitik SDM",
      image:
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
      protip:
        "Menganalisa data secara rutin membantu HR memprediksi masalah sebelum terjadi, seperti mendeteksi penurunan produktivitas tim.",
      items: [
        {
          title: "Monitor Turnover Rate",
          desc: "Perhatikan jika ada lonjakan pengunduran diri di departemen tertentu untuk mengevaluasi manajemen di bagian tersebut.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m12-10a4 4 0 1 0-8 0a4 4 0 0 0 0 8"
              />
            </svg>
          ),
        },
        {
          title: "Evaluasi Budget Lembur",
          desc: "Bandingkan pengeluaran lembur antar bulan untuk memastikan tidak melewati anggaran operasional yang ditetapkan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
              />
            </svg>
          ),
        },
        {
          title: "Gunakan Data untuk Appraisal",
          desc: "Gunakan laporan kehadiran dan pencapaian tugas sebagai data objektif dalam melakukan penilaian kinerja tahunan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 12l2 2l4-4m6 2a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
              />
            </svg>
          ),
        },
        {
          title: "Pantau Rasio Gender & Usia",
          desc: "Analisa demografi karyawan untuk memastikan keberagaman (diversity) dan perencanaan suksesi kepemimpinan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0M12 14c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z"
              />
            </svg>
          ),
        },
        {
          title: "Set Auto-Distribution",
          desc: "Atur agar sistem mengirimkan laporan ringkasan mingguan ke email manajemen secara otomatis setiap Senin pagi.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l9 6l9-6m-18 11h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
              />
            </svg>
          ),
        },
        {
          title: "Identifikasi 'Top Performers'",
          desc: "Gunakan dashboard untuk melihat karyawan dengan tingkat kehadiran dan produktivitas terbaik untuk diberikan reward.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 15l-2 5l2-1l2 1l-2-5Zm0 0a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"
              />
            </svg>
          ),
        },
      ],
    },
  },
  "employee-mobile-app": {
    label: "Aplikasi Mobile Karyawan",
    title: "Kelola Administrasi HR dalam Genggaman",
    desc: "Berikan kemudahan bagi karyawan untuk akses absensi, slip gaji, dan pengajuan izin kapan saja dan di mana saja.",
    image: "/web-mobile-app.png",
    content:
      "Tingkatkan pengalaman karyawan dengan aplikasi mobile yang intuitif. Karyawan tidak lagi perlu datang ke meja HR untuk sekadar bertanya sisa cuti atau meminta slip gaji. Semua kebutuhan administrasi personalia kini tersedia dalam satu aplikasi yang aman dan mudah digunakan.",
    benefits: [
      {
        title: "Absensi Selfie & GPS",
        desc: "Karyawan dapat melakukan absensi masuk dan pulang dengan verifikasi wajah dan lokasi (geofencing) yang akurat.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"
            />
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0Z"
            />
          </svg>
        ),
      },
      {
        title: "E-Slip Gaji Aman",
        desc: "Akses riwayat slip gaji bulanan secara instan dengan keamanan tambahan (PIN/Biometrik) untuk melindungi privasi finansial.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 15V3m0 12l-4-4m4 4l4-4M5 20h14"
            />
          </svg>
        ),
      },
      {
        title: "Pengajuan Mandiri (ESS)",
        desc: "Karyawan dapat mengajukan cuti, lembur, atau klaim biaya hanya dalam hitungan detik langsung dari ponsel mereka.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#0451bf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 19l9 2l-9-18l-9 18l9-2Zm0 0v-8"
            />
          </svg>
        ),
      },
    ],
    tips: {
      title: "Tips Optimalisasi Aplikasi Mobile",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      protip:
        "Adopsi aplikasi mobile terbukti meningkatkan keterlibatan karyawan dan transparansi informasi hingga 65%.",
      items: [
        {
          title: "Aktifkan Push Notification",
          desc: "Gunakan notifikasi untuk mengingatkan karyawan jika belum absen atau ada pengumuman penting dari manajemen.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9m-4.27 13a2 2 0 0 1-3.46 0"
              />
            </svg>
          ),
        },
        {
          title: "Setup Geofencing Kantor",
          desc: "Atur titik koordinat kantor agar karyawan hanya bisa absen saat benar-benar berada di lokasi kerja yang telah ditentukan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18Zm0-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"
              />
            </svg>
          ),
        },
        {
          title: "Edukasi Keamanan Akun",
          desc: "Ingatkan karyawan untuk tidak membagikan kredensial login mereka dan rutin mengganti password demi keamanan data.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Zm10-10V7a4 4 0 1 0-8 0v4"
              />
            </svg>
          ),
        },
        {
          title: "Update Profil Mandiri",
          desc: "Dorong karyawan untuk memperbarui nomor telepon atau kontak darurat langsung melalui aplikasi agar data HR tetap mutakhir.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0M12 14c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z"
              />
            </svg>
          ),
        },
        {
          title: "Pantau Status Approval",
          desc: "Karyawan dapat melihat progress pengajuan mereka secara real-time, apakah masih menunggu atau sudah disetujui atasan.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 12l2 2l4-4m6 2a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
              />
            </svg>
          ),
        },
        {
          title: "Akses Direktori Karyawan",
          desc: "Gunakan fitur kontak internal untuk memudahkan koordinasi antar rekan tim tanpa perlu menyimpan nomor ponsel pribadi satu per satu.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"
              />
            </svg>
          ),
        },
      ],
    },
  },
};
