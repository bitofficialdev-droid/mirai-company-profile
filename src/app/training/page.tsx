import { CSButton } from "@/components/shared/cs_button";
import { TRAININGDATA } from "@/core/repositories/training";
import Image from "next/image";

export default async function TrainingPage() {
  const data = TRAININGDATA;

  return (
    <main className="container mx-auto min-h-screen px-6 pt-48 pb-20">
      <div className="container mx-auto px-6 lg:px-28">
        <div className="mb-20 flex flex-col items-start gap-6 lg:w-2/3">
          <div className="rounded-full bg-blue-50 px-5 py-2">
            <span className="text-sm font-medium tracking-wide text-[#0451bf]">
              {data.header.label}
            </span>
          </div>
          <h1 className="text-4xl leading-tight font-bold text-[#0451bf] md:text-5xl">
            {data.header.title}
          </h1>
          <div className="border-l-4 border-[#7efc62] pl-5">
            <p className="text-lg leading-relaxed text-gray-600">
              {data.header.desc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {data.programs.map((prog, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={prog.image}
                  alt={prog.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {prog.isPopular && (
                  <div className="absolute top-4 right-4 rounded-full bg-[#7efc62] px-4 py-1 text-xs font-bold text-[#0451bf]">
                    Best Seller
                  </div>
                )}
                <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-bold text-[#0451bf] backdrop-blur-md">
                  {prog.level}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-[#0451bf]">
                  {prog.name}
                </h3>
                <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-gray-500">
                  {prog.desc}
                </p>

                <div className="mb-6 space-y-3">
                  {prog.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#7efc62]" />
                      {topic}
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t border-gray-50 pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">
                      {prog.duration}
                    </span>
                    <span className="text-lg font-bold text-[#0451bf]">
                      {prog.price.split(" ")[0]}
                    </span>
                  </div>
                  <CSButton
                    href="https://wa.me/6285218026895"
                    variant="outline"
                    className="w-full justify-center group-hover:bg-[#0451bf] group-hover:text-white"
                  >
                    Daftar Sekarang
                  </CSButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-32 rounded-[3rem] bg-[#0451bf]/5 p-12 lg:p-20">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-[#0451bf]">
              {data.whyUs.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {data.whyUs.items.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0451bf] text-[#7efc62]">
                  <span className="text-2xl font-bold">{idx + 1}</span>
                </div>
                <h4 className="mb-3 text-xl font-bold text-[#0451bf]">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-32">
          <div className="relative overflow-hidden rounded-[3rem] bg-[#0451bf] px-8 py-16 text-center shadow-2xl lg:px-16">
            <div className="absolute inset-0 bg-linear-to-br from-[#0451bf] to-blue-900" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                {data.cta.title}
              </h2>
              <p className="mt-6 text-lg text-blue-100 opacity-90">
                {data.cta.desc}
              </p>
              <div className="mt-10">
                <CSButton
                  href={data.cta.buttonLink}
                  color="secondary"
                  size="wide"
                  className="font-bold text-[#0451bf]"
                >
                  {data.cta.buttonText}
                </CSButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
