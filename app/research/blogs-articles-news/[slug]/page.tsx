import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/cms";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "../../../components/MotionWrappers";

export const revalidate = 60;

/* ── Generate static params for known slugs ── */
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

/* ── Dynamic metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | The Correct Steps`,
    description:
      post.excerpt || `Read "${post.title}" on The Correct Steps blog.`,
  };
}

/* ── Category color helper ── */
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  /* ── Fetch related posts (same category, excluding current) ── */
  const allPosts = await getBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  /* ── Share URL ── */
  const shareUrl = `https://thecorrectsteps.com/research/blogs-articles-news/${post.slug}`;
  const shareText = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <div className="relative bg-[#f9fafb] text-slate-800 min-h-screen overflow-hidden">
      {/* ── Background Gradients ── */}
      <div className="fixed top-[10%] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,188,212,0.15)_0%,transparent_70%)] blur-[100px] z-0 pointer-events-none"></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(0,139,163,0.10)_0%,transparent_70%)] blur-[140px] z-0 pointer-events-none"></div>

      {/* ══════════════════════════════════════════════════════
          1. HERO BANNER
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10">
        {/* Cover Image */}
        <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden">
          {post.coverImageUrl ? (
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#06334f] to-[#008ba3]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06334f] via-[#06334f]/60 to-transparent" />

          {/* Hero Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 md:pb-16">
            <div className="max-w-[800px] mx-auto">
              {/* Back link */}
              <div className="mb-6">
                <Link
                  href="/research/blogs-articles-news"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Blog
                </Link>
              </div>

              {post.category && (
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border mb-5 ${getCategoryColor(post.category)}`}
                >
                  {post.category}
                </span>
              )}

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 font-medium">
                {post.authorName && (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold backdrop-blur-md">
                      {post.authorName.charAt(0)}
                    </div>
                    <span>{post.authorName}</span>
                  </div>
                )}
                {post.publishedAt && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-white/40"></span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. ARTICLE BODY
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 py-16 md:py-20">
        <FadeInUp>
          <article className="max-w-[800px] mx-auto bg-white rounded-[2.5rem] border border-black/5 shadow-[0_15px_50px_rgba(0,0,0,0.04)] p-8 md:p-14 lg:p-16">
            {post.content ? (
              <div
                className="prose prose-lg prose-slate max-w-none
                  prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-slate-900
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:leading-relaxed prose-p:text-slate-600
                  prose-a:text-[#008ba3] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-800
                  prose-img:rounded-2xl prose-img:shadow-lg
                  prose-blockquote:border-[#008ba3] prose-blockquote:bg-[#008ba3]/5 prose-blockquote:rounded-r-2xl prose-blockquote:py-1
                  prose-code:text-[#008ba3] prose-code:bg-[#008ba3]/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-medium
                  prose-pre:bg-[#0f172a] prose-pre:rounded-2xl
                  prose-li:text-slate-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#008ba3]/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-7 h-7 text-[#008ba3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                </div>
                <p className="text-slate-500 font-medium">
                  Article content coming soon.
                </p>
              </div>
            )}
          </article>
        </FadeInUp>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. SHARE BAR
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 pb-16 max-w-[800px] mx-auto">
        <FadeInUp>
          <div className="flex items-center justify-center gap-4 py-8 border-y border-black/5">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mr-2">
              Share
            </span>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:shadow-md transition-all"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-slate-400 hover:text-black hover:border-black/20 hover:shadow-md transition-all"
              aria-label="Share on X"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Copy link (visual only — would need client JS for clipboard) */}
            <button
              className="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-slate-400 hover:text-[#008ba3] hover:border-[#008ba3]/30 hover:shadow-md transition-all"
              aria-label="Copy link"
              title="Copy link"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-3.124a4.5 4.5 0 0 0-1.242-7.244l-4.5-4.5a4.5 4.5 0 0 0-6.364 6.364L4.34 8.374"
                />
              </svg>
            </button>
          </div>
        </FadeInUp>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. RELATED POSTS
      ══════════════════════════════════════════════════════ */}
      {relatedPosts.length > 0 && (
        <section className="relative z-10 px-6 pb-24 max-w-[1200px] mx-auto">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight mb-4">
              Related Posts
            </h2>
            <div className="w-20 h-1.5 bg-[#008ba3] mx-auto rounded-full"></div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((rp) => (
              <StaggerItem key={rp.id}>
                <Link
                  href={`/research/blogs-articles-news/${rp.slug}`}
                  className="group block h-full"
                >
                  <article className="bg-white rounded-[2rem] border border-black/5 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,139,163,0.08)] transition-all duration-300 h-full flex flex-col hover:-translate-y-2">
                    {/* Cover */}
                    {rp.coverImageUrl ? (
                      <div className="relative h-[180px] overflow-hidden">
                        <Image
                          src={rp.coverImageUrl}
                          alt={rp.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ) : (
                      <div className="h-[180px] bg-gradient-to-br from-[#008ba3]/10 to-[#00bcd4]/5 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-[#008ba3]/30"
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
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#008ba3] transition-colors flex-1">
                        {rp.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {formatDate(rp.publishedAt)}
                      </p>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          5. NEWSLETTER CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 pb-32 max-w-[1200px] mx-auto">
        <FadeInUp>
          <div className="bg-white/80 backdrop-blur-3xl border border-black/5 shadow-[0_30px_80px_rgba(0,0,0,0.05)] rounded-[3rem] p-16 md:p-24 relative overflow-hidden group text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#008ba3]/5 rounded-full blur-[80px] group-hover:bg-[#008ba3]/10 transition-colors duration-700 pointer-events-none"></div>

            <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 mb-6 tracking-tight relative z-10">
              Enjoyed the{" "}
              <span className="bg-gradient-to-r from-[#008ba3] to-[#00bcd4] bg-clip-text text-transparent">
                Read
              </span>
              ?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 relative z-10 font-medium">
              Subscribe to get notified about new articles, research papers, and
              engineering insights.
            </p>
            <Link
              href="/contact-us"
              className="relative z-10 bg-slate-900 text-white px-10 py-5 font-bold text-lg rounded-full uppercase tracking-widest hover:bg-[#008ba3] hover:shadow-[0_10px_30px_rgba(0,188,212,0.3)] hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </FadeInUp>
      </section>
    </div>
  );
}
