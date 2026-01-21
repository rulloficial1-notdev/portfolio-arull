import React from 'react';
import { Icons } from '../common/Icons';
import FadeInSection from '../common/FadeInSection';
import presentationFile from '../../assets/documents/tugas presentasi website perpustakaan dev.pptx';

const Presentation = () => {
    return (
        <section id="presentation" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <FadeInSection>
                    <div className="relative bg-zinc-900 rounded-3xl p-8 md:p-16 border border-red-500/30 overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-red-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                            <div className="space-y-6">
                                <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20 text-red-500 mb-4">
                                    <Icons.FileText size={32} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    Unduh Dokumen <br />
                                    <span className="text-red-500">Presentasi & Proposal</span>
                                </h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Pelajari lebih lanjut tentang detail teknis, roadmap pengembangan, dan fitur lengkap sistem perpustakaan kami dalam dokumen presentasi resmi.
                                </p>
                                <div className="flex gap-4">
                                    <a href={presentationFile} download="tugas presentasi website perpustakaan dev.pptx" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition shadow-lg shadow-red-600/30 flex items-center gap-2">
                                        <Icons.Download size={18} />
                                        Download PPTX
                                    </a>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-zinc-800 rounded-xl p-6 border border-gray-700 transform rotate-2 hover:rotate-0 transition duration-500 shadow-2xl">
                                    <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">
                                        <div className="w-10 h-10 rounded bg-red-500/20 flex items-center justify-center text-red-500">
                                            <Icons.FileText size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm w-48 truncate">tugas presentasi website perpustakaan dev.pptx</h4>
                                            <p className="text-xs text-gray-500">PPTX File • Ready to Download</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2 bg-gray-700 rounded w-3/4" />
                                        <div className="h-2 bg-gray-700 rounded w-1/2" />
                                        <div className="h-2 bg-gray-700 rounded w-5/6" />
                                        <div className="h-2 bg-gray-700 rounded w-full" />
                                    </div>
                                    <div className="mt-6 flex justify-end">
                                        <span className="text-xs text-red-400 font-bold hover:underline cursor-pointer">Preview not available (PPTX)</span>
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

export default Presentation;
