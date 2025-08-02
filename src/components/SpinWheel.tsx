import { useState } from "react";
import { toast } from "sonner";

const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  
  // Date ideas for the wheel slices
  const dateIdeas = [
    "Massage & Relaxation Night",
    "Movie Night with Snacks", 
    "Picnic Outside",
    "Shopping Date Voucher",
    "Romantic Dinner"
  ];
  
  // Colors for each slice (romantic theme)
  const sliceColors = [
    "hsl(var(--romantic-pink))",
    "hsl(var(--romantic-blush))", 
    "hsl(var(--romantic-rose))",
    "hsl(var(--romantic-deep))",
    "hsl(var(--romantic-soft))"
  ];

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    
    // More realistic spinning - 5-8 full rotations plus random angle
    const minRotations = 5;
    const maxRotations = 8;
    const randomRotations = Math.random() * (maxRotations - minRotations) + minRotations;
    const randomAngle = Math.random() * 360;
    const totalRotation = rotation + (randomRotations * 360) + randomAngle;
    
    setRotation(totalRotation);
    
    // Calculate which slice we landed on
    const normalizedAngle = (totalRotation % 360);
    const sliceAngle = 360 / dateIdeas.length;
    const winningIndex = Math.floor((360 - normalizedAngle + sliceAngle/2) / sliceAngle) % dateIdeas.length;
    
    // Show result after realistic animation completes (4.5 seconds)
    setTimeout(() => {
      setIsSpinning(false);
      const winningDate = dateIdeas[winningIndex];
      
      toast(`🎉 Yay! You won a ${winningDate} date! ❤️`, {
        duration: 5000,
        style: {
          background: 'linear-gradient(135deg, hsl(var(--romantic-pink)), hsl(var(--romantic-rose)))',
          border: '1px solid hsl(var(--romantic-deep))',
          color: 'hsl(var(--romantic-deep))',
          fontSize: '16px',
          fontWeight: 'bold'
        }
      });
    }, 4500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-romantic-soft via-background to-romantic-blush p-8">
      <div className="text-center mb-8">
        <h1 className="font-romantic text-4xl md:text-6xl text-romantic-deep mb-4">
          🎡 Spin the Wheel of Love
        </h1>
        <p className="font-elegant text-lg text-romantic-deep/80">
          Spin to discover your next romantic adventure together! ✨
        </p>
      </div>

      {/* Wheel Container */}
      <div className="relative">
        {/* Wheel */}
        <div 
          className="relative w-80 h-80 rounded-full border-8 border-romantic-deep shadow-2xl overflow-hidden"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? 'transform 4.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
            background: `conic-gradient(${sliceColors.map((color, index) => 
              `${color} ${index * 72}deg ${(index + 1) * 72}deg`
            ).join(', ')})`
          }}
        >
          {/* Date idea labels */}
          {dateIdeas.map((idea, index) => {
            const angle = (index * 72) + 36; // Center of each slice
            const radian = (angle * Math.PI) / 180;
            const x = Math.cos(radian) * 100;
            const y = Math.sin(radian) * 100;
            
            return (
              <div
                key={index}
                className="absolute text-xs font-bold text-white text-center leading-tight"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                  width: '80px',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                }}
              >
                {idea}
              </div>
            );
          })}
        </div>
        
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-romantic-deep"></div>
        </div>
        
        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-romantic-deep rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-2xl">❤️</span>
        </div>
      </div>

      {/* Spin Button */}
      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className={`mt-8 px-8 py-4 rounded-full font-elegant text-lg font-bold transition-all duration-300 shadow-lg ${
          isSpinning 
            ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
            : 'bg-gradient-to-r from-romantic-pink to-romantic-rose text-white hover:shadow-xl hover:scale-105 active:scale-95'
        }`}
      >
        {isSpinning ? '🎪 Spinning...' : '✨ Spin the Wheel!'}
      </button>

      {/* Instructions */}
      <div className="mt-6 text-center max-w-md">
        <p className="text-romantic-deep/70 font-elegant">
          Click the spin button to discover your next romantic date idea! 
          Each spin is a new adventure waiting to happen. 💕
        </p>
      </div>
    </div>
  );
};

export default SpinWheel;