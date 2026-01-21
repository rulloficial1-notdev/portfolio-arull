import React from 'react';
import { Icons } from '../common/Icons';
import FadeInSection from '../common/FadeInSection';
import dashboardImg from '../../assets/images/dashboard_perpus.png';

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
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                                <div>
                                    <div className="inline-block px-3 py-1 mb-4 text-xs font-bold text-red-500 bg-red-500/10 border border-red-500/20 rounded-full">
                                        Versi 2.0 Released
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">
                                        Perpustakaan Digital <br /> SMKN 11 Kab Tangerang
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Platform terintegrasi untuk akses buku, peminjaman, dan layanan perpustakaan dengan mudah dan aman.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                            <Icons.Sparkles size={12} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Akses Instan</h4>
                                            <p className="text-sm text-gray-500">Jelajahi dan pinjam buku dengan cepat.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                            <Icons.Sparkles size={12} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Aman</h4>
                                            <p className="text-sm text-gray-500">Data peminjaman dan siswa terlindungi.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                            <Icons.Sparkles size={12} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">24/7 Tersedia</h4>
                                            <p className="text-sm text-gray-500">Layanan perpustakaan dapat diakses kapan saja.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <a
                                        href="http://perpustakaan-smk11.pages.dev/"
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

export default Portfolio;
