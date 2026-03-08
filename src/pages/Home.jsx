import { useRef, useMemo } from 'react';
import { ArrowRight, Home as HomeIcon, Hammer, Building, CheckCircle, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import './Home.css';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';
import heroBg1 from '../assets/images/hero-bg.webp';
import heroBg2 from '../assets/projects/INTERIOR FINISHES/WhatsApp Image 2026-01-10 at 12.11.36 AM.webp';
import heroBg3 from '../assets/projects/CYBER VILE PROJECT LEKKI/1001195449.webp';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const imageModules = import.meta.glob('../assets/projects/**/*.{jpg,jpeg,png,webp}', { eager: true });

const slides = [
    {
        id: 1,
        image: heroBg1,
        title: "Building Your Vision into",
        gradientText: "Timeless Reality",
        description: "We don't just build structures—we engineer legacies. Partner with an industry-leading team to transform your boldest architectural dreams into a high-yield, premium reality."
    },
    {
        id: 2,
        image: heroBg2,
        title: "Where Innovation Meets",
        gradientText: "Masterful Craftsmanship",
        description: "Elevate your standard of living with uncompromising precision. Our world-class civil construction ensures absolute perfection in quality, structural integrity, and breathtaking aesthetics."
    },
    {
        id: 3,
        image: heroBg3,
        title: "Unlock Premium Living &",
        gradientText: "Elite Investments",
        description: "Step into spaces meticulously designed for the modern visionary. From concept to magnificent completion, we deliver striking developments that maximize both ROI and luxury."
    }
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    // For Stats animation Trigger
    const statsRef = useRef(null);
    const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

    const featuredProjects = useMemo(() => {
        const groups = {};
        Object.keys(imageModules).forEach(path => {
            const parts = path.split('/');
            if (parts.length >= 4) {
                const folderName = parts[parts.length - 2];
                const imageUrl = imageModules[path].default;
                if (!groups[folderName]) {
                    groups[folderName] = { title: folderName, images: [] };
                }
                groups[folderName].images.push(imageUrl);
            }
        });
        return Object.values(groups).map((project, idx) => ({
            id: idx,
            title: project.title,
            thumbnail: project.images[0],
            images: project.images
        })).slice(0, 3); // Take top 3 for homepage
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="home-page">
            {/* Premium Hero Slider Section */}
            <section className="hero-premium">
                {slides.map((slide, index) => (
                    <div 
                        key={slide.id} 
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    ></div>
                ))}
                
                <div className="hero-overlay"></div>
                <div className="hero-glass-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                </div>

                <div className="slider-nav">
                    <button className="nav-btn prev" onClick={prevSlide}>
                        <ChevronLeft size={32} />
                    </button>
                    <button className="nav-btn next" onClick={nextSlide}>
                        <ChevronRight size={32} />
                    </button>
                </div>
                
                <motion.div 
                    key={currentSlide} // Causes re-animation on slide change
                    className="hero-content container text-center"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h1 variants={fadeIn}>
                        {slides[currentSlide].title} <br/>
                        <span className="text-gradient">{slides[currentSlide].gradientText}</span>
                    </motion.h1>
                    
                    <motion.p variants={fadeIn} className="hero-desc">
                        {slides[currentSlide].description}
                    </motion.p>
                    
                    <motion.div className="hero-actions justify-center" variants={fadeIn}>
                        <Link to="/projects" className="btn btn-primary btn-glow">
                            Explore Our Projects <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                        <Link to="/contact" className="btn btn-glass">
                            Request a Quote
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Small Scroll Down Arrow */}
                <div className="scroll-indicator">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <ChevronDown size={32} className="text-white opacity-70" />
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section - New */}
            <section className="section why-choose-us bg-light">
                <div className="container">
                    <motion.div 
                        className="wcu-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.div className="wcu-text" variants={fadeIn}>
                            <h4 className="section-subtitle">Why Choose Us</h4>
                            <h2>Excellence in Every Brick We Lay</h2>
                            <p>With over a decade of experience, we bring unmatched quality, reliability, and innovation to every project. We don't just build structures; we build enduring legacies.</p>
                            
                            <ul className="wcu-list">
                                <li><CheckCircle className="text-accent" size={24} /> <span>Uncompromising Quality Standards</span></li>
                                <li><Clock className="text-accent" size={24} /> <span>On-time Project Delivery</span></li>
                                <li><Shield className="text-accent" size={24} /> <span>Sustainable & Safe Construction</span></li>
                            </ul>
                        </motion.div>
                        
                        <motion.div className="wcu-images" variants={fadeIn}>
                            <div className="img-stack">
                                <img src={project2} alt="Quality Construction" className="img-front shadow-floating" />
                                <img src={project3} alt="Modern Architecture" className="img-back" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section with Glassmorphism */}
            <section className="section services">
                <div className="container">
                    <div className="section-header text-center">
                        <motion.h4 
                            className="section-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Our Expertise
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Comprehensive Solutions
                        </motion.h2>
                    </div>

                    <motion.div 
                        className="services-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        <motion.div className="service-card glass-card" variants={fadeIn}>
                            <div className="icon-box-premium">
                                <HomeIcon size={28} />
                            </div>
                            <h3>Real Estate Development</h3>
                            <p>Developing modern residential and commercial properties with state-of-the-art amenities and prime locations.</p>
                            <Link to="/services" className="service-link">Learn More <ArrowRight size={16} /></Link>
                        </motion.div>

                        <motion.div className="service-card glass-card" variants={fadeIn}>
                            <div className="icon-box-premium">
                                <Building size={28} />
                            </div>
                            <h3>Civil Construction</h3>
                            <p>Expert construction services delivering structural integrity, architectural excellence, and engineering precision.</p>
                            <Link to="/services" className="service-link">Learn More <ArrowRight size={16} /></Link>
                        </motion.div>

                        <motion.div className="service-card glass-card" variants={fadeIn}>
                            <div className="icon-box-premium">
                                <Hammer size={28} />
                            </div>
                            <h3>Renovation & Remodeling</h3>
                            <p>Transforming existing spaces into modern, functional, and aesthetically pleasing environments.</p>
                            <Link to="/services" className="service-link">Learn More <ArrowRight size={16} /></Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Projects - Dynamic Layout */}
            <section className="section featured-projects bg-dark text-white">
                <div className="container">
                    <div className="section-header flex-header">
                        <div>
                            <h4 className="section-subtitle">Portfolio</h4>
                            <h2>Featured Projects</h2>
                        </div>
                        <Link to="/projects" className="btn btn-outline-light d-none-mobile">View All Projects</Link>
                    </div>

                    <motion.div 
                        className="projects-showcase"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        {featuredProjects.map((project) => (
                            <motion.div key={project.id} className="project-card-premium" variants={fadeIn}>
                                <div className="project-image-wrap">
                                    <img src={project.thumbnail} alt={project.title} />
                                    <div className="project-hover-content">
                                        <div className="cat-badge">Featured</div>
                                        <h4>{project.title}</h4>
                                        <Link to="/projects" className="btn-icon-round"><ArrowRight size={20}/></Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    <div className="center-btn mt-4 d-block-mobile" style={{ display: 'none' }}>
                        <Link to="/projects" className="btn btn-outline-light">View All Projects</Link>
                    </div>
                </div>
            </section>

            {/* Dynamic Stats Section */}
            <section className="section stats-premium" ref={statsRef}>
                <div className="container">
                    <div className="stats-grid-premium">
                        <div className="stat-card">
                            <h3>
                                {statsInView ? <CountUp end={50} duration={2.5} /> : '0'}
                                <span className="stat-plus">+</span>
                            </h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-card">
                            <h3>
                                {statsInView ? <CountUp end={100} duration={2.5} /> : '0'}
                                <span className="stat-plus">%</span>
                            </h3>
                            <p>Client Satisfaction</p>
                        </div>
                        <div className="stat-card">
                            <h3>
                                {statsInView ? <CountUp end={10} duration={2.5} /> : '0'}
                                <span className="stat-plus">+</span>
                            </h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-card">
                            <h3>
                                {statsInView ? <CountUp end={25} duration={2.5} /> : '0'}
                                <span className="stat-plus"></span>
                            </h3>
                            <p>Expert Team</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern CTA */}
            <section className="section cta-premium">
                <div className="container">
                    <motion.div 
                        className="cta-glass-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Ready to Build Your Dream Space?</h2>
                        <p>Let's collaborate to create something truly exceptional. Our experts are ready to turn your vision into reality.</p>
                        <Link to="/contact" className="btn btn-primary btn-lg btn-glow mt-2">
                            Start Your Project Today <ArrowRight size={18} style={{ marginLeft: '0.8rem' }} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
