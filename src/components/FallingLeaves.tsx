
import React, { useEffect, useState } from 'react';

type Leaf = {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  rotation: number;
};

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  
  useEffect(() => {
    // Create 10 leaves with random positions and animation durations
    const newLeaves = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      left: Math.random() * 100, // Random position from 0-100% of screen width
      animationDuration: 7 + Math.random() * 10, // Between 7-17 seconds to fall
      delay: Math.random() * 15, // Random delay up to 15 seconds
      rotation: Math.random() * 360, // Random initial rotation
    }));
    
    setLeaves(newLeaves);
    
    // Recreate leaves periodically for continuous animation
    const interval = setInterval(() => {
      setLeaves(prev => {
        return prev.map(leaf => ({
          ...leaf,
          delay: Math.random() * 15,
        }));
      });
    }, 20000); // Recreate every 20 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute top-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          style={{
            left: `${leaf.left}%`,
            animation: `leafFall ${leaf.animationDuration}s linear ${leaf.delay}s infinite`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          <img 
            src="/lovable-uploads/eaf6ccc7-491f-443b-9300-c6c2eb2dc7d7.png"
            alt="Falling leaf"
            className="w-full h-full object-contain drop-shadow-lg animate-spin-slow"
          />
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;
