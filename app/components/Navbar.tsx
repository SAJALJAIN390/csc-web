'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileResearchOpen, setIsMobileResearchOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const solutionsItems = [
    { label: 'Sustainable & Renewable Products', href: '/solutions/sustainable-renewable-products' },
    { label: 'Origami & Flexure in Robotics', href: '/solutions/origami-flexure-robotics' },
    { label: 'Physics Of Design', href: '/solutions/physics-of-design' },
    { label: 'CAD & CAE', href: '/solutions/cad-cae' },
    { label: '3D Printing', href: '/solutions/3d-printing' },
  ];

  const researchItems = [
    { label: 'Research Papers & Patents', href: '/research/research-papers-patents' },
    { label: 'Blogs, Articles & News', href: '/research/blogs-articles-news' },
  ];

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        document.documentElement.style.setProperty('--nav-height', `${height}px`);
      }
    };
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, [isScrolled]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveLink = () => {
      if (pathname !== '/') {
        setActiveLink(pathname);
      } else {
        setActiveLink(window.location.hash || '/');
      }
    };
    updateActiveLink();
    window.addEventListener('hashchange', updateActiveLink);
    return () => window.removeEventListener('hashchange', updateActiveLink);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    setIsMobileSolutionsOpen(false);
    setIsMobileResearchOpen(false);
  };

  const desktopLinkBaseClasses =
    'text-[0.9rem] font-medium tracking-[0.2px] transition-all duration-300 ease-[ease] hover:text-[var(--secondary-accent)]';
  const desktopLinkClasses = (isActive: boolean) =>
    `${desktopLinkBaseClasses} ${isActive ? 'text-[var(--secondary-accent)]' : ''}`;

  const dropdownChevronClasses =
    'shrink-0 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]';
  const dropdownItemBaseClasses =
    'flex items-center gap-3 rounded-[8px] px-4 py-3 text-[0.82rem] font-medium tracking-[0.02em] whitespace-nowrap text-[rgba(255,255,255,0.8)] transition-all duration-200 ease-[ease] hover:bg-[rgba(0,188,212,0.1)] hover:text-[var(--secondary-accent)]';

  const mobileLinkClasses = (isActive: boolean) =>
    `block w-full py-3 px-6 text-[0.95rem] font-medium tracking-[0.5px] uppercase transition-all duration-200 ${isActive ? '!text-[#00bcd4]' : '!text-[rgba(255,255,255,0.9)] hover:!text-white hover:bg-[rgba(255,255,255,0.05)]'}`;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 z-[1000] w-full bg-[var(--nav-bg)] backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)] [transition:all_0.3s_ease] hover:bg-[var(--nav-bg)] [transform:none!important] hover:[transform:none!important] ${
          isScrolled
            ? 'py-3 shadow-[0_4px_30px_rgba(0,0,0,0.2)]'
            : 'py-5 shadow-none'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 lg:px-10">
          <Link href="/" className="flex shrink-0 items-center gap-[10px]" onClick={() => handleLinkClick('/')}>
            <img
              src="/assets/csc_logo1.png"
              alt="CSC Logo"
              className="block h-12 w-auto object-contain"
            />
            <span className="whitespace-nowrap text-[1rem] font-bold leading-[1.2] tracking-[0.5px] text-white">
              THE CORRECT STEPS
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden list-none items-center gap-6 text-white min-[1200px]:flex">
            <li>
              <Link
                href="/"
                className={desktopLinkClasses(activeLink === '/' || activeLink === '')}
                onClick={() => handleLinkClick('/')}
              >Home</Link>
            </li>
            <li className="group/nav-dropdown relative !flex items-center">
              <div className={`inline-flex !items-center gap-[5px] cursor-pointer text-[0.9rem] font-medium tracking-[0.2px] transition-all duration-300 ease-[ease] group-hover/nav-dropdown:text-[var(--secondary-accent)] ${pathname.startsWith('/solutions') ? 'text-[var(--secondary-accent)]' : ''}`}>
                Solutions
                <svg className={`${dropdownChevronClasses} group-hover/nav-dropdown:rotate-180`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="invisible pointer-events-none absolute top-full left-1/2 z-[1100] w-max -translate-x-1/2 translate-y-2 pt-4 opacity-0 [transition:opacity_0.3s_cubic-bezier(0.4,0,0.2,1),transform_0.3s_cubic-bezier(0.4,0,0.2,1),visibility_0.3s] group-hover/nav-dropdown:visible group-hover/nav-dropdown:pointer-events-auto group-hover/nav-dropdown:translate-y-0 group-hover/nav-dropdown:opacity-100">
                <div className="flex min-w-[280px] flex-col rounded-[12px] border border-[rgba(0,188,212,0.15)] bg-[rgba(6,51,79,0.97)] p-2 backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)] shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(0,188,212,0.08),0_0_30px_rgba(0,188,212,0.05)]">
                  {solutionsItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className={`${dropdownItemBaseClasses} ${pathname === item.href ? 'bg-[rgba(0,188,212,0.1)] text-[var(--secondary-accent)]' : ''}`}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      <span className="flex-1 text-center">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link href="/#products" className={desktopLinkClasses(activeLink === '#products')} onClick={() => handleLinkClick('#products')}>
                Our Products
              </Link>
            </li>
            <li>
              <Link href="/virtual-research-lab" className={desktopLinkClasses(activeLink === '/virtual-research-lab')} onClick={() => handleLinkClick('/virtual-research-lab')}>
                Virtual Research Lab
              </Link>
            </li>
            <li>
              <Link href="https://oltp.thecorrectsteps.com" target="_blank" className={desktopLinkClasses(false)}>
                OLTP
              </Link>
            </li>
            <li className="group/nav-dropdown relative !flex items-center">
              <div className={`inline-flex !items-center gap-[5px] cursor-pointer text-[0.9rem] font-medium tracking-[0.2px] transition-all duration-300 ease-[ease] group-hover/nav-dropdown:text-[var(--secondary-accent)] ${pathname.startsWith('/research') ? 'text-[var(--secondary-accent)]' : ''}`}>
                 Research
                <svg className={`${dropdownChevronClasses} group-hover/nav-dropdown:rotate-180`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="invisible pointer-events-none absolute top-full left-1/2 z-[1100] w-max -translate-x-1/2 translate-y-2 pt-4 opacity-0 [transition:opacity_0.3s_cubic-bezier(0.4,0,0.2,1),transform_0.3s_cubic-bezier(0.4,0,0.2,1),visibility_0.3s] group-hover/nav-dropdown:visible group-hover/nav-dropdown:pointer-events-auto group-hover/nav-dropdown:translate-y-0 group-hover/nav-dropdown:opacity-100">
                <div className="flex min-w-[280px] flex-col rounded-[12px] border border-[rgba(0,188,212,0.15)] bg-[rgba(6,51,79,0.97)] p-2 backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)] shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(0,188,212,0.08),0_0_30px_rgba(0,188,212,0.05)]">
                  {researchItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className={`${dropdownItemBaseClasses} ${pathname === item.href ? 'bg-[rgba(0,188,212,0.1)] text-[var(--secondary-accent)]' : ''}`}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      <span className="flex-1 text-center">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link href="/about-us" className={desktopLinkClasses(pathname.startsWith('/about-us'))} onClick={() => handleLinkClick('/about-us')}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className={desktopLinkClasses(pathname.startsWith('/contact-us'))} onClick={() => handleLinkClick('/contact-us')}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className={desktopLinkClasses(activeLink === '/careers' || pathname.startsWith('/careers'))} onClick={() => handleLinkClick('/careers')}>
                Careers
              </Link>
            </li>
          </ul>

          {/* Hamburger button */}
          <button
            className="relative z-[1060] flex h-10 w-10 items-center justify-center rounded-lg border-0 bg-transparent transition-all duration-300 min-[1200px]:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex w-6 flex-col items-end gap-[5px]">
              <span className={`block h-[2px] rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 translate-y-[7px] rotate-45' : 'w-6'}`} />
              <span className={`block h-[2px] w-[18px] rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'scale-0 opacity-0' : 'opacity-100'}`} />
              <span className={`block h-[2px] rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -translate-y-[7px] -rotate-45' : 'w-3'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile backdrop — outside the nav to avoid z-index/layout issues */}
      <div
        className={`fixed inset-0 z-[1040] bg-black/50 backdrop-blur-sm transition-opacity duration-300 min-[1200px]:hidden ${isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-[1050] flex h-dvh w-[min(320px,85vw)] flex-col bg-[#06334f] shadow-[-8px_0_30px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] min-[1200px]:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-5">
          <span className="text-[0.8rem] font-semibold uppercase tracking-[3px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Menu
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full border-0 transition-colors duration-200"
            style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
            aria-label="Close menu"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto py-2">
          <ul className="m-0 list-none p-0">
            <li>
              <Link href="/" className={mobileLinkClasses(activeLink === '/' || activeLink === '')} onClick={() => handleLinkClick('/')}>
                Home
              </Link>
            </li>

            {/* Solutions accordion */}
            <li>
              <button
                className={`flex w-full items-center justify-between border-0 bg-transparent px-6 py-3 text-left text-[0.95rem] font-medium uppercase tracking-[0.5px] transition-all duration-200 [font-family:inherit] cursor-pointer ${isMobileSolutionsOpen || pathname.startsWith('/solutions') ? '!text-[#00bcd4]' : '!text-[rgba(255,255,255,0.9)] hover:!text-white hover:bg-[rgba(255,255,255,0.05)]'}`}
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                aria-expanded={isMobileSolutionsOpen}
              >
                Solutions
                <svg className={`${dropdownChevronClasses} ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <ul className={`m-0 list-none overflow-hidden p-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileSolutionsOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {solutionsItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className={`block border-l-2 py-2.5 pr-6 pl-10 text-[0.82rem] transition-all duration-200 hover:border-l-[#00bcd4] hover:bg-[rgba(255,255,255,0.03)] ${pathname === item.href ? 'border-l-[#00bcd4]' : 'border-l-[rgba(0,188,212,0.2)]'}`}
                      style={{ color: pathname === item.href ? '#00bcd4' : 'rgba(255,255,255,0.6)' }}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link href="/#products" className={mobileLinkClasses(activeLink === '#products')} onClick={() => handleLinkClick('#products')}>
                Our Products
              </Link>
            </li>

            <li>
              <Link href="/virtual-research-lab" className={mobileLinkClasses(activeLink === '/virtual-research-lab')} onClick={() => handleLinkClick('/virtual-research-lab')}>
                Virtual Research Lab
              </Link>
            </li>

            <li>
              <Link href="https://oltp.thecorrectsteps.com" target="_blank" className={mobileLinkClasses(false)}>
                OLTP
              </Link>
            </li>

            {/* Research accordion */}
            <li>
              <button
                className={`flex w-full items-center justify-between border-0 bg-transparent px-6 py-3 text-left text-[0.95rem] font-medium uppercase tracking-[0.5px] transition-all duration-200 [font-family:inherit] cursor-pointer ${isMobileResearchOpen || pathname.startsWith('/research') ? '!text-[#00bcd4]' : '!text-[rgba(255,255,255,0.9)] hover:!text-white hover:bg-[rgba(255,255,255,0.05)]'}`}
                onClick={() => setIsMobileResearchOpen(!isMobileResearchOpen)}
                aria-expanded={isMobileResearchOpen}
              >
                Research
                <svg className={`${dropdownChevronClasses} ${isMobileResearchOpen ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <ul className={`m-0 list-none overflow-hidden p-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileResearchOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {researchItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className={`block border-l-2 py-2.5 pr-6 pl-10 text-[0.82rem] transition-all duration-200 hover:border-l-[#00bcd4] hover:bg-[rgba(255,255,255,0.03)] ${pathname === item.href ? 'border-l-[#00bcd4]' : 'border-l-[rgba(0,188,212,0.2)]'}`}
                      style={{ color: pathname === item.href ? '#00bcd4' : 'rgba(255,255,255,0.6)' }}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link href="/about-us" className={mobileLinkClasses(pathname.startsWith('/about-us'))} onClick={() => handleLinkClick('/about-us')}>
                About Us
              </Link>
            </li>

            <li>
              <Link href="/contact-us" className={mobileLinkClasses(pathname.startsWith('/contact-us'))} onClick={() => handleLinkClick('/contact-us')}>
                Contact Us
              </Link>
            </li>

            <li>
              <Link href="/careers" className={mobileLinkClasses(activeLink === '/careers' || pathname.startsWith('/careers'))} onClick={() => handleLinkClick('/careers')}>
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
