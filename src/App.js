import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// --- ICONS (SVG Components) ---
// Menggunakan SVG inline agar performa cepat dan tidak perlu install library
const Icons = {
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  ),
  ExternalLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
  ),
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  ),
  LinkedIn: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  Code: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  ),
  Terminal: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
  )
};

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">ARULL<span style={{color: 'var(--accent)'}}>.DEV</span></div>
        <ul className="nav-menu">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#portfolio" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

const Hero = () => {
  // Array pekerjaan yang akan diketik secara bergantian
  const roles = ["Fullstack Developer", "UI Engineer", "Tech Enthusiast"];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const speed = isDeleting ? 50 : 100; // Kecepatan ngetik

    const timer = setTimeout(() => {
      setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
    }, speed);

    // Logika ganti kata
    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000); // Jeda sebelum hapus
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length); // Pindah ke kata berikutnya
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h2>SYSTEM READY</h2>
        <h1>HI, I'M <span className="typing-cursor">{text}</span></h1>
        <p>
          Membangun pengalaman digital berkinerja tinggi dengan desain yang presisi. 
          Fokus pada kode bersih, arsitektur skalabel, dan antarmuka pengguna yang intuitif.
        </p>
        <a href="#portfolio" className="btn btn-primary">Explore My Work</a>
      </div>
    </section>
  );
};

// Component Helper untuk Animasi Scroll (Fade In)
// Sudah di-fix dari error sebelumnya
const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div ref={domRef} className={`fade-up ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">System <span>Profile</span></h2>
          <div className="about-content">
            <p className="about-text">
              Pengembang perangkat lunak yang berdedikasi dengan fokus pada ekosistem Modern Web. 
              Saya tidak hanya menulis kode, saya merancang solusi. Saya menggabungkan logika pemrograman yang kuat 
              dengan estetika visual untuk menciptakan produk yang tidak hanya berfungsi, tetapi juga menyenangkan untuk digunakan.
            </p>
            <div className="skills">
              <div className="skill-item"><Icons.Code/> React JS</div>
              <div className="skill-item"><Icons.Terminal/> Node.js</div>
              <div className="skill-item"><Icons.Code/> TypeScript</div>
              <div className="skill-item"><Icons.Code/> Next.js</div>
              <div className="skill-item"><Icons.Code/> Tailwind CSS</div>
              <div className="skill-item"><Icons.Code/> Git Ops</div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

const Portfolio = () => {
  // Data Project yang disesuaikan dengan tema Tech/Dark
  const projects = [
    {
      title: "CYBER ANALYTICS",
      desc: "Dasbor analitik real-time dengan visualisasi data tingkat lanjut menggunakan D3.js dan WebSocket.",
      img: "https://picsum.photos/seed/cyber/500/350"
    },
    {
      title: "NEON COMMERCE",
      desc: "Platform e-commerce headless berkinerja tinggi dengan integrasi Stripe dan animasi GSAP.",
      img: "https://picsum.photos/seed/neon/500/350"
    },
    {
      title: "OBSIDIAN TASK",
      desc: "Aplikasi manajemen produktivitas minimalis yang berjalan offline dengan PWA technology.",
      img: "https://picsum.photos/seed/obsidian/500/350"
    }
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">Selected <span>Works</span></h2>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <div className="card" key={index}>
                <div className="card-img-wrapper">
                  <img src={project.img} alt={project.title} className="card-img" loading="lazy"/>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.desc}</p>
                  <div className="card-links">
                    <button className="btn-small">
                      <Icons.ExternalLink style={{marginRight: '5px'}}/> LIVE DEMO
                    </button>
                    <button className="btn-small">
                      <Icons.Github style={{marginRight: '5px'}}/> SOURCE
                    </button>
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

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">Start <span>Project</span></h2>
          <div className="contact-wrapper">
            <div className="contact-info">
              <span style={{color: 'var(--text-muted)', fontSize: '1rem'}}>Have a project in mind? Let's build something great.</span>
              <a href="mailto:arull@dev.com" className="contact-email">arull@dev.com</a>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="GitHub">
                <Icons.Github />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <Icons.LinkedIn />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <Icons.Instagram />
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Arull Dev. System All Green.</p>
      </div>
    </footer>
  );
};

// --- MAIN APP COMPONENT ---
function App() {
  return (
    <div className="App">
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

export default App;