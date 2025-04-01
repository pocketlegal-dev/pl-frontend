import React from 'react';
import { Scale } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Scale className="h-8 w-8 text-blue-900" />
          <span className="ml-2 text-xl font-bold text-blue-900">Pocket Legal</span>
        </div>
        <div className="flex items-center space-x-6">
          <input
            type="search"
            placeholder="Search for Documents and Tasks..."
            className="px-4 py-2 rounded-full bg-gray-100 w-64"
          />
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-900">Emergency</a>
            <a href="#" className="text-gray-600 hover:text-blue-900">Find Lawyer</a>
            <a href="#" className="text-gray-600 hover:text-blue-900">Blog</a>
            <a href="#" className="text-gray-600 hover:text-blue-900">News</a>
            <a href="#" className="text-gray-600 hover:text-blue-900">Help</a>
          </nav>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-blue-900">Sign in</button>
            <button className="text-gray-600 hover:text-blue-900">Sign up</button>
          </div>
        </div>
      </div>
    </header>
  );
}