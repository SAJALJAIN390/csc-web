'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from '../components/MotionWrappers';
import CareerForm from './form';
import hero from './assets/hero.png';

const WORK_AREAS = [
  {
    title: 'Product Design & Development',
    desc: 'Concept-to-production engineering for sustainable and high-performance products.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    title: 'Simulation & Analysis',
    desc: 'FEA, CFD, and multi-physics simulations that power real-world decisions.',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'Robotics & Automation',
    desc: 'Origami-inspired flexure systems and precision robotic mechanisms.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
  },
  {
    title: 'Research & Innovation',
    desc: 'Explore cutting-edge concepts and publish impactful engineering research.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: 'Marketing & Growth',
    desc: 'Drive visibility for engineering innovations through creative brand strategy.',
    icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
  },
];

const OPPORTUNITIES = [
  {
    title: 'Internships',
    desc: 'Hands-on experience with live industry projects.',
    accent: 'from-[#008ba3] to-[#00bcd4]',
  },
  {
    title: 'Full-time Roles',
    desc: 'Build a career at the forefront of engineering innovation.',
    accent: 'from-slate-800 to-slate-900',
  },
  {
    title: 'Research Collaborations',
    desc: 'Partner with us on cutting-edge academic and industrial research.',
    accent: 'from-[#004e5e] to-[#008ba3]',
  },
];

const WHY_JOIN = [
  {
    title: 'Live Industry Projects',
    desc: 'Work on real-world engineering challenges, not toy problems.',
    number: '01',
  },
  {
    title: 'Practical Exposure',
    desc: 'Gain hands-on skills in CAD, simulation, prototyping, and robotics.',
    number: '02',
  },
  {
    title: 'Expert Collaboration',
    desc: 'Learn alongside seasoned engineers and researchers.',
    number: '03',
  },
  {
    title: 'Flexible & Remote',
    desc: 'Work from anywhere with a schedule that respects your life.',
    number: '04',
  },
];

