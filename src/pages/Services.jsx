import { Home, Building, Hammer, Layout, PaintBucket, Wrench, Briefcase, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const services = [
        { icon: <Layout size={32} />, title: 'Architectural & Structural Design', desc: 'Preparing detailed architectural and structural designs for proposed projects with working drawings.' },
        { icon: <Briefcase size={32} />, title: 'Project Management', desc: 'Detailed scheduling, resource planning, and project supervision from start to finish.' },
        { icon: <Hammer size={32} />, title: 'Building Construction', desc: 'Main contractor services for small to medium-sized residential and commercial projects.' },
        { icon: <Wrench size={32} />, title: 'Renovation & Maintenance', desc: 'Building renovation, remodeling (kitchen & bathroom), and facility management.' },
        { icon: <PaintBucket size={32} />, title: 'Interior Finishes', desc: 'Top-notch interior finishing and decoration services for modern aesthetics.' },
        { icon: <ShoppingBag size={32} />, title: 'Procurement Services', desc: 'Engaging in thorough material procurement from project start to completion.' },
        { icon: <Home size={32} />, title: 'Real Estate Consultant', desc: 'Expert advice on real estate properties, investments, and portfolio management.' },
        { icon: <Building size={32} />, title: 'Sales of Properties', desc: 'Sales of premium lands, residential estates, and commercial buildings.' },
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <div className="page-content bg-light">
            <div className="page-header custom-header">
                <div className="container text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Expertise
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Comprehensive solutions: From conception to completion, we detail every step to ensure your vision becomes reality.
                    </motion.p>
                </div>
            </div>

            <div className="container section">
                <motion.div 
                    className="services-grid-page"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {services.map((s, i) => (
                        <motion.div key={i} className="service-card glass-card h-100" variants={fadeIn}>
                            <div className="icon-box-premium">
                                {s.icon}
                            </div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                            <Link to="/contact" className="service-link mt-auto">
                                Request Service <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* CTA specific to Services Page */}
            <section className="section cta-premium" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <motion.div 
                        className="cta-glass-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Need a Customized Solution?</h2>
                        <p>If you have a unique project requirement that isn't listed above, our team of experts is ready to tailor our services to your exact needs.</p>
                        <Link to="/contact" className="btn btn-primary btn-lg btn-glow mt-2">
                            Discuss Your Project <ArrowRight size={18} style={{ marginLeft: '0.8rem' }} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
