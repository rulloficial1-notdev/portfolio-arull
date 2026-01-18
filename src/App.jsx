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
  const roles = ['Frontend Developer', 'UI/UX Designer', 'React Specialist', 'Tech Enthusiast'];
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
      setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left - Text Content */}
        <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-red-500/20 rounded-full w-fit">
            <Icons.Sparkles size={14} className="text-red-500" />
            <span className="text-sm text-gray-300">Welcome to my portfolio</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Arull</span>
          </h1>

          <div className="h-20 flex items-center">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {text}<span className="text-cyan-400 animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            Crafting beautiful, fast, and intuitive digital experiences with modern React and contemporary design principles. Let's build something extraordinary together.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#portfolio" className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition transform hover:-translate-y-0.5">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 bg-zinc-900 border border-gray-700 text-white font-bold rounded-lg hover:bg-zinc-800 transition">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="flex justify-center animate-in fade-in slide-in-from-right duration-700">
          <div className="relative w-80 h-80">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
              alt="Arull"
              className="w-full h-full object-cover rounded-2xl filter brightness-105 contrast-110 hover:brightness-125 transition duration-300"
            />
            <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-br from-red-500/50 to-cyan-500/50 pointer-events-none animate-pulse" />
            <div className="absolute -inset-6 rounded-2xl bg-gradient-to-br from-red-500/20 to-cyan-500/20 blur-3xl opacity-50 -z-10 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

// ========== ABOUT COMPONENT ==========
const About = () => {
  const skills = [
    { icon: Icons.Code, text: 'React & JavaScript' },
    { icon: Icons.Code, text: 'CSS3 & Tailwind' },
    { icon: Icons.Code, text: 'UI/UX Design' },
    { icon: Icons.Code, text: 'Responsive Design' },
    { icon: Icons.Code, text: 'Web Performance' },
    { icon: Icons.Code, text: 'Git & GitHub' },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="bg-zinc-900/50 border border-red-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 overflow-hidden relative group hover:border-red-500/40 transition duration-300">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-500/0 via-red-500 to-red-500/0 opacity-50" />
            
            <div className="grid md:grid-cols-7 gap-12">
              {/* Image Section */}
              <div className="md:col-span-2 flex justify-center">
                <div className="relative w-64 h-80">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=350&h=450&fit=crop"
                    alt="Arull"
                    className="w-full h-full object-cover rounded-2xl filter brightness-105 contrast-110 hover:brightness-125 hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-br from-red-500/40 to-cyan-500/40 animate-pulse pointer-events-none" />
                </div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-5 space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">
                    Tentang <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Saya</span>
                  </h2>
                  <p className="text-gray-400 italic border-l-4 border-cyan-400 pl-4">
                    Perpuduan logika kode dan estetika desain.
                  </p>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    Perjalanan saya di dunia digital dimulai sejak bangku SMK. Sebagai seorang pembelajar otodidak, saya terbiasa memecahkan masalah secara mandiri. Bagi saya, coding adalah seni menyusun logika yang hidup.
                  </p>
                  <p className="leading-relaxed">
                    Saat ini, saya menempuh pendidikan Sastra Inggris di Universitas Widyatama. Kombinasi kemampuan teknis dan komunikasi adalah kekuatan utama saya dalam setiap proyek.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-700">
                  <div className="text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20 hover:border-red-500/50 transition">
                    <div className="text-3xl font-bold text-red-500">3+</div>
                    <div className="text-sm text-gray-400">Tahun Pengalaman</div>
                  </div>
                  <div className="text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20 hover:border-red-500/50 transition">
                    <div className="text-3xl font-bold text-red-500">15+</div>
                    <div className="text-sm text-gray-400">Proyek Selesai</div>
                  </div>
                  <div className="text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20 hover:border-red-500/50 transition">
                    <div className="text-3xl font-bold text-red-500">8+</div>
                    <div className="text-sm text-gray-400">Klien Puas</div>
                  </div>
                </div>

                {/* CV Button */}
                <a href="#" className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition">
                  Unduh CV
                </a>

                {/* Skills */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Skills & Technology</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center gap-2 p-4 bg-zinc-800/50 border border-gray-700 rounded-lg hover:border-red-500/50 hover:bg-zinc-800 hover:shadow-lg hover:shadow-red-500/20 transition group"
                      >
                        <div className="w-10 h-10 flex items-center justify-center bg-zinc-700 rounded-lg text-red-500 group-hover:bg-red-500 group-hover:text-white transition">
                          <skill.icon size={18} />
                        </div>
                        <span className="text-sm font-semibold text-gray-300 text-center">{skill.text}</span>
                      </div>
                    ))}
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

// ========== PORTFOLIO COMPONENT ==========
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Neon E-Commerce',
      description: 'A futuristic e-commerce platform with smooth animations, real-time cart functionality, and modern UI design.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop',
      tags: ['React', 'CSS3', 'E-commerce'],
    },
    {
      id: 2,
      title: 'Fintech Dashboard',
      description: 'Interactive financial management dashboard with charts, analytics, dark mode, and responsive layouts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop',
      tags: ['React', 'Chart.js', 'Dashboard'],
    },
    {
      id: 3,
      title: 'Social Media App',
      description: 'Full-featured social platform with image uploads, real-time notifications, and community features.',
      image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=350&fit=crop',
      tags: ['React', 'Firebase', 'Social'],
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-cyan-500 mx-auto rounded" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group bg-zinc-900/50 border border-gray-700 rounded-xl overflow-hidden hover:border-red-500/50 transition duration-300 hover:shadow-xl hover:shadow-red-500/20"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-red-500/10 to-cyan-500/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-bold text-red-500 bg-red-500/10 border border-red-500/20 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex gap-3 pt-2">
                    <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-red-500 bg-red-500/10 border border-red-500/20 rounded hover:bg-red-500 hover:text-white transition">
                      <Icons.ExternalLink size={14} />
                      Demo
                    </a>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded hover:bg-cyan-500 hover:text-white transition">
                      <Icons.Github size={14} />
                      Code
                    </a>
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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Let's <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-cyan-500 mx-auto rounded" />
          </div>

          <div className="bg-zinc-900/50 border border-red-500/20 backdrop-blur-xl rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-gray-300 mb-4">I'd love to hear from you. Let's discuss how I can help bring your ideas to life.</p>
              <a href="mailto:arull@example.com" className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent hover:scale-105 transition">
                arull@example.com
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700">
              <a href="#" className="flex flex-col items-center gap-3 p-4 hover:bg-zinc-800 rounded-lg transition">
                <Icons.Github size={24} className="text-red-500" />
                <span className="font-bold">GitHub</span>
              </a>
              <a href="#" className="flex flex-col items-center gap-3 p-4 hover:bg-zinc-800 rounded-lg transition">
                <Icons.LinkedIn size={24} className="text-red-500" />
                <span className="font-bold">LinkedIn</span>
              </a>
              <a href="#" className="flex flex-col items-center gap-3 p-4 hover:bg-zinc-800 rounded-lg transition">
                <Icons.Instagram size={24} className="text-red-500" />
                <span className="font-bold">Instagram</span>
              </a>
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

// ========== MAIN APP ==========
export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
