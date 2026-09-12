import Image from 'next/image';
import Link from 'next/link';
import { FadeInUp } from '../../components/MotionWrappers';
import { getBlogPosts } from '@/lib/cms';
import BlogGrid from './BlogGrid';
  
/* ──────────────────────────────────────────────────────────
   ISR: Re-fetch CMS data every 60 seconds
   ────────────────────────────────────────────────────────── */
export const revalidate = 60;

/* ── Category color helper (used by featured post) ── */
const getCategoryColor = (cat: string) => {
  const colors: Record<string, string> = {
    'Robotics': 'bg-violet-50 text-violet-700 border-violet-200',
    'Sustainability': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'CAD & CAE': 'bg-blue-50 text-blue-700 border-blue-200',
    '3D Printing': 'bg-orange-50 text-orange-700 border-orange-200',
    'AI & Simulation': 'bg-cyan-50 text-cyan-700 border-cyan-200',
    'News': 'bg-amber-50 text-amber-700 border-amber-200',
  };
  return colors[cat] || 'bg-[#008ba3]/10 text-[#008ba3] border-[#008ba3]/15';
};

function formatDate(iso: string | null): string {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

export default async function BlogsArticlesPage() {
  /* ── Fetch from CMS ── */
  const allPosts = await getBlogPosts();

  /* ── Split featured post from the rest ── */
  const featuredPost = allPosts.find((p) => p.isFeatured) || null;
  const remainingPosts = featuredPost
    ? allPosts.filter((p) => p.id !== featuredPost.id)
    : allPosts;

  /* ── Derive unique categories ── */
  const uniqueCategories = Array.from(
    new Set(
      allPosts
        .map((p) => p.category)
        .filter((c): c is string => c !== null && c.trim() !== '')
    )
  );
  const categories = ['All', ...uniqueCategories];

  return (
    <div className="relative bg-[#f9fafb] text-slate-800 min-h-screen overflow-hidden">

      {/* ── Background Gradients ── */}
      <div className="fixed top-[10%] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,188,212,0.15)_0%,transparent_70%)] blur-[100px] z-0 pointer-events-none"></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(0,139,163,0.10)_0%,transparent_70%)] blur-[140px] z-0 pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[-200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,188,212,0.12)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none"></div>

      {/* ══════════════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative pt-[160px] pb-24 px-6 z-10 text-center max-w-[1000px] mx-auto">
        <FadeInUp>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#008ba3]/20 shadow-sm text-sm font-bold text-[#008ba3] tracking-widest uppercase mb-6">
            Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-slate-900 leading-[1.1] mb-8">
            Blogs, Articles <span className="bg-gradient-to-r from-[#008ba3] to-[#00bcd4] bg-clip-text text-transparent">&amp; News</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Insights, technical deep-dives, and the latest news from the engineering world. Explore our thoughts on robotics, design, simulation, and innovation.
          </p>
        </FadeInUp>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. FEATURED POST
      ══════════════════════════════════════════════════════ */}
      {featuredPost && (
        <section className="relative z-10 px-6 pb-24 max-w-[1200px] mx-auto">
          <FadeInUp>
            <Link
              href={`/research/blogs-articles-news/${featuredPost.slug}`}
              className="group block bg-white rounded-[2.5rem] overflow-hidden border border-black/5 shadow-[0_15px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_70px_rgba(0,139,163,0.1)] transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-[300px] lg:h-[450px] overflow-hidden">
                  {featuredPost.coverImageUrl ? (
                    <Image
                      src={featuredPost.coverImageUrl}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-[8s]"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#008ba3]/20 to-[#00bcd4]/10 flex items-center justify-center">
                      <svg className="w-20 h-20 text-[#008ba3]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 0 0 2.25-2.25V5.25a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-white/20"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-[#008ba3] text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  {featuredPost.category && (
                    <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border mb-5 ${getCategoryColor(featuredPost.category)}`}>
                      {featuredPost.category}
                    </span>
                  )}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-5 group-hover:text-[#008ba3] transition-colors">
                    {featuredPost.title}
                  </h2>
                  {featuredPost.excerpt && (
                    <p className="text-slate-600 leading-relaxed font-medium mb-8 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-slate-400 font-medium">
                    {featuredPost.authorName && <span>{featuredPost.authorName}</span>}
                    {featuredPost.authorName && featuredPost.publishedAt && (
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    )}
                    {featuredPost.publishedAt && <span>{formatDate(featuredPost.publishedAt)}</span>}
                  </div>
                </div>
              </div>
            </Link>
          </FadeInUp>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          3 & 4. CATEGORY FILTER + BLOG GRID (Client Component)
      ══════════════════════════════════════════════════════ */}
      <BlogGrid posts={remainingPosts} categories={categories} />

      {/* ══════════════════════════════════════════════════════
          5. NEWSLETTER + CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 pb-32 max-w-[1200px] mx-auto">
        <FadeInUp>
          <div className="bg-gradient-to-br from-[#06334f] to-[#008ba3] rounded-[3rem] p-12 md:p-20 relative overflow-hidden group text-center">
            {/* Decorative elements */}
            <div className="absolute top-[-60px] right-[-60px] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-[-40px] left-[-40px] w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-5 tracking-tight">
                Stay <span className="text-[#80e5f2]">Updated</span>
              </h2>
              <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 font-medium">
                Subscribe to our newsletter to receive the latest engineering insights, research updates, and industry trends directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/15 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all backdrop-blur-md"
                />
                <button className="bg-white text-[#008ba3] px-8 py-4 font-bold rounded-full uppercase tracking-widest hover:bg-[#80e5f2] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

    </div>
  );
}
