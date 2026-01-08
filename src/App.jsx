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

          <div className="flex gap-4 flex-wrap pt-4">
            <a href="#portfolio" className="group relative px-8 py-4 bg-white text-black font-bold text-sm rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <span className="relative z-10 group-hover:text-white transition">SEE MY PROJECTS</span>
            </a>

            <a href="#contact" className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-sm rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              SAY HELLO <Icons.ArrowRight size={16} className="group-hover:translate-x-1 transition" />
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
  const skills = [
    { icon: Icons.Code, text: 'React & JS', color: 'text-cyan-400' },
    { icon: Icons.Code, text: 'Tailwind CSS', color: 'text-blue-400' },
    { icon: Icons.Code, text: 'UI/UX Design', color: 'text-purple-400' },
    { icon: Icons.Code, text: 'API Integration', color: 'text-green-400' },
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="bg-zinc-900/40 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 overflow-hidden relative group hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
            {/* Ambient Background Glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition duration-700"></div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">

              {/* Image Section - Floating & Animated */}
              <div className="relative group/image perspective-1000">
                <div className="relative w-72 h-96 mx-auto animate-float transform transition-transform duration-500 group-hover/image:rotate-y-12">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-cyan-500 rounded-2xl transform rotate-6 scale-95 opacity-70 blur-lg group-hover/image:scale-105 transition-all duration-500"></div>
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=350&h=450&fit=crop"
                    alt="Arull"
                    className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10 z-10"
                  />

                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-zinc-950/80 backdrop-blur-xl border border-red-500/30 p-4 rounded-xl shadow-xl animate-bounce delay-1000 z-20">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-xs font-bold text-white">Open to Work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
                    Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 relative">
                      Saya
                      <svg className="absolute w-full h-2 bottom-0 left-0 text-red-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                      </svg>
                    </span>
                  </h2>
                  <p className="text-xl text-gray-400 font-light border-l-4 border-red-500 pl-6 italic">
                    "Menciptakan pengalaman digital yang tidak hanya berfungsi, tetapi juga memukau."
                  </p>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    Saya seorang pengembang web yang berfokus pada detail. Perjalanan saya dimulai dari rasa ingin tahu sederhana yang berubah menjadi obsesi terhadap kode yang bersih dan desain yang presisi.
                  </p>
                  <p className="leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Kini menempuh pendidikan di Universitas Widyatama, saya menggabungkan kreativitas sastra dengan logika pemrograman untuk membangun solusi yang unik.
                  </p>
                </div>

                {/* Animated Stats */}
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {[
                    { label: 'Tahun', val: '3+' },
                    { label: 'Proyek', val: '15+' },
                    { label: 'Klien', val: '8+' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center group/stat hover:-translate-y-1 transition duration-300 cursor-default">
                      <div className="text-3xl font-black text-white group-hover/stat:text-transparent group-hover/stat:bg-clip-text group-hover/stat:bg-gradient-to-r group-hover/stat:from-red-500 group-hover/stat:to-cyan-500 transition-all">
                        {stat.val}
                      </div>
                      <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack with SkillIcons */}
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Technologies & Tools</h3>
                  <div className="group/skills relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 blur-lg opacity-0 group-hover/skills:opacity-100 transition duration-500"></div>
                    <a href="https://skillicons.dev">
                      <img
                        src="https://skillicons.dev/icons?i=react,js,html,css,tailwind,redux,nextjs,nodejs,express,mysql,git,github,figma,vscode&theme=dark"
                        alt="My Skills"
                        className="relative z-10 hover:scale-[1.02] transition-transform duration-300"
                      />
                    </a>
                    <p className="text-[10px] text-gray-600 mt-2 italic">* Powered by SkillIcons.dev</p>
                  </div>
                </div>

                <a href="#contact" className="inline-flex items-center gap-2 text-red-400 font-bold hover:text-red-300 transition group hover:translate-x-2 duration-300">
                  <span>Lihat Curiculum Vitae</span>
                  <Icons.ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                </a>

              </div>
            </div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-30">
              <div className="animate-shimmer w-full h-full"></div>
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
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-black text-white mb-2 tracking-tight">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Creations</span>
              </h2>
              <p className="text-gray-400 max-w-lg">
                Here are some of the projects I've built while learning and exploring new technologies.
              </p>
            </div>
            <a href="#" className="flex items-center gap-2 text-white border-b border-red-500 pb-1 hover:text-red-500 transition">
              See All Experiments <Icons.ArrowRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group relative bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Spotlight Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition duration-500`}></div>

                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10 opacity-60`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out"
                  />

                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition duration-300">
                      <Icons.ExternalLink size={18} />
                    </div>
                  </div>
                </div>

                <div className="p-8 relative z-20 -mt-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex gap-4">
                      <button className="text-sm font-bold text-white hover:text-red-500 transition flex items-center gap-2">
                        Details
                      </button>
                      <button className="text-sm font-bold text-gray-500 hover:text-white transition flex items-center gap-2">
                        View Code <Icons.Github size={14} />
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
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeInSection>
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[3rem] p-8 md:p-16 text-center overflow-hidden relative group">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 bg-red-500/10 rounded-2xl mb-8 text-red-500 animate-bounce">
                <Icons.Sparkles size={24} />
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                Keep In <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">Touch.</span>
              </h2>

              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Whether you want to discuss technology, share ideas, or just say hi, I'm always open to chat!
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
                <a href="mailto:arull@example.com" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  Email Me
                </a>
              </div>

              <div className="flex justify-center gap-8 border-t border-white/10 pt-10">
                {['GitHub', 'LinkedIn', 'Instagram', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="text-gray-500 hover:text-white font-bold text-sm tracking-widest uppercase transition-colors hover:scale-110 transform">
                    {social}
                  </a>
                ))}
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
    <footer className="border-t border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 text-sm">
          Built with <span className="text-red-500">❤️</span> by Arull • {year}
        </p>
        <p className="text-gray-500 text-xs mt-2">Designed & Developed with React & Tailwind CSS</p>
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
      <div className={`relative z-10 flex flex-col items-center w-full max-w-sm mx-4 p-10 bg-zinc-900/60 border border-white/5 rounded-[40px] shadow-2xl backdrop-blur-xl transition-all duration-300 ${error ? 'animate-shake border-red-500/50' : ''}`}>

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
