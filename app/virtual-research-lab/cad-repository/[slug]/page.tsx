import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCadModelBySlug, getCadModels } from '@/lib/cms';
import ModelViewer from './ModelViewer';

export const revalidate = 60;

/* ── Generate static params for known slugs ── */
export async function generateStaticParams() {
  const models = await getCadModels();
  return models.map((model) => ({ slug: model.slug }));
}

/* ── Dynamic metadata ── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = await getCadModelBySlug(slug);
  if (!model) return { title: 'Model Not Found' };

  return {
    title: `${model.title} | CAD Repository | The Correct Steps`,
    description: model.description || `Explore the 3D CAD model "${model.title}" in our interactive viewer.`,
  };
}

export default async function CadModelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = await getCadModelBySlug(slug);

  if (!model) notFound();

  return (
    <div className="vrl-page">
      {/* ── Background effects ── */}
      <div
        className="fixed top-1/3 left-[-200px] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ background: 'rgba(0,212,255,0.06)' }}
      />
      <div
        className="fixed bottom-1/4 right-[-200px] w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none z-0"
        style={{ background: 'rgba(123,97,255,0.05)' }}
      />

      {/* ── Header ── */}
      <section className="relative z-10 pt-32 pb-8 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Back link */}
          <Link
            href="/virtual-research-lab/cad-repository"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase mb-8 transition-colors duration-300"
            style={{ color: 'var(--vrl-text-muted)' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Repository
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              {model.category && (
                <span
                  className="inline-block px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest mb-4 font-heading"
                  style={{
                    background: 'rgba(0,212,255,0.15)',
                    color: 'var(--vrl-neon-blue)',
                    border: '1px solid rgba(0,212,255,0.3)',
                  }}
                >
                  {model.category}
                </span>
              )}

              <h1 className="section-heading" style={{ color: 'var(--vrl-text)' }}>
                {model.title}
              </h1>

              {model.description && (
                <p
                  className="text-lg mt-4 max-w-2xl font-body"
                  style={{ color: 'var(--vrl-text-muted)' }}
                >
                  {model.description}
                </p>
              )}
            </div>

            {/* Download button */}
            {model.modelFileUrl && (
              <a
                href={model.modelFileUrl}
                download
                className="btn-neon inline-flex items-center gap-2 self-start shrink-0"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Model
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── 3D Viewer ── */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-[1200px] mx-auto">
          <div
            className="glass-panel overflow-hidden"
            style={{ borderRadius: '16px' }}
          >
            {model.modelFileUrl ? (
              <ModelViewer
                modelUrl={model.modelFileUrl}
                title={model.title}
              />
            ) : (
              <div
                className="flex flex-col items-center justify-center py-32"
                style={{ background: 'rgba(0,212,255,0.03)' }}
              >
                <svg
                  className="w-16 h-16 mb-6"
                  style={{ color: 'rgba(0,212,255,0.2)' }}
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
                <p className="font-heading text-sm" style={{ color: 'var(--vrl-text-muted)' }}>
                  3D model file not available yet.
                </p>
              </div>
            )}
          </div>

          {/* ── Controls hint ── */}
          {model.modelFileUrl && (
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {[
                { icon: '🖱️', action: 'Left Click + Drag', label: 'Rotate' },
                { icon: '⚙️', action: 'Scroll', label: 'Zoom' },
                { icon: '🖱️', action: 'Right Click + Drag', label: 'Pan' },
              ].map((hint) => (
                <div key={hint.label} className="flex items-center gap-3">
                  <span className="text-lg">{hint.icon}</span>
                  <div>
                    <p className="text-xs font-bold font-heading" style={{ color: 'var(--vrl-text)' }}>
                      {hint.action}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest font-heading" style={{ color: 'var(--vrl-text-muted)' }}>
                      {hint.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
