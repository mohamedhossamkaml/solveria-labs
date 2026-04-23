"use client";

import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import './TechGlobe.css';

import { useTheme } from 'next-themes';

// Client locations around the world (lat, lon)
const clientLocations = [
  { lat: 37.7749, lon: -122.4194 }, // SF
  { lat: 40.7128, lon: -74.0060 },  // NYC
  { lat: 51.5074, lon: -0.1278 },   // London
  { lat: 25.2048, lon: 55.2708 },   // Dubai
  { lat: 35.6895, lon: 139.6917 },  // Tokyo
  { lat: -33.8688, lon: 151.2093 }, // Sydney
  { lat: 1.3521, lon: 103.8198 },   // Singapore
  { lat: -23.5505, lon: -46.6333 }, // Sao Paulo
  { lat: 52.5200, lon: 13.4050 },   // Berlin
  { lat: 19.4326, lon: -99.1332 },  // Mexico City
];

// Helper to convert lat/lon to 3D sphere coordinates
const latLonToVector3 = (lat: number, lon: number, radius: number) => {
  var phi = (90 - lat) * (Math.PI / 180);
  var theta = (lon + 90) * (Math.PI / 180);

  let x = -(radius * Math.sin(phi) * Math.cos(theta));
  let z = (radius * Math.sin(phi) * Math.sin(theta));
  let y = (radius * Math.cos(phi));

  return new THREE.Vector3(x, y, z);
};

const ClientMarkers = ({ radius, isLight }: { radius: number, isLight: boolean }) => {
  const markerGroupRef = useRef<THREE.Group>(null);
  
  const primaryColor = isLight ? "#0088cc" : "#00d4ff"; 
  const coreColor = isLight ? "#0066cc" : "#ffffff";    
  const blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending;

  useFrame((state) => {
    if (markerGroupRef.current) {
      markerGroupRef.current.children.forEach((child, i) => {
        const offsetScale = 1 + Math.sin(state.clock.elapsedTime * 3 + i * 2) * 0.3;
        child.scale.setScalar(offsetScale);
      });
    }
  });

  return (
    <group ref={markerGroupRef}>
      {clientLocations.map((loc, i) => {
         const pos = latLonToVector3(loc.lat, loc.lon, radius + 0.03); 
         return (
           <group key={i} position={pos}>
             <mesh>
               <sphereGeometry args={[0.02, 16, 16]} />
               <meshBasicMaterial color={coreColor} />
             </mesh>
             <mesh>
               <sphereGeometry args={[0.06, 16, 16]} />
               <meshBasicMaterial 
                 color={primaryColor} 
                 transparent 
                 opacity={isLight ? 0.8 : 0.6} 
                 blending={blending} 
               />
             </mesh>
           </group>
         )
      })}
    </group>
  );
};

const connections = [
  { start: 0, end: 1 },
  { start: 1, end: 2 },
  { start: 2, end: 3 },
  { start: 3, end: 6 },
  { start: 6, end: 4 },
  { start: 4, end: 0 },
  { start: 1, end: 7 },
  { start: 2, end: 8 },
  { start: 1, end: 9 },
];

const DataArcs = ({ radius, isLight }: { radius: number, isLight: boolean }) => {
  const curves = useMemo(() => {
    return connections.map(conn => {
       const startLoc = clientLocations[conn.start];
       const endLoc = clientLocations[conn.end];
       
       const p1 = latLonToVector3(startLoc.lat, startLoc.lon, radius + 0.03);
       const p2 = latLonToVector3(endLoc.lat, endLoc.lon, radius + 0.03);
       
       const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
       const dist = p1.distanceTo(p2);
       mid.normalize().multiplyScalar(radius + 0.03 + dist * 0.35);

       return new THREE.QuadraticBezierCurve3(p1, mid, p2);
    })
  }, [radius]);
  
  const pulsesRef = useRef<THREE.Group>(null);
  const glowColor = isLight ? "#0088cc" : "#00d4ff";
  const coreColor = isLight ? "#1a78ff" : "#ffffff";
  const blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending;
  
  useFrame((state) => {
    if (pulsesRef.current) {
        pulsesRef.current.children.forEach((child, i) => {
           const time = state.clock.elapsedTime;
           const speed = 0.6;
           const progress = (time * speed + i * 0.3) % 1; 
           
           const curve = curves[i];
           const pt = curve.getPoint(progress);
           child.position.copy(pt);
           
           const scale = 1 + Math.sin(progress * Math.PI) * 0.8;
           child.scale.setScalar(scale);
        });
    }
  });
  
  return (
    <group>
       {curves.map((c, i) => (
         <group key={`arc-group-${i}`}>
           <mesh>
              <tubeGeometry args={[c, 40, 0.015, 8, false]} />
              <meshBasicMaterial color={glowColor} transparent opacity={isLight ? 0.3 : 0.12} blending={blending} />
           </mesh>
           <mesh>
              <tubeGeometry args={[c, 40, 0.007, 8, false]} />
              <meshBasicMaterial color={glowColor} transparent opacity={isLight ? 0.5 : 0.4} blending={blending} />
           </mesh>
           <mesh>
              <tubeGeometry args={[c, 40, 0.002, 8, false]} />
              <meshBasicMaterial color={coreColor} transparent opacity={isLight ? 0.8 : 0.9} blending={blending} />
           </mesh>
         </group>
       ))}
       
       <group ref={pulsesRef}>
         {curves.map((c, i) => (
            <mesh key={`pulse-${i}`}>
               <sphereGeometry args={[0.025, 16, 16]} />
               <meshBasicMaterial color={coreColor} />
               <mesh>
                 <sphereGeometry args={[0.04, 16, 16]} />
                 <meshBasicMaterial color={isLight ? "#00c3ff" : "#00ffcc"} transparent opacity={0.8} blending={blending} />
               </mesh>
            </mesh>
         ))}
       </group>
    </group>
  );
};

