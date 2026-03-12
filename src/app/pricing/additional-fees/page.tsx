import { CSButton } from "@/components/shared/cs_button";
import { PRICEADDFEES } from "@/core/repositories/price";

export default async function AdditionalFeesPricingPage() {
  const data = PRICEADDFEES;

  return (
    <main className="container mx-auto min-h-screen px-6 pt-48 pb-20">
      <div className="container mx-auto px-6 lg:px-28">
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-blue-50 px-5 py-2">
            <span className="text-sm font-medium tracking-wide text-[#0451bf]">
              {data.header.label}
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-[#0451bf] md:text-5xl lg:max-w-3xl">
            {data.header.title}
          </h1>
          <div className="mb-6 h-1.5 w-20 rounded-full bg-[#7efc62]"></div>
          <p className="max-w-2xl text-lg text-gray-600">{data.header.desc}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.addons.map((addon, index) => (
            <div
              key={index}
              className={`group relative flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 ${
                addon.isPopular
                  ? "shadow-2xl ring-2 shadow-[#0451bf]/10 ring-[#0451bf]"
                  : "hover:shadow-xl"
              }`}
            >
              {addon.isPopular && (
                <div className="absolute -top-4 left-8 rounded-full bg-[#7efc62] px-4 py-1 text-xs font-bold text-[#0451bf] uppercase">
                  Paling Banyak Diminati
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {addon.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {addon.desc}
                </p>
              </div>

              <div className="mb-8 flex flex-col items-start border-b border-gray-100 pb-8">
                <span className="text-3xl font-bold text-[#0451bf]">
                  {addon.price}
                </span>
                <span className="mt-1 text-sm font-medium text-gray-500">
                  {addon.period}
                </span>
              </div>

              <div className="mb-10 grow">
                <p className="mb-4 text-sm font-semibold text-gray-900">
                  Termasuk:
                </p>
                <ul className="space-y-4">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7efc62]/20 text-[#0451bf]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <CSButton
                href="https://wa.me/6285218026895"
                variant={addon.isPopular ? "solid" : "outline"}
                color="primary"
                className="w-full justify-center py-4 text-base font-semibold"
              >
                {addon.buttonText}
              </CSButton>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-24 bg-[#f8fafc] py-24">
        <div className="container mx-auto px-6 lg:px-28">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-[#0451bf] md:text-4xl">
              {data.faq.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">{data.faq.desc}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {data.faq.questions.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <h4 className="text-lg font-bold text-[#0451bf]">{faq.q}</h4>
                <p className="mt-4 leading-relaxed text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-24 pb-10 lg:px-28">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#0451bf] px-8 py-16 text-center shadow-2xl lg:px-16 lg:py-20">
          <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#7efc62]/20 blur-[80px]" />
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-[#7efc62]/20 blur-[80px]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              {data.cta.title}
            </h2>
            <p className="mt-6 text-lg text-blue-100">{data.cta.desc}</p>
            <div className="mt-10">
              <CSButton
                href={data.cta.buttonLink}
                color="secondary"
                size="wide"
                className="font-semibold text-[#0451bf]"
              >
                {data.cta.buttonText}
              </CSButton>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed top-0 right-0 -z-10 h-125 w-125 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#7efc62]/10 blur-[120px]" />
    </main>
  );
}
