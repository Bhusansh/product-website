"use client";

import React, { useEffect, useState } from 'react';

interface Leaf {
  id: number;
  left: number;       // % from left
  delay: number;      // animation-delay in seconds
  duration: number;   // fall duration in seconds
  size: number;       // px
  rotation: number;   // initial rotation deg
  drift: number;      // horizontal drift in px
  opacity: number;
  color: string;
}

const LEAF_COLORS = [
  '#4a5d4e',   // deep forest green
  '#6a8c70',   // mid green
  '#d4af37',   // gold
  '#8fac6d',   // light sage
  '#3d5c41',   // dark moss
  '#c8a84b',   // muted gold
];

// SVG leaf path (simple organic leaf shape)
function LeafSVG({ size, color, rotation }: { size: number; color: string; rotation: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 8C8 10 5.9 16.17 3.82 19.1c-.83 1.18-.19 2.9 1.19 2.9.99 0 1.72-.64 2.33-1.41C9 18 11 17 17 17c4.42 0 6-4 6-7.5C23 5 19 2 17 8z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M3.82 19.1C6 17 10 15 17 15"
        stroke={color}
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

function generateLeaves(count: number): Leaf[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: 10 + Math.random() * 12,
    size: 8 + Math.random() * 8,          // smaller: 8–16px
    rotation: Math.random() * 360,
    drift: (Math.random() - 0.5) * 100,
    opacity: 0.18 + Math.random() * 0.2,  // faded: 0.18–0.38
    color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
  }));
}

export default function FallingLeaves({ count = 22, fixed = false }: { count?: number; fixed?: boolean }) {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    setLeaves(generateLeaves(count));
  }, [count]);

  if (leaves.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: fixed ? 'fixed' : 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: fixed ? 5 : 3,
      }}
    >
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          style={{
            position: 'absolute',
            top: '-60px',
            left: `${leaf.left}%`,
            opacity: leaf.opacity,
            animation: `leafFall ${leaf.duration}s ${leaf.delay}s ease-in infinite`,
            '--drift': `${leaf.drift}px`,
          } as React.CSSProperties}
        >
          <div
            style={{
              animation: `leafSpin ${leaf.duration * 0.6}s ${leaf.delay}s linear infinite`,
            }}
          >
            <LeafSVG size={leaf.size} color={leaf.color} rotation={leaf.rotation} />
          </div>
        </div>
      ))}
    </div>
  );
}
