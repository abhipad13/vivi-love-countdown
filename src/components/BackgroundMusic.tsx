import { useRef, useState, useEffect } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Start playing after user interaction due to browser autoplay policies
    const handleUserInteraction = () => {
      console.log('User interaction detected, hasInteracted:', hasInteracted);
      if (!hasInteracted) {
        setHasInteracted(true);
        if (audioRef.current) {
          console.log('Attempting to play audio:', audioRef.current.src);
          audioRef.current.play().then(() => {
            console.log('Audio started playing successfully');
            setIsPlaying(true);
          }).catch((error) => {
            console.error('Audio play failed:', error);
          });
        } else {
          console.error('Audio ref is null');
        }
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [hasInteracted]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(console.log);
      }
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        className="bg-white/80 backdrop-blur-sm border border-romantic-pink rounded-full p-3 shadow-lg hover:bg-white/90 transition-all duration-300 hover:scale-110"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <svg className="w-6 h-6 text-romantic-deep" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg className="w-6 h-6 text-romantic-deep" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
      
      <audio
        ref={audioRef}
        loop
        preload="auto"
        aria-label="Background romantic music"
      >
        {/* Placeholder audio - replace with your romantic song */}
        <source src="/romantic-background-music.mp3" type="audio/mpeg" />
        <source src="/romantic-background-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
      
      {!hasInteracted && (
        <div className="absolute -bottom-12 right-0 bg-romantic-blush text-romantic-deep text-xs px-2 py-1 rounded-lg whitespace-nowrap">
          Click anywhere to enable music 🎵
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;