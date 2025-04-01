import React from 'react';
import { ChevronRight } from 'lucide-react';

const faqs = [
  'WHAT IS ONLINE LEGAL CONSULTATION?',
  'ARE YOUR ONLINE LAWYERS QUALIFIED?',
  'WHAT HAPPENS IF I DON\'T GET A RESPONSE FROM A LAWYER?',
  'HOW DO I START ONLINE CONSULTATION WITH LAWYER ON LEGALCART?',
  'IS ONLINE LAWYER CONSULTATION SAFE AND SECURE ON LEGALCART?',
];

export function FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex">
          <div className="w-1/3">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Questions?</h2>
            <h3 className="text-xl font-bold text-blue-900 mb-8">We're here to help</h3>
            <p className="text-gray-600">
              Check out our FAQs or talk to a live customer care specialist by phone, chat, or email
            </p>
          </div>
          <div className="w-2/3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-md transition"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{faq}</span>
                  <ChevronRight className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}