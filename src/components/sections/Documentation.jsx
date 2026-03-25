import React from 'react';
import { Icons } from '../common/Icons';
import FadeInSection from '../common/FadeInSection';

const Documentation = () => {
    const docs = [
        {
            title: 'Technical Documentation',
            description: 'Complete technical specs, API documentation, and system architecture details.',
            icon: Icons.Code,
            status: 'Available',
            color: 'blue'
        },
        {
            title: 'User Manual',
            description: 'Step-by-step guide for administrators and students on how to use the system.',
            icon: Icons.FileText,
            status: 'In Progress',
            color: 'green'
        },
        {
            title: 'API Reference',
            description: 'Detailed API endpoints, request/response formats, and authentication methods.',
            icon: Icons.Code,
            status: 'Coming Soon',
            color: 'purple'
        }
    ];

    return (
        <section id="documentation" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
            <div className="max-w-7xl mx-auto">
                <FadeInSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            <span className="text-blue-500">Dokumentasi</span> & Resources
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Akses dokumentasi lengkap, panduan pengguna, dan resources pengembangan untuk sistem perpustakaan digital.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {docs.map((doc, index) => (
                            <div key={index} className="group bg-zinc-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/30 transition duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                                    doc.color === 'blue' ? 'bg-blue-500/10 text-blue-500' :
                                    doc.color === 'green' ? 'bg-green-500/10 text-green-500' :
                                    'bg-purple-500/10 text-purple-500'
                                }`}>
                                    <doc.icon size={24} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{doc.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">{doc.description}</p>

                                <div className="flex items-center justify-between">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        doc.status === 'Available' ? 'bg-green-500/10 text-green-400' :
                                        doc.status === 'In Progress' ? 'bg-yellow-500/10 text-yellow-400' :
                                        'bg-gray-500/10 text-gray-400'
                                    }`}>
                                        {doc.status}
                                    </span>

                                    {doc.status === 'Available' && (
                                        <button className="text-blue-500 hover:text-blue-400 font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            View Docs
                                            <Icons.ArrowRight size={14} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-500 text-sm">
                            Dokumentasi lengkap akan segera tersedia. Untuk informasi lebih lanjut, hubungi tim developer.
                        </p>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Documentation;