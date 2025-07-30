import React, { useEffect, useRef } from 'react';

export const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    let rotation = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw neural network nodes
      const nodes = 12;
      const radius = Math.min(canvas.width, canvas.height) * 0.3;
      
      for (let i = 0; i < nodes; i++) {
        const angle = (i / nodes) * Math.PI * 2 + rotation;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        // Node
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(102, 126, 234, 0.3)';
        ctx.fill();
        
        // Connections
        for (let j = i + 1; j < nodes; j++) {
          const angle2 = (j / nodes) * Math.PI * 2 + rotation;
          const x2 = centerX + Math.cos(angle2) * radius;
          const y2 = centerY + Math.sin(angle2) * radius;
          
          if (Math.random() > 0.7) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = 'rgba(102, 126, 234, 0.1)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      rotation += 0.002;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-10"
    />
  );
};