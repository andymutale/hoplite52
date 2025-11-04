"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Grid, Stage , Stats, BakeShadows,Preload, Lightformer, ScrollControls } from "@react-three/drei";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import * as THREE from 'three';
import { Suspense } from "react";
import {Toy_ktx2} from "./models/Toy_ktx2";
import { useErrorBoundary } from 'use-error-boundary'



export default function Footer() {

  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  if (didCatch) {
    return (
      <footer className="relative w-full h-screen flex items-center justify-center bg-black text-red-500">
        <div className="text-center">
          <h2 className="text-lg font-bold">Model Error</h2>
          <p className="text-sm mt-2">{error.message}</p>
        </div>
      </footer>
    );
  }
  return (
    <footer className="relative w-full h-screen overflow-hidden bg-black text-white font-inter">
      <Stats
        showPanel={0}
        className="stats-overlay"
      />
      <div className="absolute inset-0 z-0">
        
        <ErrorBoundary>
        <Canvas flat shadows camera={{ position: [-15, 0, 10], fov: 20 }}     >
          <ScrollControls pages={1}>
          <fog attach="fog" args={["black", 15, 22.5]} />
          <Stage intensity={0.5} environment="city" shadows={{ type: "accumulative", bias: -0.001, intensity: Math.PI, }} adjustCamera={false}
          >
            <Suspense fallback={null}>
              
                <group >  
                  <BakeShadows/>           
                   <Toy_ktx2 scale={1} position={[0, 0, 0]} />
              
                </group>
                
             
              
            </Suspense>
            
          </Stage>

          <EffectComposer enableNormalPass={false}>
            <Bloom luminanceThreshold={2} mipmapBlur />
            <ToneMapping />
          </EffectComposer>

          <Environment resolution={512}>
        {/* Ceiling */}
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
        {/* Sides */}
        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
        {/* Key */}
        <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment>
          <Grid
            renderOrder={-1} position={[0, -2.85, 0]} infiniteGrid cellSize={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={new THREE.Color(0.5, 0.5, 1.0)} fadeDistance={20}
          />
          <OrbitControls enableRotate={false} enablePan={false} autoRotate autoRotateSpeed={1.4} enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}
          />
          <Preload all />
          </ScrollControls>
        </Canvas>
        </ErrorBoundary>
      </div>

      {/*Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-between py-16 text-center pointer-events-none">

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