export default function CareersPage() {
  return (
    <div className="relative bg-[#f9fafb] text-slate-800 pb-32 overflow-hidden">

      {/* ── Background Gradients ── */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,188,212,0.06)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none"></div>

      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,139,163,0.05)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none"></div>

      {/* ══════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-end z-10">

        <Image
          src={hero}
          alt="Team collaboration"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20"></div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pb-16 md:pb-24">

          <FadeInUp>

            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-bold text-cyan-200 tracking-widest uppercase mb-6">
              We&apos;re Hiring
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.05] mb-6 max-w-3xl">
              Build Your Career <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-[#80deea]">
                With Innovation
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed font-medium mb-10">
              Join a team that works at the intersection of engineering, research, and product development. Apply now and become part of the future.
            </p>

            <div className="flex flex-wrap gap-4">

              {/* UPDATED */}
              <Link
                href="#career-form"
                className="bg-gradient-to-r from-[#008ba3] to-[#00bcd4] text-white px-10 py-4 font-bold text-base rounded-full uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(0,188,212,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                Apply Now
              </Link>

              <a
                href="#work-areas"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 font-bold text-base rounded-full uppercase tracking-widest hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                Explore Roles
              </a>

            </div>

          </FadeInUp>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. WORK AREAS
      ══════════════════════════════════════════════════════════ */}
      <section
        id="work-areas"
        className="mx-auto px-6 max-w-[1200px] relative z-10 mt-24 md:mt-32"
      >

        <FadeInUp className="text-center mb-16">

          <h2 className="text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight">
            Work Areas
          </h2>

          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg font-medium">
            We operate across core engineering and creative disciplines—find the domain where your skills make the most impact.
          </p>

        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {WORK_AREAS.map((area, idx) => (

            <StaggerItem key={idx}>

              <div className="bg-white/60 backdrop-blur-xl border border-black/5 p-10 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,139,163,0.12)] hover:-translate-y-2 transition-all duration-300 group h-full">

                <div className="w-14 h-14 bg-gradient-to-br from-[#008ba3]/10 to-[#008ba3]/5 rounded-2xl flex items-center justify-center mb-8 border border-[#008ba3]/10 group-hover:scale-110 group-hover:bg-[#008ba3]/10 transition-all">

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
                      d={area.icon}
                    />
                  </svg>

                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {area.title}
                </h3>

                <p className="text-slate-600 leading-relaxed font-medium">
                  {area.desc}
                </p>

              </div>

            </StaggerItem>

          ))}

        </StaggerContainer>

      </section>

      {/* ══════════════════════════════════════════════════════════
          3. OPPORTUNITIES
      ══════════════════════════════════════════════════════════ */}
      <section className="mx-auto px-6 max-w-[1200px] relative z-10 mt-32 md:mt-48">

        <FadeInUp>

          <div className="flex items-center gap-6 mb-12">

            <h2 className="text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight shrink-0">
              Opportunities
            </h2>

            <div className="h-[2px] w-full bg-gradient-to-r from-[#008ba3]/20 to-transparent max-w-[300px]"></div>

          </div>

        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {OPPORTUNITIES.map((opp, idx) => (

            <StaggerItem key={idx}>

              <div
                className={`relative bg-gradient-to-br ${opp.accent} rounded-[2rem] p-10 md:p-12 min-h-[280px] flex flex-col justify-end overflow-hidden group shadow-xl`}
              >

                <div className="absolute top-[-40px] right-[-40px] w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <span className="absolute top-6 right-8 text-[100px] font-black text-white/5 leading-none select-none pointer-events-none">
                  0{idx + 1}
                </span>

                <h3 className="text-3xl font-black text-white mb-3 relative z-10">
                  {opp.title}
                </h3>

                <p className="text-white/80 text-lg font-medium leading-relaxed relative z-10">
                  {opp.desc}
                </p>

              </div>

            </StaggerItem>

          ))}

        </StaggerContainer>

      </section>

      {/* ══════════════════════════════════════════════════════════
          4. WHY JOIN US
      ══════════════════════════════════════════════════════════ */}
      <section className="mx-auto px-6 max-w-[1200px] relative z-10 mt-32 md:mt-48">

        <FadeInUp>

          <h2 className="text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight mb-20 text-center">
            Why Join Us
          </h2>

        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">

          {WHY_JOIN.map((item, idx) => (

            <StaggerItem key={idx}>

              <div className="bg-white rounded-[2rem] p-8 pb-12 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:shadow-[0_15px_40px_rgba(0,188,212,0.1)] transition-all h-full flex flex-col justify-between hover:-translate-y-2 duration-300 text-left">

                <div className="absolute -right-4 -top-8 text-[120px] font-black text-slate-50 opacity-60 group-hover:text-[#008ba3]/5 transition-colors duration-500 pointer-events-none select-none">
                  {item.number}
                </div>

                <div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4 mt-16 relative z-10 uppercase tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 font-medium relative z-10 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

                <div className="w-12 h-1.5 mt-10 rounded-full bg-[#008ba3]/20 group-hover:w-full transition-all duration-500 group-hover:bg-[#008ba3]"></div>

              </div>

            </StaggerItem>

          ))}

        </StaggerContainer>

      </section>

      {/* ══════════════════════════════════════════════════════════
          5. CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="mx-auto px-6 max-w-[1200px] relative z-10 mt-32 md:mt-48 text-center">

        <FadeInUp>

          <div className="relative overflow-hidden rounded-[3rem] border border-[#008ba3]/15 bg-[linear-gradient(135deg,rgba(6,51,79,0.98),rgba(0,139,163,0.95))] px-8 py-16 md:py-24 text-white shadow-[0_26px_70px_rgba(6,51,79,0.28)]">

            <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>

            <p className="relative text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100 mb-5">
              Start Your Journey
            </p>

            <h2 className="relative text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              Let&apos;s collaborate and create <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80deea] to-[#00bcd4]">
                impactful solutions
              </span>{' '}
              together.
            </h2>

            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg mb-10">
              Whether you&apos;re a student, researcher, or professional—there&apos;s a place for you inside our innovation ecosystem.
            </p>

            {/* UPDATED */}
            <Link
              href="#career-form"
              className="relative inline-block bg-white text-slate-900 px-12 py-5 font-bold text-lg rounded-full uppercase tracking-widest hover:bg-[#80deea] hover:shadow-[0_10px_30px_rgba(0,188,212,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Apply Now
            </Link>

          </div>

        </FadeInUp>

      </section>

      {/* ══════════════════════════════════════════════════════════
          6. CAREER APPLICATION FORM
      ══════════════════════════════════════════════════════════ */}
      <section
        id="career-form"
        className="mx-auto px-6 max-w-[900px] relative z-10 mt-32 md:mt-48"
      >

        <FadeInUp>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-slate-100">

            <div className="text-center mb-10">

              <h2 className="text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight">
                Apply Now
              </h2>

              <p className="text-slate-500 mt-4 text-lg">
                Tell us about yourself and the role you&apos;re interested in.
              </p>

            </div>

            <CareerForm />

          </div>

        </FadeInUp>

      </section>

    </div>
  );
}
