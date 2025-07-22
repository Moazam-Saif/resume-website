import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', proficiency: 'Expert' },
        { name: 'JavaScript', proficiency: 'Expert' },
        { name: 'HTML/CSS', proficiency: 'Expert' },
        { name: 'Tailwind CSS', proficiency: 'Proficient' },
        { name: 'TypeScript', proficiency: 'Learning' },
        { name: 'Next.js', proficiency: 'Learning' },
        { name: 'Vite', proficiency: 'Proficient' }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', proficiency: 'Proficient' },
        { name: 'Express.js', proficiency: 'Proficient' },
        { name: 'Python', proficiency: 'Proficient' },
        { name: 'C++', proficiency: 'Familiar' },
        { name: 'MongoDB', proficiency: 'Proficient' },
        { name: 'MySQL', proficiency: 'Proficient' },
        { name: 'Redis', proficiency: 'Familiar' },
        { name: 'REST APIs', proficiency: 'Proficient' },
        { name: 'Java', proficiency: 'Familiar' }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', proficiency: 'Proficient' },
        { name: 'GitHub', proficiency: 'Proficient' },
        { name: 'Docker', proficiency: 'Familiar' },
        { name: 'Figma', proficiency: 'Proficient' },
        { name: 'Postman', proficiency: 'Familiar' },
        { name: 'Framer', proficiency: 'Basic' }
      ]
    }
  ];

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

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-navy text-cream';
      case 'Proficient':
        return 'bg-slate text-cream';
      case 'Familiar':
        return 'bg-light-gray text-cream';
      case 'Learning':
        return 'bg-beige text-navy border border-slate';
      case 'Basic':
        return 'bg-cream text-navy border border-light-gray';
      default:
        return 'bg-slate text-cream';
    }
  };

  return (
    <section id="skills" className="py-20 bg-beige">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-cormorant-bold text-navy mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-cream rounded-lg p-6 shadow-lg"
              variants={categoryVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-cormorant-bold text-navy mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center justify-between"
                    variants={skillVariants}
                  >
                    <span className="text-navy font-cormorant-medium">
                      {skill.name}
                    </span>
                    <motion.span 
                      className={`px-3 py-1 rounded-full text-xs font-cormorant-medium ${getProficiencyColor(skill.proficiency)}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.proficiency}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Legend */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-navy rounded-full"></div>
            <span className="text-sm text-navy font-cormorant-regular">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate rounded-full"></div>
            <span className="text-sm text-navy font-cormorant-regular">Proficient</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-light-gray rounded-full"></div>
            <span className="text-sm text-navy font-cormorant-regular">Familiar</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-beige border border-slate rounded-full"></div>
            <span className="text-sm text-navy font-cormorant-regular">Learning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cream border border-light-gray rounded-full"></div>
            <span className="text-sm text-navy font-cormorant-regular">Basic</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;