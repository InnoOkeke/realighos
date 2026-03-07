import { Link } from 'react-router-dom';
import './Footer.css';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <Link to="/" className="footer-logo">
                        <img src={logo} alt="Real Ighos" className="logo-img" />
                        <span className="logo-text">eal Ighos</span>
                    </Link>
                    <p>Building dreams into reality. Your trusted partner in construction and real estate.</p>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <p><MapPin size={16} /> Pavillion Court, Happy home estate, Sangotedo, Lagos</p>
                    <p><Mail size={16} /> Realighos38@gmail.com</p>
                    <p><Phone size={16} /> +2348037965323, +2348087965865</p>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="https://instagram.com/Realighos38" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
