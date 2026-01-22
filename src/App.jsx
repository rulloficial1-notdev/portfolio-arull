import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Import Images
import arullImg from './assets/images/arull.jpeg';
import natiImg from './assets/images/nati.jpeg';
import nijamImg from './assets/images/nijam.jpeg';
import jahraImg from './assets/images/jahra.jpeg';
import alinImg from './assets/images/alin.jpeg';
import timImg from './assets/images/tim.jpeg';
import dashboardImg from './assets/images/dashboard_perpus.png';
import brainstormingImg from './assets/images/brainstorming.png';
import demoPptx from './assets/documents/tugas presentasi website perpustakaan dev.pptx';
import proposalPdf from './assets/documents/format presentasi perpustakaan.pdf';



// ========== SVG ICONS ==========
const Icons = {
  Github: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  ExternalLink: ({ size = 16, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  Instagram: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  LinkedIn: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Code: ({ size = 18, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  ArrowRight: ({ size = 18, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Sparkles: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <polygon points="12 2 15.09 10.26 24 12.5 15.09 13.74 12 22 8.91 13.74 0 12.5 8.91 10.26" />
    </svg>
  ),
  Users: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  FileText: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  ),
  Download: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  ),
  WhatsApp: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  ),
  TikTok: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ),
  Book: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  Pdf: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 13v-1h6v1" />
      <path d="M12 18v-6" />
      <path d="M9 17h6" />
    </svg>
  )
};

// ========== FADE IN COMPONENT ==========
const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, [delay]);

  return (
    <div ref={domRef} className={`fade-up ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

// ========== NAVBAR COMPONENT ==========
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 h-20 bg-black/85 backdrop-blur-3xl z-1000 border-b border-gray-700/50 transition-all duration-300 ${scrolled ? 'shadow-lg border-red-500/20' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-red-500/20 rounded-lg text-red-500">
            <Icons.Code size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent leading-none">DEV TEAM</span>
            <span className="text-xs text-gray-400 font-medium tracking-wider">SMKN 11 KAB. TANGERANG</span>
          </div>
        </div>
        <ul className="hidden md:flex gap-8 items-center">
          <li><a href="#home" className="text-sm font-bold text-gray-400 hover:text-red-500 transition">Beranda</a></li>
          <li><a href="#about" className="text-sm font-bold text-gray-400 hover:text-red-500 transition">Tentang Kami</a></li>
          <li><a href="#portfolio" className="text-sm font-bold text-gray-400 hover:text-red-500 transition">Proyek</a></li>
          <li><a href="#team" className="text-sm font-bold text-gray-400 hover:text-red-500 transition">Tim</a></li>
          <li><a href="#presentation" className="text-sm font-bold text-gray-400 hover:text-red-500 transition">Presentasi</a></li>
          <li>
            <a href="#contact" className="px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-lg hover:bg-red-600 transition shadow-lg shadow-red-500/25">
              Hubungi Kami
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// ========== TYPEWRITER COMPONENT ==========
const TypewriterEffect = ({ words, wait = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (index >= words.length) {
      setIndex(0); // Reset loop
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), wait);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, wait]);

  return (
    <span className="bg-gradient-to-r from-red-500 via-red-600 to-orange-500 bg-clip-text text-transparent">
      {words[index].substring(0, subIndex)}
      <span className={`text-white ml-1 ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  );
};

// ========== HERO COMPONENT ==========
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-red-900/10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-zinc-800 text-9xl font-bold opacity-10 rotate-12 select-none">CODE</div>
        <div className="absolute bottom-20 right-10 text-zinc-800 text-9xl font-bold opacity-10 -rotate-12 select-none">DESIGN</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-red-500/30 rounded-full mx-auto backdrop-blur-sm hover:border-red-500/60 transition cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">Tim Pengembang Perpustakaan Digital</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto h-32 md:h-40 flex flex-col justify-center">
            <span>Membangun Masa Depan</span>
            <TypewriterEffect words={['Literasi Digital', 'Teknologi Sekolah', 'Inovasi Siswa']} />
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Kami adalah tim dibalik transformasi digital perpustakaan SMKN 11 Kabupaten Tangerang. Menggabungkan teknologi modern dengan kemudahan akses untuk pendidikan terbaik.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a href="#portfolio" className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-red-500/20 transition transform hover:-translate-y-1 flex items-center gap-2">
              <Icons.Sparkles size={18} />
              Lihat Karya Kami
            </a>
            <a href="#about" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition backdrop-blur-sm flex items-center gap-2">
              <Icons.Users size={18} />
              Tentang Tim
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ========== ABOUT COMPONENT ==========
const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Tentang <span className="text-red-500">Kami</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
              </div>

              <div className="space-y-6 text-lg text-gray-300">
                <p className="leading-relaxed">
                  Tim Developer Web Perpustakaan SMKN 11 Kabupaten Tangerang dibentuk dengan satu visi: <strong className="text-white">mendigitalisasi akses pengetahuan</strong>. Kami percaya bahwa teknologi web modern dapat menjembatani siswa dengan dunia literasi tanpa batas.
                </p>
                <p className="leading-relaxed">
                  Terdiri dari siswa-siswa berbakat jurusan Rekayasa Perangkat Lunak, kami berkolaborasi untuk menciptakan sistem perpustakaan yang efisien, responsif, dan menyenangkan untuk digunakan.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-3xl font-bold text-white mb-1">100%</h3>
                  <p className="text-gray-400 text-sm">Dedikasi untuk Sekolah</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-3xl font-bold text-red-500 mb-1">24/7</h3>
                  <p className="text-gray-400 text-sm">Akses Sistem Digital</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl transform rotate-3 opacity-20 blur-xl filter" />
              <img
                src={timImg}
                alt="Working Team"
                className="relative rounded-2xl shadow-2xl border border-gray-700 w-full"
              />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

