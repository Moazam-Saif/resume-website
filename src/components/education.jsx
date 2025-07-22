import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const educationData = [
    {
      degree: "Bachelor of Engineering in Software Engineering",
      institution: "National University of Sciences and Technology (NUST), Islamabad",
      period: "2023 - 2027",
      status: "Currently in 4th Semester",
      description: "Pursuing a software engineering degree with focus on software development, algorithms, and system design."
    },
    {
      degree: "Intermediate in Computer Science (ICS)",
      institution: "Punjab College",
      period: "2021 - 2023",
      grade: "94%",
      description: "Completed intermediate education with excellent performance in computer science, mathematics, and physics."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-cormorant-bold text-navy mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <motion.div
          ref={ref}
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-beige rounded-lg p-8 shadow-lg border-l-4 border-slate"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-cormorant-bold text-navy mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-cormorant-semibold text-slate mb-4">
                    {edu.institution}
                  </h4>
                  <p className="text-navy font-cormorant-regular leading-relaxed">
                    {edu.description}
                  </p>
                </div>
                
                <div className="md:text-right space-y-3">
                  <div className="bg-navy text-cream px-4 py-2 rounded-lg inline-block mr-1">
                    <span className="font-cormorant-medium">{edu.period}</span>
                  </div>
                  {edu.status && (
                    <div className="bg-light-gray text-cream px-4 py-2 rounded-lg inline-block">
                      <span className="font-cormorant-medium">{edu.status}</span>
                    </div>
                  )}
                  {edu.grade && (
                    <div className="bg-slate text-cream px-4 py-2 rounded-lg inline-block">
                      <span className="font-cormorant-medium">{edu.grade}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;