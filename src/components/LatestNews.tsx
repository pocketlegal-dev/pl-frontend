import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const news = [
  {
    title: 'UPI Rule Change: Minimum Bank Balance- Key Money Changes From April 1',
    image: 'https://images.unsplash.com/photo-1562565652-a5b5a4110406?auto=format&fit=crop&w=400',
  },
  {
    title: 'UPI Rule Change: Minimum Bank Balance- Key Money Changes From April 1',
    image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=400',
  },
  {
    title: 'UPI Rule Change: Minimum Bank Balance- Key Money Changes From April 1',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400',
  },
  {
    title: 'UPI Rule Change: Minimum Bank Balance- Key Money Changes From April 1',
    image: 'https://images.unsplash.com/photo-1591189824935-c2c7a9a6ae58?auto=format&fit=crop&w=400',
  },
];

export function LatestNews() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-8">Latest News</h2>
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto">
            {news.map((item, index) => (
              <div key={index} className="min-w-[300px] bg-white rounded-lg shadow-md">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">Read more...</p>
                </div>
              </div>
            ))}
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}