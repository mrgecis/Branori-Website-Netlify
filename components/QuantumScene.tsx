
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Particle = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  // Randomize variation for each particle
  const randomPhase = useRef(Math.random() * Math.PI * 2);
  const randomSpeed = useRef(0.7 + Math.random() * 0.6); // Speed multiplier between 0.7 and 1.3
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      const speed = randomSpeed.current;
      const phase = randomPhase.current;

      // Varied movement
      ref.current.position.y = position[1] + Math.sin(t * 1.2 * speed + position[0]) * 0.1;
      ref.current.rotation.x = t * 0.2 * speed;
      ref.current.rotation.z = t * 0.15 * speed;

      // Pulsing opacity effect
      const material = ref.current.material as THREE.MeshPhysicalMaterial;
      if (material) {
         // Oscillate opacity between ~0.5 and 0.9
         material.opacity = 0.7 + Math.sin(t * 2 * speed + phase) * 0.2;
      }
    }
  });

  return (
    <Sphere ref={ref} args={[1, 32, 32]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.5}
        distort={0.25} 
        speed={2 * randomSpeed.current} // Varied distortion speed
        transparent
      />
    </Sphere>
  );
};

const AbstractRing = () => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
       const t = state.clock.getElapsedTime();
       ref.current.rotation.x = Math.sin(t * 0.1) * 0.2; // Slower oscillation
       ref.current.rotation.y = t * 0.04; // Slower spin
    }
  });

  return (
    <Torus ref={ref} args={[3, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
      <meshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={0.2} transparent opacity={0.4} wireframe />
    </Torus>
  );
}

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C5A059" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Particle position={[0, 0, 0]} color="#e7e5e4" scale={1.5} /> 
            <Particle position={[-2, 1, -1]} color="#C5A059" scale={0.5} />
            <Particle position={[2, -1, 0.5]} color="#a8a29e" scale={0.7} />
            <AbstractRing />
        </Float>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

const RotatingGlobe = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <Sphere ref={meshRef} args={[2.8, 32, 32]}>
             <meshBasicMaterial 
                color="#C5A059" 
                wireframe 
                transparent
                opacity={0.15}
             />
        </Sphere>
    );
}

export const GlobeScene: React.FC = () => {
    return (
        <div className="w-full h-full absolute inset-0">
             <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
                <ambientLight intensity={1} />
                <RotatingGlobe />
                <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={0.5} />
            </Canvas>
        </div>
    )
}
