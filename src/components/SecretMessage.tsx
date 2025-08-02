import { useState } from 'react';

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
          className="heart-shape cursor-pointer relative"
          onClick={handleReveal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleReveal()}
        >
          {/* Sparkles around the heart */}
          <div className="sparkle" style={{ top: '10px', left: '10px', animationDelay: '0s' }}></div>
          <div className="sparkle" style={{ top: '5px', right: '15px', animationDelay: '0.5s' }}></div>
          <div className="sparkle" style={{ bottom: '20px', left: '20px', animationDelay: '1s' }}></div>
          <div className="sparkle" style={{ bottom: '10px', right: '10px', animationDelay: '1.5s' }}></div>
        </div>
      </div>
      
      <p className="text-romantic-deep/70 mb-6 font-medium">
        Click the heart above to reveal your secret message ✨
      </p>
      
      {isRevealed && (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg border border-romantic-pink animate-fade-in">
          <div className="font-elegant text-2xl text-romantic-deep mb-4">
            My Dearest Vivi 💕
          </div>
          <p className="text-romantic-deep leading-relaxed font-medium text-lg">
            Every day without you feels like an eternity, but knowing that we'll be together again 
            fills my heart with so much joy. You are my sunshine, my everything, and the love of my life. 
            This website is just a small token of how much you mean to me. I can't wait to hold you 
            in my arms again and create more beautiful memories together. You make every day magical! ✨
          </p>
          <div className="mt-6 font-romantic text-2xl text-primary">
            Forever yours, with all my love 💖
          </div>
        </div>
      )}
    </div>
  );
};

export default SecretMessage;