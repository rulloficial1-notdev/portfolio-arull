import React from 'react';
import FadeInSection from '../common/FadeInSection';
import timImg from '../../assets/images/tim.jpeg';

const About = () => {
    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
            <div className="max-w-7xl mx-auto">
                <FadeInSection>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Tentang <span className="text-blue-500">Kami</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                            <div className="space-y-6 text-lg text-gray-300">
                                <p className="leading-relaxed">
                                    Tim Developer Web Perpustakaan SMKN 11 Kabupaten Tangerang dibentuk dengan satu visi: <strong className="text-white bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">mendigitalisasi akses pengetahuan</strong>. Kami percaya bahwa teknologi web modern dapat menjembatani siswa dengan dunia literasi tanpa batas.
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
                                    <h3 className="text-3xl font-bold text-blue-500 mb-1">24/7</h3>
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

export default About;
