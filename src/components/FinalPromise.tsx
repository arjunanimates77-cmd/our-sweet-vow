import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Heart, Gift, Sparkles, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FinalPromise = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleOpenSurprise = () => {
    setShowSurprise(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const shareUrl = window.location.href;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({
        title: "Copied! 💕",
        description: "Share this beautiful website with others!",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Share our love",
        description: shareUrl,
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden">
      {/* Background decorative hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-10 left-10 w-6 h-6 text-primary/20 fill-current heart-float" />
        <Heart className="absolute top-20 right-20 w-4 h-4 text-secondary/20 fill-current heart-float" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-20 left-20 w-5 h-5 text-accent/20 fill-current heart-float" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-10 right-10 w-7 h-7 text-primary/20 fill-current heart-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Promise rings animation */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            {/* Animated rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-4 border-primary/30 rounded-full animate-gentle-glow" />
              <div className="w-32 h-32 border-2 border-secondary/20 rounded-full absolute animate-gentle-glow" style={{ animationDelay: '1s' }} />
            </div>
            
            {/* Central hearts */}
            <div className="relative z-10 w-24 h-24 flex items-center justify-center">
              <Heart className="w-8 h-8 text-secondary heart-float fill-current" />
              <Heart className="w-6 h-6 text-primary heart-float fill-current absolute" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-secondary mb-6">
            Here's to Forever,
            <br />
            <span className="gentle-glow">Preethi</span>
          </h2>

          <p className="font-sans text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Every day with you feels like a beautiful dream. Thank you for being my partner, my best friend, and my greatest love. Here's to all our tomorrows together.
          </p>
        </div>

        {/* Promise card */}
        <Card className="max-w-2xl mx-auto mb-12 hover-lift bg-card/80 backdrop-blur-sm border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
          <CardContent className="p-8 md:p-12 relative z-10 text-center">
            <Sparkles className="w-12 h-12 text-secondary mx-auto mb-6 gentle-glow" />
            
            <blockquote className="font-serif text-xl md:text-2xl text-secondary italic leading-relaxed mb-6">
              "In your eyes, I found my home. In your heart, I found my love. In your soul, I found my mate. Forever yours, forever mine, forever ours."
            </blockquote>
            
            <div className="text-right">
              <p className="font-sans text-secondary font-medium">— Arjun</p>
            </div>
          </CardContent>
        </Card>

        {/* Surprise reveal */}
        <div className="text-center mb-16">
          <Dialog open={showSurprise} onOpenChange={setShowSurprise}>
            <DialogTrigger asChild>
              <Button
                onClick={handleOpenSurprise}
                className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-secondary-foreground font-sans font-bold px-12 py-4 text-xl rounded-full shadow-xl hover-lift relative overflow-hidden"
              >
                <Gift className="w-6 h-6 mr-3" />
                Open Surprise
                <Sparkles className="w-5 h-5 ml-3" />
                
                {/* Confetti animation */}
                {showConfetti && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <Heart
                        key={i}
                        className="absolute w-4 h-4 text-white fill-current animate-particle-rise"
                        style={{
                          left: `${10 + i * 8}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-lg bg-card/95 backdrop-blur-md border-border/50">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-secondary text-center mb-4">
                  Your Surprise! 🎉
                </DialogTitle>
              </DialogHeader>

              <div className="text-center py-6">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30" />
                  <div className="relative bg-gradient-to-r from-primary to-secondary p-8 rounded-full">
                    <Heart className="w-12 h-12 text-white fill-current gentle-glow" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-6 rounded-2xl border border-secondary/20 mb-6">
                  <p className="font-serif text-2xl text-secondary font-bold mb-2">
                    Tomorrow at 7 PM
                  </p>
                  <p className="font-sans text-lg text-foreground mb-2">
                    Wear your favorite color
                  </p>
                  <p className="font-sans text-secondary font-medium">
                    Date is on me 💕
                  </p>
                </div>

                <p className="font-sans text-sm text-muted-foreground italic">
                  "Get ready for something special, my love"
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Share section */}
        <div className="text-center">
          <Card className="max-w-md mx-auto bg-card/60 backdrop-blur-sm border-border/30">
            <CardContent className="p-6">
              <h3 className="font-serif text-lg font-semibold text-secondary mb-3">
                Share Our Love Story
              </h3>
              <p className="font-sans text-sm text-muted-foreground mb-4">
                Let others witness our beautiful journey
              </p>
              <Button
                onClick={handleShare}
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover-lift font-sans font-medium"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Share URL
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-border/30">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-muted-foreground">
            Made with love by <span className="text-secondary font-medium">Arjun</span> for{' '}
            <span className="text-secondary font-medium">Preethi</span> • 17 Sept 2022
          </p>
          <div className="flex justify-center mt-2">
            <Heart className="w-4 h-4 text-primary fill-current heart-float" />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FinalPromise;