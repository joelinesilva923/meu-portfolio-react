import { useState } from 'react';

export default function Header({ isDark, toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header>
            <div className="logo">Portfólio | J de O S</div>
            
            <nav id="nav-menu" className={isMenuOpen ? 'active' : ''}>
                <ul className="nav-list">
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#projetos" onClick={closeMenu}>Projetos</a></li>
                    <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
                </ul>
            </nav>

            <div className="header-actions">
                <button id="theme-toggle" aria-label="Alternar tema" onClick={toggleTheme}>
                    <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
                </button>
                <button 
                    id="hamburger" 
                    className={isMenuOpen ? 'active' : ''} 
                    aria-label="Abrir menu" 
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
    );
}