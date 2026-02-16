import { LightRays } from './components/Background';
import Navbar from './components/layouts/Navbar';
import About from './components/layouts/About';
import Skills from './components/layouts/Skills';
import Projects from './components/layouts/Projects';
import './App.css'

function App() {
  return (
    <>
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
      
      <main className='pt-24 px-4'>
        <About />
        <Skills />
        <Projects />
      </main>  
    </>
  )
}

export default App


