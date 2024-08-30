import React from 'react';
import { Code, Smartphone, PenTool, TestTube, MoreHorizontal } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../Footer';

const ServiceCard = ({ title, icon: Icon, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-blue-400 mr-3" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Web Design",
      icon: PenTool,
      description: "Create stunning, responsive websites that captivate your audience and elevate your brand."
    },
    {
      title: "Web Development",
      icon: Code,
      description: "Build powerful, scalable web applications using cutting-edge technologies and best practices."
    },
    {
      title: "Web Testing",
      icon: TestTube,
      description: "Ensure your web applications are bug-free and perform flawlessly across all devices and browsers."
    },
    {
      title: "Android Development",
      icon: Smartphone,
      description: "Develop innovative, user-friendly Android apps that stand out in the Google Play Store."
    },
    {
      title: "Other Services",
      icon: MoreHorizontal,
      description: "From consulting to maintenance, we offer a range of additional services to meet your unique needs."
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-dark text-light min-vh-100 p-4" >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-white text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} className="bg-dark text-light" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;