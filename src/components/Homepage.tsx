import { useState, useEffect, FC, JSX } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPython, FaReact, FaDatabase, FaBrain } from 'react-icons/fa';



interface UserInfo {
  main: {
    title: string;
    name: string;
    email: string;
    phone: string;
    location: string;
  };
  homepage: {
    title: string;
    description: string;
  };
  socials: {
    linkedin: string;
    github: string;
    email: string;
  };
}

interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  logo: string;
  achievements: string[];
}

interface ExperienceData {
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
}

interface EducationData {
  institution: string;
  degree: string;
  period: string;
  percentage: string;
}

interface SkillCategory {
  category: string;
  skills: string[];
  icon: JSX.Element;
}

const Navbar: FC = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Education", path: "#education" },
    { name: "Skills", path: "#skills" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4">
                <span className="font-semibold text-gray-800 text-lg">Manish Gyawali</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="py-4 px-2 font-medium text-gray-600 hover:text-blue-600 transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Project: FC<ProjectData> = ({ title, description, technologies, logo, achievements }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4 text-xl">
          {logo}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start mb-2">
            <span className="text-blue-600 mr-2">•</span>
            <p className="text-gray-700 text-sm">{achievement}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience: FC<ExperienceData> = ({ company, position, period, description, responsibilities }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-800">{position}</h3>
        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">{period}</span>
      </div>
      <h4 className="text-lg text-blue-600 mb-2">{company}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <div>
        {responsibilities.map((responsibility, index) => (
          <div key={index} className="flex items-start mb-2">
            <span className="text-blue-600 mr-2">•</span>
            <p className="text-gray-700 text-sm">{responsibility}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Education: FC<EducationData> = ({ institution, degree, period, percentage }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold text-gray-800">{institution}</h3>
      <div className="flex justify-between items-center">
        <h4 className="text-lg text-blue-600">{degree}</h4>
        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">{period}</span>
      </div>
      <p className="text-gray-600 mt-2">Percentage: {percentage}</p>
    </div>
  );
};

const SkillSet: FC<{ skillCategories: SkillCategory[] }> = ({ skillCategories }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skillCategories.map((category, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="text-blue-600 mr-3 text-xl">{category.icon}</div>
            <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Footer: FC = () => {
  return (
    <footer className="py-8 text-center text-gray-600 border-t">
      <div className="text-sm">
        © {new Date().getFullYear()} Manish Gyawali. All Rights Reserved.
      </div>
    </footer>
  );
};

const Homepage: FC = () => {
  const [scrolled, setScrolled] = useState(false);

 
  const INFO: UserInfo = {
    main: {
      title: "Manish Gyawali - Machine Learning Engineer & Frontend Developer",
      name: "Manish Gyawali",
      email: "manishgyawali522@gmail.com",
      phone: "+977 9842397932",
      location: "Tansen-01, Palpa, Nepal",
    },
    homepage: {
      title: "Manish Gyawali",
      description: "Machine Learning Engineer & Frontend Developer with expertise in developing AI-powered applications, deep learning models, and responsive web interfaces.",
    },
    socials: {
      linkedin: "https://www.linkedin.com/in/manish-gyawali-690366286/",
      github: "https://github.com/Mansish01",
      email: "mailto:manishgyawali522@gmail.com",
    },
  };

  const projects: ProjectData[] = [
    {
      title: "Tuberculosis Detection from Chest X-ray Images",
      description: "A deep learning-based system for tuberculosis detection using chest X-ray images.",
      technologies: ["CNN", "PyTorch", "YOLO", "Image Processing", "Medical Imaging"],
      logo: "🫁",
      achievements: [
        "Designed and implemented a CNN-based classification model achieving 93% accuracy.",
        "Developed a dual-model framework using CNN for classification and YOLO for object detection.",
        "Optimized deep learning models for accuracy and efficiency in low-resource settings."
      ]
    },
    {
      title: "Hate Speech Detection using Naive Bayes Classifier",
      description: "A text classification model to detect hate speech and offensive language in tweets.",
      technologies: ["Naive Bayes", "NLP", "Text Processing", "TF-IDF", "Classification"],
      logo: "📝",
      achievements: [
        "Achieved 97% accuracy in detecting hate speech from over 48,000 tweets.",
        "Preprocessed and cleaned large-scale text data for effective feature extraction.",
        "Optimized feature selection through n-gram analysis to enhance model precision."
      ]
    },
    {
      title: "Ocular Disease Classification Challenge",
      description: "A deep learning solution for classifying various ocular diseases from medical images.",
      technologies: ["DenseNet-161", "PyTorch", "Medical Imaging", "Classification"],
      logo: "👁️",
      achievements: [
        "Developed a classification model using DenseNet-161, achieving 57% accuracy across 1400 samples.",
        "Executed comprehensive classification analysis for eight distinct disease categories.",
        "Delivered detailed metrics including precision, recall, and F1-score."
      ]
    },
    {
      title: "Book Recommendation System",
      description: "A collaborative filtering-based recommendation system for books.",
      technologies: ["Collaborative Filtering", "Clustering", "CSR Matrices", "Data Processing"],
      logo: "📚",
      achievements: [
        "Established user-book relationships through data preprocessing and sparse matrix conversion.",
        "Enhanced recommendation accuracy using clustering techniques on CSR matrices.",
        "Optimized memory and computational efficiency for large datasets."
      ]
    }
  ];

  const experiences: ExperienceData[] = [
    {
      company: "Wiseyak",
      position: "Machine Learning Engineer/Frontend Developer",
      period: "December 2024 - Present",
      description: "Developing AI-powered web applications and integrating machine learning models into user-friendly interfaces.",
      responsibilities: [
        "Developing AI-powered web applications by integrating machine learning models into user-friendly frontend interfaces using React and modern web technologies.",
        "Collaborating with data scientists and backend engineers to implement interactive visualizations and optimize user experience for AI-driven healthcare solutions."
      ]
    },
    {
      company: "GC Trade, France",
      position: "Frontend Developer",
      period: "February 2024 - June 2024",
      description: "Created responsive and intuitive user interfaces for a French trading company.",
      responsibilities: [
        "Applied advanced concepts of HTML, CSS, JavaScript and React to create a highly intuitive and responsive user interface.",
        "Collaborated with the team at GC Trade to develop and deliver an informative and visually appealing website meeting business goals and customer needs.",
        "Conducted comprehensive testing and optimization, enhancing website performance and stability, reduction in load times and a significant boost in overall user satisfaction."
      ]
    },
    {
      company: "BP Eye Foundation/Hospital (CHEERS) in collaboration with NAAMII",
      position: "AI Intern",
      period: "May 2023 - February 2024",
      description: "Developed AI-driven solutions for disease prediction and telemedicine for Nepal's first dedicated child-focused hospital.",
      responsibilities: [
        "Certified in AI and Deep Learning with expertise in Python programming, Git version control, and end-to-end pipelines.",
        "Gained hands-on experience with neural networks, including building models using PyTorch and working with CNNs.",
        "Developed skills in data preprocessing, feature scaling, image transformations, and implementing linear classifiers.",
        "Collaborated with researchers and medical experts to design scalable solutions for disease prediction.",
        "Led the development of deep learning models for predicting Otitis Media, Oral cancer, and Genetic Disorders."
      ]
    }
  ];

  const education: EducationData[] = [
    {
      institution: "Tribhuvan University, Advanced College of Engineering and Management, Kathmandu",
      degree: "Bachelor in Computer Engineering",
      period: "July 2024",
      percentage: "79.27%"
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      category: "Machine Learning & AI",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "CNNs", "PyTorch", "Scikit-learn", "TensorFlow"],
      icon: <FaBrain />
    },
    {
      category: "Programming Languages",
      skills: ["Python", "C", "C++", "JavaScript"],
      icon: <FaPython />
    },
    {
      category: "Web Development",
      skills: ["React", "HTML", "CSS", "JavaScript"],
      icon: <FaReact />
    },
    {
      category: "Data Science & Tools",
      skills: ["NumPy", "Pandas", "Matplotlib", "SciPy", "Git", "GitHub"],
      icon: <FaDatabase />
    }
  ];

  const achievements = [
    "Secured first place in the Python Bytes competition by recreating a classic maze game (2021)",
    "Awarded merit-based scholarship for outstanding academic performance each semester",
    "Participated in 'HEx Genius Hackathon' organized by Himalaya IT Club (July 2023)",
    "Completed a course on Deep Learning for Medical Image Classification (100 hours of lectures, 100 hours of lab sessions) at NAAMII"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-gray-50">
      <head>
        <title>{INFO.main.title}</title>
        <meta name="description" content={INFO.homepage.description} />
        <meta name="keywords" content="Machine Learning, AI, Deep Learning, Frontend Development, Python, React" />
      </head>

      <Navbar />
      
      <div className="pt-16 max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="grid md:grid-cols-5 gap-10 items-center py-16">
          <div className="md:col-span-3">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{INFO.homepage.title}</h1>
            <h2 className="text-2xl text-blue-600 mb-4">Machine Learning Engineer & Frontend Developer</h2>
            <p className="text-lg text-gray-600 mb-6">{INFO.homepage.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 text-center">
                View Projects
              </a>
              <a href="/assets/docs/CV_Manish_G.pdf" download>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition duration-300 text-center">
                        Download CV
                    </button>
                </a>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <FaEnvelope className="mr-2" />
              <span>{INFO.main.email}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{INFO.main.phone}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{INFO.main.location}</span>
            </div>

          </div>
          <div className="md:col-span-2">
            <div className="bg-white p-1 rounded-lg shadow-md">
              <img
                src="/images/manish (2).jpg"
                alt="Manish Gyawali"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href={INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-black text-2xl transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href={INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-700 text-2xl transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href={INFO.socials.email}
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-red-600 text-2xl transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Projects Section */}
        <div id="projects" className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
            <div className="flex-grow border-b-2 border-gray-200 ml-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                logo={project.logo}
                achievements={project.achievements}
              />
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Work Experience</h2>
            <div className="flex-grow border-b-2 border-gray-200 ml-4"></div>
          </div>
          {experiences.map((experience, index) => (
            <Experience
              key={index}
              company={experience.company}
              position={experience.position}
              period={experience.period}
              description={experience.description}
              responsibilities={experience.responsibilities}
            />
          ))}
        </div>

        {/* Education Section */}
        <div id="education" className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Education</h2>
            <div className="flex-grow border-b-2 border-gray-200 ml-4"></div>
          </div>
          {education.map((edu, index) => (
            <Education
              key={index}
              institution={edu.institution}
              degree={edu.degree}
              period={edu.period}
              percentage={edu.percentage}
            />
          ))}
        </div>

        {/* Skills Section */}
        <div id="skills" className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
            <div className="flex-grow border-b-2 border-gray-200 ml-4"></div>
          </div>
          <SkillSet skillCategories={skillCategories} />
        </div>

        {/* Achievements Section */}
        <div id="achievements" className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Achievements</h2>
            <div className="flex-grow border-b-2 border-gray-200 ml-4"></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <p className="text-gray-700">{achievement}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
            <div className="flex-grow border-b-2 border-gray-200 ml-4"></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get In Touch</h3>
                <p className="text-gray-600 mb-6">
                  Always looking for new opportunities to grow myself, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaEnvelope className="text-blue-600 mr-3" />
                    <span>{INFO.main.email}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{INFO.main.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{INFO.main.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="flex justify-center space-x-6 mb-6">
                  <a
                    href={INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-800 hover:bg-black text-white text-xl p-4 rounded-full transition-colors duration-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xl p-4 rounded-full transition-colors duration-300"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={INFO.socials.email}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-red-500 hover:bg-red-600 text-white text-xl p-4 rounded-full transition-colors duration-300"
                  >
                    <FaEnvelope />
                  </a>
                </div>
                <a
                  href={INFO.socials.email}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  Send me an email
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Homepage;