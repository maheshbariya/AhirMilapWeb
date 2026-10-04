import Hero from '@/components/Hero/Hero';
import StatsBar from '@/components/StatsBar/StatsBar';
import About from '@/components/About/About';
import AppTeaser from '@/components/AppTeaser/AppTeaser';
import Confidentiality from '@/components/Confidentiality/Confidentiality';
import WhyAhirMilap from '@/components/WhyAhirMilap/WhyAhirMilap';
import TestimonialBanner from '@/components/TestimonialBanner/TestimonialBanner';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <About />
      <AppTeaser />
      <Confidentiality />
      <WhyAhirMilap />
      <TestimonialBanner />
      <Testimonials />
    </main>
  );
}

