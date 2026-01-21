import React from 'react';
import { Icons } from '../common/Icons';
import TypewriterEffect from '../common/TypewriterEffect';

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

export default Hero;
