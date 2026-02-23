import Link from "next/link";
import Image from "next/image";
import { FooterRepository } from "@/core/repositories/footer.repo";

export default function CWFooter() {
  const data = FooterRepository.getFooter();
  const linkClass =
    "text-[#4cd0c3] hover:text-white transition-colors text-[13px] mb-3 block";
  const headerClass = "text-white text-base font-medium mb-6";

  return (
    <footer className="bg-[#021027] pt-16 pb-16 text-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1 lg:pr-6">
            <Link
              href="/"
              className="flex items-center transition-transform active:scale-95"
            >
              <div className="relative h-12.75 w-16">
                <Image
                  src="/icon-white-no-bg.png"
                  alt="Mirai Softnet Technology Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-contain object-left"
                />
              </div>
              <div className="text-2xl font-medium">hrms</div>
            </Link>

            <p className="mt-6 text-[13px] leading-relaxed text-gray-300">
              {data.leading?.desctiption ?? "-"}
            </p>

            <div className="mt-6 grid w-max grid-cols-3 gap-3">
              {data.leading?.socialMedia?.map((social, index) => (
                <Link
                  key={index}
                  href={social.url ?? "#"}
                  aria-label={social.label}
                  className="hover:bg-opacity-80 flex h-10 w-10 items-center justify-center rounded-full bg-[#0451bf] text-white transition"
                >
                  {social.image}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className={headerClass}>Solusi & Fitur</h4>
            {data.features?.slice(0, 11).map((feature, index) => (
              <Link key={index} href={feature.url ?? "#"} className={linkClass}>
                {feature.label}
              </Link>
            ))}
          </div>

          <div className="lg:pt-12">
            {data.features?.slice(11).map((feature, index) => (
              <Link key={index} href={feature.url ?? "#"} className={linkClass}>
                {feature.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className={headerClass}>Resource</h4>
            {data.resources?.map((resource, index) => (
              <Link
                key={index}
                href={resource.url ?? "#"}
                className={linkClass}
              >
                {resource.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className={headerClass}>Tentang Kami</h4>
            {data.about?.map((about, index) => (
              <Link key={index} href={about.url ?? "#"} className={linkClass}>
                {about.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
