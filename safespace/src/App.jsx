import './App.css';
import PreviewApp from './components/PreviewApp';
import Dashboard from './components/Dashboard';
import Questionnaire from './components/Questionnaire';  // Import du composant Questionnaire
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Graph from './components/Graph';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PreviewApp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/questionnaire/:category" element={<Questionnaire />} />
        <Route path="/graphs" element={<Graph/>}/>
      </Routes>
    </Router>
  );
}

export default App;
