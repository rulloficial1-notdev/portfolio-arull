import React from 'react';
import { Icons } from '../common/Icons';
import FadeInSection from '../common/FadeInSection';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <FadeInSection>
                    <div className="space-y-8">
                        <div className="inline-block p-4 bg-zinc-900/50 border border-blue-500/20 rounded-2xl backdrop-blur-sm">
                            <Icons.Sparkles size={32} className="text-blue-500 animate-pulse" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Siap Memulai <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Kolaborasi?</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
                            Hubungi tim kami untuk konsultasi pengembangan sistem perpustakaan atau proyek digital lainnya.
                        </p>

                        <div className="flex justify-center gap-6 pt-4">
                            <button className="group p-4 bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1" aria-label="Instagram">
                                <Icons.Instagram size={24} className="group-hover:scale-110 transition-transform" />
                            </button>
                            <button className="group p-4 bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1" aria-label="LinkedIn">
                                <Icons.LinkedIn size={24} className="group-hover:scale-110 transition-transform" />
                            </button>
                            <a href="mailto:team@smkn11kabtangerang.sch.id" className="group p-4 bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1" aria-label="Email">
                                <Icons.ExternalLink size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>

                        <div className="pt-8 border-t border-gray-800/50">
                            <p className="text-sm text-gray-500">
                                &copy; {new Date().getFullYear()} Tim Developer Web SMKN 11 Kab. Tangerang. All rights reserved.
                            </p>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Contact;
