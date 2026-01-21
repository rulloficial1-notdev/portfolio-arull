import React from 'react';
import { Icons } from '../common/Icons';
import FadeInSection from '../common/FadeInSection';
import arullImg from '../../assets/images/arull.jpeg';
import natiImg from '../../assets/images/nati.jpeg';
import alinImg from '../../assets/images/alin.jpeg';
import jahraImg from '../../assets/images/jahra.jpeg';
import nijamImg from '../../assets/images/nijam.jpeg';

const Team = () => {
    const teamMembers = [
        {
            name: 'Arull',
            role: 'Lead Developer',
            image: arullImg,
            socials: { whatsapp: '#', tiktok: '#', instagram: '#' }
        },
        {
            name: 'Natii',
            role: 'UI/UX Designer',
            image: natiImg,
            socials: { whatsapp: '#', tiktok: '#', instagram: '#' }
        },
        {
            name: 'Nijam',
            role: 'Backend Engineer',
            image: nijamImg,
            socials: { whatsapp: '#', tiktok: '#', instagram: '#' }
        },
        {
            name: 'Alin',
            role: 'Frontend Dev',
            image: alinImg,
            socials: { whatsapp: '#', tiktok: '#', instagram: '#' }
        },
        {
            name: 'Jahra',
            role: 'System Analyst',
            image: jahraImg,
            socials: { whatsapp: '#', tiktok: '#', instagram: '#' }
        }
    ];

    const leadMember = teamMembers[0];
    const otherMembers = teamMembers.slice(1);

    const TeamCard = ({ member, large = false }) => (
        <div className={`group relative ${large ? 'w-full' : ''}`}>
            <div className={`relative overflow-hidden rounded-2xl aspect-square mb-4 border border-zinc-800 group-hover:border-red-500/50 transition duration-500`}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                        <p className="text-white font-bold text-lg">{member.name}</p>
                        <p className="text-red-200 text-sm mb-4">{member.role}</p>

                        <div className="flex gap-3">
                            {member.socials.whatsapp && (
                                <a href={member.socials.whatsapp} className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-green-500 transition duration-300">
                                    <Icons.WhatsApp size={16} />
                                </a>
                            )}
                            {member.socials.tiktok && (
                                <a href={member.socials.tiktok} className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition duration-300">
                                    <Icons.TikTok size={16} />
                                </a>
                            )}
                            {member.socials.instagram && (
                                <a href={member.socials.instagram} className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-pink-600 transition duration-300">
                                    <Icons.Instagram size={16} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-500"
                />
            </div>
            <div className="text-center group-hover:opacity-0 transition duration-300">
                <h3 className={`text-white font-bold ${large ? 'text-2xl' : 'text-lg'}`}>{member.name}</h3>
                <p className={`text-red-500 ${large ? 'text-base' : 'text-sm'}`}>{member.role}</p>
            </div>
        </div>
    );

    return (
        <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-zinc-900/50">
            <div className="max-w-7xl mx-auto">
                <FadeInSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Tim <span className="text-red-500">Hebat Kami</span>
                        </h2>
                        <p className="text-gray-400">
                            Orang-orang berdedikasi dibalik layar yang membuat segalanya menjadi mungkin.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-12">
                        {/* Lead */}
                        <div className="w-full max-w-sm relative z-10">
                            <div className="absolute -inset-4 bg-red-500/10 rounded-full blur-2xl opacity-50 pointer-events-none" />
                            <TeamCard member={leadMember} large={true} />
                        </div>

                        {/* Members - Grid 4 cols */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full">
                            {otherMembers.map((member, idx) => (
                                <TeamCard key={idx} member={member} />
                            ))}
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Team;
