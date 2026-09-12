'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { CadModel } from '@/lib/cms';

// ── Category color map ─────────────────────────────────────

const getCategoryColor = (cat: string) => {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    Robotics: { bg: 'rgba(123,97,255,0.15)', text: '#a78bfa', border: 'rgba(123,97,255,0.3)' },
    Aerospace: { bg: 'rgba(0,212,255,0.15)', text: '#00D4FF', border: 'rgba(0,212,255,0.3)' },
    Mechanical: { bg: 'rgba(0,255,163,0.15)', text: '#00FFA3', border: 'rgba(0,255,163,0.3)' },
    Automotive: { bg: 'rgba(255,170,0,0.15)', text: '#ffaa00', border: 'rgba(255,170,0,0.3)' },
  };
  return colors[cat] || { bg: 'rgba(0,212,255,0.1)', text: '#00D4FF', border: 'rgba(0,212,255,0.2)' };
};

// ── Props ──────────────────────────────────────────────────

interface GalleryGridProps {
  models: CadModel[];
  categories: string[];
}

export default function GalleryGrid({ models, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredModels =
    activeCategory === 'All'
      ? models
      : models.filter(
          (m) => m.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <>
      {/* ── Category Filter ── */}
      <section className="relative z-10 px-6 pb-12 max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-300 border font-heading"
              style={
                activeCategory === cat
                  ? {
                      background: 'var(--vrl-neon-blue)',
                      color: '#060d1a',
                      borderColor: 'var(--vrl-neon-blue)',
                      boxShadow: '0 0 20px rgba(0,212,255,0.3)',
                    }
                  : {
                      background: 'transparent',
                      color: 'var(--vrl-text-muted)',
                      borderColor: 'var(--vrl-border)',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Models Grid ── */}
      <section className="relative z-10 pb-32 px-6 max-w-[1200px] mx-auto">
        {filteredModels.length === 0 ? (
          <div className="text-center py-20">
            <div
              className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid var(--vrl-border)' }}
            >
              <svg
                className="w-8 h-8"
                style={{ color: 'var(--vrl-neon-blue)' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2" style={{ color: 'var(--vrl-text)' }}>
              No models found
            </h3>
            <p className="font-body" style={{ color: 'var(--vrl-text-muted)' }}>
              {activeCategory === 'All'
                ? 'CAD models will appear here once added to the CMS.'
                : `No models found in the "${activeCategory}" category yet.`}
            </p>
          </div>
        ) : (
          <motion.div
            key={activeCategory}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredModels.map((model) => {
                const catColor = model.category ? getCategoryColor(model.category) : null;

                return (
                  <motion.div
                    key={model.id}
                    layout
                    variants={{
                      hidden: { opacity: 0, scale: 0.92, y: 20 },
                      visible: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.92, transition: { duration: 0.2 } },
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={`/virtual-research-lab/cad-repository/${model.slug}`}
                      className="group block h-full"
                    >
                      <article className="glass-panel-hover gradient-border overflow-hidden h-full flex flex-col">
                        {/* Thumbnail */}
                        <div className="relative h-[220px] overflow-hidden">
                          {model.thumbnailUrl ? (
                            <Image
                              src={model.thumbnailUrl}
                              alt={model.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          ) : (
                            <div
                              className="w-full h-full flex items-center justify-center"
                              style={{ background: 'rgba(0,212,255,0.05)' }}
                            >
                              <svg
                                className="w-16 h-16"
                                style={{ color: 'rgba(0,212,255,0.15)' }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={0.8}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                                />
                              </svg>
                            </div>
                          )}

                          {/* Hover overlay */}
                          <div
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: 'rgba(6,13,26,0.7)' }}
                          >
                            <div
                              className="px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest font-heading"
                              style={{
                                border: '1px solid var(--vrl-neon-blue)',
                                color: 'var(--vrl-neon-blue)',
                              }}
                            >
                              View 3D Model →
                            </div>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-6 flex flex-col flex-1">
                          {/* Category pill */}
                          {model.category && catColor && (
                            <span
                              className="inline-block w-fit px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest mb-4 font-heading"
                              style={{
                                background: catColor.bg,
                                color: catColor.text,
                                border: `1px solid ${catColor.border}`,
                              }}
                            >
                              {model.category}
                            </span>
                          )}

                          <h3
                            className="text-lg font-bold font-heading mb-2 transition-colors duration-300"
                            style={{ color: 'var(--vrl-text)' }}
                          >
                            {model.title}
                          </h3>

                          {model.description && (
                            <p
                              className="text-sm font-body line-clamp-2 leading-relaxed"
                              style={{ color: 'var(--vrl-text-muted)' }}
                            >
                              {model.description}
                            </p>
                          )}
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </>
  );
}
