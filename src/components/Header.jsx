import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/my_photo.jpg';
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
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}><i className="fas fa-home"></i> Home</Link>
                <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}><i className="fas fa-user"></i> About</Link>
                <Link to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}><i className="fas fa-briefcase"></i> Projects</Link>
                <Link to="/researches" className="nav-link" onClick={() => setMenuOpen(false)}><i className="fas fa-file-alt"></i> Researches</Link>
                <Link to="/achievements" className="nav-link" onClick={() => setMenuOpen(false)}><i className="fas fa-trophy"></i> Achievements</Link>
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
