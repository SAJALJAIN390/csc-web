'use client';

import { useState } from 'react';
import type { ResearchPaper } from '@/lib/cms';
import { FadeInUp, StaggerContainer, StaggerItem } from '../../components/MotionWrappers';

interface CategoryFilterProps {
  papers: ResearchPaper[];
  categories: string[];
}

export default function CategoryFilter({ papers, categories }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPapers =
    activeCategory === 'All'
      ? papers
      : papers.filter(
          (p) => p.field?.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <>
      {/* ── Category Filter Buttons ── */}
      <section className="relative z-10 pt-24 pb-8 px-6 max-w-[1200px] mx-auto">
        <FadeInUp className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight mb-4">
            Browse Publications
          </h2>
          <div className="w-20 h-1.5 bg-[#008ba3] mx-auto rounded-full mb-8"></div>
        </FadeInUp>

        <FadeInUp>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-[#008ba3] text-white border-[#008ba3] shadow-[0_4px_15px_rgba(0,139,163,0.3)]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#008ba3]/40 hover:text-[#008ba3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeInUp>
      </section>

      {/* ── Filtered Papers List ── */}
      <section className="relative z-10 pb-24 px-6 max-w-[1200px] mx-auto">
        {filteredPapers.length === 0 ? (
          <FadeInUp>
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-[#008ba3]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#008ba3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No papers found</h3>
              <p className="text-slate-500 font-medium">
                {activeCategory === 'All'
                  ? 'Research papers will appear here once published in the CMS.'
                  : `No papers found in the "${activeCategory}" category yet.`}
              </p>
            </div>
          </FadeInUp>
        ) : (
          <StaggerContainer key={activeCategory} className="space-y-6">
            {filteredPapers.map((paper, index) => (
              <StaggerItem key={paper.id}>
                <article className="bg-white rounded-[2rem] border border-black/5 p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,139,163,0.08)] transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">

                    {/* Left: Number badge */}
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#008ba3]/10 flex items-center justify-center border border-[#008ba3]/10 group-hover:bg-[#008ba3]/20 transition-colors">
                      <span className="text-lg font-black text-[#008ba3]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        {paper.field && (
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                              paper.field.toLowerCase() === 'patent'
                                ? 'bg-amber-50 text-amber-700 border border-amber-200'
                                : 'bg-[#008ba3]/10 text-[#008ba3] border border-[#008ba3]/15'
                            }`}
                          >
                            {paper.field}
                          </span>
                        )}
                        {paper.status && (
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                              paper.status === 'Published' || paper.status === 'Granted'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                : 'bg-orange-50 text-orange-700 border border-orange-200'
                            }`}
                          >
                            {paper.status}
                          </span>
                        )}
                        {paper.year && (
                          <span className="text-sm text-slate-400 font-medium">
                            {paper.year}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#008ba3] transition-colors leading-snug">
                        {paper.title}
                      </h3>

                      {paper.authors.length > 0 && (
                        <p className="text-slate-500 font-medium text-sm mb-4">
                          {paper.authors.join(', ')}
                        </p>
                      )}

                      {paper.summary && (
                        <p className="text-slate-600 leading-relaxed mb-6 line-clamp-2">
                          {paper.summary}
                        </p>
                      )}

                      <div className="flex items-center gap-4">
                        {paper.paperLink && (
                          <a
                            href={paper.paperLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#008ba3] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all"
                          >
                            Read Paper
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </a>
                        )}
                        {paper.pdfUrl && (
                          <a
                            href={paper.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-500 font-bold text-sm uppercase tracking-wider hover:text-[#008ba3] hover:gap-3 transition-all"
                          >
                            Download PDF
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                          </a>
                        )}
                        {!paper.paperLink && !paper.pdfUrl && (
                          <span className="text-sm text-slate-400 italic">
                            Link coming soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </section>
    </>
  );
}
