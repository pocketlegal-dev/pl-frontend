import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Don't Believe Me<br />
          Check What Client<br />
          Think Of Us
        </h2>
        <div className="flex justify-center space-x-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white rounded-lg p-6 max-w-sm">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Pocket Legal is a great resource! It provides my research, document management, and case tracking needs in a well-done, efficient and precise, highly recommended!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100"
                  alt="Client"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold">Margaret Sharma</p>
                  <p className="text-sm text-gray-600">IT Professional</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}