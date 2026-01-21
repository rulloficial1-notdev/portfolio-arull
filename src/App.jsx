import React, { useState, useEffect, useRef } from 'react';
import './App.css';

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
  Mail: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Copy: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  Loader: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
    </svg>
  ),
  Check: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Send: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  BookOpen: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  Award: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  Cpu: ({ size = 20, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1  " y1="15" x2="4" y2="15" />
    </svg>
  ),
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
          <div className="w-9 h-9 flex items-center justify-center bg-zinc-900 border border-red-500/20 rounded text-red-500">
            <Icons.Sparkles size={16} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">ARULL.DEV</span>
        </div>
        <ul className="hidden md:flex gap-8">
          <li><a href="#home" className="text-sm font-bold text-gray-400 hover:text-red-500 transition">Home</a></li>
          <li><a href="#about" className="text-sm font-bold text-gray-400 hover:text-red-500 transition">About</a></li>
          <li><a href="#portfolio" className="text-sm font-bold text-gray-400 hover:text-red-500 transition">Projects</a></li>
          <li><a href="#contact" className="text-sm font-bold text-gray-400 hover:text-red-500 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

// ========== HERO COMPONENT ==========
const Hero = () => {
  const roles = ['Creative Works', 'Technical Skills', 'Best Projects', 'Development Journey'];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
    }, speed);

    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center relative z-10 hidden-scrollbar">
        {/* Left - Text Content */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">

          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md w-fit hover:bg-white/10 transition cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Open for Collabs</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              MY DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-cyan-500 animate-gradient-x">PORTFOLIO</span>
            </h1>
          </div>

          <div className="h-12 flex items-center">
            <span className="text-xl md:text-2xl text-gray-400 font-light mr-4">Showcasing</span>
            <div className="px-4 py-2 bg-zinc-900 border-l-2 border-red-500">
              <span className="text-xl md:text-2xl font-bold text-white font-mono">
                {text}<span className="text-red-500 animate-pulse">_</span>
              </span>
            </div>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-xl font-light">
            Welcome to my curated space on the web. This portfolio demonstrates my technical capabilities, creative projects, and journey as a developer building the future of the web.
          </p>

          <div className="flex gap-5 flex-wrap pt-4">
            <a href="#portfolio" className="group relative px-10 py-5 bg-white text-black font-black text-xs tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">SEE MY PROJECTS</span>
            </a>

            <a href="#contact" className="group px-10 py-5 bg-zinc-900 border border-white/10 text-white font-black text-xs tracking-widest rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl">
              SAY HELLO <Icons.ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right - 3D Visual */}
        <div className="relative group perspective-1000 hidden md:block">
          <div className="relative w-full aspect-square max-w-md mx-auto transform transition-all duration-700 hover:rotate-y-12 hover:rotate-x-6">
            {/* Decorative Rings */}
            <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-red-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-12 border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>

            {/* Central Image */}
            <div className="absolute inset-20 rounded-full overflow-hidden border-4 border-black shadow-[0_0_50px_rgba(255,0,0,0.3)] group-hover:shadow-[0_0_80px_rgba(0,255,255,0.4)] transition duration-700 bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                alt="Hero"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute top-1/4 -left-10 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl animate-float delay-0">
              <Icons.Code size={24} className="text-cyan-400 mb-2" />
              <div className="text-xs text-gray-400 uppercase tracking-wider">Clean Code</div>
            </div>

            <div className="absolute bottom-1/4 -right-10 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl animate-float delay-1000">
              <Icons.Sparkles size={24} className="text-red-500 mb-2" />
              <div className="text-xs text-gray-400 uppercase tracking-wider">Modern UI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ========== ABOUT COMPONENT ==========
