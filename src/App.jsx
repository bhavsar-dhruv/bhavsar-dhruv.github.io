import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Sun, Moon, FileText, Phone } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  // Toggle the 'dark' class on the root HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-5xl mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Leadership />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed top-0 w-full bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md z-50 border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg tracking-tight">Dhruv Bhavsar</a>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            <a href="#about" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">About</a>
            <a href="#leadership" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Contact</a>
          </div>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} className="text-neutral-400 hover:text-white" /> : <Moon size={20} className="text-neutral-600 hover:text-black" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h2 className="text-neutral-500 dark:text-neutral-400 font-medium mb-4 tracking-wide uppercase text-sm">Hi, my name is</h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Dhruv Bhavsar.
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-neutral-400 dark:text-neutral-500">
          Bridging Hardware and Software.
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl leading-relaxed">
          I'm a first-year Electrical Engineering student at IIT Gandhinagar. I specialize in building physical systems and software architectures, with a strong focus on semiconductors, computer vision, and ROS 2 robotics.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors">
            Check out my work
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
            <FileText size={20} />
            View Resume
          </a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-400"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 border-t border-neutral-200/50 dark:border-neutral-800/50">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        <div className="h-px bg-neutral-200 dark:bg-neutral-800 flex-grow max-w-xs"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
          <p>
            Hello! My name is Dhruv. My journey into engineering started with programming in Python, which quickly expanded into the physical world of microcontrollers like ESP32 and Arduino.
          </p>
          <p>
            Currently, I am exploring the fascinating intersection of electrical engineering and computer science. I am deeply interested in semiconductors, VLSI design, and machine learning. Beyond the curriculum, I am actively seeking opportunities to assist a PhD student or collaborate on cutting-edge semiconductor projects.
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm font-mono mt-4">
            <li className="flex items-center gap-2"><span className="text-neutral-400">▹</span> Python & C++</li>
            <li className="flex items-center gap-2"><span className="text-neutral-400">▹</span> ROS 2</li>
            <li className="flex items-center gap-2"><span className="text-neutral-400">▹</span> OpenCV</li>
            <li className="flex items-center gap-2"><span className="text-neutral-400">▹</span> ESP32 & Arduino</li>
            <li className="flex items-center gap-2"><span className="text-neutral-400">▹</span> Fusion 360 (CAD)</li>
            <li className="flex items-center gap-2"><span className="text-neutral-400">▹</span> Machine Learning</li>
          </ul>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 rounded-2xl translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <img src="https://picsum.photos/seed/portrait/800/1000" alt="Dhruv Bhavsar" className="relative rounded-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 z-10" />
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const roles = [
    {
      title: "Conclave and Symposium Coordinator",
      organization: "Amalthea, IIT Gandhinagar",
      description: "Organizing and coordinating core conclave activities and symposium events."
    },
    {
      title: "Technical Officer",
      organization: "Election Commission, IIT Gandhinagar ",
      description: "Managing and maintaining the technical infrastructure for campus elections."
    },
   {
    "title": "Junior Design Team Member",
    "organization": "Team Rudra, IIT Gandhinagar",
    "description": "Contributing to autonomous systems and hardware integration for Roboconn 2026 competition."
  }
  ];

  return (
    <section id="leadership" className="py-24 border-t border-neutral-200/50 dark:border-neutral-800/50">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Positions of Responsibility</h2>
        <div className="h-px bg-neutral-200 dark:bg-neutral-800 flex-grow max-w-xs"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {roles.map((role, index) => (
          <div key={index} className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">{role.title}</h3>
            <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mb-4">{role.organization}</p>
            <p className="text-neutral-600 dark:text-neutral-400">{role.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Gujcost Robofest 5.0 Ideation",
      description: "Collaborated in a 4-person team under the mentorship of Professor Madhu Vadali to develop and submit a comprehensive robotics ideation deck for a state-level technical competition.",
      tech: ["Robotics", "System Design", "Technical Writing"],
      github: "#", external: "#", image: "https://picsum.photos/seed/robotics/800/500"
    },
    {
      title: "AI Yoga Coach",
      description: "A computer vision application that utilizes pose estimation to track and correct user yoga postures in real-time, built with an interactive frontend interface.",
      tech: ["Python", "OpenCV", "Machine Learning", "React"],
      github: "#", external: "#", image: "https://picsum.photos/seed/yoga/800/500"
    },
    {
      title: "Acoustic Energy Harvester",
      description: "A World of Engineering course project focused on designing a system capable of generating usable electric power from ambient sound waves.",
      tech: ["Electrical Engineering", "Sensors", "Circuit Design"],
      github: "#", external: "#", image: "https://picsum.photos/seed/energy/800/500"
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-neutral-200/50 dark:border-neutral-800/50">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Some Things I've Built</h2>
        <div className="h-px bg-neutral-200 dark:bg-neutral-800 flex-grow max-w-xs"></div>
      </div>
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
            <div className="w-full md:w-3/5 relative group">
              <div className="absolute inset-0 bg-neutral-900/10 dark:bg-neutral-100/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105 rounded-xl border border-neutral-200 dark:border-neutral-800" />
            </div>
            <div className={`w-full md:w-2/5 flex flex-col ${index % 2 === 1 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
              <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold mb-6 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">{project.title}</h3>
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-800 mb-6 relative z-20 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>{project.description}</p>
              </div>
              <ul className={`flex flex-wrap gap-4 font-mono text-sm text-neutral-500 dark:text-neutral-400 mb-6 ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                {project.tech.map((tech, i) => (<li key={i}>{tech}</li>))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-neutral-200/50 dark:border-neutral-800/50 text-center max-w-2xl mx-auto">
      <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mb-4">What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Get In Touch</h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed">
        I am currently looking for opportunities to work on a project or assist a PhD student, particularly in the field of semiconductors. If you have an open role or just want to discuss electronics and code, my inbox is always open!
      </p>
      <div className="flex flex-col items-center gap-6">
        <a href="mailto:bhavsar.dhruv@iitgn.ac.in  " className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors">
          <Mail size={20} />
          Say Hello
        </a>
        <a href="tel:+919624106870" className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
          <Phone size={20} />
          +91 96241 06870
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 text-center border-t border-neutral-200/50 dark:border-neutral-800/50">
      <div className="flex justify-center gap-6 mb-6 text-neutral-500 dark:text-neutral-400">
        <a href="https://github.com/bhavsar-dhruv" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
          <Github size={20} />
        </a>
        {/* Replace this URL with your actual LinkedIn profile link */}
        <a href="www.linkedin.com/in/dhruvnbhavsar" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
      <p className="font-mono text-sm text-neutral-500 dark:text-neutral-500">Designed & Built by Dhruv Bhavsar</p>
    </footer>
  );
}