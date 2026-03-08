import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await emailjs.sendForm(
                'service_ebwdpml',
                'template_3hbr98q',
                formRef.current,
                'HQmAIiEPWAQxZ9F3R'
            );

            setStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully. We will get back to you shortly.'
            });
            formRef.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again or contact us directly via phone.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
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
                        Let's Talk
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Get in touch to discuss your next big project, request a quote, or schedule a consultation.
                    </motion.p>
                </div>
            </div>

            <div className="container section">
                <div className="contact-wrapper-premium">
                    <motion.div 
                        className="contact-info-premium"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeIn}>Get In Touch</motion.h2>
                        <motion.p variants={fadeIn} className="contact-intro">
                            We are available for consultations, site visits, and comprehensive project assessments. Reach out to us via any of the channels below.
                        </motion.p>

                        <div className="contact-cards">
                            <motion.div className="contact-item-glass" variants={fadeIn}>
                                <div className="icon-wrapper">
                                    <MapPin size={28} />
                                </div>
                                <div className="contact-details">
                                    <h4>Head Office</h4>
                                    <p>Pavillion Court, Happy home estate, Sangotedo, Lagos</p>
                                </div>
                            </motion.div>

                            <motion.div className="contact-item-glass" variants={fadeIn}>
                                <div className="icon-wrapper">
                                    <Phone size={28} />
                                </div>
                                <div className="contact-details">
                                    <h4>Call Us directly</h4>
                                    <p>+234 803 796 5323</p>
                                    <p>+234 808 796 5865</p>
                                </div>
                            </motion.div>

                            <motion.div className="contact-item-glass" variants={fadeIn}>
                                <div className="icon-wrapper">
                                    <Mail size={28} />
                                </div>
                                <div className="contact-details">
                                    <h4>Email Address</h4>
                                    <p>Realighos38@gmail.com</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="contact-form-wrapper glass-card-dark"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="form-header">
                            <h3>Send a Message</h3>
                            <p>Fill out the form below and we'll reply promptly.</p>
                        </div>

                        <form ref={formRef} className="premium-form" onSubmit={handleSubmit}>
                            {status.message && (
                                <motion.div 
                                    className={`form-status-premium ${status.type}`}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                                    <span>{status.message}</span>
                                </motion.div>
                            )}

                            <div className="input-group">
                                <input type="text" name="name" required id="name" />
                                <label htmlFor="name">Full Name</label>
                            </div>
                            
                            <div className="input-group">
                                <input type="email" name="email" required id="email" />
                                <label htmlFor="email">Email Address</label>
                            </div>
                            
                            <div className="input-group">
                                <textarea name="message" required id="message" rows="4"></textarea>
                                <label htmlFor="message">Project Details</label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-glow btn-submit" disabled={isLoading}>
                                {isLoading ? (
                                    <>Processing... <Loader2 size={18} className="spin" style={{ marginLeft: '0.5rem' }} /></>
                                ) : (
                                    <>Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
