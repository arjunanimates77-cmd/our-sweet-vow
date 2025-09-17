import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageCircle, Send, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WishMessage {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

const WishBoard = () => {
  const [wishes, setWishes] = useState<WishMessage[]>([]);
  const [newName, setNewName] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const { toast } = useToast();

  // Pre-loaded sample wishes
  const sampleWishes: WishMessage[] = [
    {
      id: 1,
      name: "From a Friend",
      message: "You two are goals! Watching your love story unfold has been beautiful. Keep shining together! 💕",
      timestamp: new Date('2024-09-15T10:30:00')
    },
    {
      id: 2,
      name: "From Family",
      message: "Kabhi ladna mat, sirf pizza share karna. Your love brings joy to everyone around you! 🍕❤️",
      timestamp: new Date('2024-09-16T14:20:00')
    },
    {
      id: 3,
      name: "Well-wisher",
      message: "May your love continue to grow stronger with each passing day. You're perfect together! ✨",
      timestamp: new Date('2024-09-16T18:45:00')
    }
  ];

  useEffect(() => {
    // Load wishes from localStorage or use sample data
    const storedWishes = localStorage.getItem('anniversaryWishes');
    if (storedWishes) {
      const parsed = JSON.parse(storedWishes).map((wish: any) => ({
        ...wish,
        timestamp: new Date(wish.timestamp)
      }));
      setWishes(parsed);
    } else {
      setWishes(sampleWishes);
      localStorage.setItem('anniversaryWishes', JSON.stringify(sampleWishes));
    }
  }, []);

  const handleSubmitWish = () => {
    if (!newName.trim() || !newMessage.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and message are required.",
        variant: "destructive"
      });
      return;
    }

    const newWish: WishMessage = {
      id: Date.now(),
      name: newName.trim(),
      message: newMessage.trim(),
      timestamp: new Date()
    };

    const updatedWishes = [newWish, ...wishes];
    setWishes(updatedWishes);
    localStorage.setItem('anniversaryWishes', JSON.stringify(updatedWishes));

    // Clear form
    setNewName('');
    setNewMessage('');

    toast({
      title: "Wish added! 💕",
      description: "Thank you for your beautiful message!",
    });
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section id="wishboard" className="py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            Wish Board
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Beautiful messages from hearts that care
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Add new wish form */}
          <Card className="mb-8 hover-lift bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-secondary flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Leave a Wish
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Your name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="font-sans"
              />
              
              <Textarea
                placeholder="Write your beautiful message for Arjun & Preethi..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="font-sans min-h-[120px] resize-none"
              />
              
              <Button
                onClick={handleSubmitWish}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans font-medium px-6 py-2 rounded-full hover-lift"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Wish
              </Button>
            </CardContent>
          </Card>

          {/* Wishes display */}
          <div className="space-y-6">
            {wishes.length === 0 ? (
              <Card className="bg-card/60 backdrop-blur-sm border-border/30">
                <CardContent className="p-8 text-center">
                  <Heart className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="font-sans text-muted-foreground">
                    No wishes yet. Be the first to leave a beautiful message! 💕
                  </p>
                </CardContent>
              </Card>
            ) : (
              wishes.map((wish, index) => (
                <Card 
                  key={wish.id}
                  className="hover-lift bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Avatar placeholder */}
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center gentle-glow">
                        <Heart className="w-6 h-6 text-white fill-current" />
                      </div>
                      
                      {/* Message content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-serif text-lg font-semibold text-secondary">
                            {wish.name}
                          </h4>
                          <Star className="w-4 h-4 text-primary fill-current" />
                        </div>
                        
                        <p className="font-sans text-foreground leading-relaxed mb-3">
                          {wish.message}
                        </p>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Heart className="w-3 h-3 fill-current" />
                          <span>{formatTimestamp(wish.timestamp)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Wishes counter */}
          {wishes.length > 0 && (
            <div className="text-center mt-8">
              <p className="font-sans text-muted-foreground">
                {wishes.length} beautiful {wishes.length === 1 ? 'wish' : 'wishes'} and counting... 💕
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WishBoard;