import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const news = [
  {
    title: 'Supreme Court Landmark Ruling on Digital Privacy Rights',
    image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=400',
  },
  {
    title: 'New Employment Law Changes Coming in 2025',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400',
  },
  {
    title: 'Legal Tech Innovations Reshaping Law Firms',
    image: 'https://images.unsplash.com/photo-1591189824935-c2c7a9a6ae58?auto=format&fit=crop&w=400',
  },
  {
    title: 'Corporate Compliance Updates for Small Businesses',
    image: 'https://images.unsplash.com/photo-1562565652-a5b5a4110406?auto=format&fit=crop&w=400',
  },
  {
    title: 'International Trade Law: New Global Regulations',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400',
  },
  {
    title: 'Cryptocurrency Regulations: Legal Framework Update',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=400',
  },
  {
    title: 'Environmental Law: Climate Change Legislation',
    image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=400',
  },
  {
    title: 'Healthcare Law: Patient Rights Expansion',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400',
  },
];

export function LatestNews() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 300;
    const newPosition = direction === 'left' 
      ? scrollPosition - scrollAmount 
      : scrollPosition + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    setScrollPosition(newPosition);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-8">Latest News</h2>
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {news.map((item, index) => (
              <div key={index} className="min-w-[300px] bg-white rounded-lg shadow-md flex-shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">Read more...</p>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}