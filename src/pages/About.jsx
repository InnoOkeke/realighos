import { Users, Target, Award, CheckCircle, Shield, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';
import project1 from '../assets/projects/INTERIOR FINISHES/WhatsApp Image 2026-03-24 at 21.04.37 (2).webp';
import project2 from '../assets/projects/INTERIOR FINISHES/WhatsApp Image 2026-03-24 at 21.04.36.webp';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const team = [];

    return (
        <div className="page-content bg-light">
            {/* Premium Header */}
            <div className="page-header custom-header">
                <div className="container text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Reg: 8742914 - Building Trust, Quality, and Excellence since 2016.
                    </motion.p>
                </div>
            </div>

            {/* Split Screen Concept */}
            <section className="section about-intro">
                <div className="container">
                    <div className="about-split-grid">
                        <motion.div 
                            className="about-split-text"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                        >
                            <h4 className="section-subtitle">Who We Are</h4>
                            <h2>A Legacy of Precision & Detailing</h2>
                            <p className="lead-text">
                                Real Ighos Resources Limited began as Real Ighos Concept and was incorporated under the Corporate Affairs Commission on April 12th, 2016.
                            </p>
                            <p>
                                We are a reputable construction management company specializing in residential building construction, interior finishes, renovations, and general construction services. Over the years, we have undertaken challenging projects and acquired deep expertise in design-build solutions, procurement, and project management.
                            </p>
                            
                            <div className="about-features mt-4">
                                <div className="feature-item">
                                    <CheckCircle className="text-accent" size={20} />
                                    <span>High-quality project delivery</span>
                                </div>
                                <div className="feature-item">
                                    <Shield className="text-accent" size={20} />
                                    <span>Sustainable & safe environments</span>
                                </div>
                                <div className="feature-item">
                                    <Briefcase className="text-accent" size={20} />
                                    <span>Cost-effective management</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="about-split-images"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInRight}
                        >
                            <div className="image-collage">
                                <img src={project1} alt="Construction Site" className="img-main shadow-floating" loading="lazy" />
                                <img src={project2} alt="Finished Interior" className="img-secondary" loading="lazy" />
                                <div className="experience-badge glass-card">
                                    <span className="years">10+</span>
                                    <span className="text">Years<br/>Experience</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission, Objective */}
            <section className="section bg-dark text-white">
                <div className="container">
                    <div className="section-header text-center">
                        <motion.h4 
                            className="section-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Core Competencies
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white"
                        >
                            Our Driving Force
                        </motion.h2>
                    </div>

                    <motion.div 
                        className="vmo-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        <motion.div className="vmo-card glass-card-dark" variants={fadeIn}>
                            <div className="icon-box-premium">
                                <Target size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>To be a reputable contractor delivering beyond our client expectation, always and consistently.</p>
                        </motion.div>

                        <motion.div className="vmo-card glass-card-dark" variants={fadeIn}>
                            <div className="icon-box-premium">
                                <Award size={32} />
                            </div>
                            <h3>Our Mission</h3>
                            <p>To procure projects at competitive pricing, provide sustainable and safe working environments, and deliver quality, well-detailed jobs within a reasonable time frame.</p>
                        </motion.div>

                        <motion.div className="vmo-card glass-card-dark" variants={fadeIn}>
                            <div className="icon-box-premium">
                                <Users size={32} />
                            </div>
                            <h3>Our Objective</h3>
                            <p>We are known for <strong>"DETAILING"</strong>. Our objective is to provide our clients with an "I am assured" experience, prioritizing their objectives through clear communication and follow-through.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section team-section">
                <div className="container">
                    <div className="section-header text-center pb-5">
                        <motion.p
                            className="team-intro text-muted"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            style={{ fontSize: '1.2rem', marginTop: '20px' }}
                        >
                            Driven by a team of seasoned professionals, we combine deep industry expertise with unwavering passion to turn visionary concepts into breathtaking realities.
                        </motion.p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
