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
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-content">
                <div className="navbar-brand">
                    <div className="brand-icon">
                        <Icons.Sparkles size={24} />
                    </div>
                    <span className="brand-text">ARULL.DEV</span>
                </div>
                <ul className="navbar-links">
                    <li>
                        <a href="#home" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="nav-link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="nav-link">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link">
                            Contact
                        </a>
                    </li>
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
    }, [text, isDeleting, index]);

    return (
        <section id="home" className="hero">
            <div className="hero-background" />
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <Icons.Sparkles size={14} />
                        <span>Welcome to my portfolio</span>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="text-gradient">Arull</span>
                    </h1>

                    <div className="hero-typing">
                        <h2>
                            {text}
                            <span className="typing-cursor">|</span>
                        </h2>
                    </div>

                    <p className="hero-description">
                        Crafting beautiful, fast, and intuitive digital experiences with modern React and contemporary design principles. Let's build something extraordinary together.
                    </p>

                    <div className="hero-buttons">
                        <a href="#portfolio" className="btn btn-primary">
                            <span>View My Work</span>
                            <Icons.ArrowRight size={16} />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get In Touch
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="image-container">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                            alt="Arull"
                            className="hero-image"
                        />
                        <div className="image-glow" />
                        <div className="image-border" />
                    </div>
                </div>
            </div>

            <div className="floating-elements">
                <div className="float-element float-1" />
                <div className="float-element float-2" />
                <div className="float-element float-3" />
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
        <section id="about" className="about">
            <div className="section-container">
                <FadeInSection>
                    <div className="section-header">
                        <h2 className="section-title">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <div className="title-line" />
                    </div>

                    <div className="about-content">
                        <div className="about-image-section">
                            <div className="about-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop"
                                    alt="Working on code"
                                    className="about-image"
                                />
                                <div className="image-glow about-glow" />
                                <div className="image-border" />
                            </div>
                        </div>

                        <div className="about-text-section">
                            <div className="about-text">
                                <p>
                                    I'm a passionate frontend developer with a keen eye for design and user experience. I specialize in building responsive, performant web applications that engage users and drive results.
                                </p>
                                <p>
                                    With expertise in React, modern CSS, and web technologies, I transform ideas into beautiful digital solutions. I'm committed to clean code, best practices, and continuous learning.
                                </p>
                            </div>

                            <div className="skills-grid">
                                {skills.map((skill, idx) => (
                                    <div key={idx} className="skill-card" style={{ animationDelay: `${idx * 0.05}s` }}>
                                        <div className="skill-icon">
                                            <skill.icon size={20} />
                                        </div>
                                        <span className="skill-text">{skill.text}</span>
                                    </div>
                                ))}
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
            demo: '#',
            code: '#',
        },
        {
            id: 2,
            title: 'Fintech Dashboard',
            description: 'Interactive financial management dashboard with charts, analytics, dark mode, and responsive layouts.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop',
            tags: ['React', 'Chart.js', 'Dashboard'],
            demo: '#',
            code: '#',
        },
        {
            id: 3,
            title: 'Social Media App',
            description: 'Full-featured social platform with image uploads, real-time notifications, and community features.',
            image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=350&fit=crop',
            tags: ['React', 'Firebase', 'Social'],
            demo: '#',
            code: '#',
        },
    ];

    return (
        <section id="portfolio" className="portfolio">
            <div className="section-container">
                <FadeInSection>
                    <div className="section-header">
                        <h2 className="section-title">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <div className="title-line" />
                    </div>

                    <div className="portfolio-grid">
                        {projects.map((project, idx) => (
                            <div key={project.id} className="project-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className="project-image-wrapper">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                    <div className="project-overlay" />
                                </div>

                                <div className="project-body">
                                    <div className="project-tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-links">
                                        <a href={project.demo} className="project-link demo">
                                            <Icons.ExternalLink size={16} />
                                            <span>Live Demo</span>
                                        </a>
                                        <a href={project.code} className="project-link code">
                                            <Icons.Github size={16} />
                                            <span>View Code</span>
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
        <section id="contact" className="contact">
            <div className="section-container">
                <FadeInSection>
                    <div className="section-header">
                        <h2 className="section-title">
                            Let's <span className="text-gradient">Connect</span>
                        </h2>
                        <div className="title-line" />
                    </div>

                    <div className="contact-box">
                        <div className="contact-text">
                            <p>I'd love to hear from you. Let's discuss how I can help bring your ideas to life.</p>
                            <a href="mailto:arull@example.com" className="contact-email">
                                arull@example.com
                            </a>
                        </div>

                        <div className="social-grid">
                            <a href="#" className="social-button" aria-label="GitHub">
                                <Icons.Github size={24} />
                                <span>GitHub</span>
                            </a>
                            <a href="#" className="social-button" aria-label="LinkedIn">
                                <Icons.LinkedIn size={24} />
                                <span>LinkedIn</span>
                            </a>
                            <a href="#" className="social-button" aria-label="Instagram">
                                <Icons.Instagram size={24} />
                                <span>Instagram</span>
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
        <footer className="footer">
            <div className="section-container">
                <div className="footer-content">
                    <p className="footer-text">
                        Built with <span className="heart">❤️</span> by Arull • {year}
                    </p>
                    <p className="footer-subtext">Designed & Developed with React & Modern CSS</p>
                </div>
            </div>
        </footer>
    );
};

// ========== MAIN APP ==========
export default function App() {
    return (
        <div className="app">
            <Navbar />
            <main className="main-content">
                <Hero />
                <About />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
