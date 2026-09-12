'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FadeInUp,
  ScaleIn,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from './components/MotionWrappers';

/* ── Assets ────────────────────────────────────────────────── */
const HERO_IMG  = '/assets/hero.png';
const HERO2_IMG = '/assets/hero2.png';
const CFD_IMG     = '/assets/cfd.png';
const LIGHT_IMG   = '/assets/light.png';
const THERMAL_IMG = '/assets/thermal.png';
const VIBE_IMG    = '/assets/vibe.png';
const DEFENSE_IMG    = '/assets/def.png';
const INDUSTRIAL_IMG = '/assets/ind.png';
const MECHANICAL_IMG = '/assets/mech.png';

/* ── Data ──────────────────────────────────────────────────── */
const HERO_SLIDES = [
  {
    image: HERO_IMG,
    tagline: 'Problem Solving Robotics & Automation',
    headline: (<>Engineering Answers for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008ba3] to-[#00bcd4]">Industrial & <br /> Defense</span> Issues</>),
    subtitle: 'We provide mission-critical robotics and automation solutions through advanced CAD, Crash & Impact dynamics, and biomechanical principles.',
    cta1: { label: 'Start Project', href: '/contact-us' },
    cta2: { label: 'Our Methodology', href: '/solutions' },
  },
  {
    image: HERO2_IMG,
    tagline: 'Research-Driven Prototyping',
    headline: (<>From Concept to Reality Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008ba3] to-[#00bcd4]">Precision Engineering</span></>),
    subtitle: 'Leverage 3D printing, advanced simulation, and physics-driven design to bring your ideas to life with uncompromising quality.',
    cta1: { label: 'Explore Solutions', href: '/solutions' },
    cta2: { label: 'View Research', href: '/research/virtual-research-lab' },
  },
];

const SOLUTIONS = [
  { image: CFD_IMG,     title: 'Problem-Solving Robotics',      desc: 'Tailored robotic systems for complex industrial challenges.' },
  { image: LIGHT_IMG,   title: 'Automation Solutions',           desc: 'End-to-end automation pipelines for manufacturing.' },
  { image: THERMAL_IMG, title: 'FEM & Structural Analysis',     desc: 'Virtual testing for structural integrity & performance.' },
  { image: VIBE_IMG,    title: 'Crash & Impact Simulation',     desc: 'High-fidelity crash dynamics for defense & automotive.' },
];

const SPECIALIZATIONS = [
  { title: 'Structural Integrity', icon: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9', number: '01' },
  { title: 'Sensing Systems',      icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z', number: '02' },
  { title: 'Thermal Analysis',     icon: 'M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z', number: '03' },
];

const TECH_STACK = [
  { title: 'Biomechanics',    icon: 'M19.5 8.25l-7.5 7.5-7.5-7.5' },
  { title: 'Flexure Joints',  icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z' },
  { title: 'Advanced CAD',    icon: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9' },
  { title: 'Micro Robotics',  icon: 'M8.25 14.25h7.5M8.25 9.75h7.5M10.5 18.75h3M2.25 8.25v7.5M21.75 8.25v7.5M6 18.75V5.25A2.25 2.25 0 018.25 3h7.5A2.25 2.25 0 0118 5.25v13.5A2.25 2.25 0 0115.75 21h-7.5A2.25 2.25 0 016 18.75z' },
];

const IMPACT_CARDS = [
  { image: DEFENSE_IMG,    title: 'Defense Infrastructure', desc: 'Validating structural integrity against crash scenarios.' },
  { image: INDUSTRIAL_IMG, title: 'Industrial Automation',  desc: 'Custom end effectors to solve throughput issues.' },
  { image: MECHANICAL_IMG, title: 'Mechanical Specs',       desc: 'Flexure joints for next-generation robotic systems.' },
];

const RECENT_APPS = [
  { image: THERMAL_IMG, alt: 'Thermal CFD Analysis' },
  { image: CFD_IMG,     alt: 'Gas Turbine Simulation' },
  { image: VIBE_IMG,    alt: 'Vibration Analysis' },
];

/* ── Page ──────────────────────────────────────────────────── */
export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative bg-[#f9fafb] text-slate-800 overflow-hidden">

      {/* ── Background Gradients ── */}
      <div className="fixed top-[10%] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,188,212,0.08)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none"></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(0,139,163,0.05)_0%,transparent_70%)] blur-[140px] z-0 pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[-200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,188,212,0.08)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none"></div>

      {/* ══════════════════════════════════════════════════════
          1. HERO SLIDER
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100vh] flex items-start md:items-center z-10 pt-[var(--nav-height)] md:pt-0">
        {/* Slide images */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={slide.image} alt={slide.tagline} fill priority={idx === 0} className="object-cover object-right-top" />
          </div>
        ))}

        {/* Overlay — softer so the image shows through */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 sm:from-white/80 sm:via-white/50  to-transparent z-[1]"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#f9fafb]/40 via-transparent to-transparent z-[1]"></div> */}

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-0 grid grid-cols-1 grid-rows-1">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`col-start-1 row-start-1 max-w-3xl lg:max-w-4xl sm:max-w-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${idx === currentSlide ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 pointer-events-none z-0'}`}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/80 border border-[#008ba3]/20 shadow-sm text-sm font-bold text-[#008ba3] tracking-widest uppercase mb-6 backdrop-blur-md">
                {slide.tagline}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-slate-900 leading-[1.05] mb-6">
                {slide.headline}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-10 max-w-xl">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={slide.cta1.href} className="bg-[#008ba3] text-white px-10 py-4 font-bold text-base rounded-full uppercase tracking-widest shadow-[0_4px_15px_rgba(0,139,163,0.3)] hover:shadow-[0_10px_30px_rgba(0,188,212,0.4)] hover:-translate-y-1 transition-all duration-300">
                  {slide.cta1.label}
                </Link>
                <Link href={slide.cta2.href} className="bg-white/60 backdrop-blur-md border border-slate-200 text-slate-800 px-10 py-4 font-bold text-base rounded-full uppercase tracking-widest hover:bg-white hover:border-[#008ba3]/30 hover:-translate-y-1 transition-all duration-300">
                  {slide.cta2.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${idx === currentSlide ? 'w-10 bg-[#008ba3]' : 'w-6 bg-slate-300 hover:bg-slate-400'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. CORE SOLUTIONS — Premium image cards
      ══════════════════════════════════════════════════════ */}
      <section className="mx-auto px-6 max-w-[1400px] relative z-10 py-24 md:py-32">
        <FadeInUp className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#008ba3]/20 shadow-sm text-sm font-bold text-[#008ba3] tracking-widest uppercase mb-6">
            What We Solve
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight">
            Core Automation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008ba3] to-[#00bcd4]">Robotic Solutions</span>
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="group bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,139,163,0.12)] hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="relative h-[220px] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 pb-8">
                  <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. SPECIALIZATIONS — Numbered pillar cards
      ══════════════════════════════════════════════════════ */}
      <section className="mx-auto px-6 max-w-[1200px] relative z-10 pb-24 md:pb-32">
        <FadeInUp>
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight shrink-0"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008ba3] to-[#00bcd4]">Specializations</span></h2>
            <div className="h-[2px] w-full bg-gradient-to-r from-[#008ba3]/20 to-transparent max-w-[300px]"></div>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIALIZATIONS.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white rounded-[2rem] p-8 pb-12 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:shadow-[0_15px_40px_rgba(0,188,212,0.1)] transition-all h-full flex flex-col hover:-translate-y-2 duration-300">
                <div className="absolute -right-4 -top-8 text-[120px] font-black text-slate-50 opacity-60 group-hover:text-[#008ba3]/5 transition-colors duration-500 pointer-events-none select-none">
                  {item.number}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#008ba3]/10 to-[#008ba3]/5 rounded-2xl flex items-center justify-center mb-6 border border-[#008ba3]/10 group-hover:scale-110 group-hover:bg-[#008ba3]/10 transition-all">
                  <svg className="w-8 h-8 text-[#008ba3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight relative z-10">{item.title}</h3>
                <div className="w-12 h-1.5 mt-auto rounded-full bg-[#008ba3]/20 group-hover:w-full transition-all duration-500 group-hover:bg-[#008ba3]"></div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. ENGINEERING FOR IMPACT — Showcase cards
      ══════════════════════════════════════════════════════ */}
      <section className="mx-auto px-6 max-w-[1400px] relative z-10 pb-24 md:pb-32">
        <FadeInUp className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#008ba3]/20 shadow-sm text-sm font-bold text-[#008ba3] tracking-widest uppercase mb-6">
            Impact
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight">Engineering for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008ba3] to-[#00bcd4]">Impact</span></h2>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg font-medium">Delivering real-world solutions across defense, industry, and next-gen mechanical systems.</p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {IMPACT_CARDS.map((card, idx) => (
            <StaggerItem key={idx}>
              <div className="group bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,139,163,0.15)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-[250px] overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide mb-3">{card.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-1">{card.desc}</p>
                  <Link href="/solutions" className="inline-flex items-center gap-2 bg-[#008ba3] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:shadow-[0_5px_15px_rgba(0,188,212,0.3)] hover:-translate-y-0.5 transition-all duration-300 self-start">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. TECH STACK — Horizontal timeline
      ══════════════════════════════════════════════════════ */}
      <section className="mx-auto px-6 max-w-[1200px] relative z-10 pb-24 md:pb-32">
        <FadeInUp>
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight shrink-0">Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008ba3] to-[#00bcd4]">Stack</span></h2>
            <div className="h-[2px] w-full bg-gradient-to-r from-[#008ba3]/20 to-transparent max-w-[300px]"></div>
          </div>
        </FadeInUp>

        <StaggerContainer className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TECH_STACK.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="flex flex-col items-center text-center relative z-10 group">
                  <div className="w-[88px] h-[88px] rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-4 shadow-[0_4px_15px_rgba(0,0,0,0.04)] group-hover:border-[#008ba3] group-hover:shadow-[0_8px_25px_rgba(0,139,163,0.15)] transition-all duration-300">
                    <svg className="w-9 h-9 text-slate-400 group-hover:text-[#008ba3] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-800 transition-colors">{item.title}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. RECENT APPLICATIONS — Gallery strip
      ══════════════════════════════════════════════════════ */}
      <section className="mx-auto px-6 max-w-[1200px] relative z-10 pb-24 md:pb-32">
        <FadeInUp>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight shrink-0">Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008ba3] to-[#00bcd4]">Applications</span></h2>
            <div className="h-[2px] w-full bg-gradient-to-r from-[#008ba3]/20 to-transparent max-w-[300px]"></div>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {RECENT_APPS.map((app, idx) => (
            <StaggerItem key={idx}>
              <div className="group relative h-[260px] rounded-[2rem] overflow-hidden border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,139,163,0.12)] transition-all duration-300">
                <Image src={app.image} alt={app.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-sm uppercase tracking-widest">{app.alt}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp className="mt-8 flex justify-end">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-[#008ba3] font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all duration-300">
            View All Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </FadeInUp>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. CTA — Solve Your Technical Issues
      ══════════════════════════════════════════════════════ */}
      <section className="mx-auto px-6 max-w-[1200px] relative z-10 pb-24 md:pb-32">
        <FadeInUp>
          <div className="relative overflow-hidden rounded-[3rem] border border-[#008ba3]/15 bg-[linear-gradient(135deg,rgba(6,51,79,0.98),rgba(0,139,163,0.95))] px-8 py-16 md:py-24 text-center text-white shadow-[0_26px_70px_rgba(6,51,79,0.28)]">
            <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#00bcd4]/10 rounded-full blur-[60px] pointer-events-none"></div>

            <p className="relative text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100 mb-5">
              Engineering Excellence
            </p>
            <h2 className="relative text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              Solve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80deea] to-[#00bcd4]">Technical Issues</span>
            </h2>
            <p className="relative mx-auto max-w-2xl text-base leading-8 text-slate-100 sm:text-lg mb-10">
              Our approach combines fundamental physics with advanced robotics to provide the correct steps for industrial automation.
            </p>
            <div id="consult" className="relative flex flex-wrap justify-center gap-4">
              <Link href="mailto:contact@thecorrectsteps.com" className="bg-white text-slate-900 px-10 py-4 font-bold text-base rounded-full uppercase tracking-widest hover:bg-[#80deea] hover:shadow-[0_10px_30px_rgba(0,188,212,0.4)] hover:-translate-y-1 transition-all duration-300">
                Email Contact
              </Link>
              <Link href="/solutions" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 font-bold text-base rounded-full uppercase tracking-widest hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                Case Studies
              </Link>
            </div>
          </div>
        </FadeInUp>
      </section>
    </div>
  );
}
