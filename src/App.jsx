import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import * as THREE from 'three'
function App() {
  return (
    <Canvas gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1, outputColorSpace: THREE.SRGBColorSpace }}>
      <Experience />
    </Canvas>
  )
}

export default App
