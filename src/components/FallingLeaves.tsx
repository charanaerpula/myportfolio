
import React, { useEffect, useState } from 'react';

type Leaf = {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  rotation: number;
  size: number;
  rotationSpeed: number;
};

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  
  useEffect(() => {
    // Create more leaves with faster animation durations
    const newLeaves = Array.from({ length: 15 }, (_, index) => ({
      id: index,
      left: Math.random() * 100, // Random position from 0-100% of screen width
      animationDuration: 8 + Math.random() * 12, // Between 8-20 seconds to fall
      delay: Math.random() * 15, // Random delay up to 15 seconds
      rotation: Math.random() * 360, // Random initial rotation
      size: 0.8 + Math.random() * 0.6, // Random size between 0.8x and 1.4x
      rotationSpeed: 8 + Math.random() * 6, // Between 8-14 seconds for a full rotation
    }));
    
    setLeaves(newLeaves);
    
    // Recreate leaves for continuous animation effect
    const interval = setInterval(() => {
      setLeaves(prev => {
        return prev.map(leaf => ({
          ...leaf,
          delay: Math.random() * 15,
          left: Math.random() * 100,
        }));
      });
    }, 25000); // Recreate every 25 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 20 }}>
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute top-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          style={{
            left: `${leaf.left}%`,
            animation: `leafFall ${leaf.animationDuration}s linear ${leaf.delay}s infinite`,
            transform: `rotate(${leaf.rotation}deg) scale(${leaf.size})`,
            opacity: 0.85, // Increased opacity for better visibility
          }}
        >
          <img 
            src="/lovable-uploads/eaf6ccc7-491f-443b-9300-c6c2eb2dc7d7.png"
            alt="Falling leaf"
            className="w-full h-full object-contain drop-shadow-lg"
            style={{
              animation: `spin-slow ${leaf.rotationSpeed}s linear infinite`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;
