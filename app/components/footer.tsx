"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Grid, Stage } from "@react-three/drei";

import  Rabbit  from "./models/Rabbit";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import * as THREE from 'three';

export default function Footer() {
  return (
    <footer className="relative w-full h-screen overflow-hidden bg-black text-white font-inter">
      
      <div className="absolute inset-0 z-0">
        <Canvas flat shadows camera={{ position: [-15, 0, 10], fov: 20 }}>
          <fog attach="fog" args={["black", 15, 22.5]} />
          <Stage
            intensity={0.5}
            environment="city"
            shadows={{
              type: "accumulative",
              bias: -0.001,
              intensity: Math.PI,
            }}
            adjustCamera={false}
          >
            <Rabbit />
          </Stage>

          <EffectComposer enableNormalPass={false}>
            <Bloom luminanceThreshold={2} mipmapBlur />
            <ToneMapping />
          </EffectComposer>

          <Environment background preset="sunset" blur={0.8} />
          <Grid
            renderOrder={-1}
            position={[0, -2.85, 0]}
            infiniteGrid
            cellSize={0.6}
            sectionSize={3.3}
            sectionThickness={1.5}
            sectionColor={new THREE.Color(0.5, 0.5, 1.0)}
            fadeDistance={20}
          />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.04}
            enableZoom={false}
            makeDefault
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* === Overlay Layout === */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-between py-16 text-center pointer-events-none">
        {/* Top Section */}
        <div className="pointer-events-auto">
          <p className="text-xs tracking-[2px] uppercase opacity-80 mb-2">
            Let’s Work Together
          </p>
          <a
            href="mailto:hello@andymutale.com"
            className="text-[clamp(1rem,3vw,1.75rem)] font-medium opacity-90 hover:text-blue-400 transition-colors"
          >
            hello@andymutale.com
          </a>
        </div>

        {/* Bottom Section */}
        <div className="pointer-events-auto">
          <h1 className="text-[clamp(2rem,8vw,4rem)] font-extrabold tracking-tight">
            ANDYMUTALE
          </h1>
          <p className="mt-2 text-sm opacity-70">
            Designed & Dev → <span className="font-semibold">Andy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
