"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function GearAssembly() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial color="#00D4FF" wireframe distort={0.2} speed={3} transparent opacity={0.7} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.8, 0.02, 16, 100]} />
          <meshBasicMaterial color="#7B61FF" transparent opacity={0.6} />
        </mesh>
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.2, 0.015, 16, 100]} />
          <meshBasicMaterial color="#00FFA3" transparent opacity={0.4} />
        </mesh>
        <mesh rotation={[Math.PI / 6, Math.PI / 2, 0]}>
          <torusGeometry args={[2.5, 0.01, 16, 100]} />
          <meshBasicMaterial color="#00D4FF" transparent opacity={0.3} />
        </mesh>
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(angle) * 1.4, Math.sin(angle) * 1.4, 0]}>
              <octahedronGeometry args={[0.08]} />
              <meshBasicMaterial color="#00D4FF" transparent opacity={0.8} />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

export default function HeroModel() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#00D4FF" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#7B61FF" />
        <GearAssembly />
      </Canvas>
    </div>
  );
}
