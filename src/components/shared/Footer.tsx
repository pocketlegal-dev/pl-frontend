import React from 'react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">SOLUTIONS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Patents</a></li>
              <li><a href="#" className="hover:text-gray-300">Simple</a></li>
              <li><a href="#" className="hover:text-gray-300">Others</a></li>
              <li><a href="#" className="hover:text-gray-300">Add Lawyer</a></li>
              <li><a href="#" className="hover:text-gray-300">Pro Lawyers & Orgs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}