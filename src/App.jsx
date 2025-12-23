import { useRef } from 'react';
import './App.css';
import {  
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaReact,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,FaPaperclip } from "react-icons/fa";
import { SiVite, SiNodedotjs } from "react-icons/si";




export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const HEADER_HEIGHT = 100; 


  const pages = [
    { id: 1, label: "Home", ref: homeRef },
    { id: 2, label: "About Me", ref: aboutRef },
    { id: 3, label: "Projects", ref: projectsRef },
    { id: 4, label: "Contact", ref: contactRef },
    
  ];

  const links = [
  { id: 1, text: "Developing Front-End Apps with React", url: "https://www.coursera.org/account/accomplishments/verify/D0HQW05VJJ17" },
  { id: 2, text: "Getting Started with Git and GitHub", url: "https://www.coursera.org/account/accomplishments/verify/3DGO77R9Z9XJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" },
  { id: 3, text: "Introduction to Cloud Computing", url: "https://www.coursera.org/account/accomplishments/verify/2KQCHQO35A0N" },
  { id: 4, text: "Introduction to HTML, CSS, & JavaScript", url: "https://www.coursera.org/account/accomplishments/verify/1SU9PT5ZQVMC" },
  { id: 5, text: "Introduction to Software Engineering", url: "https://www.coursera.org/account/accomplishments/verify/UOTDBA0N4G6O" }

];

