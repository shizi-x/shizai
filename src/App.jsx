import { LightRays } from './components/Background';
import Navbar from './layouts/Navbar';
import About from './layouts/About';
import Skills from './layouts/Skills';
import Projects from './layouts/Projects';
import Footer from './layouts/Footer';
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
        <Footer />
      </main>  
    </>
  )
}

export default App


