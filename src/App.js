import 'bootstrap/dist/css/bootstrap.css';
import PortfolioLanding from './Components/PortfolioLanding';
import ProjectPage from './Components/ProjectPage';
import Contact from './Components/Contact';
import About from './Components/About';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioLanding />} />
          <Route path="/projects/:projectName" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
  </>
  );
}

export default App;
