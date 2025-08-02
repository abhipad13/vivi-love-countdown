import { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    // Create floating hearts on component mount
    const heartArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      size: Math.random() * 0.5 + 0.5, // Size between 0.5 and 1
    }));
    
    setHearts(heartArray);

    // Remove hearts after animation completes
    const timer = setTimeout(() => {
      setHearts([]);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size * 2}rem`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </>
  );
};

export default FloatingHearts;