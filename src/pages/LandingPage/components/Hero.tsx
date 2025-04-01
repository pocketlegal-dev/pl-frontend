import React from 'react';

export function Hero() {
  return (
    <section className="relative h-[500px] bg-gradient-to-r from-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Online Legal consultation
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Anytime Anywhere
          </h2>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920"
        alt="Legal Background"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
    </section>
  );
}