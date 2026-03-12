import { CSButton } from "@/components/shared/cs_button";
import { PRICESUBSPRICING } from "@/core/repositories/price";

export default async function PricingSubscriptionPricingPage() {
  const data = PRICESUBSPRICING;

  const renderTableValue = (value: boolean | string) => {
    if (typeof value === "string")
      return <span className="font-medium text-gray-600">{value}</span>;
    if (value) {
      return (
        <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-[#7efc62]/20 text-[#0451bf]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
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
      );
    }
    return <span className="font-bold text-gray-300">—</span>;
  };

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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {data.plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular
                  ? "shadow-2xl ring-2 shadow-[#0451bf]/10 ring-[#0451bf]"
                  : "hover:shadow-xl"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#7efc62] px-4 py-1 text-xs font-bold text-[#0451bf] uppercase">
                  Paling Populer
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{plan.desc}</p>
              </div>

              <div className="mb-8 flex items-end">
                <span className="text-4xl font-bold text-[#0451bf]">
                  {plan.price}
                </span>
                <span className="ml-1 pb-1 text-sm text-gray-500">
                  {plan.period}
                </span>
              </div>

              <div className="mb-10 grow">
                <p className="mb-4 text-sm font-semibold text-gray-900">
                  Fitur Utama:
                </p>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
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
                variant={plan.isPopular ? "solid" : "outline"}
                color="primary"
                className="w-full justify-center py-4 text-base font-semibold"
              >
                {plan.buttonText}
              </CSButton>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-32 bg-[#f8fafc] py-24">
        <div className="container mx-auto px-6 lg:px-28">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0451bf] md:text-4xl">
              {data.comparison.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">{data.comparison.desc}</p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50">
            <table className="w-full min-w-200 text-left text-sm">
              <thead className="bg-[#0451bf]/5">
                <tr>
                  <th className="p-6 text-lg font-bold text-[#0451bf]">
                    Fitur
                  </th>
                  <th className="p-6 text-center text-lg font-bold text-[#0451bf]">
                    Starter
                  </th>
                  <th className="p-6 text-center text-lg font-bold text-[#0451bf]">
                    Business
                  </th>
                  <th className="p-6 text-center text-lg font-bold text-[#0451bf]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.comparison.features.map((item, idx) => (
                  <tr
                    key={idx}
                    className="transition-colors hover:bg-gray-50/50"
                  >
                    <td className="p-6 font-medium text-gray-700">
                      {item.name}
                    </td>
                    <td className="p-6 text-center">
                      {renderTableValue(item.starter)}
                    </td>
                    <td className="p-6 text-center">
                      {renderTableValue(item.business)}
                    </td>
                    <td className="p-6 text-center">
                      {renderTableValue(item.enterprise)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24">
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
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <h4 className="text-lg font-bold text-[#0451bf]">{faq.q}</h4>
                <p className="mt-4 leading-relaxed text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-10 lg:px-28">
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

      <div className="fixed top-0 left-0 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/50 blur-[120px]" />
    </main>
  );
}
