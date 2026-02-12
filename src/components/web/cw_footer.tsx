import { CSButton } from "../shared/cs_button";

export default function CWFooter() {
  return (
    <footer className="bg-[#021027] pt-24 pb-12 text-white">
      <div className="container mx-auto px-6 lg:px-28">
        <div className="mb-24 grid grid-cols-1 gap-16 text-left md:grid-cols-3">
          <div className="col-span-1 space-y-6 md:col-span-1">
            <h4 className="text-2xl font-semibold text-[#7efc62]">
              Mirai Softnet Technology
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Memberdayakan bisnis melalui teknologi inovatif dan solusi digital
              yang terukur untuk masa depan yang lebih baik.
            </p>
          </div>
          <div>
            <h5 className="mb-8 text-xs font-bold tracking-widest text-gray-500 uppercase">
              Office
            </h5>
            <p className="text-sm leading-relaxed text-gray-400">
              Vasanta Innopark No T-51,
              <br />
              Jl. Kalimantan, Gandamekar, Kec.Cikarang Barat, Kabupaten Bekasi,
              Jawa Barat 17530, Indonesia.
            </p>
          </div>
          <div>
            <h5 className="mb-8 text-xs font-bold tracking-widest text-gray-500 uppercase">
              Email
            </h5>
            <p className="mb-4 text-xs text-gray-400">info@miraisoftnet.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 text-xs text-gray-500 md:flex-row">
          <p>© 2025 Mirai Softnet Technology. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
