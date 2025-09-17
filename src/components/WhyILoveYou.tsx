import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Smile, Brain, Users, Sparkles } from 'lucide-react';

interface LoveReason {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const WhyILoveYou = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  const reasons: LoveReason[] = [
    {
      id: 1,
      icon: <Smile className="w-8 h-8" />,
      title: "Tumhari hansi—mera sukoon",
      description: "Your laughter lights up my entire world",
      color: "text-primary"
    },
    {
      id: 2,
      icon: <Heart className="w-8 h-8 fill-current" />,
      title: 'Jab tum "Left sock mystery" kehti ho',
      description: "Your silly jokes make everything better",
      color: "text-secondary"
    },
    {
      id: 3,
      icon: <Brain className="w-8 h-8" />,
      title: "Tum smart ho AND dil ki saaf",
      description: "Beauty with brains and the purest heart",
      color: "text-accent"
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8" />,
      title: "Har musibat me team ban jaate hain",
      description: "We face every challenge together as one",
      color: "text-secondary"
    },
    {
      id: 5,
      icon: <Sparkles className="w-8 h-8" />,
      title: "Tumhare saath har din new movie jaisa",
      description: "Every day with you is a new adventure",
      color: "text-primary"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0');
            setVisibleCards((prev) => new Set(prev).add(cardId));
          }
        });
      },
      { threshold: 0.3 }
    );

    const cardElements = document.querySelectorAll('[data-card-id]');
    cardElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            Why I Love You
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Five reasons (among millions) why you're perfect
          </p>
        </div>

        {/* Love cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={reason.id}
              data-card-id={reason.id}
              className={`group hover-lift transition-all duration-700 transform bg-card/80 backdrop-blur-sm border-border/50 ${
                visibleCards.has(reason.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 0.15}s`,
                minHeight: '280px'
              }}
            >
              <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                {/* Icon with gentle glow */}
                <div className={`${reason.color} mb-6 gentle-glow flex justify-center`}>
                  {reason.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-secondary mb-3 leading-tight">
                    {reason.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Floating heart on hover */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-5 h-5 text-primary fill-current mx-auto heart-float" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <Heart className="absolute -top-4 -left-4 w-6 h-6 text-primary/40 fill-current heart-float" />
            <Heart className="absolute -bottom-4 -right-4 w-4 h-4 text-secondary/40 fill-current heart-float" 
                  style={{ animationDelay: '2s' }} />
            
            <p className="font-serif text-xl text-secondary italic px-8">
              "And a million more reasons I discover every day..."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyILoveYou;