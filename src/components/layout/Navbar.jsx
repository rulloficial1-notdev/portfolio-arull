import React, { useState, useEffect } from 'react';
import { Icons } from '../common/Icons';

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
        <nav className={`fixed top-0 left-0 right-0 h-20 bg-black/85 backdrop-blur-3xl z-1000 border-b border-gray-700/50 transition-all duration-300 ${scrolled ? 'shadow-lg border-blue-500/20' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-blue-500/20 rounded-lg text-blue-500">
                        <Icons.Code size={20} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent leading-none">DEV TEAM</span>
                        <span className="text-xs text-gray-400 font-medium tracking-wider">SMKN 11 KAB. TANGERANG</span>
                    </div>
                </div>
                <ul className="hidden md:flex gap-8 items-center">
                    <li><a href="#home" className="text-sm font-bold text-gray-400 hover:text-blue-500 transition">Beranda</a></li>
                    <li><a href="#about" className="text-sm font-bold text-gray-400 hover:text-blue-500 transition">Tentang Kami</a></li>
                    <li><a href="#portfolio" className="text-sm font-bold text-gray-400 hover:text-blue-500 transition">Proyek</a></li>
                    <li><a href="#team" className="text-sm font-bold text-gray-400 hover:text-blue-500 transition">Tim</a></li>
                    <li><a href="#presentation" className="text-sm font-bold text-gray-400 hover:text-blue-500 transition">Presentasi</a></li>
                    <li>
                        <a href="#contact" className="px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition shadow-lg shadow-blue-500/25">
                            Hubungi Kami
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
