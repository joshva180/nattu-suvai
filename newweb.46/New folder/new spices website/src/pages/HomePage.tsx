import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { HeroSection } from '../components/HeroSection';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FarmStory } from '../components/FarmStory';
import { CategoryCards } from '../components/CategoryCards';
import { Testimonials } from '../components/Testimonials';
import { WholesaleCTA } from '../components/WholesaleCTA';
import { SocialSection } from '../components/SocialSection';
import { Newsletter } from '../components/Newsletter';
export function HomePage() {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <FeaturedProducts />
        <WhyChooseUs />
        <FarmStory />
        <CategoryCards />
        <Testimonials />
        <WholesaleCTA />
        <SocialSection />
        <Newsletter />
      </main>
    </PageTransition>);

}