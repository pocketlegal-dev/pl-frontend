import React from 'react';
import { Hero } from './components/Hero';
import { TrustedCompanies } from './components/TrustedCompanies';
import { LatestNews } from './components/LatestNews';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';

export function LandingPage() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <LatestNews />
      <Testimonials />
      <FAQ />
    </>
  );
}