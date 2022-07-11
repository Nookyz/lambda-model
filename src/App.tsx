import { FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import LambdaModel from './components/LambdaModel';
import { angleToRadians } from './utils/helper';

const App: FC = () => {
  return (
    <Canvas
        shadows 
      >
        <Suspense fallback={null}>
          <LambdaModel />
          <OrbitControls 
            minPolarAngle={angleToRadians(60)} 
            maxPolarAngle={angleToRadians(80)}
            minAzimuthAngle={angleToRadians(-60)} 
            maxAzimuthAngle={angleToRadians(60)}
            enablePan={false}
            minZoom={1}
            maxZoom={2}
          />
        </Suspense>
      </Canvas>
  )
}

export default App
