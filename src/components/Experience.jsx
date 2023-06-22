import { useFrame, extend, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Experience = () => {
  extend({ OrbitControls })

  const { camera, gl } = useThree()
  const meshRef = useRef()
  const groupRef = useRef()
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta
    // groupRef.current.rotation.y += delta
  })
  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[10, 10, 5]} intensity={1} />
      <ambientLight intensity={0.5} />
      <group ref={groupRef}>
        <mesh position-x={-1}>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <mesh ref={meshRef} position-x={2} rotation-y={Math.PI * 0.25} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  )
}

export default Experience
