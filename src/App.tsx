import { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail, Phone, ExternalLink, Menu, X, Code, BookOpen, Zap, Cpu, Sun, Moon } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const projects = [
    {
      title: "LetsGo Travel Platform",
      url: "https://letsgo-dn8f.onrender.com/",
      description: "A comprehensive travel booking platform with modern UI/UX"
    },
    {
      title: "Online Bookstore",
      url: "https://bookstore-fe-vdtb.onrender.com",
      description: "Full-featured bookstore application with user authentication"
    },
    {
      title: "Sundown Studio",
      url: "https://sundown-studio-cnm7.onrender.com",
      description: "Creative studio website with stunning visual design"
    },
    {
      title: "Creem Platform",
      url: "https://creem.onrender.com/",
      description: "Modern web application with sleek interface design"
    },
    {
      title: "Rejouice UI",
      url: "https://rejouice-ui.onrender.com/",
      description: "Interactive UI showcase with smooth animations"
    },
    {
      title: "HeyGen Clone",
      url: "https://heygen.onrender.com/",
      description: "AI-powered video generation platform clone"
    },
    {
      title: "Apple UI Recreation",
      url: "https://apple-ui-wpn8.onrender.com/",
      description: "Pixel-perfect recreation of Apple's design language"
    }
  ];

  const skills = [
    { name: "Data Structures & Algorithms", icon: Code, color: "text-blue-600" },
    { name: "Java", icon: Cpu, color: "text-orange-600" },
    { name: "MERN Stack", icon: Zap, color: "text-green-600" },
    { name: "Next.js", icon: BookOpen, color: "text-purple-600" },
    { name: "Rust (Learning)", icon: Cpu, color: "text-red-600" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900 dark:text-white">Ritam Acharya</div>
            
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item}
                </button>
              ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Ritam Acharya</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              A passionate 3rd-year student crafting digital experiences through code. 
              Specializing in MERN stack development with a love for clean, efficient solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm currently in my 3rd year of studies, passionate about technology and its endless possibilities. 
              My journey in programming started with Java and data structures, which gave me a solid foundation 
              in problem-solving and algorithmic thinking.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I've since expanded into web development, mastering the MERN stack and exploring modern frameworks 
              like Next.js. Currently, I'm diving into Rust to broaden my understanding of systems programming 
              and performance optimization.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, I'm constantly learning new technologies and working on projects that 
              challenge me to grow as a developer. I believe in writing clean, maintainable code and 
              creating user experiences that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-700 ${skill.color}`}>
                    <skill.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here's a collection of projects I've worked on, showcasing various technologies and design approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <span>View Live</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Contact Info */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a href="mailto:ritamacharya2004@gmail.com" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        ritamacharya2004@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <a href="tel:8584956335" className="text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">
                        +91 8584956335
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Follow Me</h3>
                <div className="space-y-4">
                  <a
                    href="https://github.com/ritam-student"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-gray-600 transition-colors">
                      <Github size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">@ritam-student</p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ritam-acharya-2888432b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Ritam Acharya</p>
                    </div>
                  </a>
                  <a
                    href="https://x.com/acharya_ri37135?s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="p-2 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 rounded-lg group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      <Twitter size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Twitter</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">@acharya_ri37135</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 dark:text-gray-500">
              © 2025 Ritam Acharya. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;