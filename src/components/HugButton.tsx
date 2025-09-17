import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const HugButton = () => {
  const [showHug, setShowHug] = useState(false);
  const [hugCount, setHugCount] = useState(0);

  const triggerHug = () => {
    setShowHug(true);
    setHugCount(prev => prev + 1);
    
    // Auto hide after animation
    setTimeout(() => {
      setShowHug(false);
    }, 3000);
  };

  return (
    <>
      {/* Hug Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={triggerHug}
          className="bg-gradient-to-r from-secondary to-primary text-white hover:from-secondary/90 hover:to-primary/90 hover-lift font-sans font-medium px-6 py-3 rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm"
          size="lg"
        >
          <Heart className="w-5 h-5 mr-2 fill-current" />
          Send a Hug 🤗
        </Button>
        
        {hugCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
            {hugCount}
          </div>
        )}
      </div>

      {/* Hug Animation Overlay */}
      {showHug && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-sm animate-fade-in">
          <div className="relative">
            {/* Main Hug Animation */}
            <div className="text-center animate-scale-in">
              <div className="text-[20rem] animate-bounce mb-4">
                🤗
              </div>
              
              {/* Floating hearts around the hug */}
              <div className="absolute inset-0">
                {Array.from({ length: 12 }).map((_, i) => (
                  <Heart
                    key={i}
                    className="absolute w-8 h-8 text-secondary fill-current animate-float-around opacity-80"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
              
              {/* Hug Message */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/50 max-w-md mx-auto animate-slide-up">
                <h3 className="font-serif text-3xl font-bold text-secondary mb-4">
                  Big Hug from Arjun! 💕
                </h3>
                <p className="font-sans text-lg text-secondary/80 mb-4">
                  Tumko bahut saara pyaar aur warm hug bhej raha hun! 
                </p>
                <p className="font-sans text-sm text-secondary/60 italic">
                  Distance doesn't matter when hearts are connected ✨
                </p>
                
                {/* Pulsing hearts */}
                <div className="flex justify-center mt-6 gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Heart
                      key={i}
                      className="w-6 h-6 text-primary fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sparkle effects */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-accent rounded-full animate-ping opacity-70"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random()}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HugButton;