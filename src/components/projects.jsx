import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Search Engine",
      description: "A Python-based search engine built for DSA course project. Uses a dataset of 300k+ entries with optimized indexing through pkl files for fast data fetching and retrieval.",
      technologies: ["Python", "Data Structures", "Pickle", "Indexing", "File I/O"],
      github: "https://github.com/Moazam-Saif/SearchEngine"
    },
    {
      title: "Dostluk - NUST Social Platform",
      description: "A collaborative social media platform designed specifically for NUST students to connect based on shared interests and hobbies. Built as a database course project with full CRUD functionality.",
      technologies: ["React", "Node.js", "MySQL", "Express", "CSS"],
      github: "https://github.com/Moazam-Saif/SocialMedia-MERN"
    },
    {
      title: "Skill Swap Platform",
      description: "A MERN stack application where users can list skills they have or want to learn. The platform matches users with complementary skill sets using external APIs and enables skill exchange connections.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "External APIs"],
      github: "https://github.com/Moazam-Saif/skillswap-platform"
    },
    {
      title: "Car Rental Management System",
      description: "An OOP course project built with Java and JavaFX. Features a complete car rental management system with database connectivity using JDBC for managing vehicles, customers, and rental transactions.",
      technologies: ["Java", "JavaFX", "JDBC", "OOP", "Database Design"],
      github: "https://github.com/Moazam-Saif/Car-Rental-Management-System-JAVA"
    }
  ];

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProjects = () => {
    const start = currentIndex * projectsPerPage;
    const end = start + projectsPerPage;
    return projects.slice(start, end);
  };

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

  const projectVariants = {
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

  const slideVariants = {
    enter: {
      x: 300,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: -300,
      opacity: 0
    }
  };

  return (
    <section id="projects" className="py-20 bg-beige">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-cormorant-bold text-navy mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-8">
            <motion.button
              onClick={prevSlide}
              className="p-3 bg-navy text-cream rounded-full hover:bg-slate transition-colors disabled:opacity-50"
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-navy' : 'bg-light-gray'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-3 bg-navy text-cream rounded-full hover:bg-slate transition-colors disabled:opacity-50"
              disabled={currentIndex === totalPages - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Projects Carousel */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                ref={ref}
                className="grid md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                {getCurrentProjects().map((project, index) => {
                  const projectId = `${currentIndex}-${index}`;
                  const isHovered = hoveredProject === projectId;
                  const shouldScale = hoveredProject === null || isHovered;
                  
                  return (
                    <motion.div
                      key={projectId}
                      className="bg-cream rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
                      variants={projectVariants}
                      onMouseEnter={() => setHoveredProject(projectId)}
                      onMouseLeave={() => setHoveredProject(null)}
                      animate={{
                        scale: shouldScale ? (isHovered ? 1.05 : 1) : 0.95,
                        y: isHovered ? -10 : 0,
                        opacity: shouldScale ? 1 : 0.7
                      }}
                      transition={{ 
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                    >
                      <div className="h-48 bg-light-gray/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 bg-slate/20 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-slate" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-slate font-cormorant-medium">Project Preview</span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-cormorant-bold text-navy mb-3">
                          {project.title}
                        </h3>
                        
                        <p className="text-navy font-cormorant-regular mb-4 leading-relaxed flex-grow">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-slate text-cream px-3 py-1 rounded-full text-sm font-cormorant-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-auto">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-navy text-cream px-4 py-3 rounded-lg text-center font-cormorant-medium hover:bg-slate transition-colors block"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            View on GitHub
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-6">
            <span className="text-slate font-cormorant-medium">
              {currentIndex * projectsPerPage + 1}-{Math.min((currentIndex + 1) * projectsPerPage, projects.length)} of {projects.length} projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;