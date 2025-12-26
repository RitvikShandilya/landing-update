import React from 'react';
import { SecuritySection } from './components/SecuritySection';
import { HeroSection } from './components/HeroSection';

export default function App() {
  return (
    <main className="min-h-screen bg-brand-bg overflow-x-hidden">
      {/* Top Section */}
      <SecuritySection />
      
      {/* Bottom Section */}
      <HeroSection />
    </main>
  );
}