'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 32, 32]} position={[0, 0, 0]}>
      <meshBasicMaterial 
        color="#667eea" 
        wireframe 
        transparent 
        opacity={0.3}
      />
    </Sphere>
  );
}

export function NeuralBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}