import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ExperiencesPage from "./pages/ExperiencesPage.jsx";
import AchievementsPage from "./pages/AchievementsPage";
import ContactPage from "./pages/ContactPage.jsx";
import { LightRays } from './components/Background';
import Navbar from './layouts/Navbar';
import './App.css'

function App() {
  return (
    <>
      <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/experiences" element={<ExperiencesPage />} />
                <Route path="/achievements" element={<AchievementsPage />} />
                <Route path="/contact" element={<ContactPage />} />
      </Routes>    
      <div className='min-h-screen, relative'>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      <Navbar />
    </>
  )
}

export default App


