import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, useGLTF } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { EffectComposer, Noise, Glitch } from '@react-three/postprocessing'
import Underlay from './Underlay'
import './App.css';
// 
const Model = () => {
  const gpuRef = useRef()
  const gltf = useLoader(GLTFLoader, "./GPU.gltf");
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    gpuRef.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
    gpuRef.current.position.y = (1 + Math.sin(t / 2)) / 10
  })
  return (
    <>
     <group ref={gpuRef}>
      <primitive object={gltf.scene} scale={0.15} position={[0.3, -0.3, 0]}/>
      </group>
    </>
  );
};

function App() {
  return (
    <div className='App'>
    <Underlay />
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 1.1], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[1, 6, 1.5]} angle={0.2} penumbra={1} intensity={2} castShadow shadow-mapSize={[2048, 2048]} />
      <spotLight position={[-5, 5, -1.5]} angle={0.03} penumbra={1} intensity={2} castShadow shadow-mapSize={[1024, 1024]} />
      <spotLight position={[5, 5, -5]} angle={0.3} penumbra={1} intensity={0.5} castShadow={true} shadow-mapSize={[256, 256]} color="#ffffc0" />
      <Suspense fallback={null}>
        <Model />
        <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.33, 0]} far={2} width={3} height={2} blur={4} />
        <EffectComposer>
         <Glitch delay={[1.5, 3.5]} duration={[0.6, 1.0]}/>
        </EffectComposer>
      </Suspense>
    </Canvas>
    </div>
  );
}

export default App;
