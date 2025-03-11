import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";
import "./ModelViewer.css"; // Import CSS file

const ModelViewer = ({ fileUrl }) => {
  const [loading, setLoading] = useState(true);
  const model = useLoader(fileUrl.endsWith(".stl") ? STLLoader : OBJLoader, fileUrl, () => setLoading(false));

  // Add material with color & reflections
  const material = new MeshStandardMaterial({ color: "cyan", metalness: 0.7, roughness: 0.2 });

  return (
    <div className="viewer-container">
      {/* {loading && <p className="loading-text">Loading Model...</p>} */}
      
      <Canvas className="canvas">
        {/* Ambient Light (Soft Background Light) */}
        <ambientLight intensity={0.3} />

        {/* Directional Light (Sunlight Effect) */}
        <directionalLight position={[0, 5, 5]} intensity={1} />

        {/* Spotlight from Above */}
        <spotLight position={[0, 10, 0]} intensity={1.2} angle={0.3} penumbra={.5} />

        {/* The Model */}
        <primitive object={model} material={material} scale={1} />
        
        {/* Camera Controls */}
        <OrbitControls enableDamping = {false} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
