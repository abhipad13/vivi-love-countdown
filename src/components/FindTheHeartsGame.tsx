import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { toast } from "sonner";

const FindTheHeartsGame = () => {
  const [foundHearts, setFoundHearts] = useState<number[]>([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  
  const hearts = [
    { id: 1, message: "You make me laugh every day 😊", position: "top-20 left-10" },
    { id: 2, message: "You're my sunshine ☀️", position: "top-1/4 right-16" },
    { id: 3, message: "Your hugs are my favorite place 🤗", position: "top-1/2 left-1/4" },
    { id: 4, message: "You make ordinary moments magical ✨", position: "bottom-1/3 right-1/4" },
    { id: 5, message: "I love your silly jokes 🤪", position: "bottom-20 left-16" },
    { id: 6, message: "You're my best friend and soulmate 💕", position: "top-1/3 left-1/2" },
    { id: 7, message: "You make my heart skip a beat 💓", position: "bottom-1/4 right-10" }
  ];

  const handleHeartClick = (heartId: number, message: string) => {
    if (foundHearts.includes(heartId)) return;
    
    setFoundHearts(prev => [...prev, heartId]);
    toast(message, {
      duration: 3000,
      style: {
        background: 'linear-gradient(135deg, #fce4ec, #f8bbd9)',
        border: '1px solid #f06292',
        color: '#ad1457'
      }
    });
  };

  useEffect(() => {
    if (foundHearts.length === hearts.length && !gameCompleted) {
      setGameCompleted(true);
      setTimeout(() => {
        toast("🎉 You found all my love notes! You know me so well! ❤️", {
          duration: 5000,
          style: {
            background: 'linear-gradient(135deg, #e91e63, #ad1457)',
            border: '1px solid #ad1457',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold'
          }
        });
      }, 500);
    }
  }, [foundHearts, gameCompleted]);

  return (
    <>
      {/* Hidden hearts scattered around the page */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`fixed ${heart.position} z-[100] cursor-pointer transition-all duration-300 ${
            foundHearts.includes(heart.id) 
              ? 'opacity-0 scale-0' 
              : 'opacity-90 hover:opacity-100 hover:scale-125'
          }`}
          onClick={() => handleHeartClick(heart.id, heart.message)}
          style={{
            pointerEvents: foundHearts.includes(heart.id) ? 'none' : 'auto'
          }}
        >
          <Heart 
            className={`w-8 h-8 ${
              foundHearts.includes(heart.id) 
                ? 'text-gray-400' 
                : 'text-pink-500 hover:text-pink-600 animate-pulse drop-shadow-lg'
            }`}
            fill="currentColor"
          />
        </div>
      ))}

      {/* Game instructions */}
      <div className="fixed bottom-4 left-4 z-40 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-romantic-pink max-w-xs">
        <h4 className="font-elegant text-sm text-romantic-deep mb-2">
          💝 Find the Hearts Game
        </h4>
        <p className="text-xs text-romantic-deep/80">
          Click {hearts.length - foundHearts.length} hidden hearts for sweet surprises!
        </p>
        <div className="flex gap-1 mt-2">
          {hearts.map((_, index) => (
            <Heart
              key={index}
              className={`w-3 h-3 ${
                foundHearts.length > index 
                  ? 'text-romantic-deep' 
                  : 'text-gray-300'
              }`}
              fill="currentColor"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FindTheHeartsGame;