// ========== PORTFOLIO COMPONENT ==========
// ========== PORTFOLIO COMPONENT ==========
// ========== PORTFOLIO COMPONENT ==========
// ========== PORTFOLIO COMPONENT ==========
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proyek <span className="text-red-500">Unggulan</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sistem terintegrasi yang menjadi jantung layanan perpustakaan digital sekolah.
            </p>
          </div>

          <div className="bg-zinc-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-red-500/30 transition duration-500 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 lg:bg-gradient-to-r" />
                <img
                  src={dashboardImg}
                  alt="Dashboard Sistem Perpustakaan"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 filter brightness-75 group-hover:brightness-100"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div>
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-bold text-red-500 bg-red-500/10 border border-red-500/20 rounded-full">
                    Versi 2.0 Released
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Sistem Informasi Perpustakaan Digital
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Solusi komprehensif untuk manajemen perpustakaan modern. Dilengkapi fitur peminjaman online, katalog digital (OPAC), presensi berbasis QR-Code, dan laporan statistik otomatis.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                      <Icons.ArrowRight size={12} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Manajemen Sirkulasi Otomatis</h4>
                      <p className="text-sm text-gray-500">Peminjaman dan pengembalian buku tercatat realtime.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                      <Icons.ArrowRight size={12} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Katalog OPAC Responsif</h4>
                      <p className="text-sm text-gray-500">Pencarian buku mudah diakses dari perangkat siswa.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                      <Icons.ArrowRight size={12} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Visitor Counter (QR)</h4>
                      <p className="text-sm text-gray-500">Buku tamu digital dengan scan kartu pelajar.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="http://perpustakaan-smk11.pages.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition shadow-lg shadow-red-600/30 transform hover:-translate-y-1"
                  >
                    <Icons.ExternalLink size={20} />
                    Kunjungi Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

