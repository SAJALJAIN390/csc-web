'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../components/MotionWrappers';
import network from './assets/network.png';

export default function ContactUsPage() {
  return (
    <div className="relative bg-[#f9fafb] text-slate-800 min-h-screen pt-[120px] pb-16 overflow-hidden">
      
      {/* ── Background Gradients ── */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,188,212,0.06)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,139,163,0.05)_0%,transparent_70%)] blur-[120px] z-0 pointer-events-none mix-blend-multiply"></div>

      <div className="mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ── Left Column: Contact Info ── */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12">
            <SlideInLeft>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#008ba3]/20 shadow-sm text-sm font-bold text-[#008ba3] tracking-widest uppercase mb-6">
                Let's Connect 
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-showcase font-extrabold uppercase tracking-tight text-slate-900 leading-[1.1] mb-6">
                Get in Touch <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008ba3] to-[#00bcd4]">With Us</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium mb-10">
                We are open to collaborations, projects, partnerships, and learning opportunities. Reach out to discuss how we can build impactful solutions together.
              </p>

              {/* Decorative Image */}
              <div className="relative w-full h-[200px] rounded-3xl overflow-hidden shadow-sm border border-black/5 group mb-10">
                <Image src={network} alt="Global Connectivity" fill className="object-cover group-hover:scale-105 transition-transform duration-[10s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
              </div>
            </SlideInLeft>

            <SlideInLeft>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <StaggerItem className="sm:col-span-2 xl:col-span-1">
                  <a href="mailto:info@thecorrectsteps.com" className="flex flex-col p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,188,212,0.1)] hover:border-[#008ba3]/20 transition-all group h-full">
                    <div className="w-10 h-10 rounded-full bg-[#008ba3]/10 flex items-center justify-center mb-4 group-hover:bg-[#008ba3] transition-colors">
                      <svg className="w-5 h-5 text-[#008ba3] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-1">Email Us</span>
                    <span className="text-slate-800 font-bold whitespace-nowrap text-[0.95rem] xl:text-base">info@thecorrectsteps.com</span>
                  </a>
                </StaggerItem>

                {/* Phone */}
                <StaggerItem>
                  <a href="tel:+91XXXXXXXXXX" className="flex flex-col p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,188,212,0.1)] hover:border-[#008ba3]/20 transition-all group h-full">
                    <div className="w-10 h-10 rounded-full bg-[#008ba3]/10 flex items-center justify-center mb-4 group-hover:bg-[#008ba3] transition-colors">
                      <svg className="w-5 h-5 text-[#008ba3] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-1">Call Us</span>
                    <span className="text-slate-800 font-bold">+91 XXXXX XXXXX</span>
                  </a>
                </StaggerItem>

                {/* Location */}
                <StaggerItem>
                  <div className="flex flex-col p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,188,212,0.1)] hover:border-[#008ba3]/20 transition-all group h-full">
                    <div className="w-10 h-10 rounded-full bg-[#008ba3]/10 flex items-center justify-center mb-4 group-hover:bg-[#008ba3] transition-colors">
                      <svg className="w-5 h-5 text-[#008ba3] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-1">Location</span>
                    <span className="text-slate-800 font-bold">India</span>
                  </div>
                </StaggerItem>

                {/* Socials */}
                <StaggerItem className="sm:col-span-2 xl:col-span-1">
                  <div className="flex flex-col p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-full justify-between">
                    <span className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-4">Follow Us</span>
                    <div className="flex items-center gap-3">
                      <a href="https://www.linkedin.com/company/the-correct-steps-official/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#008ba3] hover:border-[#008ba3] transition-colors">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                      <a href="https://www.instagram.com/thecorrectsteps_official" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#008ba3] hover:border-[#008ba3] transition-colors">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100089147287089" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#008ba3] hover:border-[#008ba3] transition-colors">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                      </a>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </SlideInLeft>
          </div>

          {/* ── Right Column: Interactive Form ── */}
          <div className="lg:col-span-7">
            <SlideInRight>
              <div className="bg-white/80 backdrop-blur-2xl border border-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8 md:p-14 relative overflow-hidden group">
                {/* Decorative glow inside form */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#008ba3]/5 rounded-full blur-[80px] pointer-events-none"></div>

                <h3 className="text-3xl font-black text-slate-900 mb-2">Send an Inquiry</h3>
                <p className="text-slate-500 mb-10 font-medium">Please fill out the form below and our team will get back to you shortly.</p>

                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-600 uppercase tracking-wider ml-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="Your Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#008ba3]/30 focus:border-[#008ba3] transition-all text-slate-800 placeholder:text-slate-400"
                        required
                      />
                    </div>
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-600 uppercase tracking-wider ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="+91 99999 99999"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#008ba3]/30 focus:border-[#008ba3] transition-all text-slate-800 placeholder:text-slate-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-600 uppercase tracking-wider ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="your@email.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#008ba3]/30 focus:border-[#008ba3] transition-all text-slate-800 placeholder:text-slate-400"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-slate-600 uppercase tracking-wider ml-1">Subject / Requirement</label>
                    <input 
                      type="text" 
                      id="subject" 
                      placeholder="e.g. Project Collaboration, Consultation..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#008ba3]/30 focus:border-[#008ba3] transition-all text-slate-800 placeholder:text-slate-400"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-600 uppercase tracking-wider ml-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#008ba3]/30 focus:border-[#008ba3] transition-all text-slate-800 placeholder:text-slate-400 resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold text-lg uppercase tracking-widest py-5 rounded-xl hover:shadow-[0_10px_30px_rgba(0,188,212,0.2)] hover:from-[#008ba3] hover:to-[#00bcd4] transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Let's Collaborate
                    </button>
                    <p className="text-center text-slate-400 text-sm mt-4 font-medium">
                      Your information is secure and will only be used to contact you.
                    </p>
                  </div>

                </form>
              </div>
            </SlideInRight>
          </div>
        </div>
        <section className="relative z-10 px-6 pt-16 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <FadeInUp>
                    <div className="relative overflow-hidden rounded-[32px] border border-[#008ba3]/15 bg-[linear-gradient(135deg,rgba(6,51,79,0.98),rgba(0,139,163,0.95))] px-8 py-12 text-center text-white shadow-[0_26px_70px_rgba(6,51,79,0.28)] sm:px-12 sm:py-16">
                    <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
                    <p className="relative text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">
                        Build Something Valuable
                    </p>
                    <h2 className="relative mt-5 text-3xl font-extrabold uppercase tracking-[-0.03em] sm:text-4xl">
                        Let&apos;s collaborate and create impactful solutions together.
                    </h2>
                    <p className="relative mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">
                        Whether you are exploring a new idea, planning a project, or looking for a strong
                        engineering partner, we would love to hear from you.
                    </p>
                    </div>
                </FadeInUp>
            </div>
        </section>
      </div>
    </div>
  );
}
