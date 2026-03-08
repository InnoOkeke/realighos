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

            {/* Floating WhatsApp Button */}
            <a 
                href="https://wa.me/2348037965323"
                className="whatsapp-float" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
            >
                {/* SVG Icon for WhatsApp */}
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
            </a>
        </footer>
    );
};

export default Footer;
