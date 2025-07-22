import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        'Full Stack Developer',
        'React Specialist',
        'UI/UX Enthusiast',
        'Problem Solver'
    ];

    useEffect(() => {
        const currentRole = roles[currentIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentRole.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [displayText, currentIndex, isDeleting, roles]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section
            id="about"
            className="min-h-screen flex items-center justify-center bg-cream px-4 py-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-cormorant-bold text-navy mb-6"
                            variants={itemVariants}
                        >
                            Hi, I'm{' '}
                            <span className="text-slate">
                                Moazam Saif
                            </span>
                        </motion.h1>

                        <motion.div
                            className="text-2xl md:text-3xl lg:text-4xl font-cormorant-semibold text-light-gray mb-8 h-16"
                            variants={itemVariants}
                        >
                            I'm a <span className="text-navy border-r-2 border-navy">{displayText}</span>
                        </motion.div>

                        <motion.p
                            className="text-lg md:text-xl text-navy mb-12 leading-relaxed font-cormorant-regular"
                            variants={itemVariants}
                        >
                            Passionate about creating beautiful, functional, and user-centered digital experiences.
                            I specialize in full-stack development with a focus on React, Node.js, and modern web technologies.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            <motion.a
                                href="#contact"
                                className="bg-navy text-cream px-8 py-3 rounded-lg hover:bg-slate transition-colors text-center font-cormorant-semibold"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.a>
                            <motion.a
                                href="/Moazam Saif-Resume.pdf"
                                download="Moazam Saif-Resume.pdf"  // This forces download with custom filename
                                className="border-2 border-slate text-slate px-8 py-3 rounded-lg hover:bg-slate hover:text-cream transition-colors text-center font-cormorant-semibold"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download Resume
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Profile Image */}
                    <motion.div
                        className="flex justify-center lg:justify-end order-1 lg:order-2"
                        variants={imageVariants}
                    >
                        <div className="relative">
                            {/* Background decoration */}
                            <motion.div
                                className="absolute -top-4 -left-4 w-full h-full bg-slate rounded-2xl"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            />

                            {/* Image container */}
                            <motion.div
                                className="relative bg-beige rounded-2xl shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src="/profile-photo.png" // Replace with your actual image path
                                    alt="John Doe - Full Stack Developer"
                                    className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl"
                                />

                                {/* Floating elements */}
                                <motion.div
                                    className="absolute -top-6 -right-6 w-12 h-12 bg-navy rounded-full flex items-center justify-center shadow-lg"
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 180, 360]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <svg className="w-6 h-6 text-cream" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-4 -left-4 w-8 h-8 bg-light-gray rounded-full shadow-lg"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.7, 1, 0.7]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;