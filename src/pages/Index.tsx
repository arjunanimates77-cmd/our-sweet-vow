import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LoveTimeline from '@/components/LoveTimeline';
import LoveLetter from '@/components/LoveLetter';
import PhotoGallery from '@/components/PhotoGallery';
import WhyILoveYou from '@/components/WhyILoveYou';
import CounterAndPlans from '@/components/CounterAndPlans';
import WishBoard from '@/components/WishBoard';
import FinalPromise from '@/components/FinalPromise';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <LoveTimeline />
      <LoveLetter />
      <PhotoGallery />
      <WhyILoveYou />
      <CounterAndPlans />
      <WishBoard />
      <FinalPromise />
    </div>
  );
};

export default Index;
