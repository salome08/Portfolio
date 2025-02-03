import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Send, Code2, Database, Globe, ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-blue-500/10" />
      <div className="text-center relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Salomé Hazan
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Full Stack Developer & Creative Coder
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <SocialLink href="https://github.com/salome08" icon={<Github />} />
          <SocialLink href="https://www.linkedin.com/in/salom%C3%A9-hazan-631894b5/?locale=en_US" icon={<Linkedin />} />
          <SocialLink href="mailto:salome.hazan@yahoo.fr" icon={<Mail />} />
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
    </motion.section>
  );
}

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "React Native", level: 80 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 70 },
        { name: "Next.js", level: 82 },
        { name: "Three.js", level: 67 },
      ]
    },
    {
      title: "Backend Development",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "C/C++", level: 80 },
        { name: "Rust", level: 53 }
      ]
    },
    {
      title: "Database & DevOps",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 89 },
        { name: "Docker", level: 72 },
        { name: "GCP", level: 70 },
        { name: "Redis", level: 75 },
        { name: "Micro frontend Architecture", level: 68 }
      ]
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,transparent_100%)]" />
      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={index * 0.2}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SkillCategory({ title, icon, skills, delay }: {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
  delay: number;
}) {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar
            key={index}
            name={skill.name}
            level={skill.level}
            delay={delay + 0.1 * index}
          />
        ))}
      </div>
    </motion.div>
  );
}

