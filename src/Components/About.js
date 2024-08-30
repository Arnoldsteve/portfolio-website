import React from "react";
import "./About.css";
import "./Navbar.css";
import Icon from "@mui/material/Icon";

const About = () => {
    const skills = [
        { name: "PHP", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/php.svg" },
        { name: "CodeIgniter", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/codeigniter.svg" },
        { name: "Laravel", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/laravel.svg" },
        { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg" },
        { name: "React", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/react.svg" },
        { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/nodedotjs.svg" },
        { name: "Python", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/python.svg" },
        { name: "SQL", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mysql.svg" },
        { name: "Git", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/git.svg" },
    ];
  const projects = [
    {
      name: "E-commerce Platform",
      description: "Built a full-stack e-commerce solution using MERN stack.",
    },
    {
      name: "Data Visualization Dashboard",
      description: "Created an interactive dashboard using D3.js and React.",
    },
    {
      name: "AI Chat Bot",
      description:
        "Developed a conversational AI using natural language processing techniques.",
    },
  ];

  return (
    <div className="bg-dark text-light min-vh-100 p-4">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-lg mb-4">
                We are a dynamic team of full stack developers, driven by our passion for crafting end-to-end solutions that push the boundaries of what's possible in web development. With our fingers on the pulse of both front-end and back-end technologies, we bridge the gap between user experience and server-side logic to create seamless, powerful applications.
            </p>
            <p className="text-lg mb-4">
                Our expertise spans the entire development stack, from responsive UI/UX design using modern frameworks like React and Vue.js, to robust server-side programming with Node.js, Python, and PHP. We're adept at designing scalable architectures, optimizing database performance, and implementing secure API integrations that form the backbone of today's interconnected digital ecosystems.
            </p>
            <p className="text-lg">
                Our mission is to harness the full potential of cutting-edge technologies to develop innovative, scalable, and efficient full stack solutions. We're not just building applications; we're creating digital experiences that drive business growth, streamline operations, and make a tangible difference in people's lives. From startups to enterprise-level projects, we're committed to delivering high-performance, future-proof solutions that stand at the intersection of creativity and technical excellence.
            </p>
        </section>


        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Skills</h2>
          <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-800 text-gray-200 p-4 img-fluid rounded-lg shadow-md transition-transform hover:scale-105">
                {skill.iconUrl ? (
                <img 
                    src={skill.iconUrl} 
                    alt={skill.name} 
                    className="w-12 h-12 mb-3 object-contain"
                    style={{filter: skill.name !== "JavaScript" ? "invert(1)" : "none"}}
                />
                ) : (
                <Icon className="text-5xl mb-3 text-blue-400">{skill.icon}</Icon>
                )}
                <span className="text-sm font-medium">{skill.name}</span>
            </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 pt-3">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
