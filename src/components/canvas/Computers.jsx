import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Html } from "@react-three/drei";

const Computers = (isMobile) => {
  // Load the 3D model of the computer using useGLTF hook
  const computer = useGLTF('./desktop_pc/scene.gltf');
  
  return (
    <mesh>
      {/* Set up lights */}
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={4} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={5} castShadow shadow-mapSize={2048} />
      
      {/* Render the computer model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.5}
        position={isMobile ? [-1, -2.00, -1.5]:[0,-3,-2.2]}
        rotation={[-0.01, -0.2, -0.1]} 
      />
    </mesh>
  );
}

const ComputerCanvas = () => {

  const [isMobile,setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    setIsMobile(mediaQuery.matches);
  
    const handleMediaQueryChange = ({event}) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Enable OrbitControls for camera interaction */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Render the Computers component */}
        <Computers isMobile={isMobile}/>
      </Suspense>
      {/* Preload assets */}
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
