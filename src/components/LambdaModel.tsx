import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import useSpline from '@splinetool/r3f-spline'
import React, { FC, useRef } from 'react'

const LambdaModel: FC = () => {
  const { nodes, materials } = useSpline('https://prod.spline.design/Au23mFsbzKF7rUTY/scene.splinecode');

  const isMobile = window.innerWidth < 768;
  return (
    <>
      <color attach="background" args={['#e9e1ce']} />
      <group dispose={null}>
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials['Rectangle Material']}
          castShadow
          receiveShadow
          position={[552, -256.68, -611.68]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          name="Shape"
          geometry={nodes.Shape.geometry}
          material={materials['Shape Material']}
          castShadow
          receiveShadow
          position={[-131, 288.74, 0]}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          color="#ececec"
          position={[-22.89, 300, 471.82]}
        />
        <OrthographicCamera
          name="Personal Camera"
          makeDefault={true}
          far={100000}
          near={-100000}
          zoom={isMobile ? 0.8 : 1.4}
          position={[-300, 200, 1000]}
          rotation={[-0.08, 0.02, 0]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" position={[0, 1, 0]} />
      </group>
    </>
  )
}

export default LambdaModel