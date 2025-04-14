
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
    // Reduced number of leaves and increased fall duration
    const newLeaves = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      left: Math.random() * 100, // Random position from 0-100% of screen width
      animationDuration: 15 + Math.random() * 10, // Between 15-25 seconds to fall (slower)
      delay: Math.random() * 20, // Random delay up to 20 seconds
      rotation: Math.random() * 360, // Random initial rotation
      size: 0.4 + Math.random() * 0.3, // Smaller size between 0.4x and 0.7x
      rotationSpeed: 10 + Math.random() * 5, // Between 10-15 seconds for a full rotation
    }));
    
    setLeaves(newLeaves);
    
    // Recreate leaves for continuous animation effect
    const interval = setInterval(() => {
      setLeaves(prev => {
        return prev.map(leaf => ({
          ...leaf,
          delay: Math.random() * 20,
          left: Math.random() * 100,
        }));
      });
    }, 30000); // Recreate every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 20 }}>
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute top-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
          style={{
            left: `${leaf.left}%`,
            animation: `leafFall ${leaf.animationDuration}s linear ${leaf.delay}s infinite`,
            transform: `rotate(${leaf.rotation}deg) scale(${leaf.size})`,
            opacity: 0.7, // Slightly reduced opacity
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

