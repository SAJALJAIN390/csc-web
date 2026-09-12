import Image from 'next/image';
import Link from 'next/link';
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../../components/MotionWrappers';
import { getResearchPapers, deriveStats } from '@/lib/cms';
import CategoryFilter from './CategoryFilter';

/* ──────────────────────────────────────────────────────────
   ISR: Re-fetch CMS data every 60 seconds
   ────────────────────────────────────────────────────────── */
export const revalidate = 60;

export default async function ResearchPapersPage() {
  /* ── Fetch from CMS ── */
  const papers = await getResearchPapers();
  const stats = deriveStats(papers);

  /* ── Derive unique categories from the data ── */
  const uniqueFields = Array.from(
    new Set(
      papers
        .map((p) => p.field)
        .filter((f): f is string => f !== null && f.trim() !== '')
    )
  );
  const categories = ['All', ...uniqueFields];

  /* ── Build stats display ── */
  const STATS = [
    {
      value: stats.publishedPapers > 0 ? `${stats.publishedPapers}+` : '0',
      label: 'Published Papers',
    },
    {
      value: String(stats.patentsFiled),
      label: 'Patents Filed',
    },
    {
      value: stats.totalPapers > 0 ? `${Math.max(stats.totalPapers, 1)}+` : '—',
      label: 'Total Publications',
    },
    {
      value: stats.activeYears,
      label: 'Active Research Years',
    },
  ];

  return (
    <div className="relative bg-[#f9fafb] text-slate-800 min-h-screen overflow-hidden">

      {/* ── Background Gradients ── */}
      <div className="fixed top-[10%] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,188,212,0.15)_0%,transparent_70%)] blur-[100px] z-0 pointer-events-none"></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(0,139,163,0.10)_0%,transparent_70%)] blur-[140px] z-0 pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[-200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,188,212,0.12)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none"></div>

      {/* ══════════════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative pt-[160px] pb-24 px-6 z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideInLeft>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#008ba3]/20 shadow-sm text-sm font-bold text-[#008ba3] tracking-widest uppercase mb-6">
              Research &amp; Innovation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-slate-900 leading-[1.1] mb-8">
              Research <span className="bg-gradient-to-r from-[#008ba3] to-[#00bcd4] bg-clip-text text-transparent">Papers</span> &amp; Patents
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium mb-10 max-w-xl">
              Explore our published research contributions spanning robotics, sustainable design, computational physics, and advanced manufacturing. Each paper reflects our commitment to bridging academic rigor with industrial application.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-us" className="bg-[#008ba3] text-white px-8 py-4 font-bold rounded-full uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(0,188,212,0.3)] hover:-translate-y-1 transition-all duration-300">
                Collaborate With Us
              </Link>
              <Link href="/research/blogs-articles-news" className="bg-white/60 backdrop-blur-md border border-slate-200 text-slate-800 px-8 py-4 font-bold rounded-full uppercase tracking-widest hover:bg-white hover:border-[#008ba3]/30 hover:-translate-y-1 transition-all duration-300">
                Read Blog
              </Link>
            </div>
          </SlideInLeft>

          <SlideInRight className="relative group lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#008ba3]/20 to-transparent rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative w-full h-[350px] lg:h-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl z-10">
              <Image src="/assets/research/papers-hero.png" alt="Research Papers" fill className="object-cover transition-transform duration-[10s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
            </div>
          </SlideInRight>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. STATS BAR (derived from CMS data)
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 border-y border-black/5 bg-white/40 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-[#008ba3] mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3 & 4. CATEGORY FILTER + PAPERS LIST (Client Component)
      ══════════════════════════════════════════════════════ */}
      <CategoryFilter papers={papers} categories={categories} />

      {/* ══════════════════════════════════════════════════════
          5. CTA SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 pb-32 max-w-[1200px] mx-auto">
        <FadeInUp>
          <div className="bg-white/80 backdrop-blur-3xl border border-black/5 shadow-[0_30px_80px_rgba(0,0,0,0.05)] rounded-[3rem] p-16 md:p-24 relative overflow-hidden group text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#008ba3]/5 rounded-full blur-[80px] group-hover:bg-[#008ba3]/10 transition-colors duration-700 pointer-events-none"></div>
            
            <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 mb-6 tracking-tight relative z-10">
              Interested in <span className="bg-gradient-to-r from-[#008ba3] to-[#00bcd4] bg-clip-text text-transparent">Research Collaboration</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 relative z-10 font-medium">
              We are always looking for academic and industry partners to advance the boundaries of engineering research.
            </p>
            <Link href="/contact-us" className="relative z-10 bg-slate-900 text-white px-10 py-5 font-bold text-lg rounded-full uppercase tracking-widest hover:bg-[#008ba3] hover:shadow-[0_10px_30px_rgba(0,188,212,0.3)] hover:-translate-y-1 transition-all duration-300 inline-block">
              Get In Touch
            </Link>
          </div>
        </FadeInUp>
      </section>

    </div>
  );
}
