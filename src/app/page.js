import Hero from '@/components/Hero/Hero';
import StatsBar from '@/components/StatsBar/StatsBar';
import About from '@/components/About/About';
import FeatureGrid from '@/components/AppFeatures/FeatureGrid';
import FeatureChat from '@/components/AppFeatures/FeatureChat';
import AppTeaser from '@/components/AppTeaser/AppTeaser';
import TestimonialBanner from '@/components/TestimonialBanner/TestimonialBanner';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <About />
      <AppTeaser />
      <FeatureChat />
      <FeatureGrid />
      <TestimonialBanner />
      <Testimonials />
    </main>
  );
}
