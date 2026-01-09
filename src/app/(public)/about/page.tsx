import Image from "next/image";
import { CSButton } from "@/components/shared/cs_button";
import { AboutRepository } from "@/core/repositories/about.repo";
import StoryImageSection from "@/components/features/about/story_image_section";

export default function AboutPage() {
  const data = AboutRepository.getAbout();

  return (
    <div className="flex w-full flex-col">
      {/* 1. HERO SECTION ABOUT */}
      <section className="bg-[#0451bf] py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-28">
          <div className="max-w-3xl space-y-6">
            <h1
              className="text-4xl font-bold text-white md:text-6xl"
              dangerouslySetInnerHTML={{ __html: data.hero?.title ?? "-" }}
            />
            <p className="text-xl text-blue-100 opacity-90">
              {data.hero?.description ?? "-"}
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY  */}
      <section className="bg-white py-24">
        <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2 lg:px-28">
          <div className="relative h-96 overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
            <StoryImageSection data={data.story} />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#0451bf] md:text-4xl">
              {data.story?.title ?? "-"}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              {data.story?.description ?? "-"}
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES (Cards Grid) */}
      <section className="bg-[#f8fafc] py-24">
        <div className="container mx-auto px-6 lg:px-28">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-[#0451bf] md:text-5xl">
              {data.value?.title ?? "-"}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {(data.value?.value ?? []).map((v, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-white bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-[#7efc62]/10 blur-2xl transition-all duration-500 group-hover:bg-[#7efc62]/20" />

                <div className="relative z-10">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0451bf] text-[#7efc62] shadow-lg shadow-[#0451bf]/20">
                    <div className="relative h-6 w-6">
                      <span className="absolute inset-0 animate-ping rounded-full border-2 border-[#7efc62] opacity-50" />
                      <div className="h-full w-full rounded-full bg-[#7efc62]" />
                    </div>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-[#0451bf]">
                    {v.label}
                  </h3>
                  <p className="leading-relaxed text-gray-600 transition-colors group-hover:text-gray-900">
                    {v.description}
                  </p>

                  <div className="mt-8 h-1 w-12 rounded-full bg-[#0451bf] transition-all duration-500 group-hover:w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR TEAM SECTION */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-28">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-4 text-3xl font-bold text-[#0451bf] md:text-4xl">
                {data.teams?.title ?? "-"}
              </h2>
              <p className="text-gray-600">{data.teams?.description ?? "-"}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-10">
            {(data.teams?.team ?? []).map((member, i) => (
              <div key={i} className="group space-y-4">
                <div className="relative aspect-3/4 overflow-hidden rounded-3xl bg-gray-100">
                  {member.image ? (
                    <Image
                      src={member.image ?? ""}
                      alt={member.name ?? ""}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-linear-to-t from-[#0451bf]/20 to-transparent">
                      <span className="font-bold text-[#0451bf]/30">
                        {member.name ?? ""}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-[#0451bf]/80 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-xs font-medium text-white">
                      View Profile →
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0451bf]">
                    {member.name ?? ""}
                  </h4>
                  <p className="text-sm text-gray-400">{member.role ?? ""}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. JOIN US CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-28">
          <div className="rounded-[3rem] bg-[#0451bf] p-10 text-center lg:p-16">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              {data.join?.label ?? "-"}
            </h2>
            <p className="mb-10 text-white">{data.join?.description ?? "-"}</p>
            <CSButton
              href="/career"
              color="secondary"
              size="wide"
              className="font-bold text-[#0451bf] shadow-xl"
            >
              Lihat Lowongan
            </CSButton>
          </div>
        </div>
      </section>
    </div>
  );
}
