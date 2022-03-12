import * as THREE from 'three'
import React, { Suspense, useEffect, useState, useRef, forwardRef } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html, Text, MeshReflectorMaterial, useScroll, ScrollControls, Line } from '@react-three/drei'
import Overlay from './Overlay'
import "./About.css"


function VideoText({ clicked, ...props }) {
  const scroll = useScroll()
  const TextRef = useRef()
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/Nvidia.mp4', crossOrigin: 'Anonymous', loop: true }))
  useEffect(() => void (clicked && video.play()), [video, clicked])
  useFrame(() => (TextRef.current.position.z = scroll.offset * 3, TextRef.current.position.y = scroll.offset * 2.5))
  return (
    <group ref={TextRef} >
    <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
      Nvidia
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
    </group>
  )
}

function Ground() {
  const scroll = useScroll()
  const floorRef = useRef()

  useFrame(() => (floorRef.current.position.z = scroll.offset * 3, floorRef.current.position.y = scroll.offset * 2))
  return (
    <>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} ref={floorRef}>
          <planeGeometry args={[10, 10]} />
          <MeshReflectorMaterial
            blur={[100, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={3}
            depthScale={0.8}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#c2c2c2"
            metalness={0.5}
          />
        </mesh>
    </>
  )
}

const GPU = () => {
  const scroll = useScroll()
  const gpuRef = useRef()
  const gltf = useLoader(GLTFLoader, "./2080.gltf");
  const gltf1 = useLoader(GLTFLoader, "./3080.gltf");
  const gltf2 = useLoader(GLTFLoader, "./2080TI.gltf");
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    gpuRef.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
    gpuRef.current.position.y = (0.3 + Math.sin(t / 2)) / 10
    gpuRef.current.rotation.x += 0.1
  })
  useFrame(() => (gpuRef.current.position.z = scroll.offset * 5, gpuRef.current.position.y = scroll.offset * 2.5))
  return (
    <>
     <group ref={gpuRef}>
      <primitive object={gltf.scene} scale={2} position={[-4, 0.5, 1]}/>
      <primitive object={gltf1.scene} scale={2} position={[0, 0.5, 1]}/>
      <primitive object={gltf2.scene} scale={0.3} position={[4, 0.5, 1]}/>
      <Text
        scale={[4, 4, 1]}
        position={[-4, 2, 2]}
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        RTX 3080
      </Text>
      <Text
        scale={[0.8, 1, 1]}
        position={[-4, 1.5, 2]}
        color="#3E6F68" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
         graphics cards deliver record-breaking
         performance for gamers powered by Ampere,
      </Text>
      <Text
        scale={[4, 4, 1]}
        position={[0, 2, 2]}
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        RTX 2080
      </Text>
      <Text
        scale={[0.8, 1, 1]}
        position={[0, 1.5, 2]}
        color="#3E6F68" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        powered by the NVIDIA Turing architecture to give you incredible new levels of gaming realism and speed.
      </Text>
      <Text
        scale={[4, 4, 1]}
        position={[4, 1.5, 2]}
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        RTX 2080 TI
      </Text>
      <Text
        scale={[0.8, 1, 1]}
        position={[4, 1, 2]}
        color="#3E6F68" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        graphics card is built for gaming realism and performance.NVIDIA GPU architecture and 11 GB of next-gen, ultra-fast GDDR6 memory
      </Text>
      </group>
    </>
  );
};

function About() {
  const [clicked, setClicked] = useState(false)
  const [ready, setReady] = useState(false)
  const store = { clicked, setClicked, ready, setReady }
  return (
    <>
      <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 35 }}>
        <color attach="background" args={['black']} />
        <fog attach="fog" args={['black', 15, 20]} />
        <Suspense fallback={null}>
        <ScrollControls pages={0.1}>       
          <group position={[0, -1, 0]}>
            <VideoText {...store} position={[0, 1.3, -2]} />
            <Ground position={[0, -3, 0]}/>
            <GPU />
            <Text
        scale={[3, 3, 1]}
        position={[0, 4.5, -1]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Scroll Down For Closer Look
      </Text>
          </group>
        </ScrollControls>
        
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.5} />
          <directionalLight position={[-20, 0, -10]} intensity={0.7} />
          <Intro start={ready && clicked} set={setReady} />
        </Suspense>
      </Canvas>
      <Overlay {...store} />
    </>
  )
}

function Intro({ start, set }) {
  const [vec] = useState(() => new THREE.Vector3())
  useEffect(() => setTimeout(() => set(true), 500), [])
  return useFrame((state) => {
    if (start) {
      state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
      state.camera.lookAt(0, 0, 0)
    }
  })
}

export default About