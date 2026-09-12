'use client';

import { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  useGLTF,
  Environment,
  Center,
  Html,
  useProgress,
  Bounds
} from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// ── Loading indicator ──────────────────────────────────────

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div
          className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: 'rgba(0,212,255,0.3)', borderTopColor: 'transparent' }}
        />
        {/* Progress */}
        <div className="text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest text-neon-blue"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Loading Model
          </p>
          <p
            className="text-[10px] mt-1 text-muted-foreground"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {progress.toFixed(0)}%
          </p>
        </div>
      </div>
    </Html>
  );
}

// ── 3D Model component ────────────────────────────────────

function Model({ url, wireframe }: { url: string, wireframe: boolean }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef<THREE.Group>(null);

  // Apply wireframe material dynamically
  useEffect(() => {
    if (!scene) return;
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          materials.forEach(mat => {
            if ('wireframe' in mat) {
              (mat as THREE.MeshStandardMaterial).wireframe = wireframe;
              mat.needsUpdate = true;
            }
          });
        }
      }
    });
  }, [scene, wireframe]);

  return (
    <group ref={meshRef}>
      <primitive object={scene} />
    </group>
  );
}

// ── Viewer component ──────────────────────────────────────

const tabs = ["Geometry", "Materials", "Simulation"];

interface ModelViewerProps {
  modelUrl: string;
  title: string;
}

export default function ModelViewer({ modelUrl, title }: ModelViewerProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [wireframe, setWireframe] = useState(false);

  return (
    <div className="relative w-full">
      <motion.div 
        className="glass-panel overflow-hidden" 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-3">
          <div className="flex gap-1 overflow-x-auto hide-scrollbar">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-md text-xs font-heading tracking-wider transition-all whitespace-nowrap ${
                  activeTab === i ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
                style={activeTab === i ? { background: 'rgba(0,212,255,0.15)' } : {}}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setWireframe(!wireframe)}
              className={`px-3 py-1.5 rounded text-xs font-heading tracking-wider transition-all whitespace-nowrap ${
                wireframe ? "text-neon-blue" : "text-muted-foreground hover:text-foreground"
              }`}
              style={wireframe ? { background: 'rgba(0,212,255,0.2)' } : {}}
            >
              Wireframe
            </button>
            <button className="hidden sm:block px-3 py-1.5 rounded text-xs font-heading tracking-wider text-muted-foreground hover:text-foreground transition-colors">Explode</button>
            <button className="hidden sm:block px-3 py-1.5 rounded text-xs font-heading tracking-wider text-muted-foreground hover:text-foreground transition-colors">Section</button>
          </div>
        </div>

        <div className="h-[500px] md:h-[650px] relative">
          <Canvas camera={{ position: [3, 2, 4], fov: 45 }} gl={{ antialias: true, alpha: true }}>
            {/* Lighting from reference viewer */}
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={0.8} color="#00D4FF" />
            <pointLight position={[-5, -3, 5]} intensity={0.5} color="#7B61FF" />
            <directionalLight position={[0, 10, 0]} intensity={0.5} castShadow />

            <Environment preset="city" />

            {/* Model with Bounds for auto-fitting and Center for alignment */}
            <Suspense fallback={<Loader />}>
              <Bounds fit clip observe margin={1.5}>
                <Center>
                  <Model url={modelUrl} wireframe={wireframe} />
                </Center>
              </Bounds>
            </Suspense>

            <OrbitControls enableDamping={false} makeDefault />
            <gridHelper args={[20, 40, "#1a3a5c", "#0a1929"]} />
          </Canvas>
          
          <div className="absolute bottom-4 left-4 glass-panel px-4 py-2 z-20 bg-background/80 backdrop-blur-md">
            <p className="text-[10px] font-heading text-neon-blue tracking-wider uppercase">
              {title}
            </p>
          </div>
          <div className="absolute bottom-4 right-4 glass-panel px-4 py-2 z-20 bg-background/80 backdrop-blur-md">
            <p className="text-[10px] font-heading text-muted-foreground tracking-wider uppercase">
              FORMAT: GLB / GLTF
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
