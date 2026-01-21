import React from 'react';
import { Icons } from '../common/Icons';
import FadeInSection from '../common/FadeInSection';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
            <div className="max-w-4xl mx-auto text-center">
                <FadeInSection>
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-white">
                            Siap Memulai <span className="text-red-500">Kolaborasi?</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Hubungi tim kami untuk konsultasi pengembangan sistem perpustakaan atau proyek digital lainnya.
                        </p>
                        <div className="flex justify-center gap-6">
                            <a href="#" className="p-4 bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition duration-300">
                                <Icons.Instagram size={24} />
                            </a>
                            <a href="#" className="p-4 bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition duration-300">
                                <Icons.LinkedIn size={24} />
                            </a>
                            <a href="mailto:team@smkn11kabtangerang.sch.id" className="p-4 bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition duration-300">
                                <Icons.ExternalLink size={24} />
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 pt-8">
                            &copy; {new Date().getFullYear()} Tim Developer Web SMKN 11 Kab. Tangerang. All rights reserved.
                        </p>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Contact;
