'use client';

import Image from 'next/image';
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../components/MotionWrappers';

import hero from "./assets/hero.png";
import engineer from "./assets/engineer.png";
import physics from "./assets/physics.png";
import edtech from "./assets/edtech.png";


export default function AboutUsPage() {
  return (
    <div className="relative bg-[#f9fafb] text-slate-800 pb-32 overflow-hidden">
      
      {/* ── Background Gradients ── */}
      <div className="fixed top-[10%] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,188,212,0.25)_0%,transparent_70%)] blur-[100px] z-0 pointer-events-none"></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(0,139,163,0.20)_0%,transparent_70%)] blur-[140px] z-0 pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[-200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,188,212,0.25)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none"></div>

      {/* ── 1. Hero Section ── */}
      <section className="relative pt-[160px] pb-24 px-6 z-10 text-center max-w-[1000px] mx-auto">
        <FadeInUp>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#008ba3]/20 shadow-sm text-sm font-bold text-[#008ba3] tracking-widest uppercase mb-6">
            Who We Are
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-slate-900 leading-[1.1] mb-8">
            Bridging <span className="bg-gradient-to-r from-[#008ba3] to-[#00bcd4] bg-clip-text text-transparent">Academic Knowledge</span> with <span className="bg-gradient-to-r from-slate-600 to-slate-900 bg-clip-text text-transparent">Industrial Reality</span>
          </h1>
        </FadeInUp>
        
        <FadeInUp>
          <div className="relative w-full h-[400px] md:h-[500px] mt-12 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08)] group border-4 border-white">
            <Image src={hero} alt="Innovation Bridge" fill className="object-cover transition-transform duration-[20s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/5 to-transparent mix-blend-overlay"></div>
          </div>
        </FadeInUp>
      </section>

      {/* ── 2. Mission / Who We Are ── */}
      <section className="mx-auto px-6 max-w-[1200px] relative z-10 mt-12 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideInLeft>
            <h2 className="text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight leading-tight mb-6">
              An Innovation-Driven <br/><span className="text-[#008ba3]">Engineering Platform</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg mb-10 font-medium">
              At The Correct Steps, we focus on creating scalable and efficient solutions across industries. We combine physics-based design thinking, computational tools, and modern manufacturing technologies.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-5xl font-black text-[#008ba3]">100<span className="text-3xl text-slate-300">%</span></span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Physics Driven</span>
              </div>
              <div className="w-px h-16 bg-slate-200 mt-2"></div>
              <div className="flex flex-col">
                <span className="text-5xl font-black text-slate-800">360<span className="text-3xl text-slate-300">°</span></span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Integrated Dev</span>
              </div>
            </div>
          </SlideInLeft>
          
          <SlideInRight className="relative h-[650px] w-full hidden md:block">
            <div className="absolute top-0 right-0 w-[75%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10 group">
              <Image src={engineer} fill alt="Engineer" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>
            <div className="absolute bottom-10 left-0 w-[60%] h-[55%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,188,212,0.2)] border-4 border-white z-20 group">
              <Image src={physics} fill alt="Physics Overlay" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>
          </SlideInRight>
        </div>
      </section>

      {/* ── 3. What We Do (Interactive Cards Grid) ── */}
      <section className="mx-auto px-6 max-w-[1200px] relative z-10 mt-32 md:mt-48">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight">What We Do</h2>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg font-medium">Delivering specialized engineering answers across multiple domains, from sustainable products to advanced robotic flexure systems.</p>
        </FadeInUp>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Sustainable Products", desc: "Develop sustainable and renewable products with eco-consciousness.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Advanced Robotics", desc: "Design using origami & flexure mechanisms for unparalleled precision.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
            { title: "Physics-driven Design", desc: "Apply deep mathematical and physics-driven engineering principles.", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
            { title: "CAD & Simulation", desc: "Deliver comprehensive design, CAE, and computational simulations.", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
            { title: "Rapid Prototyping", desc: "Enable physical development through advanced 3D printing technologies.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
          ].map((item, id) => (
            <StaggerItem key={id}>
              <div className="bg-white/60 backdrop-blur-xl border border-black/5 p-10 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,139,163,0.12)] hover:-translate-y-2 transition-all duration-300 group h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-[#008ba3]/10 to-[#008ba3]/5 rounded-2xl flex items-center justify-center mb-8 border border-[#008ba3]/10 group-hover:scale-110 group-hover:bg-[#008ba3]/10 transition-all">
                  <svg className="w-7 h-7 text-[#008ba3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── 4. Ecosystem (The Modern Bento Box) ── */}
      <section className="mx-auto px-6 max-w-[1200px] relative z-10 mt-32 md:mt-48">
        <FadeInUp>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight shrink-0">Our Ecosystem</h2>
            <div className="h-[2px] w-full bg-gradient-to-r from-[#008ba3]/20 to-transparent max-w-[300px]"></div>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto] gap-6">
          
          {/* Main Block - Binge Learning */}
          <FadeInUp className="md:col-span-2 md:row-span-2 relative bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden group min-h-[450px]">
             <Image src={edtech} fill alt="Binge Learning" className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 mix-blend-screen" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#002f38] via-slate-900/40 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-10 md:p-14 w-full">
               <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md">EdTech</div>
               <h3 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">Binge Learning</h3>
               <p className="text-slate-200 max-w-xl text-lg font-medium opacity-90 leading-relaxed">
                 An expanding Edtech platform where you can learn about Innovations, Graphics & 3D Designing, and Robotics mechanisms through industry-certified CAD, CAE & CAM.
               </p>
             </div>
          </FadeInUp>

          {/* Solutions Division */}
          <FadeInUp className="bg-white border border-slate-200 rounded-[2rem] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-end min-h-[250px] group hover:border-[#008ba3]/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-auto group-hover:bg-[#008ba3]/5 transition-colors">
              <svg className="w-7 h-7 text-slate-700 group-hover:text-[#008ba3] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-2">Solutions Division</h3>
            <p className="text-slate-500 font-medium leading-relaxed">Product and engineering development at an industrial scale.</p>
          </FadeInUp>

          {/* Virtual Research Lab */}
          <FadeInUp className="bg-gradient-to-br from-[#008ba3] to-[#004e5e] rounded-[2rem] p-10 shadow-[0_15px_40px_rgba(0,139,163,0.3)] flex flex-col justify-end min-h-[250px] relative overflow-hidden group">
            <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-auto border border-white/20 group-hover:bg-white/20 transition-colors">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mt-6 mb-2 relative z-10">R&D Lab</h3>
            <p className="text-[#80e5f2] font-medium leading-relaxed relative z-10">Advanced digital platform for research & simulations.</p>
          </FadeInUp>

          {/* OLTP Platform */}
          <FadeInUp className="md:col-span-3 bg-white border border-slate-200 rounded-[2rem] md:rounded-[3rem] p-10 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-start md:items-center justify-between gap-10 hover:border-[#008ba3]/30 transition-colors group">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="w-20 h-20 rounded-3xl bg-[#008ba3]/5 flex items-center justify-center shrink-0 border border-[#008ba3]/10 group-hover:rotate-6 transition-transform">
                <svg className="w-10 h-10 text-[#008ba3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">OLTP Platform</h3>
                <p className="text-slate-600 font-medium text-lg max-w-3xl leading-relaxed">
                  A comprehensive learning, testing, and placement preparation ground enabling practical career success.
                </p>
              </div>
            </div>
          </FadeInUp>

        </div>
      </section>

      {/* ── 5. Why Choose Us (Pillars) ── */}
      <section className="mx-auto px-6 max-w-[1200px] relative z-10 mt-32 md:mt-48 text-center pb-20">
        <FadeInUp>
          <h2 className="text-4xl lg:text-5xl font-extrabold uppercase text-slate-900 tracking-tight mb-20 text-center">Why Choose Us</h2>
        </FadeInUp>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {[
            { title: "Research Backed", desc: "Solid academic foundations directly drive our engineering designs.", number: "01" },
            { title: "Industry Focused", desc: "We develop systems thoroughly tested for industrial applications.", number: "02" },
            { title: "Fully Integrated", desc: "Seamless merge of design, simulation, and manufacturing.", number: "03" },
            { title: "Sustainable First", desc: "Prioritizing innovations that respect environmental ecology.", number: "04" },
          ].map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white rounded-[2rem] p-8 pb-12 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:shadow-[0_15px_40px_rgba(0,188,212,0.1)] transition-all h-full flex flex-col justify-between hover:-translate-y-2 duration-300 text-left">
                <div className="absolute -right-4 -top-8 text-[120px] font-black text-slate-50 opacity-60 group-hover:text-[#008ba3]/5 transition-colors duration-500 pointer-events-none select-none">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 mt-16 relative z-10 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 font-medium relative z-10 leading-relaxed">{item.desc}</p>
                </div>
                <div className="w-12 h-1.5 mt-10 rounded-full bg-[#008ba3]/20 group-hover:w-full transition-all duration-500 group-hover:bg-[#008ba3]"></div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── 6. CTA Section ── */}
      <section className="mx-auto px-6 max-w-[1200px] relative z-10 mt-20 mb-10 text-center">
        <FadeInUp>
          <div className="bg-white/80 backdrop-blur-3xl border border-black/5 shadow-[0_30px_80px_rgba(0,0,0,0.05)] rounded-[3rem] p-16 md:p-24 relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#008ba3]/5 rounded-full blur-[80px] group-hover:bg-[#008ba3]/10 transition-colors duration-700 pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-6xl font-black uppercase text-slate-900 mb-6 tracking-tight relative z-10">
              Ready to <span className="bg-gradient-to-r from-[#008ba3] to-[#00bcd4] bg-clip-text text-transparent">Build the Future</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 relative z-10 font-medium">
              Explore our solutions and be part of an innovation ecosystem that bridges theory with reality.
            </p>
            <button className="relative z-10 bg-slate-900 text-white px-10 py-5 font-bold text-lg rounded-full uppercase tracking-widest hover:bg-[#008ba3] hover:shadow-[0_10px_30px_rgba(0,188,212,0.3)] hover:-translate-y-1 transition-all duration-300 outline-none">
              Join Our Ecosystem
            </button>
          </div>
        </FadeInUp>
      </section>

    </div>
  );
}
