import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 20,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate target date (20 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 20);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-romantic-pink animate-fade-in-up">
      <h3 className="font-romantic text-3xl text-center text-romantic-deep mb-6">
        Until I See You Again ✨
      </h3>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-romantic-blush rounded-xl p-4">
          <div className="font-elegant text-3xl font-bold text-romantic-deep">
            {timeLeft.days}
          </div>
          <div className="text-sm font-medium text-romantic-deep/70">Days</div>
        </div>
        
        <div className="bg-romantic-blush rounded-xl p-4">
          <div className="font-elegant text-3xl font-bold text-romantic-deep">
            {timeLeft.hours}
          </div>
          <div className="text-sm font-medium text-romantic-deep/70">Hours</div>
        </div>
        
        <div className="bg-romantic-blush rounded-xl p-4">
          <div className="font-elegant text-3xl font-bold text-romantic-deep">
            {timeLeft.minutes}
          </div>
          <div className="text-sm font-medium text-romantic-deep/70">Minutes</div>
        </div>
        
        <div className="bg-romantic-blush rounded-xl p-4">
          <div className="font-elegant text-3xl font-bold text-romantic-deep">
            {timeLeft.seconds}
          </div>
          <div className="text-sm font-medium text-romantic-deep/70">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;