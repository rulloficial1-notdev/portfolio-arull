import React from 'react';
import { Icons } from '../common/Icons';
import FadeInSection from '../common/FadeInSection';
import dashboardImg from '../../assets/images/dashboard_perpus.png';
import brainstormingImg from '../../assets/images/brainstorming.png';

const Portfolio = () => {
    const projects = [
        {
            title: 'Perpustakaan Digital SMKN 11',
            description: 'Sistem peminjaman online, manajemen koleksi, dan riwayat pengguna dengan dashboard admin.',
            image: dashboardImg,
            tags: ['React', 'Tailwind', 'API', 'UX'],
            link: 'http://perpustakaan-smk11.pages.dev/',
        },
        {
            title: 'Portal Pembelajaran Interaktif',
            description: 'Website konten belajar berbasis multimedia dengan jadwal dan evaluasi otomatis.',
            image: brainstormingImg,
            tags: ['Next.js', 'Supabase', 'Responsive'],
            link: '#',
        },
        {
            title: 'Dashboard Kinerja Sekolah',
            description: 'Analitik peminjaman, statistik kunjungan, dan laporan trend untuk masing-masing guru.',
            image: dashboardImg,
            tags: ['D3.js', 'Chart', 'Data-driven'],
            link: '#',
        },
    ];

    return (
        <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050609]">
            <div className="max-w-7xl mx-auto">
                <FadeInSection>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                            Proyek <span className="text-red-500">Unggulan</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                            Ini adalah kumpulan proyek terbaik dari tim kami. Setiap proyek dirancang untuk memberi dampak nyata pada pengalaman pengguna dan kinerja sistem.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {projects.map((project, i) => (
                            <article
                                key={i}
                                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/75 shadow-2xl shadow-black/40 transition-transform duration-500 hover:-translate-y-2 hover:shadow-red-500/20"
                            >
                                <div className="relative overflow-hidden h-52">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <span className="absolute top-3 left-3 rounded-full bg-red-500/95 px-3 py-1 text-xs font-bold text-white">Featured</span>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-semibold text-white/80 bg-white/5 px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-300"
                                    >
                                        Lihat Proyek
                                        <Icons.ArrowRight size={16} />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <a
                            href="http://perpustakaan-smk11.pages.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-red-500/40 px-6 py-3 text-red-300 font-bold hover:bg-red-500/10 transition"
                        >
                            Lihat Semua Proyek
                            <Icons.ExternalLink size={16} />
                        </a>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Portfolio;
