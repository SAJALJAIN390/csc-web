'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../../components/MotionWrappers';

export default function ThreeDPrintingPage() {
  const content = {
    title: '3D Printing & Prototyping',
    tagline: 'Additive Manufacturing Excellence',
    overview: 'We transform digital designs into high-quality physical prototypes using advanced additive manufacturing technologies. Our rapid prototyping capabilities allow you to touch, test, and iterate on your designs within days, significantly accelerating the path from concept to production.',
    capabilities: [
      {
        title: 'Rapid Prototyping',
        desc: 'Quick turnaround of physical models using FDM, SLA, and SLS technologies for immediate design feedback.',
        icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
      },
      {
        title: 'Functional Performance',
        desc: 'Printing with engineering-grade materials to create functional parts that can be tested in real-world conditions.',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
      },
      {
        title: 'Design Validation',
        desc: 'Verifying fit, form, and function through accurate physical representations of complex digital assemblies.',
        icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'
      },
      {
        title: 'Custom Production',
        desc: 'Low-volume manufacturing of custom parts with geometries that are impossible to achieve via traditional methods.',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
      }
    ],
    applications: [
      'Visual Design Models',
      'Functional Prototypes',
      'Custom Tooling & Jigs',
      'End-use spare parts',
      'Architectural scale models'
    ],
    image: '/assets/solutions/3dprint.png'
  };

  return (
    <div className="relative bg-[#f9fafb] text-slate-800 min-h-screen pt-[var(--nav-height)] overflow-hidden">
      
      {/* ── Background Gradients ── */}
      <div className="fixed top-[10%] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,188,212,0.15)_0%,transparent_70%)] blur-[100px] z-0 pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[-200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,139,163,0.12)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none"></div>

      {/* ── 1. Hero Section ── */}
      <section className="relative pt-16 pb-24 px-6 z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideInLeft>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#008ba3]/20 shadow-sm text-sm font-bold text-[#008ba3] tracking-widest uppercase mb-6">
              {content.tagline}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-slate-900 leading-[1.1] mb-8">
              {content.title.split('&').map((part, i) => (
                <span key={i}>
                  {i > 0 && <span className="text-[#008ba3]">&</span>}
                  {part}
                </span>
              ))}
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium mb-10 max-w-xl">
              {content.overview}
            </p>
            <div className="flex gap-4">
              <Link href="/contact-us" className="bg-[#008ba3] text-white px-8 py-4 font-bold rounded-full uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(0,188,212,0.3)] hover:-translate-y-1 transition-all duration-300">
                Start Printing
              </Link>
            </div>
          </SlideInLeft>

          <SlideInRight className="relative aspect-square md:aspect-video lg:aspect-square group lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#008ba3]/20 to-transparent rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl z-10">
              <Image src={content.image} alt={content.title} fill className="object-cover transition-transform duration-[10s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>
          </SlideInRight>
        </div>
      </section>

      {/* ── 2. Capabilities Grid ── */}
      <section className="relative z-10 py-24 px-6 bg-white/50 backdrop-blur-md border-y border-black/5">
        <div className="max-w-[1200px] mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight mb-4">Prototyping Focus</h2>
            <div className="w-20 h-1.5 bg-[#008ba3] mx-auto rounded-full"></div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.capabilities.map((cap, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-10 rounded-[2rem] border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,139,163,0.1)] transition-all duration-300 group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#008ba3]/10 flex items-center justify-center mb-6 border border-[#008ba3]/10 transition-transform group-hover:scale-110">
                    <svg className="w-7 h-7 text-[#008ba3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={cap.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{cap.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{cap.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── 3. Applications / Services ── */}
      <section className="relative z-10 py-32 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <SlideInLeft className="lg:col-span-5">
            <h2 className="text-4xl font-extrabold uppercase text-slate-900 tracking-tight leading-tight mb-6">
              Additive <br/> <span className="text-[#008ba3]">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              3D printing is no longer just for visual models; it is a critical tool for engineering validation, custom manufacturing, and rapid iteration in high-tech industries.
            </p>
          </SlideInLeft>

          <SlideInRight className="lg:col-span-7">
            <div className="flex flex-wrap gap-4">
              {content.applications.map((app, i) => (
                <div key={i} className="bg-white px-8 py-5 rounded-3xl border border-black/5 shadow-sm text-lg font-bold text-slate-700 hover:border-[#008ba3]/30 hover:shadow-[0_10px_30px_rgba(0,139,163,0.08)] transition-all cursor-default group">
                  <span className="text-[#008ba3] mr-3 group-hover:animate-pulse">●</span>
                  {app}
                </div>
              ))}
            </div>
          </SlideInRight>
        </div>
      </section>

    </div>
  );
}
