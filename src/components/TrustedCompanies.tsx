import React from 'react';

const trustedCompanies = [
  { name: 'Amazon', logo: 'amazon.png' },
  { name: 'OLA', logo: 'ola.png' },
  { name: 'Zepto', logo: 'zepto.png' },
  { name: 'Paytm', logo: 'paytm.png' },
  { name: 'Flipkart', logo: 'flipkart.png' },
];

export function TrustedCompanies() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-8">Trusted User</p>
        <div className="flex justify-center items-center space-x-12">
          {trustedCompanies.map((company) => (
            <div key={company.name} className="text-gray-400 font-semibold">
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}