import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Footer } from '../Footer';
import Navbar from './Navbar';

const ProjectPage = () => {
  const { projectName } = useParams();
  const ProjectLink = ({ name, url }) => (
    <div className="mb-2">
      <Link to={url} className="text-light text-decoration-none hover-text-warning">
        {name}
      </Link>
    </div>
  );

  return (
    <div className="bg-dark text-light min-vh-100 p-4">
        <div className="container">
            <div id='body' className='text-center'>
                <h1>{projectName}</h1>
                {/* Add more project details here  random-quote-machine href="%PUBLIC_URL%/logo192.png"*/}
                <div id='random-quote-machine'>
                    <a href="https://arnoldsteve.github.io/random-quote-machine/" target="_blank" rel="noopener noreferrer">
                        <img className='rounded img-fluid' src={`${process.env.PUBLIC_URL}/random-quote-machine.png`} alt="Random Quote Machine Screenshot" />
                    </a>
                    <p className='pt-2'>The Random Quote Machine is a React-based project that dynamically generates and displays
                        random quotes, allowing users to explore a variety of quotes and share them on social media.
                    </p>
                </div>
                <div id='weather-app'>
                    <a href="https://weather-app-vanilla-js-mocha.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img className='rounded img-fluid' src={`${process.env.PUBLIC_URL}/weather-app.png`} alt="Random Quote Machine Screenshot" />
                    </a>
                    <p className='pt-2'>The Random Quote Machine is a React-based project that dynamically generates and displays
                        random quotes, allowing users to explore a variety of quotes and share them on social media.
                    </p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default ProjectPage;