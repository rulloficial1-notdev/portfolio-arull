import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Team from '../components/sections/Team';
import Portfolio from '../components/sections/Portfolio';
import Presentation from '../components/sections/Presentation';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <div className="bg-black text-white overflow-x-hidden font-sans">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Team />
                <Portfolio />
                <Presentation />
                <Contact />
            </main>
        </div>
    );
};

export default Home;
