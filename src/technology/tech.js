import React, { useRef, Suspense } from "react";
import { useGLTF, Text, MeshReflectorMaterial, useScroll, ScrollControls, CameraShake } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber'
import { Glitch, EffectComposer } from "@react-three/postprocessing";

function Model(props) {
  const group = useRef();
  const part1 = useRef();
  const part2 = useRef();
  const part3 = useRef();
  const part4 = useRef();
  const part5 = useRef();
  const part6 = useRef();
  const part7 = useRef();
  const scroll = useScroll()
  const { nodes, materials } = useGLTF("/gpuDraco.gltf");
  //gpu swing movement
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.set(0.1 + Math.cos(t / 4.5) / 20, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
    group.current.position.y = (0.3 + Math.sin(t / 2)) / 10
    group.current.rotation.x += 0.1
  })
  // scroll animation
  useFrame(() => (group.current.position.z = scroll.offset * 3, group.current.rotation.y = -scroll.offset * 1.3,part1.current.position.z = scroll.offset * 0.2, part1.current.rotation.y = -scroll.offset * 1.3,part2.current.position.z = scroll.offset * 0.6,part3.current.position.z = scroll.offset * 0.9, part3.current.rotation.y = -scroll.offset * 1.3,part4.current.position.z = scroll.offset * 1.4, part4.current.rotation.y = -scroll.offset * 1.2,part6.current.position.z = scroll.offset * -1.2 ,part7.current.position.z = scroll.offset * 0.7))
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh ref={part1}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial009.geometry}
            material={materials.amarillos}
          />
          
          <mesh ref={part1}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial002.geometry}
            material={nodes.defaultMaterial002.material}
          />
          <mesh ref={part1}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial018.geometry}
            material={materials.int_plast_neg001}
          />
          
          <mesh ref={part1}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial016.geometry}
            material={materials.int_plast_neg003}
          />
          <mesh ref={part1}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial015.geometry}
            material={materials.int_plast_neg004}
          />
          
          <mesh ref={part1}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial014.geometry}
            material={materials.int_plast_neg005}
          />
          
          {/* green */}
          <mesh ref={part2}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial012.geometry}
            material={materials.int_plast_neg007}
          />
          <mesh ref={part5}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial003.geometry}
            material={materials.negro}
          />
          {/* chip and board */}
          <mesh ref={part2}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial029.geometry}
            material={nodes.defaultMaterial029.material}
          />
            
            <mesh ref={part2}
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial019.geometry}
              material={materials.int_plast_neg}
            />
            <mesh ref={part2}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial017.geometry}
            material={materials.int_plast_neg002}
          />

          {/* dsdsa */}
          <mesh ref={part2}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial013.geometry}
            material={materials.int_plast_neg006}
          />
          <mesh ref={part7}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial006.geometry}
            material={materials.negro_micros}
          />
          {/* board */}
          <mesh ref={part6}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial030.geometry}
            material={materials.placa}
          />
          {/* end board */}
          <mesh ref={part5}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial020.geometry}
            material={materials.placa_tornillos_a}
          />
          <mesh ref={part5}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial011.geometry}
            material={materials.plastico_negr}
          />
          {/* end green */}
          <mesh ref={part5}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial010.geometry}
            material={materials.plastico_negr001}
          />
          <mesh ref={part5}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial022.geometry}
            material={nodes.defaultMaterial022.material}
          />
          <mesh ref={part3}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial023.geometry}
            material={nodes.defaultMaterial023.material}
          />
          
          <mesh ref={part3}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial024.geometry}
            material={nodes.defaultMaterial024.material}
          />
          <mesh ref={part3}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial025.geometry}
            material={nodes.defaultMaterial025.material}
          />
          <mesh ref={part3}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial026.geometry}
            material={nodes.defaultMaterial026.material}
          />
          <mesh ref={part3}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial027.geometry}
            material={nodes.defaultMaterial027.material}
          />
          <mesh ref={part3}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial001.geometry}
            material={materials.tornillo}
          />
          <mesh ref={part4}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial005.geometry}
            material={materials.verde_micro}
          />
          <mesh ref={part4}
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial004.geometry}
            material={materials.verde_oscuro_micro}
          />
        </group>
      </group>
    </group>
  );
}

function Info() {
  const scroll = useScroll()
  const textRef = useRef()
  useFrame(() => (textRef.current.position.z = scroll.offset * 4, textRef.current.position.y = -scroll.offset * 1.3,textRef.current.rotation.y = scroll.offset * 0.3))

  return(
    <group ref={textRef}>
      <Text
        font="/Inter-Bold.woff"
        scale={[1, 1, 1]}
        position={[0, 2.5, -1.99]}
        color="#76B900"
        anchorX="center"
        anchorY="middle"
      >
        CUDA Compute Capability 8.6
      </Text>
      <Text
        font="/Inter-Bold.woff"
        scale={[1, 1, 1]}
        position={[-1, 1.5, -1.99]}
        color="#76B900"
        anchorX="right"
        anchorY="middle"
      >
        GDDR6X memory support
      </Text>
      <Text
        font="/Inter-Bold.woff"
        scale={[1, 1, 1]}
        position={[-1.3, 0.5, -1.99]}
        color="#76B900"
        anchorX="center"
        anchorY="middle"
      >
        PCI Express 4.0
      </Text>
      <Text
        font="/Inter-Bold.woff"
        scale={[1, 1, 1]}
        position={[0, -0.5, -1.99]}
        color="#76B900"
        anchorX="center"
        anchorY="middle"
      >
        HDMI 2.1 with full 48Gbps bandwidth
      </Text>
    </group>
  )
}

function Ground() {
    const scroll = useScroll()
    const floorRef = useRef()
  
    useFrame(() => (floorRef.current.position.z = scroll.offset * 3, floorRef.current.rotation.y = -scroll.offset * 0.8))
    return (
      <>
      <group ref={floorRef}>
      <mesh  position={[0, 0, -2]} >
            <planeGeometry args={[10, 10]} />
            <MeshReflectorMaterial
              blur={[100, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={0}
              depthScale={0.8}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#303030"
              metalness={0.5}
            />
          </mesh>
          </group>
      </>
    )
  }

function tech() {
    
  return (
    <Canvas>
        <ambientLight intensity={1.5} />
        <Suspense fallback={null}>
        <ScrollControls pages={0.1}>
            <Model />
            <Ground position={[0, -3, 0]}/>
            <Info />
        </ScrollControls>
        <Text
        scale={[3, 3, 1]}
        position={[0, 5, -1]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Scroll Down For Explore More
      </Text>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.5} />
        <directionalLight position={[-20, 0, -10]} intensity={0.7} />
        <CameraShake maxYaw={0.03} maxPitch={0.01} maxRoll={0.03} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />
        <EffectComposer>
          <Glitch  
          delay={[1.5, 3.5]}
          duration={[0.1, 0.3]}
          strength={[0.3, 0.6]}
          />
        </EffectComposer>
        </Suspense>
        {/* <OrbitControls /> */}
    </Canvas>
  )
}



export default tech