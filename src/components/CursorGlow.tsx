import React, { useEffect, useState } from 'react';

const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth trail effect using requestAnimationFrame interpolation
  useEffect(() => {
    let animationFrameId: number;

    const updateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Adjust interpolation factor (0.15 is smooth, smaller is slower trail)
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Bind hover states to interactive tags
  useEffect(() => {
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        'button, a, input, textarea, select, [role="button"], [data-cursor="hover"]'
      );
      
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    // Run on mount
    addHoverListeners();

    // Create a MutationObserver to watch for dynamically loaded elements
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`hidden md:block pointer-events-none fixed inset-0 z-[9999] ${isHovered ? 'cursor-active' : ''}`}>
      {/* Dynamic Cursor Light Field */}
      <div 
        className="cursor-glow"
        style={{ left: `${trailPosition.x}px`, top: `${trailPosition.y}px` }}
      />
      
      {/* Outer Magnetic Ring */}
      <div 
        className="cursor-ring"
        style={{ left: `${trailPosition.x}px`, top: `${trailPosition.y}px` }}
      />
      
      {/* Precise Center Core */}
      <div 
        className="cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </div>
  );
};

export default CursorGlow;
