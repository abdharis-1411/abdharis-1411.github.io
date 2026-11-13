import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// Procedural "target on a stand" built from Three.js primitives.
// Replaces the original remote GLTF (hosted on a now-dead Supabase bucket)
// so the hero scene never depends on an external asset fetch.
const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    if (!targetRef.current) return;
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  // concentric bullseye rings (outer -> inner), alternating colors
  const rings = [
    { inner: 0.78, outer: 1.0, color: '#d13b3b' }, // red
    { inner: 0.58, outer: 0.78, color: '#f4f4f4' }, // white
    { inner: 0.38, outer: 0.58, color: '#d13b3b' }, // red
    { inner: 0.2, outer: 0.38, color: '#f4f4f4' }, // white
  ];

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* board face */}
      <group position={[0, 0.9, 0]}>
        {/* backing disc */}
        <mesh position={[0, 0, -0.02]}>
          <circleGeometry args={[1.05, 48]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.2} roughness={0.8} />
        </mesh>
        {rings.map((r, i) => (
          <mesh key={i} position={[0, 0, i * 0.001]}>
            <ringGeometry args={[r.inner, r.outer, 48]} />
            <meshStandardMaterial color={r.color} metalness={0.1} roughness={0.6} />
          </mesh>
        ))}
        {/* bullseye center */}
        <mesh position={[0, 0, 0.005]}>
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial color="#f5b000" emissive="#f5b000" emissiveIntensity={0.35} />
        </mesh>
      </group>

      {/* stand pole */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 1.4, 16]} />
        <meshStandardMaterial color="#6b7280" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* base */}
      <mesh position={[0, -1.15, 0]}>
        <cylinderGeometry args={[0.45, 0.5, 0.12, 24]} />
        <meshStandardMaterial color="#4b5563" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
};

export default Target;