const scrollToSection = (sectionRef) => {
  if (!sectionRef.current) return;

  const y =
    sectionRef.current.getBoundingClientRect().top +
    window.pageYOffset -
    HEADER_HEIGHT;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

const projects = [
  {
    id: 1,
    title: "Web Portfolio",
    status: "Completed",
    type: "Frontend",
    image: "portfolio-preview.png",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience.",
   
  
    },
  {
    id: 2,
    title: "Quick Play",
    status: "Completed",
    type: "Frontend",
    image: "quick-play-preview.png",
    description:
      "A Quick Play Game Site is a lightweight web platform that lets users launch and play casual games immediately without registration, downloads, or setup.",
   demoUrl:"https://quick-play-chi.vercel.app/"
    

    },
];

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Jennilyn's Logo" />
        </div>
        <nav className="nav">
          {pages.map((p) => (
            <div key={p.id} className="nav-item" onClick={() => scrollToSection(p.ref)}>
              {p.label}
            </div>
          ))}
        </nav>
      </header>

      
      <div ref={homeRef} className="section">
        <div className="hero">
      <div className="hero-left">
        <h3 className="intro">HI! This is...</h3>
        <h1 className="hero-name">JENNILYN <span>SALAVER</span></h1>
        <p className="hero-role">Information Technology</p>
        <h3>I build high-impact digital experiences using modern web technologies that prioritize performance, scalability and real user impact.</h3>
        

        <div className="skills">
          

          <a
            href="https://www.linkedin.com/in/jennilyn-salaver-569274265/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon">
            <FaLinkedin />
          </a>

           <a
            href="https://github.com/jennilynmsalaver"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon">
            <FaGithub />
          </a>

           <a
           href="mailto:jennilyn.m.salaver@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon">
            <FaEnvelope />
          </a>

            <a
            href="/jennilyn-salaver-cv.pdf"
            ttarget="_blank"
            rel="noopener noreferrer"
            className="social-icon">
            <FaPaperclip />
          </a>



        </div>
      </div>

      <div className="hero-right">
        <div className="placeholder">
          <img src="port.jpg" alt="portfolio" />
        </div>
      </div>
    </div>
      </div>

      <div ref={aboutRef} className="section">
        <div className="about-container">

  <div className="about-label">
    <h1>ABOUT ME</h1>
    <p className="caption">
      I am a highly motivated and aspiring Front-End Developer with a strong, principle-driven foundation in modern web technologies and core software engineering concepts. My background has equipped me with an understanding of scalable architecture, clean code practices and the full software development lifecycle.
      I thrive in collaborative team environments where I can contribute my skills, learn from experienced developers, and actively participate in code reviews. I am a proactive learner, eager to tackle new challenges, master emerging technologies, and continuously optimize development processes to build efficient and maintainable codebases.
    </p>
  
    </div>
    
     
<div className="about-left">
  <h2 style={{ color: "#ffb6c1" }}>What I Do Best</h2>

  <div className="grid-container">
    <div className="grid-item">
      <h3>Clean Code</h3>
      <p>Writing maintainable, scalable code following best practices.</p>
    </div>

    <div className="grid-item">
      <h3>UI/UX Focus</h3>
      <p>Creating intuitive, accessible interfaces.</p>
    </div>

    <div className="grid-item">
      <h3>Performance</h3>
      <p>Optimizing applications for speed and efficiency.</p>
    </div>

    <div className="grid-item">
      <h3>Collaboration</h3>
      <p>Working effectively in Agile teams.</p>
    </div>
  </div>
</div>


  



  <div className="about-right">
    <div className="container">
      <h2 className="title" style={{color:'#ffb6c1'}}>Certifications</h2>

      <ul className="list">
        {links.map(item => (
          <li key={item.id} className="list-item">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>

      <div className="box">
      <div className='skills'>
        <h2>Skills</h2>
      </div>
        <span><FaHtml5 /> HTML      </span>
        <span><FaCss3Alt /> CSS     </span>
        <span><SiVite /> Vite      </span>
        <span><FaGithub /> GitHub    </span>
        <span><SiNodedotjs /> Node.js    </span>
        <span><FaReact /> React    </span>
      </div>
  </div>
    </div>
      </div>
      

<div ref={projectsRef} className="section">
  <div className="projects-section">
    <h2 className="section-title" style={{ color: "#ffb6c1" }}>
      PROJECTS
    </h2>


    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          {/* Image Preview */}
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>

          {/* Card Content */}
          <div className="project-content">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span
                className={`project-status ${
                  project.status === "Completed"
                    ? "completed"
                    : "in-progress"
                }`}
              >
                {project.status}
              </span>
            </div>

            <span className="project-type">{project.type}</span>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              <FaReact />
              <SiVite />
              <FaHtml5 />
              <FaCss3Alt />
            </div>

            <a
              className={`project-btn ${!project.demoUrl ? "disabled" : ""}`}
              href={project.demoUrl || "#"}
            >
              View Demo
            </a>


          </div>
        </div>
      ))}
    </div>
  </div>
</div>






<div ref={contactRef} className="section">
  <div className="contact-section">
    <div className="contact-header">
      <h2>Let’s Connect</h2>
      <p>
        Ready to start your next project? Let’s discuss how we can work together.
      </p>
    </div>

    <div className="contact-grid">
      {/* LEFT */}
      <div className="contact-card">
        <h3>Let’s Connect</h3>

        <ul className="contact-list">
          <li>
            <FaEnvelope />
            <div>
              <strong>Email</strong>
              <span>jennilyn.m.salaver@gmail.com</span>
            </div>
          </li>

          <li>
            <FaPhone />
            <div>
              <strong>Phone</strong>
              <span>+63 916 666 3287</span>
            </div>
          </li>

          <li>
            <FaMapMarkerAlt />
            <div>
              <strong>Location</strong>
              <span>Manila, Philippines</span>
            </div>
          </li>

          <li>
            <FaClock />
            <div>
              <strong>Timezone</strong>
              <span>PHT (UTC+8)</span>
            </div>
          </li>
        </ul>

        <div className="socials">
          <a
            href="https://github.com/jennilynmsalaver"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jennilyn-salaver-569274265/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="/jennilyn-salaver-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPaperclip />
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="contact-card">
        <h3>Send me a message</h3>
        <p className="small">I’ll get back to you within 24 hours</p>

        <form
          className="contact-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-row">
            <input type="text" placeholder="Your full name" />
            <input type="email" placeholder="your.email@example.com" />
          </div>

          <input type="text" placeholder="What's this about?" />
          <textarea placeholder="Tell me about your project or question..." />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</div>

       




   

<footer className="footer">
  <div className="footer-container">
    <p className="footer-text">
      © {new Date().getFullYear()} Jennilyn Salaver. All rights reserved.
    </p>

    <div className="footer-socials">
      <a
        href="https://github.com/jennilynmsalaver"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/jennilyn-salaver-569274265/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="/jennilyn-salaver-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPaperclip />
      </a>
    </div>
  </div>
</footer>


    </div>
  );
}
