import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { navLinks, socialLinks, skills, projects } from '../data';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-sm">
      <div className="text-xl font-bold">My Portfolio</div>
      <ul className="flex space-x-4">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm a Developer</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Building beautiful and functional web applications.
      </p>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16">
      <h2>About Me</h2>
      <p className="mt-4 max-w-2xl mx-auto">
        I'm a passionate developer with experience in building scalable web applications.
      </p>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <h2>Skills</h2>
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <div key={project.title} className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <h2>Contact</h2>
      <div className="flex justify-center space-x-4 mt-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-500 hover:text-white transition"
            title={link.name}
          >
            {link.icon === 'Github' && <Github size={20} />}
            {link.icon === 'Linkedin' && <Linkedin size={20} />}
            {link.icon === 'Twitter' && <Twitter size={20} />}
            {link.icon === 'Mail' && <Mail size={20} />}
          </a>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-4 text-center border-t dark:border-gray-700">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export { Navbar, Hero, About, Skills, Projects, Contact, Footer };
