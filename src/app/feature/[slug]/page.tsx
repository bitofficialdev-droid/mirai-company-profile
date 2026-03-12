import { FEATURE_DETAILS } from "@/core/repositories/feature";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CSButton } from "@/components/shared/cs_button";

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const data =
    FEATURE_DETAILS[slug.toLowerCase() as keyof typeof FEATURE_DETAILS];

  if (!data) {
    return notFound();
  }

  return (
    <main className="container mx-auto min-h-screen px-6 pt-48 pb-20 lg:px-28">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex w-full flex-1 flex-col items-start gap-6 lg:w-1/2">
            <div className="rounded-full bg-blue-50 px-5 py-2">
              <span className="text-sm font-medium tracking-wide text-[#0451bf]">
                {data.label}
              </span>
            </div>

            <h1 className="text-4xl leading-tight font-bold text-[#0451bf]">
              {data.title}
            </h1>

            <div className="border-l-4 border-[#7efc62] pl-5">
              <p className="text-lg leading-relaxed text-gray-600">
                {data.desc}
              </p>
            </div>

            <div className="mt-4 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <CSButton
                href="https://wa.me/6285218026895"
                target="_blank"
                rel="noopener noreferrer"
                variant="solid"
                color="primary"
                className="shrink-0 text-[18px] font-medium text-white shadow-lg shadow-[#0451bf]/20 hover:bg-[#0451bf] hover:text-white"
              >
                Contact Us
              </CSButton>

              <CSButton
                href="#feature-detail"
                variant="outline"
                color="primary"
                className="shrink-0 text-[18px] font-medium text-[#0451bf] hover:bg-[#0451bf] hover:text-white"
              >
                Pelajari Selengkapnya
              </CSButton>
            </div>
          </div>

          <div className="relative flex w-full flex-1 items-center justify-center lg:w-1/2">
            <div className="relative aspect-square w-full max-w-lg lg:aspect-4/3 lg:max-w-none">
              <div className="absolute inset-0 z-0 scale-90 rounded-full bg-blue-50/80 blur-3xl"></div>

              <Image
                src={data.image ?? ""}
                alt="Hero Image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                priority
                quality={100}
                className="object-contain transition-opacity duration-700"
              />
            </div>
          </div>
        </div>

        {data.content && (
          <div className="border-t border-gray-100 pt-16">
            <div className="prose prose-lg prose-blue mx-auto text-gray-600">
              <p
                id="feature-detail"
                className="my-4 text-justify text-xl font-medium"
              >
                {data.content ?? ""}
              </p>
            </div>

            {data.benefits && (
              <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                {data.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0451bf]/10"
                  >
                    <div>
                      {benefit.icon}

                      <h3 className="my-4 text-xl font-semibold text-[#0451bf] transition-colors">
                        {benefit.title}
                      </h3>

                      <p className="text-base leading-relaxed font-normal text-gray-500">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {data.tips && (
          <section className="bg-white py-24">
            <div className="container mx-auto">
              <div className="flex flex-col items-center gap-32 lg:flex-row">
                <div className="relative w-full lg:w-1/2">
                  <div className="relative aspect-7/8 overflow-hidden rounded-4xl shadow-2xl">
                    <Image
                      src={data.tips.image}
                      alt="Strategic Management"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0451bf]/40 to-transparent"></div>

                    <div className="absolute right-8 bottom-8 left-8 rounded-2xl bg-white/90 p-6 backdrop-blur-md">
                      <p className="text-sm font-bold tracking-wider text-[#0451bf] uppercase">
                        Pro Tip
                      </p>
                      <p className="mt-1 text-gray-700">{data.tips.protip}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="mb-10">
                    <p className="text-4xl leading-tight font-bold text-[#0451bf]">
                      {data.tips.title}
                    </p>
                    <div className="mt-4 h-1.5 w-20 rounded-full bg-[#7efc62]"></div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {data.tips.items.map((item, index) => (
                      <div key={index} className="group flex items-start gap-5">
                        <div className="relative flex flex-col items-center">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0451bf] transition-colors">
                            <div className="flex h-8 w-8 items-center justify-center">
                              {item.icon}
                            </div>
                          </div>
                          {index !== data.tips.items.length - 1 && (
                            <div className="h-full w-px bg-gray-100 py-4"></div>
                          )}
                        </div>

                        <div className="pb-6">
                          <h4 className="text-lg font-medium text-[#0451bf]">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed font-normal text-gray-500">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
