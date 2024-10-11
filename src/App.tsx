import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurWork from './components/OurWork';
import PolicyEntrance from './components/PolicyEntrance';
import Policy from './objects/Policy';
import { Work } from './objects/Work';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<OurWork />} />
          <Route path="/privacy" element={
            <PolicyEntrance name={"Privacy Policy"} policy={Policy.ponderPrivacyPolicy} work={Work.ponderWork} />
          } />
          <Route path="/support" element={
            <PolicyEntrance name={"Support"} policy={Policy.ponderSupport} work={Work.ponderWork} />
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App
