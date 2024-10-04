import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurWork from './components/OurWork';
import Privacy from './components/Privacy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<OurWork />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
