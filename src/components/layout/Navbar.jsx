import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css'; // Component specific styles if needed, or stick to global Utility classes

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <NavLink to="/" className="nav-logo">
                    <img src={logo} alt="Real Ighos" className="logo-img" />
                </NavLink>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="nav-actions">
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <button className="mobile-toggle" onClick={toggleMenu} aria-label="Menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
