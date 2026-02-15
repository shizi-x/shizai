import About from './components/About';
import { LightRays } from './components/Background';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import './App.css'

function App() {
  return (
    <>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.8}
          rayLength={10}
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
      <About />
    </>
  )
}

export default App


