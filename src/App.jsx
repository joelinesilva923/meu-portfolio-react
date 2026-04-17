import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Seu CSS original aqui

export default function App() {
    // Inicializa o tema lendo do localStorage (ou falso como padrão)
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('tema') === 'dark';
    });

    // Efeito para aplicar a classe no <body> sempre que isDark mudar
    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('tema', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('tema', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark((prevTheme) => !prevTheme);
    };

    return (
        <>
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}