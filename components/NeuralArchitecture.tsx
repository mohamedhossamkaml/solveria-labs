"use client";

import React, { useEffect, useRef } from 'react';
import './NeuralArchitecture.css';

interface Node {
  x: number;
  y: number;
  layer: number;
  id: number;
}

interface Signal {
  fromNode: Node;
  toNode: Node;
  progress: number;
  speed: number;
}

const NeuralArchitecture: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    let signals: Signal[] = [];
    const layers = [4, 6, 6, 2]; // Number of nodes in each layer

    const resize = () => {
      const { width, height } = containerRef.current?.getBoundingClientRect() || { width: 800, height: 400 };
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initArchitecture();
    };

    const initArchitecture = () => {
      const { width, height } = canvas.getBoundingClientRect();
      nodes = [];
      signals = [];

      const layerSpacing = width / (layers.length + 1);
      
      layers.forEach((count, layerIndex) => {
        const x = (layerIndex + 1) * layerSpacing;
        const nodeSpacing = height / (count + 1);
        
        for (let i = 0; i < count; i++) {
          nodes.push({
            x,
            y: (i + 1) * nodeSpacing,
            layer: layerIndex,
            id: nodes.length
          });
        }
      });
    };

    const emitSignal = () => {
      // Pick a random node in a non-output layer
      const validNodes = nodes.filter(n => n.layer < layers.length - 1);
      if (validNodes.length === 0) return;
      
      const from = validNodes[Math.floor(Math.random() * validNodes.length)];
      
      // Pick a random node in the NEXT layer
      const targetNodes = nodes.filter(n => n.layer === from.layer + 1);
      if (targetNodes.length === 0) return;
      
      const to = targetNodes[Math.floor(Math.random() * targetNodes.length)];
      
      signals.push({
        fromNode: from,
        toNode: to,
        progress: 0,
        speed: 0.005 + Math.random() * 0.01
      });
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const style = getComputedStyle(document.documentElement);
      const primaryColor = style.getPropertyValue('--primary').trim();
      const secondaryColor = style.getPropertyValue('--secondary').trim();
      const primaryRgb = style.getPropertyValue('--primary-rgb').trim() || '0, 212, 255';

      // 1. Draw connections (weights)
      ctx.lineWidth = 1;
      nodes.forEach(node => {
        if (node.layer < layers.length - 1) {
          const targets = nodes.filter(n => n.layer === node.layer + 1);
          targets.forEach(target => {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = `rgba(${primaryRgb}, 0.1)`;
            ctx.stroke();
          });
        }
      });

      // 2. Update and draw signals
      signals = signals.filter(s => s.progress < 1);
      signals.forEach(s => {
        s.progress += s.speed;
        
        const x = s.fromNode.x + (s.toNode.x - s.fromNode.x) * s.progress;
        const y = s.fromNode.y + (s.toNode.y - s.fromNode.y) * s.progress;

        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = primaryColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        
        // Output style vs hidden/input
        if (node.layer === layers.length - 1) {
          ctx.fillStyle = secondaryColor;
        } else if (node.layer === 0) {
          ctx.fillStyle = '#fff';
        } else {
          ctx.fillStyle = primaryColor;
        }
        
        ctx.shadowBlur = 15;
        ctx.shadowColor = ctx.fillStyle as string;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Outer ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${primaryRgb}, 0.2)`;
        ctx.stroke();
      });

      // Randomly emit new signals
      if (Math.random() < 0.1) {
        emitSignal();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="neural-arch-container" ref={containerRef}>
      <canvas ref={canvasRef} className="neural-arch-canvas" />
      <div className="layer-labels">
        <span>Input Layer</span>
        <span>Hidden Layer 1</span>
        <span>Hidden Layer 2</span>
        <span>Output Layer</span>
      </div>
    </div>
  );
};

export default NeuralArchitecture;
