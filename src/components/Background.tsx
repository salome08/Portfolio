import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function Stars() {
  const ref = useRef<any>();
  
  const positions = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const radius = Math.random() * 1.5 + 1.5; // Increased radius range (1.5 to 3.0)
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.01} // Increased point size
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas 
        camera={{ 
          position: [0, 0, 3], // Moved camera back
          fov: 60, // Added field of view
          near: 0.1,
          far: 1000
        }}
      >
        <color attach="background" args={['#000000']} /> {/* Ensure black background */}
        <Stars />
      </Canvas>
    </div>
  );
}