const About = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Icons.Cpu,
      skills: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
      color: 'from-blue-500/20'
    },
    {
      title: 'Design',
      icon: Icons.Sparkles,
      skills: ['Figma', 'UI/UX', 'Responsive', 'Prototypes'],
      color: 'from-purple-500/20'
    },
    {
      title: 'Development',
      icon: Icons.Code,
      skills: ['Git', 'Vite', 'PostCSS', 'Clean Code'],
      color: 'from-red-500/20'
    }
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent rotate-12"></div>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -rotate-12"></div>

      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left Column: Visual Story */}
            <div className="relative">
              <div className="sticky top-32">
                <div className="relative group p-4 border border-white/5 rounded-[3rem] bg-zinc-900/10 backdrop-blur-3xl overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 blur-[80px] group-hover:bg-red-500/20 transition-all duration-700"></div>

                  <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=800&fit=crop"
                      alt="Profile"
                      className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Floating Awards */}
                  <div className="absolute -left-10 top-20 bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl animate-float">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-red-500">
                        <Icons.Award size={24} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Achieved</div>
                        <div className="text-lg font-black text-white">15+ Projects</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-6 bottom-20 bg-zinc-950/90 backdrop-blur-2xl border border-red-500/30 p-5 rounded-2xl shadow-inner animate-float [animation-delay:1s]">
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-black text-red-500">3+</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Years Exp</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 space-y-4">
                  <div className="h-[2px] w-20 bg-red-500"></div>
                  <h3 className="text-3xl font-black italic tracking-tighter">"CRAFTING DIGITAL <br />EXPERIENCES."</h3>
                </div>
              </div>
            </div>

            {/* Right Column: Info & Skills */}
            <div className="space-y-16">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">About the author</span>
                </div>

                <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter">
                  LEARN <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">MY STORY.</span>
                </h2>

                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                  Saya memandang setiap pixel sebagai sebuah peluang untuk berinovasi. Sebagai seorang mahasiswa di Universitas Widyatama, saya tidak hanya belajar teori, tetapi aktif mengeksplorasi batas-batas teknologi modern.
                </p>
              </div>

              {/* Skill Bento Grid */}
              <div className="grid gap-6">
                {skillCategories.map((cat, i) => (
                  <div
                    key={i}
                    className={`group relative p-8 rounded-[2rem] bg-gradient-to-br ${cat.color} to-zinc-900 border border-white/5 hover:border-red-500/30 transition-all duration-500`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-black/40 rounded-xl text-red-500 border border-white/5 group-hover:scale-110 transition-transform">
                        <cat.icon size={28} />
                      </div>
                      <div className="text-[10px] font-black text-gray-500 group-hover:text-red-500 transition-colors uppercase tracking-[0.2em]">0{i + 1}</div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase group-hover:translate-x-2 transition-transform">{cat.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill, si) => (
                          <span key={si} className="px-4 py-1.5 bg-black/40 border border-white/10 rounded-full text-xs text-gray-400 group-hover:text-white group-hover:border-red-500/20 transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Shadow Decor */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>
                  </div>
                ))}
              </div>

              {/* Tech Logos Footer */}
              <div className="pt-10 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
                  <img src="https://skillicons.dev/icons?i=react,nextjs,tailwind,nodejs,git,figma&theme=dark" alt="Stack" />
                </div>
                <p className="text-[10px] text-gray-600 mt-6 font-mono tracking-widest uppercase italic">The full stack ecosystem I thrive in.</p>
              </div>

              <div className="pt-8">
                <a href="#contact" className="group relative inline-flex items-center gap-6 text-white text-xl font-black tracking-tighter">
                  <span className="relative z-10">HIRE ME FOR PROJECTS</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all group-hover:scale-110 rotate-[-15deg] group-hover:rotate-0">
                    <Icons.ArrowRight size={24} />
                  </div>
                </a>
              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

// ========== PORTFOLIO COMPONENT ==========
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'LuxeStore E-commerce',
      description: 'A personal exploration into e-commerce logic. I built a shopping cart, product filters, and payment flow to understand how online stores work.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=350&fit=crop',
      tags: ['React', 'Redux', 'Tailwind', 'API'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'MovieVerse Explorer',
      description: 'I love movies, so I created this app to browse the TMDB database. It was a fun way to learn about fetching data from external APIs.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=350&fit=crop',
      tags: ['React', 'Rest API', 'Axios', 'CSS Module'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'TaskFlow Kanban',
      description: 'A productivity tool I made for myself to organize tasks. It features drag-and-drop to keep things interactive and fun.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=500&h=350&fit=crop',
      tags: ['React', 'DnD Kit', 'Tailwind', 'Vite'],
      color: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          {/* Header Section with Animated Decoration */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>

              <h2 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter relative z-10">
                MY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-gradient-x">CREATIONS</span>
              </h2>

              <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-transparent rounded-full mb-6"></div>

              <p className="text-gray-400 max-w-lg text-lg leading-relaxed border-l-2 border-white/10 pl-6">
                A curated collection of my experiments and production-ready applications. Each project represents a milestone in my learning journey.
              </p>
            </div>

            <a href="#" className="group flex items-center gap-3 text-white px-8 py-4 bg-zinc-900 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
              <span className="font-black text-xs tracking-widest">VIEW ALL EXPERIMENTS</span>
              <Icons.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Projects Grid with Staggered Animation */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group relative bg-zinc-900 border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Spotlight Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition duration-700`}></div>

                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 opacity-80`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition duration-700 ease-in-out"
                  />

                  {/* Floating Action Button */}
                  <div className="absolute top-4 right-4 z-20 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 delay-100">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition shadow-lg">
                      <Icons.ExternalLink size={20} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative z-20 -mt-16">
                  <div className="flex flex-col gap-5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-3xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors">{project.description}</p>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <button className="text-xs font-black text-white hover:text-red-500 transition-all flex items-center gap-3 group/btn tracking-widest uppercase">
                        Details <div className="h-[1px] w-5 bg-red-500 group-hover/btn:w-10 transition-all duration-500"></div>
                      </button>
                      <button className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5">
                        <Icons.Github size={18} />
                      </button>
                    </div>
                  </div>
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
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side: Text & Socials */}
            <div className="space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-green-400 uppercase tracking-wide">Available for Work</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
                Let's build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-500">incredible.</span>
              </h2>

              <p className="text-lg text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                <a href="mailto:arull@example.com" className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-black text-xs tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-white/5 uppercase">
                  <Icons.Mail size={18} />
                  <span>Send Email</span>
                </a>
                <button className="flex items-center justify-center gap-3 px-10 py-5 bg-zinc-900 border border-white/10 text-white font-black text-xs tracking-widest rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl uppercase">
                  <Icons.Copy size={18} />
                  <span>Copy Email</span>
                </button>
              </div>

              <div className="pt-8 border-t border-white/10 flex flex-wrap justify-center md:justify-start gap-8">
                {['GitHub', 'LinkedIn', 'Instagram', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                    <span className="text-sm font-bold uppercase tracking-widest">{social}</span>
                    <Icons.ArrowRight size={14} className="-rotate-45 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side: Interactive Form Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50 transition duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50 transition duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      required
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50 transition duration-300 h-32 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSent}
                    className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-500 ${isSent ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] shadow-xl'}`}
                  >
                    {isSubmitting ? (
                      <Icons.Loader className="animate-spin" size={20} />
                    ) : isSent ? (
                      <>
                        <Icons.Check size={20} />
                        <span>Success!</span>
                      </>
                    ) : (
                      <>
                        <span>Broadcast Message</span>
                        <Icons.Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

// ========== FOOTER COMPONENT ==========
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="text-2xl font-black text-white tracking-tight">ARULL<span className="text-red-500">.</span></span>
          <p className="text-gray-500 text-xs mt-2 max-w-xs">
            Creating digital experiences that blend innovation with functionality.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-gray-400 text-sm font-medium">
            &copy; {year} Arull Portfolio. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1.5">
            <span>Powered by</span>
            <span className="text-gray-400 font-bold">React</span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span className="text-gray-400 font-bold">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

// ========== LOCK SCREEN COMPONENT ==========
const LockScreen = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleUnlockAttempt = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === 'arull') {
      setIsUnlocking(true);
      setTimeout(onUnlock, 1500); // Smooth transition time
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 500); // Reset error state
    }
  };

  return (
    <div className={`fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-3xl transition-all duration-1000 ${isUnlocking ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'}`}>

      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Lock Card */}
      <div className={`relative z-10 flex flex-col items-center w-full max-w-sm mx-4 p-10 bg-zinc-900/60 border border-white/5 rounded-[40px] shadow-2xl backdrop-blur-xl transition-all duration-300 ${error ? 'shake border-red-500/50' : ''}`}>

        {/* Profile / Icon */}
        <div className="relative mb-8">
          <div className={`absolute -inset-4 bg-gradient-to-br from-red-500/20 to-cyan-500/20 rounded-full blur-xl transition-all duration-500 ${isUnlocking ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
          <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-white/10 shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=150&h=150&fit=crop"
                alt="User"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            {/* Status Indicator */}
            <div className="absolute bottom-2 right-1 w-5 h-5 bg-zinc-900 rounded-full flex items-center justify-center ring-2 ring-black">
              <div className={`w-2.5 h-2.5 rounded-full ${isUnlocking ? 'bg-green-500 animate-ping' : 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]'}`}></div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            PORTFOLIO ARULL
          </h2>
          <p className="text-gray-500 text-sm font-medium tracking-widest uppercase animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Secured Access
          </p>
        </div>

        {/* Input */}
        <form onSubmit={handleUnlockAttempt} className="w-full relative">
          <div className={`relative group transition-all duration-500 ${isUnlocking ? 'opacity-0 translate-y-4' : 'opacity-100'}`}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              disabled={isUnlocking}
              className="w-full bg-black/40 border border-white/10 rounded-2xl pl-5 pr-12 py-4 text-center text-white placeholder-gray-600 focus:outline-none focus:border-white/20 focus:bg-black/60 transition-all tracking-wider text-lg shadow-inner"
              autoFocus
            />

            {/* Submit Icon Button */}
            <button
              type="submit"
              disabled={!password || isUnlocking}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/5 rounded-xl text-gray-400 hover:bg-white hover:text-black hover:scale-105 disabled:opacity-0 disabled:scale-90 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
          </div>
        </form>

        {/* Hint or Loading State */}
        <div className="h-8 mt-6 flex items-center justify-center">
          {isUnlocking ? (
            <div className="flex items-center gap-2 text-green-500 text-xs font-bold tracking-widest animate-pulse">
              <Icons.Sparkles size={12} />
              GRANTING ACCESS
            </div>
          ) : (
            <p className="text-xs text-zinc-700 font-medium">Hint: arull</p>
          )}
        </div>

      </div>
    </div>
  );
};

// ========== TEXT REVEAL COMPONENT ==========
const TextReveal = ({ text, delay = 0, className = "" }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block animate-slide-up"
          style={{ animationDelay: `${delay + i * 0.05}s`, opacity: 0, animationFillMode: 'forwards' }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

// ========== WELCOME OVERLAY COMPONENT ==========
const WelcomeOverlay = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000); // Display for 4s
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-40 bg-black flex items-center justify-center animate-zoom-out delay-3000 pointer-events-none">
      <div className="text-center relative z-10">
        <div className="mb-6 flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-cyan-600 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="relative bg-black p-3 rounded-full border border-white/20">
              <Icons.Sparkles size={40} className="text-white animate-spin-slow" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden">
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-widest animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-red-500">INITIALIZING</span> SYSTEM
            </h1>
          </div>

          <div className="overflow-hidden">
            <div className="inline-block bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent transform scale-110">
              <h2 className="text-2xl md:text-4xl font-bold tracking-[0.2em] animate-slide-up" style={{ animationDelay: '1s' }}>
                WELCOME, ARULL
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-xs mx-auto">
          <div className="h-0.5 w-full bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 to-cyan-500 animate-[expand_2s_ease-out_forwards]" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-gray-500 font-mono">
            <span>LOADING ASSETS</span>
            <span>100%</span>
          </div>
        </div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-red-500 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-500 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-10 left-10 text-[10px] text-gray-800 font-mono">v2.0.24</div>
      </div>
    </div>
  );
};

// ========== BACKGROUND BEAMS COMPONENT ==========
const BackgroundBeams = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
  );
};

// ========== MAIN APP ==========
export default function App() {
  const [isLocked, setIsLocked] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleUnlock = () => {
    setIsLocked(false);
    setShowWelcome(true);
  };

  const handleWelcomeComplete = () => {
    setShowWelcome(false); // Can be used to trigger other main content animations if needed
  };

  return (
    <div className="bg-black text-white overflow-x-hidden min-h-screen relative">
      {isLocked && <LockScreen onUnlock={handleUnlock} />}
      {!isLocked && showWelcome && <WelcomeOverlay onComplete={handleWelcomeComplete} />}

      <div className={`transition-opacity duration-1000 ${isLocked ? 'opacity-0' : 'opacity-100'}`}>
        <BackgroundBeams />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
