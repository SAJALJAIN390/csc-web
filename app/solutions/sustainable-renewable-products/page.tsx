'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../../components/MotionWrappers';

export default function SustainableProductsPage() {
  const content = {
    title: 'Sustainable & Renewable Products',
    tagline: 'Eco-Conscious Engineering',
    overview: 'At The Correct Steps, we believe that innovation and sustainability must go hand-in-hand. We design and develop environmentally responsible products focusing on efficiency, durability, and minimal environmental impact. Our approach bridges the gap between high-performance engineering and ecological stewardship.',
    capabilities: [
      {
        title: 'Sustainable Material Selection',
        desc: 'Identifying and implementing biodegradable, recyclable, or low-carbon footprint materials for industrial products.',
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
      },
      {
        title: 'Energy-Efficient Design',
        desc: 'Optimizing product architecture to reduce power consumption during manufacturing and operational phases.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
      },
      {
        title: 'Lifecycle Analysis',
        desc: 'Comprehensive optimization of the product lifecycle—from raw material extraction to end-of-life recycling.',
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
      },
      {
        title: 'Waste Reduction',
        desc: 'Implementing lean engineering principles to minimize material waste and improve resource utilization efficiency.',
        icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
      }
    ],
    applications: [
      'Eco-friendly consumer products',
      'Renewable energy systems',
      'Smart energy-efficient devices',
      'Circular economy packaging',
      'Green manufacturing equipment'
    ],
    image: '/assets/solutions/sustainable.png'
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
                Discuss Project
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
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight mb-4">Core Capabilities</h2>
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
              Industries <br/> <span className="text-[#008ba3]">We Serve</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Our sustainable engineering solutions are adaptable across a wide range of industrial and consumer sectors, helping businesses reduce their environmental footprint while maintaining peak performance.
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
