
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Rabbit from "./models/Rabbit"
import Boi from "./models/Boi"


export const Scene = () => {
  return (
    <>
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 50, near: .1, far: 100}}>
        <Boi scale={.06} position={[-1, 0, 0]}/>
        <OrbitControls enableZoom={false} />
        <Environment preset="city" />
      </Canvas>
    </>
  )
}