import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MiniBio from './components/MiniBio';
import Parcours from './components/Parcours';
import SavoirFaire from './components/SavoirFaire';
import Projets from './components/Projets';
import Experience from './components/Experience';
import Contact from './components/Contact';

function Home() {
    const [introVisible, setIntroVisible] = useState(true);
    const [typingText, setTypingText] = useState('');
    const fullText = "CORENTIN LE ROUX";

    // Typing effect
    useEffect(() => {
        if (!introVisible) return;

        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setTypingText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [introVisible]);

    // Handle Enter Site
    const handleEnterSite = (e) => {
        e.preventDefault();
        const content = document.querySelector('.intro-content');
        const overlay = document.getElementById('intro-overlay');

        if (content) content.classList.add('content-disappear');

        setTimeout(() => {
            if (overlay) overlay.classList.add('fade-out');
        }, 200);

        setTimeout(() => {
            setIntroVisible(false);
            document.body.style.overflow = 'auto';
        }, 1400);
    };

    useEffect(() => {
        if (introVisible) {
            document.body.style.overflow = 'hidden';
        }
    }, [introVisible]);

    return (
        <>
            {introVisible && (
                <section id="intro-overlay">
                    <div className="intro-content">
                        <h2 className="intro-subtitle">PORTFOLIO</h2>
                        <h1 className="intro-title" id="typing-title">{typingText}</h1>
                        <button id="enter-site-btn" onClick={handleEnterSite}>
                            DÉCOUVRIR <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                    </div>
                </section>
            )}

            <Navigation />
            <Hero />
            <MiniBio />

            {/* Reordered to match index_test.html order: Projets, SavoirFaire, Parcours, Experience, Contact */}
            <div id="projets_experiences">
                <Projets />
            </div>

            <SavoirFaire />
            <Parcours />
            <Experience />
            <Contact />
        </>
    );
}

export default Home;
