import { useState } from 'react';
import { TreePine } from 'lucide-react';

const SecretMessage = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <div className="text-center animate-fade-in-up">
      <h3 className="font-romantic text-4xl text-romantic-deep mb-8">
        A Special Secret Just for You 💝
      </h3>
      
      <div className="flex justify-center mb-8">
        <div 
          className="relative cursor-pointer group"
          onClick={handleReveal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleReveal()}
        >
          <TreePine 
            size={80} 
            className="text-romantic-rose hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(340, 75%, 55%, 0.3))' }}
          />
          {/* Sparkles around the tree */}
          <div className="sparkle" style={{ top: '10px', left: '10px', animationDelay: '0s' }}></div>
          <div className="sparkle" style={{ top: '5px', right: '15px', animationDelay: '0.5s' }}></div>
          <div className="sparkle" style={{ bottom: '20px', left: '20px', animationDelay: '1s' }}></div>
          <div className="sparkle" style={{ bottom: '10px', right: '10px', animationDelay: '1.5s' }}></div>
        </div>
      </div>
      
      <p className="text-romantic-deep/70 mb-6 font-medium">
        Click the tree above to reveal your secret message 🌸
      </p>
      
      {isRevealed && (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-romantic-pink animate-fade-in">
          <h2 className="font-romantic text-5xl text-center text-romantic-deep mb-8">
            A Love Letter to You 💕
          </h2>
          <div className="prose prose-lg max-w-none text-romantic-deep/90">
            <p className="font-elegant text-xl leading-relaxed mb-6">
              My Dearest Vivi,
            </p>
            <p className="leading-relaxed mb-6 text-lg">
              As I sit here thinking about you, my heart overflows with so much love that I can barely contain it. 
              You are the most incredible person I've ever met, and every day with you feels like a beautiful dream 
              that I never want to wake up from.
            </p>
            <p className="leading-relaxed mb-6 text-lg">
              Your smile brightens even my darkest days, your laugh is the most beautiful melody I've ever heard, 
              and your love has transformed my entire world. You make me want to be the best version of myself, 
              and with you by my side, I feel like I can conquer anything.
            </p>
            <p className="leading-relaxed mb-6 text-lg">
              Thank you for being my partner, my best friend, my greatest love, and my home. Thank you for 
              choosing to share your beautiful heart with me every single day.
            </p>
            <p className="font-elegant text-xl">
              With all my love, today and always ✨
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecretMessage;