import { PerspectiveCamera } from '@react-three/drei'
import useSpline from '@splinetool/r3f-spline'
import React from 'react'
import * as THREE from 'three'

type Props = {}

const SplineModel = (props: Props) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/DWMRheRQzq81KWDt/scene.splinecode')

  const material = new THREE.MeshPhongMaterial();
  material.color = new THREE.Color('#95e1eb');

  return (
    <>
      <color attach="background" args={['#f2dad6']} />
      <group {...props} dispose={null}>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-3474.8725}
          shadow-camera-right={3474.8725}
          shadow-camera-top={3474.8725}
          shadow-camera-bottom={-3474.8725}
          color="#fef6f6"
          position={[1535.79, 1330.43, 1906.49]}
        />
        <group name="flower" position={[305.33, -431.15, 651.31]}>
          <mesh
            name="Cylinder 5"
            geometry={nodes['Cylinder 5'].geometry}
            material={materials.flower}
            castShadow
            receiveShadow
            position={[606.81, 43.6, -745.04]}
          />
          <mesh
            name="Cylinder 2"
            geometry={nodes['Cylinder 2'].geometry}
            material={materials.flower}
            castShadow
            receiveShadow
            position={[808.72, 43.6, 555.8]}
          />
          <group name="Group" position={[-493.5, 0, 719.31]}>
            <mesh
              name="Cylinder 4"
              geometry={nodes['Cylinder 4'].geometry}
              material={materials.flower}
              castShadow
              receiveShadow
              position={[-331.88, 34.88, -67.65]}
            />
            <mesh
              name="Cylinder 3"
              geometry={nodes['Cylinder 3'].geometry}
              material={materials.flower}
              castShadow
              receiveShadow
              position={[179.01, 43.6, 51.91]}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials.flower}
              castShadow
              receiveShadow
              position={[337.32, 31.33, -16.76]}
            />
          </group>
        </group>
        <group name="mermaid" position={[-46.57, 289.61, 696.57]} rotation={[0.35, 0.12, 0.24]}>
          <group name="pearl-1" position={[20.13, 97.04, -22.45]} rotation={[-0.4, -0.1, -0.45]}>
            <mesh
              name="Sphere 9"
              geometry={nodes['Sphere 9'].geometry}
              material={materials.pearl}
              castShadow
              receiveShadow
              position={[-111.73, -34.88, 38.72]}
              rotation={[0, 0.28, 0.17]}
            />
            <mesh
              name="Sphere 8"
              geometry={nodes['Sphere 8'].geometry}
              material={materials.pearl}
              castShadow
              receiveShadow
              position={[-96.06, 4.18, 34.2]}
              rotation={[0, 0.28, 0.17]}
            />
            <mesh
              name="Sphere 7"
              geometry={nodes['Sphere 7'].geometry}
              material={materials.pearl}
              castShadow
              receiveShadow
              position={[-70.48, 37.8, 26.72]}
              rotation={[0, 0.28, 0.17]}
            />
            <mesh
              name="Sphere 10"
              geometry={nodes['Sphere 10'].geometry}
              material={materials.pearl}
              castShadow
              receiveShadow
              position={[111.68, 25.84, -25.77]}
              rotation={[0, 0.28, 0.17]}
            />
            <mesh
              name="Sphere 6"
              geometry={nodes['Sphere 6'].geometry}
              material={materials.pearl}
              castShadow
              receiveShadow
              position={[77.37, 54.03, -15.96]}
              rotation={[0, 0.28, 0.17]}
            />
            <mesh
              name="Sphere 5"
              geometry={nodes['Sphere 5'].geometry}
              material={materials.pearl}
              castShadow
              receiveShadow
              position={[-3.26, 70.92, 7.3]}
              rotation={[0, 0.28, 0.17]}
            />
            <mesh
              name="Sphere 4"
              geometry={nodes['Sphere 4'].geometry}
              material={materials.pearl}
              castShadow
              receiveShadow
              position={[-39.51, 58.34, 17.77]}
              rotation={[0, 0.28, 0.17]}
            />
            <mesh
              name="Sphere 3"
              geometry={nodes['Sphere 3'].geometry}
              material={materials.pearl}
              castShadow
              receiveShadow
              position={[38.14, 69.24, -4.65]}
              rotation={[0, 0.28, 0.17]}
            />
            <mesh
              name="Torus 3"
              geometry={nodes['Torus 3'].geometry}
              material={materials.pearl}
              castShadow
              receiveShadow
              position={[11.63, -65.94, -11.81]}
              rotation={[0.13, 0.29, -1.39]}
            />
          </group>
          <group name="Tail" position={[408.8, -656.03, 35.52]} rotation={[-0.37, -0.02, -0.27]}>
            <mesh
              name="tail"
              geometry={nodes.tail.geometry}
              material={materials['tail Material']}
              castShadow
              receiveShadow
              position={[-240.79, 4.35, -84.01]}
            />
            <mesh
              name="Shape 18"
              geometry={nodes['Shape 18'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[-102.97, 109.79, -54.02]}
              rotation={[-0.49, 0.09, 0.87]}
              scale={[1.09, 1.09, 0.46]}
            />
            <mesh
              name="Shape 7"
              geometry={nodes['Shape 7'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[-181.96, 134.18, -71.6]}
              rotation={[-0.49, 0.09, 1.15]}
              scale={[1.09, 1.09, 0.46]}
            />
            <mesh
              name="Shape 12"
              geometry={nodes['Shape 12'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[-159.36, 159.98, -100.98]}
              rotation={[-1.02, 0.07, 1.13]}
              scale={1.09}
            />
            <mesh
              name="Shape 19"
              geometry={nodes['Shape 19'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[-108.3, 121.88, -62.5]}
              rotation={[-0.6, 0.15, 1.02]}
              scale={1.09}
            />
            <mesh
              name="Shape 26"
              geometry={nodes['Shape 26'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[-101.93, 144.86, -74.06]}
              rotation={[-0.49, 0.37, 0.97]}
              scale={1.09}
            />
            <mesh
              name="Shape 23"
              geometry={nodes['Shape 23'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[-192.99, 160.3, -79.87]}
              rotation={[-0.47, 0.39, 0.97]}
              scale={1.09}
            />
            <mesh
              name="Shape 22"
              geometry={nodes['Shape 22'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[-89.41, 123.49, -63.79]}
              rotation={[-0.64, 0.26, 1.03]}
              scale={1.09}
            />
            <mesh
              name="Shape 17"
              geometry={nodes['Shape 17'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[-155.84, 158.93, -85.26]}
              rotation={[-0.61, 0.29, 1.02]}
              scale={1.09}
            />
            <mesh
              name="Shape 16"
              geometry={nodes['Shape 16'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[-56.34, 95.37, -48.82]}
              rotation={[-0.66, 0.14, 1]}
              scale={[1.09, 1.09, 1.52]}
            />
            <mesh
              name="Shape 13"
              geometry={nodes['Shape 13'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[78.4, -15.25, 17.44]}
              rotation={[-0.59, 0.26, 0.5]}
            />
            <mesh
              name="Shape 24"
              geometry={nodes['Shape 24'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[77.05, -41.4, 39.15]}
              rotation={[-0.46, 0.25, 0.47]}
            />
            <mesh
              name="Shape 25"
              geometry={nodes['Shape 25'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[-180.82, 165.99, -86.44]}
              rotation={[-0.46, 0.2, 1.04]}
            />
            <mesh
              name="Shape 4"
              geometry={nodes['Shape 4'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[92.55, -59.66, 51.33]}
              rotation={[-0.49, 0.3, 0.65]}
            />
            <mesh
              name="Shape 29"
              geometry={nodes['Shape 29'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[-69.61, 100.82, -48]}
              rotation={[-0.74, 0.29, 0.81]}
              scale={[1, 1, 0.71]}
            />
            <mesh
              name="Shape 3"
              geometry={nodes['Shape 3'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[116.54, -46.95, 42.43]}
              rotation={[-0.61, 0.57, 0.62]}
            />
            <mesh
              name="Shape 71"
              geometry={nodes['Shape 71'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[105.47, -78.9, 55.78]}
              rotation={[-0.61, 0.11, 0.61]}
            />
            <mesh
              name="Shape 9"
              geometry={nodes['Shape 9'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[145.52, -139.48, 94.07]}
              rotation={[-0.65, 0.03, 0.43]}
            />
            <mesh
              name="Shape 121"
              geometry={nodes['Shape 121'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[97.53, -32.64, 28.37]}
              rotation={[-0.64, 0.32, 0.47]}
            />
            <mesh
              name="Shape 15"
              geometry={nodes['Shape 15'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[162.97, -126.37, 89.4]}
              rotation={[-0.49, 0.42, 0.48]}
            />
            <mesh
              name="Shape 8"
              geometry={nodes['Shape 8'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[136.97, -105.76, 72.55]}
              rotation={[-0.64, 0.32, 0.56]}
            />
            <mesh
              name="Shape 161"
              geometry={nodes['Shape 161'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[180.36, -154.14, 93.66]}
              rotation={[-0.92, 0.61, 0.6]}
            />
            <mesh
              name="Shape 10"
              geometry={nodes['Shape 10'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[145.66, -84.32, 45.93]}
              rotation={[-0.73, 0.68, 0.51]}
            />
            <mesh
              name="Shape 28"
              geometry={nodes['Shape 28'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[-69.07, 130.64, -82.16]}
              rotation={[-0.79, 0.61, 0.99]}
            />
            <mesh
              name="Shape 27"
              geometry={nodes['Shape 27'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[-119.61, 154.61, -82.18]}
              rotation={[-0.75, 0.62, 1.27]}
            />
            <mesh
              name="Shape 11"
              geometry={nodes['Shape 11'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[110.32, -38.42, 23.53]}
              rotation={[-0.75, 0.62, 0.59]}
            />
            <mesh
              name="Shape 6"
              geometry={nodes['Shape 6'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[134.12, -88.01, 59.16]}
              rotation={[-0.71, 0.42, 0.59]}
            />
            <mesh
              name="Shape 5"
              geometry={nodes['Shape 5'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[112.06, -67.41, 46.33]}
              rotation={[-0.69, 0.17, 0.62]}
            />
            <mesh
              name="Shape 2"
              geometry={nodes['Shape 2'].geometry}
              material={materials.scale}
              castShadow
              receiveShadow
              position={[101.16, -53.36, 41.25]}
              rotation={[-0.75, 0.17, 0.62]}
            />
          </group>
          <group name="body" position={[-119.47, -386.88, 39.45]} rotation={[-0.35, 0.06, -0.24]}>
            <mesh
              name="Cube 2"
              geometry={nodes['Cube 2'].geometry}
              material={materials.pearl}
              castShadow
              receiveShadow
              position={[-21.11, 97.82, 54.7]}
              rotation={[1.79, -0.17, 0.68]}
            />
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials.pearl}
              castShadow
              receiveShadow
              position={[85.28, 80.04, 73.03]}
              rotation={[1.77, -0.02, -0.56]}
            />
            <mesh
              name="Torus 2"
              geometry={nodes['Torus 2'].geometry}
              material={materials.pearl}
              castShadow
              receiveShadow
              position={[-84.92, 239.25, 25.51]}
              rotation={[-0.92, -1.05, 0.86]}
              scale={[1, 0.93, 1]}
            />
            <mesh
              name="Torus"
              geometry={nodes.Torus.geometry}
              material={materials.pearl}
              castShadow
              receiveShadow
              position={[194.22, 139.54, -4.89]}
              rotation={[-Math.PI / 2, 0.21, 0]}
            />
            <mesh
              name="body 5"
              geometry={nodes['body 5'].geometry}
              material={materials['body 5 Material']}
              castShadow
              receiveShadow
              position={[52.9, 12.2, 20.25]}
              scale={2.56}
            />
          </group>
          <mesh
            name="hair"
            geometry={nodes.hair.geometry}
            material={materials['hair Material']}
            castShadow
            receiveShadow
            position={[13.68, 93.53, -54.38]}
            rotation={[-0.37, -0.02, -0.09]}
            scale={1.07}
          />
          <group name="face" rotation={[-0.37, -0.02, -0.27]}>
            <mesh
              name="Eyebrow-l"
              geometry={nodes['Eyebrow-l'].geometry}
              material={materials.Eyebrow}
              castShadow
              receiveShadow
              position={[-44.35, -9.3, 88.17]}
              rotation={[0.38, 0.03, 0.24]}
              scale={[-1, 1, 1]}
            />
            <mesh
              name="Eyebrow-r"
              geometry={nodes['Eyebrow-r'].geometry}
              material={materials.Eyebrow}
              castShadow
              receiveShadow
              position={[43.77, 14.98, 86.19]}
              rotation={[0.33, 0.2, 0.25]}
            />
            <mesh
              name="eyelash-l"
              geometry={nodes['eyelash-l'].geometry}
              material={materials.eyelash}
              castShadow
              receiveShadow
              position={[-42.49, -42.06, 85.64]}
              rotation={[1.04, 0.22, 0.28]}
              scale={[-1.07, 1.07, 1.07]}
            />
            <mesh
              name="eyelash-r"
              geometry={nodes['eyelash-r'].geometry}
              material={materials.eyelash}
              castShadow
              receiveShadow
              position={[58.68, -14.35, 80.87]}
              rotation={[1.13, 0.29, -0.07]}
              scale={1.07}
            />
            <mesh
              name="ear-l"
              geometry={nodes['ear-l'].geometry}
              material={materials.skin}
              castShadow
              receiveShadow
              position={[-91.08, -20.57, -28.32]}
              rotation={[Math.PI / 9, 0, 0.44]}
              scale={1.07}
            />
            <mesh
              name="ear-r"
              geometry={nodes['ear-r'].geometry}
              material={materials.skin}
              castShadow
              receiveShadow
              position={[95.23, 10.3, -17.08]}
              rotation={[Math.PI / 9, 0, -0.09]}
              scale={1.07}
            />
            <group name="eye-l" position={[-38.44, -38.74, 49.82]} rotation={[0.9, 0.05, 0.15]} scale={[-1, 1, 1]}>
              <mesh
                name="Sphere 31"
                geometry={nodes['Sphere 31'].geometry}
                material={materials['eye-2']}
                castShadow
                receiveShadow
                position={[-2, 4.12, 13.3]}
                rotation={[0, Math.PI / 9, 0]}
                scale={[1.07, 1.07, 1.06]}
              />
              <mesh
                name="Sphere 2"
                geometry={nodes['Sphere 2'].geometry}
                material={materials['eye-1']}
                castShadow
                receiveShadow
                position={[-1.15, 2.29, 7.99]}
                rotation={[0, Math.PI / 9, 0]}
                scale={1.07}
              />
              <mesh
                name="Sphere"
                geometry={nodes.Sphere.geometry}
                material={materials['eye-3']}
                castShadow
                receiveShadow
                rotation={[0, Math.PI / 9, 0]}
                scale={1.07}
              />
            </group>
            <group name="eye-r" position={[51.18, -14.47, 48.13]} rotation={[0.85, 0.39, 0.16]}>
              <mesh
                name="Sphere 32"
                geometry={nodes['Sphere 32'].geometry}
                material={materials['eye-2']}
                castShadow
                receiveShadow
                position={[2.78, 5.12, 12.2]}
                rotation={[0, Math.PI / 9, 0]}
                scale={[1.07, 1.07, 1.06]}
              />
              <mesh
                name="Sphere 21"
                geometry={nodes['Sphere 21'].geometry}
                material={materials['eye-1']}
                castShadow
                receiveShadow
                position={[1.78, 3.43, 7.17]}
                rotation={[0, Math.PI / 9, 0]}
                scale={1.07}
              />
              <mesh
                name="Sphere1"
                geometry={nodes.Sphere1.geometry}
                material={materials['eye-3']}
                castShadow
                receiveShadow
                rotation={[0, Math.PI / 9, 0]}
                scale={1.07}
              />
            </group>
            <mesh
              name="face1"
              geometry={nodes.face1.geometry}
              material={materials['face1 Material']}
              castShadow
              receiveShadow
              position={[1.31, -12.65, -26.35]}
              rotation={[0.35, 0.12, 0.24]}
            />
          </group>
        </group>
        <group name="foam" position={[251.95, -440.92, 383.12]}>
          <mesh
            name="Shape 101"
            geometry={nodes['Shape 101'].geometry}
            material={materials.spray}
            castShadow
            receiveShadow
            position={[31.86, 3.71, -797.08]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Shape 91"
            geometry={nodes['Shape 91'].geometry}
            material={materials.spray}
            castShadow
            receiveShadow
            position={[-1213.63, 4.09, 210.28]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Shape 81"
            geometry={nodes['Shape 81'].geometry}
            material={materials.spray}
            castShadow
            receiveShadow
            position={[1014.61, 4.49, 630.12]}
            rotation={[-Math.PI / 2, 0, 0.7]}
            scale={0.88}
          />
          <mesh
            name="Shape 61"
            geometry={nodes['Shape 61'].geometry}
            material={materials.spray}
            castShadow
            receiveShadow
            position={[-225.81, -4.51, 468.34]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.8}
          />
          <mesh
            name="Shape 51"
            geometry={nodes['Shape 51'].geometry}
            material={materials.spray}
            castShadow
            receiveShadow
            position={[628.47, -3.27, 301.72]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Shape 41"
            geometry={nodes['Shape 41'].geometry}
            material={materials.spray}
            castShadow
            receiveShadow
            position={[309.27, -3.26, 177.64]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Shape 31"
            geometry={nodes['Shape 31'].geometry}
            material={materials.spray}
            castShadow
            receiveShadow
            position={[-155.06, -3.9, 402.71]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Shape 21"
            geometry={nodes['Shape 21'].geometry}
            material={materials.spray}
            castShadow
            receiveShadow
            position={[-1089.62, -0.89, 517.34]}
            rotation={[-Math.PI / 2, 0, 0.07]}
          />
          <mesh
            name="Shape"
            geometry={nodes.Shape.geometry}
            material={materials.spray}
            castShadow
            receiveShadow
            position={[-871.98, -3.2, 583.84]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.06}
          />
        </group>
        <group name="bg" position={[129.5, -244.92, 634.5]}>
          <mesh
            name="stone"
            geometry={nodes.stone.geometry}
            material={materials['stone Material']}
            castShadow
            receiveShadow
            position={[-333.94, -138, 207.95]}
          />
          <mesh
            name="water-face"
            geometry={nodes['water-face'].geometry}
            // material={materials.water}
            // material={materials['stone Material']}
            // material={materials['water-face Material']}
            material={material}
            castShadow
            receiveShadow
            position={[0, -201.31, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <PerspectiveCamera
          name="Personal Camera"
          makeDefault={true}
          far={100000}
          near={5}
          fov={45}
          position={[0, 0, 3424.79]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#a0a0ba" position={[0, 1, 0]} />
      </group>
    </>
  )
}

export default SplineModel