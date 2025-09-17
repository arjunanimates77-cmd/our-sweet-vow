import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  emoji: string;
  description: string;
}

const LoveTimeline = () => {
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);

  const events: TimelineEvent[] = [
    {
      id: 1,
      year: '2022',
      title: 'Jab hum mile',
      emoji: '✨',
      description: 'The moment our story began'
    },
    {
      id: 2,
      year: '2022',
      title: 'Pehli date',
      emoji: '☕',
      description: 'Coffee and endless conversations'
    },
    {
      id: 3,
      year: '2023',
      title: 'Woh waali hansi "Golgappa champion"',
      emoji: '😄',
      description: 'When you became the golgappa champion'
    },
    {
      id: 4,
      year: '2023',
      title: 'First trip to Goa',
      emoji: '🏖️',
      description: 'Beach sunsets and perfect moments'
    },
    {
      id: 5,
      year: '2024',
      title: 'Aaj: Happy Anniversary!',
      emoji: '💖',
      description: 'Celebrating our beautiful journey'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const eventId = parseInt(entry.target.getAttribute('data-event-id') || '0');
            setVisibleEvents((prev) => new Set(prev).add(eventId));
          }
        });
      },
      { threshold: 0.3 }
    );

    const eventElements = document.querySelectorAll('[data-event-id]');
    eventElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Love Timeline
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Every moment that brought us closer
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block" ref={timelineRef}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full transform -translate-y-1/2" />
            
            {/* Timeline events */}
            <div className="flex justify-between items-center relative py-20">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  data-event-id={event.id}
                  className={`flex flex-col items-center w-1/5 transition-all duration-700 transform ${
                    visibleEvents.has(event.id)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  {/* Event dot */}
                  <div className="w-6 h-6 bg-secondary rounded-full border-4 border-background shadow-lg mb-4 gentle-glow" />
                  
                  {/* Event card */}
                  <Card className="w-full max-w-xs hover-lift bg-card/80 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{event.emoji}</div>
                      <Badge variant="secondary" className="mb-3 bg-secondary/20 text-secondary border-secondary/30">
                        {event.year}
                      </Badge>
                      <h3 className="font-serif text-lg font-semibold text-secondary mb-2">
                        {event.title}
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              data-event-id={event.id}
              className={`flex items-start gap-4 transition-all duration-700 transform ${
                visibleEvents.has(event.id)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Timeline line for mobile */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-secondary rounded-full gentle-glow" />
                {index < events.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-secondary to-primary mt-2" />
                )}
              </div>

              {/* Event content */}
              <Card className="flex-1 hover-lift bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{event.emoji}</span>
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                      {event.year}
                    </Badge>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-secondary mb-2">
                    {event.title}
                  </h3>
                  <p className="font-sans text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveTimeline;