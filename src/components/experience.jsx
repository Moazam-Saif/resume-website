import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "1ten Solutions",
      period: "July 2024 - Present",
      description: [
        "Learning comprehensive web development technologies and frameworks",
        "Gaining hands-on experience in UI/UX design principles and best practices",
        "Building responsive web applications using modern development tools",
        "Collaborating with senior developers on real-world projects"
      ]
    },
    {
      title: "Cybersecurity Research Intern",
      company: "Cybersecurity Zone, NUST",
      period: "June 2024 - Present",
      description: [
        "Developing cutting-edge projects implementing Post Quantum Cryptography",
        "Researching quantum-resistant encryption algorithms and protocols",
        "Working on security solutions for future quantum computing threats",
        "Contributing to academic research in cybersecurity field"
      ]
    },
    {
      title: "Mobile Development Intern",
      company: "SPS Solutions",
      period: "July 2024 - Present",
      description: [
        "Learning mobile application development for iOS and Android platforms",
        "Gaining expertise in project management methodologies and tools",
        "Developing cross-platform mobile solutions using modern frameworks",
        "Participating in agile development processes and sprint planning"
      ]
    }
  ];

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const ExperienceItem = ({ exp, index, isLeft, totalItems }) => {
    const cardId = `experience-card-${index}`;
    
    const [cardRef, cardInView] = useInView({
      threshold: 0.3,
      triggerOnce: true,
    });

    const itemVariants = {
      hidden: { 
        opacity: 0, 
        scale: 0,
        x: isLeft ? -50 : 50,
      },
      visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          type: "spring",
          stiffness: 200,
          damping: 20
        }
      }
    };

    const dotVariants = {
      hidden: { scale: 0, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 25,
          delay: 0.1
        }
      }
    };

    const contentVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.3,
          staggerChildren: 0.1
        }
      }
    };

    const childVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3
        }
      }
    };

    return (
      <motion.div
        ref={cardRef}
        id={cardId}
        className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
        initial="hidden"
        animate={cardInView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        {/* Timeline Dot */}
        <motion.div 
          className="absolute left-1/2 top-8 w-6 h-6 transform -translate-x-1/2 z-10 hidden md:block"
          variants={dotVariants}
          initial="hidden"
          animate={cardInView ? "visible" : "hidden"}
        >
          {/* Outer Ring */}
          <div className="absolute inset-0 bg-slate rounded-full shadow-lg"></div>
          {/* Inner Ring */}
          <div className="absolute inset-1 bg-cream rounded-full"></div>
          {/* Center Dot */}
          <div className="absolute inset-2 bg-navy rounded-full"></div>
          {/* Pulse Effect */}
          {cardInView && (
            <div className="absolute inset-0 bg-light-gray rounded-full animate-ping opacity-75"></div>
          )}
        </motion.div>
        
        {/* Content Card */}
        <motion.div
          className={`
            w-full md:w-5/12 bg-beige rounded-lg p-6 shadow-lg
            ${isLeft ? 'md:mr-auto md:text-left' : 'md:ml-auto md:text-left'}
            border-l-4 border-slate md:border-l-0
            ${isLeft ? 'md:border-r-4 md:border-slate' : 'md:border-l-4 md:border-slate'}
          `}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
          >
            {/* Period Badge */}
            <motion.div 
              className={`mb-4 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
              variants={childVariants}
            >
              <span className="inline-block bg-navy text-cream px-3 py-1 rounded-full text-sm font-cormorant-medium">
                {exp.period}
              </span>
            </motion.div>
            
            {/* Job Title */}
            <motion.h3 
              className="text-xl font-cormorant-bold text-navy mb-2"
              variants={childVariants}
            >
              {exp.title}
            </motion.h3>
            
            {/* Company */}
            <motion.h4 
              className="text-lg text-slate font-cormorant-semibold mb-4"
              variants={childVariants}
            >
              {exp.company}
            </motion.h4>
            
            {/* Description */}
            <motion.ul className="space-y-2" variants={childVariants}>
              {exp.description.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  className="text-navy flex items-start font-cormorant-regular"
                  variants={childVariants}
                >
                  <span className="text-slate mr-3 mt-1 flex-shrink-0">
                    <svg className="w-2 h-2" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="4" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Connector Line */}
          <motion.div 
            className={`
              absolute top-8 hidden md:block
              ${isLeft ? 'right-0' : 'left-0'}
            `}
            initial={{ scaleX: 0 }}
            animate={cardInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ originX: isLeft ? 0 : 1 }}
          >
            <div className={`
              h-0.5 w-8 bg-gradient-to-r
              ${isLeft 
                ? 'from-beige to-slate' 
                : 'from-slate to-beige'
              }
            `}></div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-cormorant-bold text-navy mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        
        {/* Timeline Container */}
        <div ref={timelineRef} className="relative">
          {/* Growing Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 hidden md:block">
            {/* Animated flowing line */}
            <motion.div 
              className="absolute top-0 w-full flowing-line rounded-full shadow-lg"
              style={{ 
                height: lineHeight
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <ExperienceItem
                  key={index}
                  exp={exp}
                  index={index}
                  isLeft={isLeft}
                  totalItems={experiences.length}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;