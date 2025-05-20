
import React, { useEffect, useState } from 'react';

type Leaf = {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  rotation: number;
  size: number;
  rotationSpeed: number;
  horizontalMovement: number; // Adding horizontal movement for more natural motion
};

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  
  useEffect(() => {
    // Create leaves with smoother, more natural animation settings
    const newLeaves = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      left: Math.random() * 100, // Random position from 0-100% of screen width
      animationDuration: 18 + Math.random() * 12, // Between 18-30 seconds to fall (even slower)
      delay: Math.random() * 20, // Random delay up to 20 seconds
      rotation: Math.random() * 360, // Random initial rotation
      size: 0.4 + Math.random() * 0.3, // Smaller size between 0.4x and 0.7x
      rotationSpeed: 15 + Math.random() * 10, // Between 15-25 seconds for a full rotation (slower)
      horizontalMovement: Math.random() > 0.5 ? 1 + Math.random() * 2 : -(1 + Math.random() * 2), // Random horizontal drift
    }));
    
    setLeaves(newLeaves);
    
    // Recreate leaves for continuous animation effect
    const interval = setInterval(() => {
      setLeaves(prev => {
        return prev.map(leaf => ({
          ...leaf,
          delay: Math.random() * 20,
          left: Math.random() * 100,
          horizontalMovement: Math.random() > 0.5 ? 1 + Math.random() * 2 : -(1 + Math.random() * 2),
        }));
      });
    }, 35000); // Recreate every 35 seconds (longer interval)
    
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
            animation: `customLeafFall ${leaf.animationDuration}s ease-in-out ${leaf.delay}s infinite`,
            transform: `rotate(${leaf.rotation}deg) scale(${leaf.size})`,
            opacity: 0.4, // Reduced opacity from 0.7 to 0.4 for more transparency
          }}
        >
          <img 
            src="/lovable-uploads/eaf6ccc7-491f-443b-9300-c6c2eb2dc7d7.png"
            alt="Falling leaf"
            className="w-full h-full object-contain drop-shadow-lg"
            style={{
              animation: `gentleSpin ${leaf.rotationSpeed}s ease-in-out infinite alternate`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;
