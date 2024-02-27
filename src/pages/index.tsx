import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/Hero';
import PricingCards from '../components/Cards';
import SubBanner from '../components/Banner';
import NewsletterSection from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PricingCards />
      <SubBanner />
      <NewsletterSection />
      <Footer />
    </div>
  );
}