const GlobeMesh = ({ isLight }: { isLight: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  
  const innerSphereColor = isLight ? "#f1f5f9" : "#020817";
  const wireframeColor = isLight ? "#0088cc" : "#00d4ff";
  const blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending;

  const primaryColor = useMemo(() => new THREE.Color(wireframeColor), [wireframeColor]);
  const globeMap = useTexture('/solveria-labs/earth-map.jpg'); 

  const uniforms = useMemo(
    () => ({
      tMap: { value: globeMap },
      uColor: { value: primaryColor },
      uGridSize: { value: 160.0 }
    }),
    [globeMap, primaryColor]
  );
  
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  
  const fragmentShader = `
    uniform sampler2D tMap;
    uniform vec3 uColor;
    uniform float uGridSize;
    varying vec2 vUv;

    void main() {
      vec2 pUv = floor(vUv * uGridSize) / uGridSize;
      float mapVal = texture2D(tMap, pUv).r;
      float isLand = step(mapVal, 0.3);
      vec2 gridFract = fract(vUv * uGridSize);
      float dist = length(gridFract - vec2(0.5));
      float dotMask = step(dist, 0.35);
      float finalMask = isLand * dotMask;
      if (finalMask < 0.1) discard; 
      gl_FragColor = vec4(uColor, finalMask * 0.85);
    }
  `;

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      
      const t = state.clock.elapsedTime;
      
      // Hologram boot-in and glitch animation sequence
      if (t < 0.6) {
        // Initial expansion
        groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), delta * 6);
        groupRef.current.visible = true;
      } else if (t >= 0.6 && t < 0.75) {
        // Glitch hide (flicker off)
        groupRef.current.visible = false;
      } else if (t >= 0.75 && t < 0.85) {
        // Quick flicker on
        groupRef.current.visible = true;
      } else if (t >= 0.85 && t < 1.1) {
        // Longer hide
        groupRef.current.visible = false;
      } else {
        // Final solid state
        groupRef.current.scale.set(1, 1, 1);
        groupRef.current.visible = true;
      }
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y += delta * 0.05;
      wireframeRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={[0.001, 0.001, 0.001]}>
      <mesh>
        <sphereGeometry args={[2.48, 32, 32]} />
        <meshBasicMaterial color={innerSphereColor} />
      </mesh>
      
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent={true}
          side={THREE.FrontSide}
          blending={blending} // use theme-aware blending
        />
      </mesh>
      
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[2.55, 4]} />
        <meshBasicMaterial 
          color={wireframeColor}
          wireframe={true} 
          transparent={true} 
          opacity={isLight ? 0.3 : 0.25} 
          blending={blending}
        />
      </mesh>
      
      <mesh>
        <sphereGeometry args={[2.52, 32, 32]} />
        <meshBasicMaterial 
          color={wireframeColor} 
          transparent={true} 
          opacity={isLight ? 0.08 : 0.03} 
          blending={blending}
        />
      </mesh>
      
      <ClientMarkers radius={2.5} isLight={isLight} />
      <DataArcs radius={2.5} isLight={isLight} />
    </group>
  );
};

import { Html } from '@react-three/drei';

const HologramLoader = () => {
  return (
    <Html center>
      <div className="hologram-loader">
        <div className="hologram-spinner"></div>
        <span>INITIALIZING...</span>
      </div>
    </Html>
  );
};

const TechGlobe = () => {
  const { resolvedTheme } = useTheme();
  // Using useState + useEffect to prevent hydration mismatch since theme is client-side
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && resolvedTheme === 'light';

  return (
    <div className="tech-globe-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={<HologramLoader />}>
          {mounted && <GlobeMesh isLight={isLight} />}
        </Suspense>
        {!isLight && mounted && (
           <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        )}
        <OrbitControls 
          enableZoom={true} 
          minDistance={3}
          maxDistance={12}
          enablePan={false} 
          autoRotate={true}
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};

export default TechGlobe;
