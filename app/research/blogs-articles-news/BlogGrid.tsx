"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/cms";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "../../components/MotionWrappers";

// ── Category color map ──────────────────────────────────────

const getCategoryColor = (cat: string) => {
  const colors: Record<string, string> = {
    Robotics: "bg-violet-50 text-violet-700 border-violet-200",
    Sustainability: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "CAD & CAE": "bg-blue-50 text-blue-700 border-blue-200",
    "3D Printing": "bg-orange-50 text-orange-700 border-orange-200",
    "AI & Simulation": "bg-cyan-50 text-cyan-700 border-cyan-200",
    News: "bg-amber-50 text-amber-700 border-amber-200",
  };
  return colors[cat] || "bg-[#008ba3]/10 text-[#008ba3] border-[#008ba3]/15";
};

// ── Format date helper ──────────────────────────────────────

function formatDate(iso: string | null): string {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

// ── Props ────────────────────────────────────────────────────

interface BlogGridProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogGrid({ posts, categories }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter(
          (p) => p.category?.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <>
      {/* ── Category Filter ── */}
      <section className="relative z-10 px-6 pb-12 max-w-[1200px] mx-auto">
        <FadeInUp>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-[#008ba3] text-white border-[#008ba3] shadow-[0_4px_15px_rgba(0,139,163,0.3)]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#008ba3]/40 hover:text-[#008ba3]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeInUp>
      </section>

      {/* ── Blog Grid ── */}
      <section className="relative z-10 pb-24 px-6 max-w-[1200px] mx-auto">
        {filteredPosts.length === 0 ? (
          <FadeInUp>
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-[#008ba3]/10 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[#008ba3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                No posts found
              </h3>
              <p className="text-slate-500 font-medium">
                {activeCategory === "All"
                  ? "Blog posts will appear here once published in the CMS."
                  : `No posts found in the "${activeCategory}" category yet.`}
              </p>
            </div>
          </FadeInUp>
        ) : (
          <StaggerContainer
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <StaggerItem key={post.id}>
                <Link
                  href={`/research/blogs-articles-news/${post.slug}`}
                  className="group block h-full"
                >
                  <article className="bg-white rounded-[2rem] border border-black/5 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,139,163,0.08)] transition-all duration-300 h-full flex flex-col hover:-translate-y-2">
                    {/* Cover Image */}
                    {post.coverImageUrl ? (
                      <div className="relative h-[200px] overflow-hidden">
                        <Image
                          src={post.coverImageUrl}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      </div>
                    ) : (
                      <div className="h-[200px] bg-gradient-to-br from-[#008ba3]/10 to-[#00bcd4]/5 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-[#008ba3]/30"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 0 0 2.25-2.25V5.25a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                          />
                        </svg>
                      </div>
                    )}

                    <div className="p-8 flex flex-col flex-1">
                      {/* Category + Meta */}
                      <div className="flex items-center justify-between mb-5">
                        {post.category && (
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getCategoryColor(post.category)}`}
                          >
                            {post.category}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#008ba3] transition-colors flex-1">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-slate-500 leading-relaxed text-sm mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-5 border-t border-black/5 mt-auto">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#008ba3] to-[#00bcd4] flex items-center justify-center text-white text-xs font-bold">
                            {post.authorName?.charAt(0) || "C"}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-700">
                              {post.authorName || "CSC Team"}
                            </p>
                            <p className="text-xs text-slate-400">
                              {formatDate(post.publishedAt)}
                            </p>
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-slate-300 group-hover:text-[#008ba3] group-hover:translate-x-1 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </section>
    </>
  );
}
