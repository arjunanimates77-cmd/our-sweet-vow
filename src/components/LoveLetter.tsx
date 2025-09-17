import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Mail } from 'lucide-react';

const LoveLetter = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const shortMessage = "Preethi, tum meri favorite aadat ho. Tumhari hansi se din roshan ho jaata hai. Thank you for choosing me, aaj aur hamesha. — Arjun";

  const fullLetter = "Preethi, tum meri subah ki muskaan ho aur raat ki araam. Main imperfect hoon par tumhare saath har din perfect lagta hai. Thank you for holding my hand through ups and downs. I love you, aaj, kal, hamesha. — Arjun";

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="letter" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            Letter From Me
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Words from my heart to yours
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative perspective-1000">
            <Card 
              className={`relative w-full min-h-[400px] cursor-pointer transition-transform duration-600 preserve-3d hover-lift ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              onClick={handleCardFlip}
            >
              {/* Front of card */}
              <div className={`absolute inset-0 backface-hidden ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
                <CardContent className="p-8 md:p-12 h-full flex flex-col justify-center bg-gradient-to-br from-card to-accent/20 rounded-lg border-2 border-primary/20">
                  <div className="text-center mb-8">
                    <Mail className="w-12 h-12 text-secondary mx-auto mb-4 gentle-glow" />
                    <h3 className="font-serif text-2xl font-semibold text-secondary mb-2">
                      A Note for You
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="absolute -top-4 -left-4">
                      <Heart className="w-6 h-6 text-primary/40 fill-current heart-float" />
                    </div>
                    <div className="absolute -bottom-4 -right-4">
                      <Heart className="w-4 h-4 text-secondary/40 fill-current heart-float" style={{ animationDelay: '1s' }} />
                    </div>
                    
                    <blockquote className="font-sans text-lg leading-relaxed text-foreground text-center italic border-l-4 border-primary pl-6 mb-8">
                      "{shortMessage}"
                    </blockquote>
                  </div>

                  <div className="text-center">
                    <Button 
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans font-medium px-8 py-3 rounded-full shadow-lg hover-lift"
                    >
                      Tap to open
                      <Heart className="w-4 h-4 ml-2 fill-current" />
                    </Button>
                  </div>
                </CardContent>
              </div>

              {/* Back of card */}
              <div className={`absolute inset-0 backface-hidden rotate-y-180 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
                <CardContent className="p-8 md:p-12 h-full flex flex-col justify-center bg-gradient-to-br from-secondary/10 to-accent/30 rounded-lg border-2 border-secondary/20">
                  <div className="text-center mb-8">
                    <Heart className="w-12 h-12 text-secondary mx-auto mb-4 gentle-glow fill-current" />
                    <h3 className="font-serif text-2xl font-semibold text-secondary mb-2">
                      My Heart's Words
                    </h3>
                  </div>

                  <div className="relative flex-1 flex items-center">
                    <div className="absolute -top-6 -left-6 opacity-20">
                      <Heart className="w-8 h-8 text-primary fill-current heart-float" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 opacity-20">
                      <Heart className="w-6 h-6 text-secondary fill-current heart-float" style={{ animationDelay: '2s' }} />
                    </div>
                    
                    <div className="w-full">
                      <div className="font-serif text-2xl text-secondary/40 mb-4">"</div>
                      <p className="font-sans text-lg leading-relaxed text-foreground text-center mb-6">
                        {fullLetter}
                      </p>
                      <div className="font-serif text-2xl text-secondary/40 text-right">"</div>
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <Button 
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-sans font-medium px-8 py-3 rounded-full hover-lift"
                    >
                      Close letter
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6 font-sans">
            Click the card to read the full letter 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;