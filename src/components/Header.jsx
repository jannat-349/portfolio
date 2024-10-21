import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo-container">
                <Link to={"/"} className="fancy-name">Jannatul Ferdoush Jannati</Link>
            </div>
            <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}> About</Link>
                <Link to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}> Projects</Link>
                <Link to="/researches" className="nav-link" onClick={() => setMenuOpen(false)}> Researches</Link>
                <Link to="/education" className="nav-link" onClick={() => setMenuOpen(false)}> Education</Link>
                <Link to="/achievements" className="nav-link" onClick={() => setMenuOpen(false)}> Achievements</Link>
            </nav>
            <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleMenu}
                className="hamburger-menu"
            >
                <MenuIcon />
            </IconButton>
        </header>
    );
};

export default Header;
