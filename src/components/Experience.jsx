import { OrbitControls, TransformControls, MeshReflectorMaterial } from '@react-three/drei'
import { useRef } from 'react'

const Experience = () => {
  const controls = useRef()
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <ambientLight intensity={0.5} />
      <group>
        <mesh position-x={-1}>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <TransformControls object={controls} />
        <mesh position-x={2} ref={controls} rotation-y={Math.PI * 0.25} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial resolution={512} blur={[1000, 1000]} mixBlur={0.5} mirror={0.75} />
      </mesh>
    </>
  )
}

export default Experience
