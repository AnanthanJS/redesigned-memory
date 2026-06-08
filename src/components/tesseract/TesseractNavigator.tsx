'use client';

import { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Dimension Components
import EventHorizon from '@/components/hero/EventHorizon';
import DimensionalLibrary from '@/components/gallery/DimensionalLibrary';
import { TesseractLibrary3D } from '@/components/gallery/TesseractLibrary';
import ControlRoom from '@/components/skills/ControlRoom';
import Holodeck from '@/components/courses/Holodeck';
import QuantumCommunicator from '@/components/contact/QuantumCommunicator';

// A simple wireframe tesseract (hypercube projection)
const TesseractFrame = ({ activeDimension, onFaceClick }: any) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1;
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Box args={[2, 2, 2]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#00d4ff" wireframe opacity={0.5} transparent />
      </Box>
      <Box args={[3.5, 3.5, 3.5]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#9b59b6" wireframe transparent opacity={0.2} />
      </Box>
      
      {/* Interactive dimensional nodes */}
      <Sphere args={[0.2]} position={[0, 1.75, 0]} onClick={() => onFaceClick('1d')}>
        <meshStandardMaterial color="#ff6b35" emissive="#ff6b35" emissiveIntensity={2} />
      </Sphere>
      <Sphere args={[0.2]} position={[1.75, 0, 0]} onClick={() => onFaceClick('2d')}>
        <meshStandardMaterial color="#00e5c3" emissive="#00e5c3" emissiveIntensity={2} />
      </Sphere>
      <Sphere args={[0.2]} position={[0, 0, 1.75]} onClick={() => onFaceClick('4d')}>
        <meshStandardMaterial color="#ff2a7a" emissive="#ff2a7a" emissiveIntensity={2} />
      </Sphere>
      <Sphere args={[0.2]} position={[-1.75, 0, 0]} onClick={() => onFaceClick('contact')}>
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={2} />
      </Sphere>
    </group>
  );
};

const ParticleField = ({ count }: { count: number }) => {
  const points = useMemo(() => {
    const p = new Array(count * 3).fill(0).map(() => (Math.random() - 0.5) * 20);
    return new Float32Array(p);
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00d4ff" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

export default function TesseractNavigator() {
  const [dimension, setDimension] = useState<'hero' | '1d' | '2d' | '4d' | 'contact'>('hero');

  return (
    <div className="relative h-screen w-full bg-space-void overflow-hidden">
      {/* 3D Tesseract Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#00d4ff" intensity={0.5} />
          
          {dimension === '1d' ? (
            <TesseractLibrary3D />
          ) : (
            <>
              <TesseractFrame activeDimension={dimension} onFaceClick={(dim: any) => setDimension(dim)} />
              <ParticleField count={800} />
            </>
          )}
          
          <OrbitControls 
            enableZoom={dimension === '1d'} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={dimension === '1d' ? 0.5 : 0.3} 
          />
        </Canvas>
      </div>

      {/* Dimensional HUD Navigation */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 flex gap-4 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-interstellar-blue/30 font-mono text-xs tracking-widest overflow-x-auto max-w-full">
        <button onClick={() => setDimension('hero')} className={dimension === 'hero' ? 'text-white drop-shadow-[0_0_8px_rgba(0,212,255,1)]' : 'text-interstellar-blue hover:text-white transition-colors'}>ENTRY</button>
        <button onClick={() => setDimension('1d')} className={dimension === '1d' ? 'text-white drop-shadow-[0_0_8px_rgba(255,107,53,1)]' : 'text-interstellar-blue hover:text-white transition-colors'}>GALLERY</button>
        <button onClick={() => setDimension('2d')} className={dimension === '2d' ? 'text-white drop-shadow-[0_0_8px_rgba(0,229,195,1)]' : 'text-interstellar-blue hover:text-white transition-colors'}>SKILLS</button>
        <button onClick={() => setDimension('4d')} className={dimension === '4d' ? 'text-white drop-shadow-[0_0_8px_rgba(255,42,122,1)]' : 'text-interstellar-blue hover:text-white transition-colors'}>EXPERIENCE</button>
        <button onClick={() => setDimension('contact')} className={dimension === 'contact' ? 'text-white drop-shadow-[0_0_8px_rgba(155,89,182,1)]' : 'text-interstellar-blue hover:text-white transition-colors'}>ENTANGLE</button>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-interstellar-blue hover:text-white transition-colors flex items-center gap-1">
          RESUME <span className="text-[10px]">↗</span>
        </a>
      </div>
      
      {/* Content Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-y-auto overflow-x-hidden">
        <div className="min-h-full pointer-events-auto">
          {dimension === 'hero' && <EventHorizon onEnter={() => setDimension('1d')} />}
          {dimension === '1d' && <DimensionalLibrary />}
          {dimension === '2d' && <ControlRoom />}
          {dimension === '4d' && <Holodeck />}
          {dimension === 'contact' && <QuantumCommunicator />}
        </div>
      </div>
    </div>
  );
}
