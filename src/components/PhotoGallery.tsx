import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Heart, Shuffle, X } from 'lucide-react';

// Import gallery images
import coupleSunset from '@/assets/couple-sunset.jpg';
import cafeDate from '@/assets/cafe-date.jpg';
import beachPicnic from '@/assets/beach-picnic.jpg';
import goaHouses from '@/assets/goa-houses.jpg';
import anniversarySetup from '@/assets/anniversary-setup.jpg';

interface Photo {
  id: number;
  src: string;
  caption: string;
  description: string;
}

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: 1,
      src: coupleSunset,
      caption: "“Tera haath, mera haath… aur zindagi ka saara raasta saath.” ❤️✨",
      description: "Our romantic evening in Goa"
    },
    {
      id: 2,
      src: cafeDate,
      caption: "Coffee aur pyaar ☕",
      description: "First date vibes never fade"
    },
    {
      id: 3,
      src: beachPicnic,
      caption: "Perfect day out 🌸",
      description: "Perfect day, perfect company"
    },
    {
      id: 4,
      src: goaHouses,
      caption: "Adventure time 🏡",
      description: "Exploring beautiful places together"
    },
    {
      id: 5,
      src: anniversarySetup,
      caption: "Ring Exchange 💍",
      description: “ungliyon mein pyaar ka chhota sa wada bandh dena 💍❤️” 
    }
  ]);

  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const shufflePhotos = () => {
    const shuffled = [...photos].sort(() => Math.random() - 0.5);
    setPhotos(shuffled);
  };

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Photo Gallery
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8">
            Captured moments, cherished memories
          </p>
          
          <Button
            onClick={shufflePhotos}
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover-lift font-sans font-medium px-6 py-2 rounded-full"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Shuffle Memories
          </Button>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <Card 
                  className="group cursor-pointer hover-lift transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden"
                  onClick={() => handlePhotoClick(photo)}
                  style={{ 
                    animationDelay: `${index * 0.1}s` 
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.description}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <Heart className="w-6 h-6 text-white fill-current animate-float-hearts" />
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-serif text-lg font-semibold text-secondary mb-1">
                      {photo.caption}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground">
                      {photo.description}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                <div className="relative">
                  <img
                    src={photo.src}
                    alt={photo.description}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                    <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                      {photo.caption}
                    </h3>
                    <p className="font-sans text-white/80">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Gallery stats */}
        <div className="text-center mt-12">
          <p className="font-sans text-muted-foreground">
            {photos.length} beautiful memories captured 📸
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;