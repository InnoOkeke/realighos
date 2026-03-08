import { useRef, useMemo } from 'react';
import { ArrowRight, Home as HomeIcon, Hammer, Building, CheckCircle, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import './Home.css';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

const imageModules = import.meta.glob('../assets/projects/**/*.{jpg,jpeg,png,webp}', { eager: true });

const Home = () => {
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
            {/* Premium Hero Section */}
            <section className="hero-premium">
                <div className="hero-overlay"></div>
                <div className="hero-glass-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                </div>
                
                <motion.div 
                    className="hero-content container"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >

                    
                    <motion.h1 variants={fadeIn}>
                        Building Your Vision into <br/>
                        <span className="text-gradient">Timeless Reality</span>
                    </motion.h1>
                    
                    <motion.p variants={fadeIn}>
                        Real Ighos Resources Limited is your trusted partner in developing modern residential, commercial properties, and expert civil construction with state-of-the-art amenities.
                    </motion.p>
                    
                    <motion.div className="hero-actions" variants={fadeIn}>
                        <Link to="/projects" className="btn btn-primary btn-glow">
                            Explore Our Projects <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                        <Link to="/contact" className="btn btn-glass">
                            Request a Quote
                        </Link>
                    </motion.div>
                </motion.div>
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
