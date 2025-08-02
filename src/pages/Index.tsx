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
          
          {/* Secret Message Section */}
          <section className="py-20 px-4 max-w-4xl mx-auto">
            <SecretMessage />
          </section>

          {/* Photo Gallery Section */}
          <section className="py-20 px-4 max-w-6xl mx-auto">
            <PhotoGallery />
          </section>

          {/* Favorite Memories Section */}
          <section className="py-20 px-4 max-w-6xl mx-auto">
            <FavoriteMemories />
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