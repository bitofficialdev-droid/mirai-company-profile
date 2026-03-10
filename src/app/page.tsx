import FAQSection from "@/components/features/home/faq_section";
import FeatureSection from "@/components/features/home/feature_section";
import FormSection from "@/components/features/home/form_section";
import HeroImageSection from "@/components/features/home/hero_image_section";
import PartnerImageSection from "@/components/features/home/partner_image_section";
import PortfolioCard from "@/components/features/home/portfolio_card";
import ReviewSection from "@/components/features/home/review_section";
import ServicesSection from "@/components/features/home/service_section";
import TrustedBySection from "@/components/features/home/trusted_by_section";
import { CSButton } from "@/components/shared/cs_button";
import { HomeRepository } from "@/core/repositories/home.repo";
import { Icon } from "@iconify/react";

export default function RootPage() {
  const data = HomeRepository.getHome();

  return (
    <div className="flex w-full flex-col">
      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="relative flex w-full flex-col overflow-hidden bg-[#0451bf] pt-40"
      >
        <div className="relative container mx-auto flex grow flex-col justify-center px-6 lg:px-28">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex flex-col items-center justify-center gap-10 text-center lg:w-2/5 lg:items-start lg:text-left">
              <div className="max-w-4xl space-y-6">
                <h1
                  className="text-4xl leading-tight font-bold text-white md:text-6xl lg:text-5xl"
                  dangerouslySetInnerHTML={{ __html: data.hero?.title ?? "-" }}
                />
                <p className="max-w-2xl text-base text-blue-100 opacity-90 md:text-xl">
                  {data.hero?.description ?? "-"}
                </p>
              </div>

              <div className="hidden flex-row items-center gap-4 lg:flex">
                <CSButton
                  href={data.hero?.linkButton ?? "#"}
                  rel="noopener noreferrer"
                  size="wide"
                  color="secondary"
                  className="font-semibold text-[#0451bf]"
                >
                  Get Started
                </CSButton>
                {/* <CSButton
                  variant="outline"
                  color="white"
                  size="wide"
                  className="font-semibold"
                >
                  Our Services
                </CSButton> */}
              </div>

              <span className="hidden h-0.5 w-[75%] bg-[#7efc62] opacity-80 lg:block" />
            </div>

            <div className="flex justify-center lg:w-3/5">
              <div className="relative md:h-110 md:w-110 lg:h-110 lg:w-175">
                <HeroImageSection heroData={data.hero} />
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-4 lg:hidden">
              <CSButton
                size="wide"
                color="secondary"
                className="w-full font-semibold text-[#0451bf]"
              >
                Get Started
              </CSButton>
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <TrustedBySection />
      </section>

      {/* 3. OUR SERVICES */}
      <div id="services">
        <ServicesSection serviceData={data.service} />
      </div>

      {/* 4. WHY CHOOSE US */}
      <section id="about" className="bg-[#f8fafc] py-24">
        <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2 lg:px-28">
          <div className="space-y-8 text-left">
            <h2 className="text-3xl font-bold text-[#0451bf] md:text-5xl">
              {data.partner?.title ?? "-"}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              {data.partner?.description ?? "-"}
            </p>
            <div className="grid gap-4">
              {(data.partner?.sections ?? []).map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7efc62] text-xs font-semibold text-[#0451bf]">
                    {index + 1}
                  </div>
                  <span className="font-medium text-[#0451bf]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-112.5 overflow-hidden rounded-3xl bg-gray-200 shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-[#0451bf]/20 to-transparent">
              <PartnerImageSection
                image={data.partner?.image}
                title={data.partner?.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature */}
      <FeatureSection feature={data.feature} />

      {/* 5. STATS COUNTER */}
      <section
        id="trusted-by"
        className="relative overflow-hidden bg-[#0451bf] py-20"
      >
        <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#7efc62]/20 blur-[80px]" />

        <div className="relative z-10 container mx-auto grid grid-cols-2 gap-12 px-6 md:grid-cols-4 lg:px-28">
          {(data.stats ?? []).map((stat, index) => (
            <div key={index} className="space-y-2 text-center">
              <div className="text-4xl font-bold text-[#7efc62] md:text-5xl">
                {stat.value}
              </div>
              <div className="text-xs font-medium tracking-wider text-blue-100 uppercase md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FEATURED PORTFOLIO */}
      <section id="portfolio" className="bg-white py-24">
        <div className="container mx-auto space-y-16 px-6 lg:px-28">
          <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-bold text-[#0451bf] md:text-5xl">
                {data.portfolio?.title ?? "-"}
              </h2>
              <p className="max-w-lg text-gray-500">
                {data.portfolio?.description ?? "-"}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {(data.portfolio?.portfolios ?? []).slice(0, 2).map((project) => (
              <PortfolioCard key={project.id} item={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <ReviewSection reviewData={data.review} />

      <FAQSection item={data.faq} />

      {/* 8. CTA SECTION */}
      <section id="contact" className="bg-gray-50 py-24 text-center">
        <h2 className="px-6 text-2xl font-bold text-[#0451bf] md:text-4xl lg:px-28">
          {data.contact?.title ?? "-"}
        </h2>

        <div className="h-12"></div>

        <div className="container mx-auto px-6 lg:px-28">
          <div className="relative overflow-hidden rounded-[3rem] bg-white p-8 text-left shadow-2xl lg:p-16">
            <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#0451bf]/10 blur-[80px]" />
            <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-[#0451bf]/5 blur-[80px]" />

            <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#0451bf]/10 bg-[#0451bf]/3 p-6 shadow-sm backdrop-blur-md transition-colors hover:bg-[#0451bf]/8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0451bf]/10 text-[#0451bf]">
                    <Icon icon="ph:map-pin-bold" className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#0451bf]">
                    Address
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {data.contact?.address1 ?? ""}
                    <br />
                    {data.contact?.address2 ?? ""}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#0451bf]/10 bg-[#0451bf]/3 p-6 shadow-sm backdrop-blur-md transition-colors hover:bg-[#0451bf]/8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0451bf]/10 text-[#0451bf]">
                    <Icon icon="ph:phone-call-bold" className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#0451bf]">
                    Call Us
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {data.contact?.call1 ?? ""}
                    <br />
                    {data.contact?.call2 ?? ""}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#0451bf]/10 bg-[#0451bf]/3 p-6 shadow-sm backdrop-blur-md transition-colors hover:bg-[#0451bf]/8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0451bf]/10 text-[#0451bf]">
                    <Icon icon="ph:envelope-simple-bold" className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#0451bf]">
                    Email Us
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {data.contact?.email1 ?? ""}
                    <br />
                    {data.contact?.email2 ?? ""}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#0451bf]/10 bg-[#0451bf]/3 p-6 shadow-sm backdrop-blur-md transition-colors hover:bg-[#0451bf]/8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0451bf]/10 text-[#0451bf]">
                    <Icon icon="ph:clock-bold" className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#0451bf]">
                    Open Hours
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {data.contact?.openHours1 ?? ""}
                    <br />
                    {data.contact?.openHours2 ?? ""}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-[#0451bf]/10 bg-[#0451bf]/3 p-8 shadow-sm backdrop-blur-md lg:p-10">
                <FormSection />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
