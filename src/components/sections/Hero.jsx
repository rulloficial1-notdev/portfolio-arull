import React from 'react';
import { Icons } from '../common/Icons';
import TypewriterEffect from '../common/TypewriterEffect';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-blue-900/10 pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

            {/* Floating Elements Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 text-zinc-800 text-9xl font-bold opacity-5 rotate-12 select-none animate-bounce">CODE</div>
                <div className="absolute bottom-20 right-10 text-zinc-800 text-9xl font-bold opacity-5 -rotate-12 select-none animate-bounce" style={{animationDelay: '1s'}}>DESIGN</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-blue-500/30 rounded-full mx-auto backdrop-blur-sm hover:border-blue-500/60 transition cursor-default group">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-300">Tim Pengembang Perpustakaan Digital</span>
                        <Icons.Sparkles size={14} className="text-blue-400 group-hover:rotate-12 transition-transform" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto h-32 md:h-40 flex flex-col justify-center">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse">
                            Membangun Masa Depan
                        </span>
                        <TypewriterEffect words={['Literasi Digital', 'Teknologi Sekolah', 'Inovasi Siswa']} />
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Kami adalah tim dibalik transformasi digital perpustakaan SMKN 11 Kabupaten Tangerang.
                        <span className="text-blue-400 font-semibold"> Menggabungkan teknologi modern</span> dengan kemudahan akses untuk pendidikan terbaik.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <a href="#portfolio" className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1 hover:scale-[1.02] flex items-center justify-center gap-2">
                            <Icons.Sparkles size={18} className="group-hover:animate-pulse" />
                            Lihat Karya Kami
                            <Icons.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#about" className="group w-full px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                            <Icons.Users size={18} className="group-hover:scale-110 transition-transform" />
                            Tentang Tim
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-500">100%</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Dedikasi</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-500">24/7</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Akses</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-500">∞</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Inovasi</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
