// import React from 'react';
// import { Suspense, useEffect, useState } from 'react';
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";
// import { useProgress, Html } from "@react-three/drei";

// const Computers = () => {
//   const computer = useGLTF('./desktop_pc/scene.gltf');
//   return (
//     <mesh>

//       <hemisphereLight intensity={0.15}
//         groundColor="black" />
//       <pointLight intensity={1} />
//       <spotLight
//       position={[-20 , 50, 10]} />
//       angle={0.12}
//       penumbra={1}
//       intensity={1}
//       casTShadow
//       shadow-mapSize={1024}
//       <primitive
//         object={computer.scene}
//         scale={0.75}
//         position = {[0,-3.25,-1.5]}
//         rotation={[-0.01,-0.2,-0.1]} 
//       />

//     </mesh>
//   )
// }

// const ComputerCanvas = () => {
//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   )
// };

// export default ComputerCanvas;




import React from 'react';
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Html } from "@react-three/drei";

const Computers = () => {
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
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]} 
      />
    </mesh>
  );
}

const ComputerCanvas = () => {
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
        <Computers />
      </Suspense>
      {/* Preload assets */}
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
