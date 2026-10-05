import Hero from '@/components/Hero/Hero';
import StatsBar from '@/components/StatsBar/StatsBar';
import About from '@/components/About/About';
import AppTeaser from '@/components/AppTeaser/AppTeaser';
import FamilyParents from '@/components/FamilyParents/FamilyParents';
import Confidentiality from '@/components/Confidentiality/Confidentiality';
import WhyAhirMilap from '@/components/WhyAhirMilap/WhyAhirMilap';
import FAQs from '@/components/FAQs/FAQs';
import TestimonialBanner from '@/components/TestimonialBanner/TestimonialBanner';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      {/* <About /> */}
      <AppTeaser />
      {/* <FamilyParents /> */}
      <Confidentiality />
      {/* <WhyAhirMilap /> */}
      <FAQs />
      <TestimonialBanner />
      {/* <Testimonials /> */}
    </main>
  );
}