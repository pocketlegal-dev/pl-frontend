import React from 'react';
import { Header } from './components/shared/Header';
import { Footer } from './components/shared/Footer';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;