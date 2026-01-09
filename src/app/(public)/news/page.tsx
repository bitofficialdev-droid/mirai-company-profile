"use client";

import { useState, useMemo } from "react";
import { CSButton } from "@/components/shared/cs_button";
import { NewsRepository } from "@/core/repositories/news.repo";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const data = NewsRepository.getNews();

  const filteredPosts = useMemo(() => {
    return activeCategory === "All"
      ? data.posts
      : (data.posts ?? []).filter((post) => post.category === activeCategory);
  }, [activeCategory, data.posts]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = (filteredPosts ?? []).slice(
    indexOfFirstPost,
    indexOfLastPost,
  );
  const totalPages = Math.ceil((filteredPosts ?? []).length / postsPerPage);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="flex w-full flex-col bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-20 pb-12 lg:pt-32">
        <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0451bf]/5 blur-[100px]" />
        <div className="relative z-10 container mx-auto px-6 text-center lg:px-28">
          <h1
            className="mx-auto max-w-4xl text-4xl font-bold text-gray-900 md:text-6xl lg:text-7xl"
            dangerouslySetInnerHTML={{ __html: data.hero?.title ?? "-" }}
          />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 md:text-xl">
            {data.hero?.description ?? "-"}
          </p>
        </div>
      </section>

      {/* 2. FEATURED POST */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-28">
          <div className="group relative flex flex-col overflow-hidden rounded-[3rem] border border-gray-100 bg-[#f8fafc] transition-all hover:shadow-2xl lg:flex-row">
            <div className="relative flex h-72 items-center justify-center bg-linear-to-br from-[#0451bf] to-blue-900 p-12 lg:h-auto lg:w-1/2">
              <span className="text-5xl font-black text-white/10 uppercase italic lg:text-7xl">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-16">
              <div className="mb-6 flex items-center gap-3">
                <span className="rounded-lg bg-[#7efc62] px-3 py-1 text-xs font-bold text-[#0451bf]">
                  {data.featured?.category ?? "-"}
                </span>
                <span className="text-sm text-gray-400">
                  {data.featured?.date ?? "-"}
                </span>
              </div>
              <h2 className="mb-6 text-3xl leading-tight font-bold text-[#0451bf] md:text-4xl">
                {data.featured?.title ?? "-"}
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                {data.featured?.description ?? "-"}
              </p>
              <CSButton
                color="primary"
                variant="outline"
                className="w-fit rounded-xl"
              >
                Read Full Article
              </CSButton>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY TABS & GRID */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-28">
          {/* Tabs Filter */}
          <div className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-gray-100 pb-8 md:flex-row">
            <div className="flex flex-wrap justify-center gap-2">
              {(data.categories ?? []).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat
                      ? "-translate-y-0.5 bg-[#0451bf] text-white shadow-lg"
                      : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="text-sm font-medium text-gray-400">
              Showing{" "}
              {(filteredPosts ?? []).length > 0 ? indexOfFirstPost + 1 : 0} -{" "}
              {Math.min(indexOfLastPost, (filteredPosts ?? []).length)} of{" "}
              {(filteredPosts ?? []).length} Articles
            </div>
          </div>

          {/* Grid Posts */}
          {currentPosts.length > 0 ? (
            <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((post) => (
                <div key={post.id} className="group cursor-pointer">
                  <div className="relative mb-6 aspect-4/3 overflow-hidden rounded-4xl bg-gray-200">
                    <div className="absolute inset-0 bg-linear-to-t from-[#0451bf]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="space-y-3">
                    <span className="rounded bg-[#7efc62] px-2 py-0.5 text-xs font-bold text-[#0451bf]">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#0451bf] transition-colors group-hover:text-[#043c8b]">
                      {post.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-gray-500">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2 pt-2 text-sm font-normal text-[#0451bf]">
                      <span>Read More</span>
                      <span className="h-0.5 w-4 bg-[#7efc62] transition-all group-hover:w-8" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-gray-400">
              Belum ada artikel di kategori ini.
            </div>
          )}

          {/* Pagination Buttons */}
          {totalPages > 1 && (
            <div className="mt-20 flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-100 text-[#0451bf] hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
              >
                ←
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-12 w-12 rounded-xl font-bold transition-all ${
                        currentPage === page
                          ? "bg-[#0451bf] text-white shadow-xl shadow-[#0451bf]/20"
                          : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-100 text-[#0451bf] hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. NEWSLETTER CTA */}
      <section className="bg-white pb-24">
        <div className="container mx-auto px-6 lg:px-28">
          <div className="relative overflow-hidden rounded-[3rem] bg-[#0451bf] p-10 text-center text-white lg:p-20">
            <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#7efc62]/10 blur-[80px]" />
            <div className="relative z-10 mx-auto max-w-2xl space-y-8">
              <h2 className="text-3xl font-bold md:text-5xl">
                Stay Ahead of the Curve
              </h2>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 rounded-2xl bg-white/10 px-6 py-4 text-white outline-none focus:ring-2 focus:ring-[#7efc62]"
                />
                <CSButton
                  color="secondary"
                  className="font-bold text-[#0451bf]"
                >
                  Subscribe
                </CSButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