// ========== TEAM COMPONENT ==========
const Team = () => {
  const teamMembers = [
    {
      name: 'Arull',
      role: 'Lead Developer',
      image: arullImg,
      socials: { whatsapp: '#', tiktok: '#', instagram: '#' }
    },
    {
      name: 'Nati',
      role: 'UI/UX Designer',
      image: natiImg,
      socials: { whatsapp: '#', tiktok: '#', instagram: '#' }
    },
    {
      name: 'Nijam',
      role: 'Backend Engineer',
      image: nijamImg,
      socials: { whatsapp: '#', tiktok: '#', instagram: '#' }
    },
    {
      name: 'Jahra',
      role: 'Frontend Dev',
      image: jahraImg,
      socials: { whatsapp: '#', tiktok: '#', instagram: '#' }
    }
  ];

  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Tim <span className="text-red-500">Hebat Kami</span>
            </h2>
            <p className="text-gray-400">
              Orang-orang berdedikasi dibalik layar yang membuat segalanya menjadi mungkin.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="relative overflow-hidden rounded-2xl aspect-square mb-4">
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                      <p className="text-white font-bold text-lg">{member.name}</p>
                      <p className="text-red-200 text-sm mb-4">{member.role}</p>

                      {/* Social Icons */}
                      <div className="flex gap-3">
                        {member.socials.whatsapp && (
                          <a href={member.socials.whatsapp} className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-green-500 transition duration-300">
                            <Icons.WhatsApp size={16} />
                          </a>
                        )}
                        {member.socials.tiktok && (
                          <a href={member.socials.tiktok} className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition duration-300">
                            <Icons.TikTok size={16} />
                          </a>
                        )}
                        {member.socials.instagram && (
                          <a href={member.socials.instagram} className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-pink-600 transition duration-300">
                            <Icons.Instagram size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-500"
                  />
                </div>
                {/* Default text below (fades out on hover) */}
                <div className="text-center group-hover:opacity-0 transition duration-300">
                  <h3 className="text-white font-bold text-lg">{member.name}</h3>
                  <p className="text-red-500 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

// ========== PRESENTATION COMPONENT ==========
const Presentation = () => {
  return (
    <section id="presentation" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <div className="relative bg-zinc-900 rounded-3xl p-8 md:p-16 border border-red-500/30 overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-red-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20 text-red-500 mb-4">
                  <Icons.Book size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Unduh Dokumen <br />
                  <span className="text-red-500">Presentasi & Proposal</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Dokumentasi lengkap mengenai pengembangan Sistem Informasi Perpustakaan Digital. Unduh materi presentasi tim dan format standar dokumen yang kami gunakan.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={demoPptx}
                    download="Presentasi_Perpus_TimDev.pptx"
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition shadow-lg shadow-red-600/30 flex items-center gap-2"
                  >
                    <Icons.Download size={18} />
                    Materi Presentasi
                  </a>
                  <a
                    href={demoPptx}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-lg transition border border-gray-700 flex items-center gap-2 group"
                  >
                    <Icons.FileText size={18} className="group-hover:text-red-500 transition" />
                    Preview Format
                  </a>
                </div>
              </div>

              <div className="relative flex justify-center md:justify-end h-64 md:h-auto items-center">
                {/* Proposal Card (Behind) */}
                <div className="absolute top-0 right-0 md:top-4 md:right-8 bg-zinc-800 rounded-xl p-6 border border-gray-700 transform rotate-12 scale-90 opacity-60 z-0 w-64 transition duration-500 hover:rotate-6 hover:opacity-80">
                  <div className="flex items-center gap-4 mb-4 border-b border-gray-700 pb-4">
                    <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center text-blue-500">
                      <Icons.FileText size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Presentasi_Dev.pptx</h4>
                      <p className="text-xs text-gray-500">Click to Preview</p>
                    </div>
                  </div>
                  <div className="space-y-2 opacity-50">
                    <div className="h-2 bg-gray-700 rounded w-full" />
                    <div className="h-2 bg-gray-700 rounded w-3/4" />
                    <div className="h-2 bg-gray-700 rounded w-5/6" />
                  </div>
                </div>

                {/* Presentation Card (Front) */}
                <div className="relative bg-zinc-800 rounded-xl p-6 border border-gray-700 transform -rotate-3 hover:rotate-0 transition duration-500 shadow-2xl z-10 w-72">
                  <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">
                    <div className="w-10 h-10 rounded bg-red-500/20 flex items-center justify-center text-red-500">
                      <Icons.FileText size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Materi_Presentasi.pptx</h4>
                      <p className="text-xs text-gray-500">Sistem Perpustakaan</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-700 rounded w-3/4" />
                    <div className="h-2 bg-gray-700 rounded w-1/2" />
                    <div className="h-2 bg-gray-700 rounded w-5/6" />
                    <div className="h-2 bg-gray-700 rounded w-full" />
                  </div>
                  <div className="mt-6 flex justify-end">
                    <span className="text-xs text-red-400 font-bold hover:underline cursor-pointer">Preview Document →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

// ========== DOCUMENTATION COMPONENT ==========
const Documentation = () => {
  const photos = [
    {
      src: timImg,
      title: "Tim Development",
      desc: "Foto bersama seluruh tim pengembang aplikasi perpustakaan."
    },
    {
      src: dashboardImg,
      title: "Preview Sistem",
      desc: "Tampilan dashboard dashboard utama sistem perpustakaan digital."
    },
    {
      src: brainstormingImg,
      title: "Brainstorming",
      desc: "Sesi diskusi dan perencanaan fitur bersama tim."
    }
  ];

  return (
    <section id="documentation" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Galeri <span className="text-red-500">Dokumentasi</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cuplikan momen dan progres pengerjaan proyek Sistem Informasi Perpustakaan Digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {photos.map((photo, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-zinc-900">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <Icons.Sparkles className="text-red-500 w-12 h-12 animate-pulse" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{photo.title}</h3>
                  <p className="text-gray-400 text-sm">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

// ========== CONTACT COMPONENT ==========
const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Siap Memulai <span className="text-red-500">Kolaborasi?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Hubungi tim kami untuk konsultasi pengembangan sistem perpustakaan atau proyek digital lainnya.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="p-4 bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition duration-300">
                <Icons.Instagram size={24} />
              </a>
              <a href="#" className="p-4 bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition duration-300">
                <Icons.LinkedIn size={24} />
              </a>
              <a href="mailto:team@smkn11kabtangerang.sch.id" className="p-4 bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition duration-300">
                <Icons.ExternalLink size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-500 pt-8">
              &copy; {new Date().getFullYear()} Tim Developer Web SMKN 11 Kab. Tangerang. All rights reserved.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

// ========== MAIN APP ==========
export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Portfolio />
        <Presentation />
        <Documentation />
        <Contact />
      </main>
    </div>
  );
}
