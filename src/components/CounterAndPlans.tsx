import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Heart, Calendar, Coffee, Sunset, Film } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CounterAndPlans = () => {
  const [timeElapsed, setTimeElapsed] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  const anniversaryDate = new Date('2022-09-17T00:00:00');

  const dateIdeas = [
    {
      id: 1,
      icon: <Coffee className="w-6 h-6" />,
      title: "Home-cooked dinner",
      description: "Candlelight, your favorite dishes, and endless conversations",
      vibe: "Cozy & Intimate"
    },
    {
      id: 2,
      icon: <Sunset className="w-6 h-6" />,
      title: "Sunset walk",
      description: "Hand in hand, watching the sky paint itself in our colors",
      vibe: "Romantic & Peaceful"
    },
    {
      id: 3,
      icon: <Film className="w-6 h-6" />,
      title: "Movie night",
      description: "Blankets, popcorn, and your head on my shoulder",
      vibe: "Comfortable & Fun"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - anniversaryDate.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePlansClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Love Counter
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Every second counts when it's with you
          </p>
        </div>

        {/* Love counter */}
        <Card className="max-w-4xl mx-auto mb-12 hover-lift bg-card/80 backdrop-blur-sm border-border/50">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-secondary mx-auto mb-4 gentle-glow fill-current" />
              <h3 className="font-serif text-2xl font-semibold text-secondary mb-2">
                We've loved for...
              </h3>
            </div>

            {/* Counter display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-xl p-6 mb-2 gentle-glow">
                  <div className="font-serif text-3xl md:text-4xl font-bold">
                    {timeElapsed.days.toLocaleString()}
                  </div>
                </div>
                <div className="font-sans text-sm text-muted-foreground font-medium">
                  Days
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-secondary to-accent text-secondary-foreground rounded-xl p-6 mb-2">
                  <div className="font-serif text-3xl md:text-4xl font-bold">
                    {timeElapsed.hours}
                  </div>
                </div>
                <div className="font-sans text-sm text-muted-foreground font-medium">
                  Hours
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-accent to-primary text-accent-foreground rounded-xl p-6 mb-2">
                  <div className="font-serif text-3xl md:text-4xl font-bold">
                    {timeElapsed.minutes}
                  </div>
                </div>
                <div className="font-sans text-sm text-muted-foreground font-medium">
                  Minutes
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-xl p-6 mb-2">
                  <div className="font-serif text-3xl md:text-4xl font-bold">
                    {timeElapsed.seconds}
                  </div>
                </div>
                <div className="font-sans text-sm text-muted-foreground font-medium">
                  Seconds
                </div>
              </div>
            </div>

            <p className="font-sans text-center text-muted-foreground italic">
              "Time flies when you're having the time of your life"
            </p>
          </CardContent>
        </Card>

        {/* Next date plans */}
        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                onClick={handlePlansClick}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans font-medium px-8 py-4 text-lg rounded-full shadow-lg hover-lift relative overflow-hidden"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Our Next Cute Plan?
                <Heart className="w-4 h-4 ml-2 fill-current" />
                
                {/* Confetti effect */}
                {showConfetti && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <Heart
                        key={i}
                        className="absolute w-3 h-3 text-primary fill-current animate-particle-rise"
                        style={{
                          left: `${20 + i * 15}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl bg-card/95 backdrop-blur-md border-border/50">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-secondary text-center mb-4">
                  Pick Our Next Adventure! 💕
                </DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {dateIdeas.map((idea) => (
                  <Card key={idea.id} className="hover-lift cursor-pointer group bg-card/80 border-border/50">
                    <CardContent className="p-6 text-center">
                      <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                        {idea.icon}
                      </div>
                      
                      <h4 className="font-serif text-lg font-semibold text-secondary mb-2">
                        {idea.title}
                      </h4>
                      
                      <p className="font-sans text-sm text-muted-foreground mb-3 leading-relaxed">
                        {idea.description}
                      </p>
                      
                      <div className="inline-block bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full">
                        {idea.vibe}
                      </div>
                      
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Heart className="w-4 h-4 text-primary fill-current mx-auto heart-float" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <p className="font-sans text-sm text-muted-foreground italic">
                  "Every moment with you is perfect, no matter what we choose" ✨
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default CounterAndPlans;