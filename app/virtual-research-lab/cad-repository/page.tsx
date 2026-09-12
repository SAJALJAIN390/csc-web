import Image from 'next/image';
import Link from 'next/link';
import { getCadModels } from '@/lib/cms';
import type { Metadata } from 'next';
import GalleryGrid from './GalleryGrid';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'CAD Repository | Virtual Research Lab | The Correct Steps',
  description:
    'Explore our collection of 3D CAD models spanning robotics, aerospace, and mechanical engineering. Interact with models in real-time.',
};

export default async function CadRepositoryPage() {
  const models = await getCadModels();

  /* Derive unique categories from CMS data */
  const categories = [
    'All',
    ...Array.from(new Set(models.map((m) => m.category).filter(Boolean) as string[])),
  ];

  return (
    <div className="vrl-page">
      {/* ── Background effects ── */}
      <div
        className="fixed top-1/4 left-[-200px] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ background: 'rgba(0,212,255,0.06)' }}
      />
      <div
        className="fixed bottom-1/4 right-[-200px] w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none z-0"
        style={{ background: 'rgba(123,97,255,0.05)' }}
      />

      {/* ── Hero header ── */}
      <section className="relative z-10 pt-32 pb-16 px-6 grid-overlay">
        <div className="max-w-[1200px] mx-auto text-center">
          <Link
            href="/virtual-research-lab"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase mb-8"
            style={{ color: 'var(--vrl-text-muted)' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Lab
          </Link>

          <h1 className="section-heading mb-6">
            <span style={{ color: 'var(--vrl-neon-blue)' }}>CAD</span>{' '}
            <span style={{ color: 'var(--vrl-text)' }}>Repository</span>
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto font-body"
            style={{ color: 'var(--vrl-text-muted)' }}
          >
            Browse and interact with our collection of 3D design models. Click any model to
            explore it in an interactive 3D viewer.
          </p>
        </div>
      </section>

      {/* ── Gallery Grid (Client Component for filtering) ── */}
      <GalleryGrid models={models} categories={categories} />
    </div>
  );
}
