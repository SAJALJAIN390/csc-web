'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../../components/MotionWrappers';

export default function CadCaePage() {
  const content = {
    title: 'CAD & CAE',
    tagline: 'Digital Product Development',
    overview: 'We provide complete digital product development solutions, from conceptual 3D modeling to advanced engineering simulations. By creating high-fidelity digital twins, we help you validate performance, identify potential failures, and optimize designs before a single physical component is ever manufactured.',
    capabilities: [
      {
        title: 'High-Fidelity 3D Modeling',
        desc: 'Detailed assembly design and complex surfacing using industry-leading CAD platforms.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
      },
      {
        title: 'Finite Element Analysis (FEA)',
        desc: 'Simulating structural stress, vibration, and fatigue to ensure product reliability under operational conditions.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
      },
      {
        title: 'Fluid Dynamics (CFD)',
        desc: 'Computational modeling of liquid and gas flow to optimize aerodynamics, cooling, and pressure drops.',
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
      },
      {
        title: 'Thermal & Motion Simulation',
        desc: 'Analyzing heat distribution and complex multibody dynamics to refine mechanical performance.',
        icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z'
      }
    ],
    applications: [
      'Industrial Machinery Design',
      'Automotive Component Validation',
      'Aerospace structural analysis',
      'Electronics cooling systems',
      'Civil engineering simulations'
    ],
    image: '/assets/solutions/cad.png'
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
                Start Simulation
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
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight mb-4">Engineering Services</h2>
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
              Simulation <br/> <span className="text-[#008ba3]">Use Cases</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Our CAD & CAE services empower engineers to test boundaries and optimize designs within a risk-free digital environment, saving time and resources.
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

      {/* ── 4. Design & Simulations Introduction ── */}
      <section className="relative z-10 py-24 px-6 bg-white/50 backdrop-blur-md border-y border-black/5">
        <div className="max-w-[1000px] mx-auto text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight mb-4">
              Design <span className="text-[#008ba3]">&</span> Simulations
            </h2>
            <div className="w-20 h-1.5 bg-[#008ba3] mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
              At Correct Steps Consultancy, we pride ourselves on being at the forefront of computational simulation innovation. Our track record of successfully tackling complex challenges, coupled with our commitment to excellence, sets us apart. With our expertise and forward-thinking approach, we offer you a competitive advantage, enabling you to push boundaries and achieve remarkable results.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              Take the leap into the future of simulations. Contact us today to discuss how we can transform your projects with our cutting-edge computational simulation solutions. Together, we will unlock new possibilities and drive unprecedented success. Eliminate apprehension about costs, openly discuss your budget, and achieve outcomes on par with our consultancy through transparent pricing and tailored solutions.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ── 5. Project Portfolio ── */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeInUp className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight mb-4">
              Our <span className="text-[#008ba3]">Project Portfolio</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#008ba3] mx-auto rounded-full"></div>
          </FadeInUp>

          <div className="flex flex-col gap-24">
            {/* ─ Case Study 1 ─ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft>
                <div className="aspect-video rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-200 border border-black/5 shadow-sm flex items-center justify-center overflow-hidden">
                  {/* Replace with GIF: Mesh Convergence */}
                  <span className="text-sm text-slate-400 font-medium tracking-wider uppercase">GIF Placeholder — Mesh Convergence</span>
                </div>
              </SlideInLeft>
              <SlideInRight>
                <span className="inline-block px-3 py-1 rounded-full bg-[#008ba3]/10 text-[#008ba3] text-xs font-bold tracking-widest uppercase mb-4">01</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Study of Mesh Convergence Theory with the Aim of Correlating Automobile Frontal Impact</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">Achieve accurate simulations, optimize costs, and gain a competitive edge. Our mesh convergence study provides trustworthy outcomes, efficient resource allocation, tailored insights, and expert collaboration. Request our white paper report for comprehensive details.</p>
                <div className="flex flex-wrap gap-2">
                  {['Enhanced Accuracy', 'Cost Optimization', 'Improved Performance', 'Actionable Recommendations', 'Expertise and Collaboration'].map(b => (
                    <span key={b} className="px-3 py-1.5 rounded-full bg-white border border-[#008ba3]/20 text-xs font-bold text-[#008ba3] shadow-sm">{b}</span>
                  ))}
                </div>
              </SlideInRight>
            </div>

            {/* ─ Case Study 2 ─ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft className="order-2 lg:order-1">
                <span className="inline-block px-3 py-1 rounded-full bg-[#008ba3]/10 text-[#008ba3] text-xs font-bold tracking-widest uppercase mb-4">02</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Rear Underrun Protection Device</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">Save costs and time while ensuring safety with our computational simulation for Rear Underrun Protection Devices (RUPDs). By eliminating the need for extensive physical testing, our efficient design iterations accelerate time-to-market and deliver reliable safety assurance.</p>
                <div className="flex flex-wrap gap-2">
                  {['Substantial Cost Savings', 'Efficient Design Iterations', 'Reduced Physical Testing Expenses', 'Accelerated Time-to-Market', 'Enhanced Safety Assurance'].map(b => (
                    <span key={b} className="px-3 py-1.5 rounded-full bg-white border border-[#008ba3]/20 text-xs font-bold text-[#008ba3] shadow-sm">{b}</span>
                  ))}
                </div>
              </SlideInLeft>
              <SlideInRight className="order-1 lg:order-2">
                <div className="aspect-video rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-200 border border-black/5 shadow-sm flex items-center justify-center overflow-hidden">
                  <span className="text-sm text-slate-400 font-medium tracking-wider uppercase">GIF Placeholder — RUPD</span>
                </div>
              </SlideInRight>
            </div>

            {/* ─ Case Study 3 ─ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft>
                <div className="aspect-video rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-200 border border-black/5 shadow-sm flex items-center justify-center overflow-hidden">
                  <span className="text-sm text-slate-400 font-medium tracking-wider uppercase">GIF Placeholder — Wheel Impact</span>
                </div>
              </SlideInLeft>
              <SlideInRight>
                <span className="inline-block px-3 py-1 rounded-full bg-[#008ba3]/10 text-[#008ba3] text-xs font-bold tracking-widest uppercase mb-4">03</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Wheel Impact Test</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">Revolutionize your wheel impact testing process with our advanced computational simulation solutions. Experience precise impact analysis, significant cost savings, optimized designs, accelerated time-to-market, and enhanced performance assurance.</p>
                <div className="flex flex-wrap gap-2">
                  {['Accurate Impact Analysis', 'Cost-Efficient Testing', 'Design Optimization', 'Faster Time-to-Market', 'Enhanced Performance Assurance'].map(b => (
                    <span key={b} className="px-3 py-1.5 rounded-full bg-white border border-[#008ba3]/20 text-xs font-bold text-[#008ba3] shadow-sm">{b}</span>
                  ))}
                </div>
              </SlideInRight>
            </div>

            {/* ─ Case Study 4 ─ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft className="order-2 lg:order-1">
                <span className="inline-block px-3 py-1 rounded-full bg-[#008ba3]/10 text-[#008ba3] text-xs font-bold tracking-widest uppercase mb-4">04</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Prosthesis Upper Limb Analysis</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">Experience the power of computational simulation for comprehensive prosthesis analysis. With proven success in upper limb projects, we deliver precise evaluation, cost-efficiency, tailored design optimization, accelerated development, and enhanced user experience.</p>
                <div className="flex flex-wrap gap-2">
                  {['Precise Evaluation', 'Cost-Efficiency', 'Tailored Design Optimization', 'Accelerated Development', 'Enhanced User Experience'].map(b => (
                    <span key={b} className="px-3 py-1.5 rounded-full bg-white border border-[#008ba3]/20 text-xs font-bold text-[#008ba3] shadow-sm">{b}</span>
                  ))}
                </div>
              </SlideInLeft>
              <SlideInRight className="order-1 lg:order-2">
                <div className="aspect-video rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-200 border border-black/5 shadow-sm flex items-center justify-center overflow-hidden">
                  <span className="text-sm text-slate-400 font-medium tracking-wider uppercase">GIF Placeholder — Prosthesis</span>
                </div>
              </SlideInRight>
            </div>

            {/* ─ Case Study 5 ─ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft>
                <div className="aspect-video rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-200 border border-black/5 shadow-sm flex items-center justify-center overflow-hidden">
                  <span className="text-sm text-slate-400 font-medium tracking-wider uppercase">GIF Placeholder — Quadcopter</span>
                </div>
              </SlideInLeft>
              <SlideInRight>
                <span className="inline-block px-3 py-1 rounded-full bg-[#008ba3]/10 text-[#008ba3] text-xs font-bold tracking-widest uppercase mb-4">05</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Vibrational Analysis of Quadcopter</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">Harness the capabilities of advanced computational simulation for precise vibrational analysis of quadcopters. Our solutions offer accurate vibration assessment, cost-efficient analysis, optimized design, enhanced performance, and faster development.</p>
                <div className="flex flex-wrap gap-2">
                  {['Accurate Vibration Assessment', 'Cost-Efficient Analysis', 'Optimized Design', 'Enhanced Performance', 'Faster Development'].map(b => (
                    <span key={b} className="px-3 py-1.5 rounded-full bg-white border border-[#008ba3]/20 text-xs font-bold text-[#008ba3] shadow-sm">{b}</span>
                  ))}
                </div>
              </SlideInRight>
            </div>

            {/* ─ Case Study 6 ─ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft className="order-2 lg:order-1">
                <span className="inline-block px-3 py-1 rounded-full bg-[#008ba3]/10 text-[#008ba3] text-xs font-bold tracking-widest uppercase mb-4">06</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Design Optimization of FSAE Upright</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">Maximize the performance of your FSAE Upright through advanced computational simulation. Our solutions deliver optimal design solutions, cost-efficient analysis, enhanced performance, faster development, and a competitive advantage.</p>
                <div className="flex flex-wrap gap-2">
                  {['Optimal Design Solutions', 'Cost-Efficient Analysis', 'Enhanced Performance', 'Faster Development', 'Competitive Advantage'].map(b => (
                    <span key={b} className="px-3 py-1.5 rounded-full bg-white border border-[#008ba3]/20 text-xs font-bold text-[#008ba3] shadow-sm">{b}</span>
                  ))}
                </div>
              </SlideInLeft>
              <SlideInRight className="order-1 lg:order-2">
                <div className="aspect-video rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-200 border border-black/5 shadow-sm flex items-center justify-center overflow-hidden">
                  <span className="text-sm text-slate-400 font-medium tracking-wider uppercase">GIF Placeholder — FSAE Upright</span>
                </div>
              </SlideInRight>
            </div>

            {/* ─ Case Study 7 ─ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft>
                <div className="aspect-video rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-200 border border-black/5 shadow-sm flex items-center justify-center overflow-hidden">
                  <span className="text-sm text-slate-400 font-medium tracking-wider uppercase">GIF Placeholder — Seating System</span>
                </div>
              </SlideInLeft>
              <SlideInRight>
                <span className="inline-block px-3 py-1 rounded-full bg-[#008ba3]/10 text-[#008ba3] text-xs font-bold tracking-widest uppercase mb-4">07</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Seating System and Luggage Retention</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">Elevate your seating system and luggage retention capabilities through advanced computational simulation. Our solutions offer optimized seating design, secure luggage retention, cost-efficient analysis, enhanced safety, and streamlined development.</p>
                <div className="flex flex-wrap gap-2">
                  {['Optimized Seating Design', 'Secure Luggage Retention', 'Cost-Efficient Analysis', 'Enhanced Safety', 'Streamlined Development'].map(b => (
                    <span key={b} className="px-3 py-1.5 rounded-full bg-white border border-[#008ba3]/20 text-xs font-bold text-[#008ba3] shadow-sm">{b}</span>
                  ))}
                </div>
              </SlideInRight>
            </div>
          </div>

          {/* CTA */}
          <FadeInUp className="text-center mt-24">
            <p className="text-lg text-slate-600 font-medium mb-8 max-w-2xl mx-auto">
              Contact us today for the best pricing & relieving the burden of pricing concerns.
            </p>
            <Link href="/contact-us" className="bg-[#008ba3] text-white px-10 py-4 font-bold rounded-full uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(0,188,212,0.3)] hover:-translate-y-1 transition-all duration-300">
              Get in Touch
            </Link>
          </FadeInUp>
        </div>
      </section>

    </div>
  );
}
