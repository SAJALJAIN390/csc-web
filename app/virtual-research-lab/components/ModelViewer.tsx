import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function EngineeringModel({ wireframe }: { wireframe: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 1, 2, 32]} />
          {wireframe ? (
            <meshBasicMaterial color="#00D4FF" wireframe transparent opacity={0.6} />
          ) : (
            <MeshDistortMaterial color="#1a2744" distort={0.05} speed={2} metalness={0.8} roughness={0.2} />
          )}
        </mesh>
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.8, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          {wireframe ? (
            <meshBasicMaterial color="#7B61FF" wireframe transparent opacity={0.5} />
          ) : (
            <meshStandardMaterial color="#2a1f5e" metalness={0.9} roughness={0.1} />
          )}
        </mesh>
        <mesh position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.1, 0.08, 16, 64]} />
          <meshBasicMaterial color="#00FFA3" transparent opacity={wireframe ? 0.4 : 0.8} />
        </mesh>
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(angle) * 1.05, 0, Math.sin(angle) * 1.05]}>
              <boxGeometry args={[0.1, 1.5, 0.1]} />
              <meshBasicMaterial color="#00D4FF" transparent opacity={0.4} />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

const tabs = ["Geometry", "Materials", "Simulation"];

export default function ModelViewer() {
  const [activeTab, setActiveTab] = useState(0);
  const [wireframe, setWireframe] = useState(false);

  return (
    <section className="relative py-24 grid-overlay">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-heading text-xs tracking-[0.3em] text-neon-blue uppercase mb-3">Interactive</p>
          <h2 className="section-heading text-foreground">
            3D Model <span className="text-primary">Viewer</span>
          </h2>
        </motion.div>

        <motion.div className="glass-panel overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center justify-between border-b border-border px-6 py-3">
            <div className="flex gap-1">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 rounded-md text-xs font-heading tracking-wider transition-all ${
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
                className={`px-3 py-1.5 rounded text-xs font-heading tracking-wider transition-all ${
                  wireframe ? "text-neon-blue" : "text-muted-foreground hover:text-foreground"
                }`}
                style={wireframe ? { background: 'rgba(0,212,255,0.2)' } : {}}
              >
                Wireframe
              </button>
              <button className="px-3 py-1.5 rounded text-xs font-heading tracking-wider text-muted-foreground hover:text-foreground transition-colors">Explode</button>
              <button className="px-3 py-1.5 rounded text-xs font-heading tracking-wider text-muted-foreground hover:text-foreground transition-colors">Section</button>
            </div>
          </div>

          <div className="h-[450px] relative">
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
              <div className="w-full h-px animate-scan-line" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)' }} />
            </div>
            <Canvas camera={{ position: [3, 2, 4], fov: 45 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[5, 5, 5]} intensity={0.6} color="#00D4FF" />
              <pointLight position={[-5, -3, 5]} intensity={0.3} color="#7B61FF" />
              <EngineeringModel wireframe={wireframe} />
              <OrbitControls enableDamping={false} />
              <gridHelper args={[10, 20, "#1a3a5c", "#0a1929"]} />
            </Canvas>
            <div className="absolute bottom-4 left-4 glass-panel px-4 py-2 z-20">
              <p className="text-[10px] font-heading text-muted-foreground tracking-wider">
                VERTICES: 12,847 | FACES: 25,694 | FORMAT: STEP
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
