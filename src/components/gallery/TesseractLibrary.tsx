'use client';

import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Line } from '@react-three/drei';
import * as THREE from 'three';

const tesseractCells = {
  cell1: "Visual Design",
  cell2: "Promotional Campaigns", 
  cell3: "Brand Identity",
  cell4: "Motion & VFX",
  cell5: "Creative Direction",
  cell6: "Marketing Collateral",
  cell7: "Showroom Events",
  cell8: "System Operations"
};

// Generate placeholders
const generateMockWorksForCategory = (cellId: number) => {
  const categoryNames = Object.values(tesseractCells);
  const category = categoryNames[cellId % 8];
  
  return Array.from({ length: 6 }, (_, i) => ({
    id: `${category}-${i}`,
    title: `${category} Project ${i + 1}`,
    description: `A cinematic exploration of ${category.toLowerCase()} techniques.`,
    tags: [category, "Cinematic", "3D"],
    rotation: (i * 0.1) - 0.25,
  }));
};

const ProjectBook = ({ position, rotation, work }: any) => {
  const [open, setOpen] = useState(false);
  const bookRef = useRef<THREE.Mesh>(null);
  
  return (
    <group 
      position={position} 
      rotation={rotation}
      onPointerEnter={(e) => { e.stopPropagation(); setOpen(true); document.body.style.cursor = 'pointer'; }}
      onPointerLeave={(e) => { e.stopPropagation(); setOpen(false); document.body.style.cursor = 'auto'; }}
    >
      <mesh ref={bookRef} castShadow receiveShadow>
        <boxGeometry args={[0.4, 0.6, 0.06]} />
        <meshStandardMaterial 
          color={open ? "#00d4ff" : "#8b4513"} 
          emissive={open ? "#00d4ff" : "#000000"}
          emissiveIntensity={open ? 0.6 : 0}
          metalness={open ? 0.8 : 0.2}
          roughness={open ? 0.2 : 0.6}
        />
      </mesh>
      
      {open && (
        <Html distanceFactor={4} position={[0, 0, 0.2]} center zIndexRange={[100, 0]}>
          <div className="bg-black/90 backdrop-blur-md p-3 rounded-lg border border-interstellar-blue w-48 shadow-2xl pointer-events-none">
            <h4 className="text-interstellar-blue font-bold text-sm mb-1">{work.title}</h4>
            
            {work.thumbnailUrl ? (
              <img src={work.thumbnailUrl} alt={work.title} className="w-full h-24 object-cover rounded mb-2 border border-white/10" />
            ) : (
              <div className="w-full h-20 bg-gradient-to-br from-space-void to-event-horizon border border-white/10 rounded mb-2 flex items-center justify-center">
                <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">{work.tags[0]}</span>
              </div>
            )}
            
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">{work.description}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {work.tags.slice(0, 3).map((tag: string) => (
                <span key={tag} className="text-[9px] px-1.5 py-0.5 bg-interstellar-blue/10 border border-interstellar-blue/30 rounded text-interstellar-blue uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

const Bookshelf = ({ position, rotation, category, works }: any) => {
  const shelfRef = useRef<THREE.Group>(null);
  
  return (
    <group ref={shelfRef} position={position} rotation={rotation}>
      {/* Wooden shelf frame */}
      <mesh position={[0, -0.35, 0]}>
        <boxGeometry args={[3.2, 0.05, 0.8]} />
        <meshStandardMaterial color="#3a2718" metalness={0.2} roughness={0.8} />
      </mesh>
      
      {/* Shelf backing */}
      <mesh position={[0, 0, -0.35]}>
        <boxGeometry args={[3.2, 0.7, 0.05]} />
        <meshStandardMaterial color="#1a0f08" emissive="#050301" />
      </mesh>
      
      {/* Books */}
      {works.map((work: any, index: number) => (
        <ProjectBook
          key={work.id}
          position={[-1.2 + (index * 0.48), 0, 0]}
          rotation={[0, work.rotation || 0, 0]}
          work={work}
        />
      ))}
      
      <Text
        position={[0, 0.45, 0]}
        fontSize={0.12}
        color="#00d4ff"
        anchorX="center"
        anchorY="bottom"
      >
        {category}
      </Text>
    </group>
  );
};

export const TesseractLibrary3D = () => {
  const tesseractRef = useRef<THREE.Group>(null);
  
  const cells = useMemo(() => {
    // 8 points of a hypercube projection
    const positions = [
      [-4, -4, -4], [ 4, -4, -4], [ 4, -4,  4], [-4, -4,  4], // bottom outer
      [-4,  4, -4], [ 4,  4, -4], [ 4,  4,  4], [-4,  4,  4], // top outer
    ];
    
    // Inner cube projection
    const innerPositions = positions.map(p => p.map(v => v * 0.35));
    
    return [...positions, ...innerPositions].map((pos, idx) => ({
      position: pos as [number, number, number],
      category: Object.values(tesseractCells)[idx % 8],
      works: generateMockWorksForCategory(idx),
      scale: idx < 8 ? 1 : 0.5
    }));
  }, []);
  
  useFrame(({ clock }) => {
    if (tesseractRef.current) {
      tesseractRef.current.rotation.y = clock.getElapsedTime() * 0.03;
      tesseractRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.05;
    }
  });
  
  return (
    <group ref={tesseractRef}>
      <fog attach="fog" args={['#050508', 3, 20]} />
      
      {/* Connecting lines of the Tesseract */}
      {cells.map((cell, idx) => (
        <React.Fragment key={idx}>
          {cells.map((otherCell, otherIdx) => {
            if (idx >= otherIdx) return null;
            const distance = Math.hypot(
              cell.position[0] - otherCell.position[0],
              cell.position[1] - otherCell.position[1],
              cell.position[2] - otherCell.position[2]
            );
              if (distance < 9 && distance > 0.1) {
              const linePoints = [cell.position, otherCell.position];
              return (
                <Line 
                  key={`line-${idx}-${otherIdx}`} 
                  points={linePoints}
                  color="#00d4ff" 
                  opacity={0.1} 
                  transparent 
                  lineWidth={1}
                />
              );
            }
            return null;
          })}
        </React.Fragment>
      ))}
      
      {/* 8 Cells containing infinite repeating shelves */}
      {cells.map((cell, idx) => (
        <group key={idx} position={cell.position} scale={[cell.scale, cell.scale, cell.scale]}>
          {[-1, 0, 1].map(x => 
            [-1, 0, 1].map(y => 
              [-1, 0, 1].map(z => {
                // Remove the exact center shelf to leave a "corridor"
                if (x === 0 && z === 0) return null;
                return (
                  <Bookshelf
                    key={`${idx}-${x}-${y}-${z}`}
                    position={[x * 3.5, y * 1.5, z * 3.5]}
                    rotation={[0, Math.atan2(x, z), 0]}
                    category={cell.category}
                    works={cell.works}
                  />
                );
              })
            )
          )}
        </group>
      ))}
      
      {/* The "Bulk" - central ethereal light source */}
      <pointLight position={[0, 0, 0]} intensity={3} color="#00d4ff" distance={30} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#9b59b6" distance={20} />
    </group>
  );
};
