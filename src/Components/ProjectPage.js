import React from 'react';
import { Github, Moon, Gitlab } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
            <header className="d-flex justify-content-between align-items-center mb-5">
                <Link to="/" className="text-decoration-none">
                    <div className="h4 fw-bold mb-0">
                    <span className="text-warning cursor-pointer">i</span>D
                    </div>
                </Link>
                <div className="d-flex flex-direction-row gap-4">
                <ProjectLink name="Randon Quote Machine" url="/projects/Randon Quote Machine" />
                <ProjectLink name="Weather App" url="/projects/Weather App" />
                <ProjectLink name="Screen time converter" url="/projects/screen-time-converter" />
                <ProjectLink name="LTD multi" url="/projects/ltd-multi" />
                <ProjectLink name="Bitline.org" url="/projects/bitline" />
                </div>
                <div>
                    <a href="https://gitlab.com/Arnoldsteve" target="_blank" rel="noopener noreferrer">
                        <Gitlab className="me-3 text-color-white cursor-pointer" size={24} style={{ color: 'white' }}/>
                    </a>

                    <a href="https://github.com/Arnoldsteve" target="_blank" rel="noopener noreferrer">
                        <Github className="me-3 text-color-white cursor-pointer" size={24} style={{ color: 'white' }}/>
                    </a>
                    <Moon className="cursor-pointer" size={24}  style={{ color: 'white' }}/>
                </div>
            </header>
            <div id='body' className='text-center'>
                <h1>{projectName}</h1>
                {/* Add more project details here  random-quote-machine href="%PUBLIC_URL%/logo192.png"*/}
                <div id='random-quote-machine'>
                    <a href="https://arnoldsteve.github.io/random-quote-machine/" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/random-quote-machine.png`} alt="Random Quote Machine Screenshot" />
                    </a>
                    <p className=''>The Random Quote Machine is a React-based project that dynamically generates and displays
                        random quotes, allowing users to explore a variety of quotes and share them on social media.
                    </p>
                </div>
                <div id='weather-app'>
                    <a href="https://weather-app-vanilla-js-mocha.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/weather-app.png`} alt="Random Quote Machine Screenshot" />
                    </a>
                </div>
            </div>
      </div>
    </div>
  );
};

export default ProjectPage;