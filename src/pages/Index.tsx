import { useEffect, useState } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import CountdownTimer from '@/components/CountdownTimer';
import SecretMessage from '@/components/SecretMessage';
import PhotoGallery from '@/components/PhotoGallery';
import FavoriteMemories from '@/components/FavoriteMemories';
import BackgroundMusic from '@/components/BackgroundMusic';
import FindTheHeartsGame from '@/components/FindTheHeartsGame';
const Index = () => {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    // Show content after floating hearts animation starts
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Music Component */}
      <BackgroundMusic />
      
      {/* Floating Hearts Animation */}
      <FloatingHearts />
      
      {/* Hero Banner */}
      <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-romantic-blush via-romantic-pink to-romantic-rose">
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className={`font-romantic text-6xl md:text-8xl text-white mb-8 drop-shadow-lg ${showContent ? 'animate-fade-in-up' : 'opacity-0'}`}>Happy Girlfriend's Day, Vivi </h1>
          <p className={`font-elegant text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow ${showContent ? 'animate-fade-in-up animate-delay-1' : 'opacity-0'}`}>
            A special celebration of our beautiful love story and all the magical moments we've shared together
          </p>
        </div>
        
        {/* Decorative sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="sparkle" style={{
          top: '20%',
          left: '10%',
          animationDelay: '0s'
        }}></div>
          <div className="sparkle" style={{
          top: '30%',
          right: '15%',
          animationDelay: '1s'
        }}></div>
          <div className="sparkle" style={{
          bottom: '40%',
          left: '20%',
          animationDelay: '2s'
        }}></div>
          <div className="sparkle" style={{
          bottom: '20%',
          right: '25%',
          animationDelay: '0.5s'
        }}></div>
          <div className="sparkle" style={{
          top: '50%',
          left: '50%',
          animationDelay: '1.5s'
        }}></div>
        </div>
      </header>

      {showContent && <>
          <FindTheHeartsGame />
          
          {/* Love Letter Section */}
          <section className="py-20 px-4 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-romantic-pink animate-fade-in-up">
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
          </section>

          {/* Photo Gallery Section */}
          <section className="py-20 px-4 max-w-6xl mx-auto">
            <PhotoGallery />
          </section>

          {/* Favorite Memories Section */}
          <section className="py-20 px-4 max-w-6xl mx-auto">
            <FavoriteMemories />
          </section>

          {/* Secret Message Section */}
          <section className="py-20 px-4 max-w-4xl mx-auto">
            <SecretMessage />
          </section>

          {/* Countdown Timer Section */}
          <section className="py-20 px-4 max-w-2xl mx-auto">
            <CountdownTimer />
          </section>

          {/* Footer */}
          <footer className="py-12 text-center">
            <div className="font-romantic text-2xl text-romantic-deep mb-4">
              Made with endless love for Vivi 💖
            </div>
            <div className="text-romantic-deep/70">
              Every pixel crafted with love, every word written from the heart
            </div>
          </footer>
        </>}
    </div>;
};
export default Index;