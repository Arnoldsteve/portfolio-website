import React from "react";
import "./About.css"; // Make sure this file exists and contains your styles
import Navbar from "./Navbar";
import './Navbar.css';

const About = () => {
  const skills = ["JavaScript", "React", "Node.js", "Python", "SQL", "Git"];
  const projects = [
    { name: "E-commerce Platform", description: "Built a full-stack e-commerce solution using MERN stack." },
    { name: "Data Visualization Dashboard", description: "Created an interactive dashboard using D3.js and React." },
    { name: "AI Chat Bot", description: "Developed a conversational AI using natural language processing techniques." }
  ];

  return (
    
    <div className="bg-dark text-light min-vh-100 p-4">
        <div className="container">
        <Navbar/>
    {/* <div className="container mx-auto px-4 py-8 bg-dark text-light min-vh-100 p-4"> */}
        
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-lg mb-4">
            We are a passionate team of software engineers dedicated to crafting innovative solutions 
            for complex problems. With years of experience in various technologies and domains, 
            we strive to deliver high-quality, scalable, and efficient software products.
            </p>
            <p className="text-lg">
            Our mission is to leverage cutting-edge technologies to create impactful applications 
            that make a difference in people's lives and businesses.
            </p>
        </section>

        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Skills</h2>
            <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                {skill}
                </span>
            ))}
            </div>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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