function SkillBar({ name, level, delay }: {
  name: string;
  level: number;
  delay: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay, duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Data & AI Platform",
      description: "AI-driven marketing platform that optimizes advertising across digital, direct, and traditional media with a secure environment for data collaboration, access to over 60 million audience profiles, automated campaign optimization, AI-powered ad content creation, and real-time analytics for performance tracking.",
      image: "https://cdn.prod.website-files.com/63974a13b69f438400f152af/66d9c222f0d960e24432e8d5_DCP-p-1080.webp",
      tech: ["React.js", "Node.js", "TypeScript", "ElasticSearch", "Redis","MongoDB", "GraphQl"],
      features: [
        "Data Clean Room",
        "Audience Insights",
        "AI-powered media planning",
        "Generative AI for creatives",
        "Performance measurement"
      ],
      link: "https://www.ermes.ai/plateforme"
    },
    {
      title: "Face Recognition Web App",
      description: "Face recognition application powered by the Jeeliz library, designed to capture facial images from multiple angles, detect real-time orientation, and guide users through a seamless capture process. With clean code and an intuitive interface, it ensures accurate facial recognition and effortless verification.",
      image: "https://raw.githubusercontent.com/salome08/FaceRecognitionApp/refs/heads/main/preview.png",
      tech: ["React.js", "Typescript", "Three.js", "Jeeliz"],
      features: [
        "User-friendly interface",
        "Face orientation detection",
        "3d face following mask",
        "Responsive design"
      ],
      link: "https://recogn-app.netlify.app/"
    },
    {
      title: "Event Management App",
      description: "Event management platform that enables users to create, promote, and manage events seamlessly. Provides powerful tools for ticketing, attendee registration and event marketing, ensuring a smooth experience for both organizers and attendees.",
      image: "https://raw.githubusercontent.com/salome08/LankaEvents/main/LankaEventsFront/assets/preview/preview4.PNG",
      tech: ["React Native", "Node.js", "Expo", "Mongo"],
      features: [
        "Event creation and customization",
        "Online ticketing and registration",
        "Integrated event marketing tools",
        "Multi-device sync"
      ],
      link: "https://github.com/salome08/LankaEvents"
    },
    {
      title: "Mental Coaching App",
      description: "A mental coaching platform that democratizes personal development by offering personalized programs based on an interactive questionnaire, sessions with certified coaches, and concrete action plans to enhance individual performance.",
      image: "https://numerovertassociatif.blogs.com/.a/6a00d83451bf8c69e20240a4e3f9e4200d-800wi",
      tech: ["React Native", "Node.js", "GraphQl", "Mongo", "Expo"],
      features: [
        "Interactive questionnaire to identify personal motivations",
        "Live Chat",
        "Personalized action plans with guided tasks",
        "Progress tracking and daily guidance"
      ],
      link: "https://www.tamers.fr/tamers-pour-tous"
    },
    {
      title: "Architectural Design Studio",
      description: "An architectural design studio, offering innovative and sustainable solutions across residential, commercial, and cultural projects. Emphasizes materiality, functionality, and resource efficiency to create unique, aesthetically pleasing, and durable designs.",
      image: "https://atelier-sc-arch.fr/img/joffrin/PHOTO%2005.jpg",
      tech: ["Html", "CSS", "PHP", "Javascript"],
      features: [
   "Comprehensive architectural services from concept to completion",
    "Expertise in residential, commercial, and cultural projects",
    "Focus on materiality and sustainable resource use",
    "Commitment to aesthetic excellence and functional design"
      ],
      link: "https://atelier-sc-arch.fr"
    },
  ];

  const projectsWithEmpty = [...projects, {
    title: "",
    description: "",
    image: "",
    tech: [],
    features: [],
    link: "#",
    isEmpty: true
  }];

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = window.innerWidth >= 768 ? container.offsetWidth / 2 : container.offsetWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), projects.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const cardWidth = window.innerWidth >= 768 ? container.offsetWidth / 2 : container.offsetWidth;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-[100vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,16,48,0.15)_0%,transparent_100%)]" />
      <motion.h2 
        className="relative z-10 text-4xl font-bold text-white text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <div className="relative flex-1 flex items-center max-h-[600px] overflow-hidden">
        <div 
          ref={containerRef}
          className="absolute inset-0 overflow-x-auto overflow-y-hidden hide-scrollbar"
          onScroll={handleScroll}
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="h-full flex items-center md:px-[25vw] space-x-8">
            {projectsWithEmpty.map((project, index) => (
              <ProjectCard 
                key={index}
                {...project}
                isActive={index === activeIndex}
                index={index}
                isEmpty={project.isEmpty}
              />
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-4 -translate-y-1/2 space-x-4 z-10">
          <motion.button
            className="p-2 bg-white/10 rounded-full backdrop-blur-sm text-white hover:bg-white/20 disabled:opacity-50"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 space-x-4 z-10">
          <motion.button
            className="p-2 bg-white/10 rounded-full backdrop-blur-sm text-white hover:bg-white/20 disabled:opacity-50"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === projects.length - 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image, tech, features, link, isActive, index, isEmpty = false }: {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  link: string;
  isActive: boolean;
  index: number;
  isEmpty?: boolean;
}) {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const isAtTop = target.scrollTop === 0;
    setShowScrollIndicator(isAtTop);
  };

  useEffect(() => {
    if (!isActive && contentRef.current) {
      contentRef.current.scrollTop = 0;
      setShowScrollIndicator(true);
    }
  }, [isActive]);

  if (isEmpty) {
    return <div className="flex-shrink-0 w-full md:w-[50vw] h-[480px]" />;
  }

  return (
    <motion.div
      className={`relative flex-shrink-0 w-full md:w-[50vw] h-[480px] card-container ${isActive ? 'active' : ''}`}
      style={{
        scrollSnapAlign: 'center'
      }}
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.5
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      <div className="card-inner">
        <div className="card-front rounded-xl bg-gray-900/50 backdrop-blur-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="relative h-48 md:h-full">
              <motion.img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="p-6 pr-8">
              <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
              <p className="text-gray-300 mb-6 line-clamp-2 md:line-clamp-4">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.slice(0, 4).map((item, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {isActive && (
                <p className="text-sm text-gray-400 italic md:hidden">
                  Tap to see more details
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="card-back rounded-xl bg-gray-900/50 backdrop-blur-sm p-8 overflow-hidden">
          <div className="relative flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
            
            <div 
              ref={contentRef}
              className="flex-grow space-y-6 overflow-y-auto pr-2 scroll-smooth"
              onScroll={handleScroll}
            >
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">Project Overview</h4>
                <p className="text-gray-300">{description}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">Key Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <AnimatePresence>
              {showScrollIndicator && (
                <motion.div 
                  className="absolute left-0 right-2 bottom-12 flex flex-col items-center justify-center pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-blue-400 text-sm font-medium mb-2 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm">
                    Scroll for more details
                  </p>
                  <motion.div
                    className="flex justify-center"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ChevronDown className="w-8 h-8 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 flex justify-between items-center">
              <motion.a
                href={link}
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </motion.a>
              <p className="text-sm text-gray-400 italic block md:hidden">
                Click anywhere to flip back
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-900/10 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.08)_0%,transparent_100%)]" />
      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-gray-300 text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Have a question or want to work together? Drop me a message!
        </motion.p>
        <motion.form
          className="space-y-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm text-white placeholder-gray-400 transition-all"
                placeholder="Your name"
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="reply_to" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm text-white placeholder-gray-400 transition-all"
                placeholder="your@email.com"
              />
            </motion.div>
          </div>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
              </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm text-white placeholder-gray-400 transition-all resize-none"
              placeholder="Your message..."
            />
          </motion.div>
          
          {submitStatus === 'success' && (
            <div className="px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-green-400 text-sm">Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">Failed to send message. Please try again later.</p>
            </div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg flex items-center justify-center space-x-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            <Send className="w-4 h-4" />
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}