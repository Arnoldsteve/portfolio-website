import 'bootstrap/dist/css/bootstrap.css';
import PortfolioLanding from './Components/PortfolioLanding';
import ProjectPage from './Components/ProjectPage';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<PortfolioLanding />} />
      <Route path="/projects/:projectName" element={<ProjectPage />} />
    </Routes>
  </Router>
  );
}

export default App;
