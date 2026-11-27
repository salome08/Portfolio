import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import type { Group } from 'three';

// Pointer and scroll are read from window: the canvas sits behind the content and never receives events itself.
const input = { x: 0, y: 0, scroll: 0 };

function useWindowInput() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      input.x = (e.clientX / window.innerWidth) * 2 - 1;
      input.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      input.scroll = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}

function makeSphere(count: number, minR: number, maxR: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const radius = Math.random() * (maxR - minR) + minR;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
}

function Stars({ count, animate }: { count: number; animate: boolean }) {
  const tilt = useRef<Group>(null);
  const far = useRef<Group>(null);
  const near = useRef<Group>(null);

  const farStars = useMemo(() => makeSphere(count, 1.5, 3), [count]);
  const nearStars = useMemo(() => makeSphere(Math.round(count / 8), 1.2, 2), [count]);

  useFrame((state, delta) => {
    if (!animate || !tilt.current || !far.current || !near.current) return;
    // Slow drift of the whole sky
    far.current.rotation.x -= delta / 20;
    far.current.rotation.y -= delta / 25;
    near.current.rotation.x -= delta / 14;
    near.current.rotation.y -= delta / 18;
    // Ease the sky toward the pointer: a gentle parallax, never a jump
    const k = 1 - Math.pow(0.001, delta);
    tilt.current.rotation.y += (input.x * 0.25 - tilt.current.rotation.y) * k * 0.5;
    tilt.current.rotation.x += (input.y * 0.15 - tilt.current.rotation.x) * k * 0.5;
    // Drift forward through the stars as the page scrolls
    const targetZ = 3 - input.scroll * 1.2;
    state.camera.position.z += (targetZ - state.camera.position.z) * k * 0.5;
  });

  return (
    <group ref={tilt}>
      <group rotation={[0, 0, Math.PI / 4]}>
        <group ref={far}>
          <Points positions={farStars} stride={3} frustumCulled={false}>
            <PointMaterial transparent color="#ffffff" size={0.01} sizeAttenuation depthWrite={false} />
          </Points>
        </group>
        <group ref={near}>
          <Points positions={nearStars} stride={3} frustumCulled={false}>
            <PointMaterial transparent color="#93c5fd" size={0.016} sizeAttenuation depthWrite={false} opacity={0.8} />
          </Points>
        </group>
      </group>
    </group>
  );
}

export function Background() {
  useWindowInput();
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={reducedMotion ? 'demand' : 'always'}
        gl={{ antialias: false, powerPreference: 'low-power' }}
        camera={{ position: [0, 0, 3], fov: 60, near: 0.1, far: 1000 }}
      >
        <color attach="background" args={['#000000']} />
        <Stars count={small ? 2500 : 5000} animate={!reducedMotion} />
      </Canvas>
    </div>
  );
}
