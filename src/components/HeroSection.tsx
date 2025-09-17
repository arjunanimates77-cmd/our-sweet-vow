import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Play, Pause, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create floating heart particles
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  const scrollToTimeline = () => {
    const element = document.getElementById('timeline');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, you would control audio playback here
    console.log(isPlaying ? 'Pausing music' : 'Playing our song');
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden romantic-gradient"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute particle opacity-60"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
            }}
          >
            <Heart className="w-4 h-4 text-secondary/40 fill-current" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Floating hearts decoration */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
          <Heart className="w-8 h-8 text-secondary heart-float fill-current" />
        </div>
        <div className="absolute -top-16 left-1/4 transform -translate-x-1/2">
          <Heart className="w-6 h-6 text-primary heart-float fill-current" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute -top-16 right-1/4 transform translate-x-1/2">
          <Heart className="w-6 h-6 text-primary heart-float fill-current" style={{ animationDelay: '2s' }} />
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-secondary mb-6 animate-fade-in">
          Happy Anniversary,
          <br />
          <span className="text-secondary gentle-glow">Preethi</span> 💖
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-xl md:text-2xl text-secondary/80 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <span className="font-medium">Arjun + Preethi</span> — since <span className="font-medium">17 Sept 2022</span>
        </p>

        {/* Kicker text */}
        <p className="font-sans text-lg text-secondary/60 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          Do hearts. One story.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.9s' }}>
          <Button
            onClick={toggleMusic}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-lift font-sans font-medium px-8 py-3 rounded-full shadow-lg"
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5 mr-2" />
                Pause Our Song
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Play Our Song
              </>
            )}
          </Button>

          <Button
            onClick={scrollToTimeline}
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover-lift font-sans font-medium px-8 py-3 rounded-full"
          >
            Scroll to Our Story
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Heart className="w-6 h-6 text-secondary/60 fill-current" />
      </div>
    </section>
  );
};

export default HeroSection;