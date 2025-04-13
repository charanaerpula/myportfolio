
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
    // Create fewer leaves with longer animation durations for a more cinematic feel
    const newLeaves = Array.from({ length: 6 }, (_, index) => ({
      id: index,
      left: Math.random() * 100, // Random position from 0-100% of screen width
      animationDuration: 15 + Math.random() * 20, // Between 15-35 seconds to fall (much slower)
      delay: Math.random() * 25, // Longer random delay up to 25 seconds
      rotation: Math.random() * 360, // Random initial rotation
      size: 0.7 + Math.random() * 0.5, // Random size between 0.7x and 1.2x
      rotationSpeed: 12 + Math.random() * 8, // Between 12-20 seconds for a full rotation
    }));
    
    setLeaves(newLeaves);
    
    // Recreate leaves less frequently for more natural, cinematic effect
    const interval = setInterval(() => {
      setLeaves(prev => {
        return prev.map(leaf => ({
          ...leaf,
          delay: Math.random() * 25,
          left: Math.random() * 100,
        }));
      });
    }, 40000); // Recreate every 40 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute top-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          style={{
            left: `${leaf.left}%`,
            animation: `leafFall ${leaf.animationDuration}s linear ${leaf.delay}s infinite`,
            transform: `rotate(${leaf.rotation}deg) scale(${leaf.size})`,
            opacity: 0.7, // Slightly transparent leaves for better text visibility
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
