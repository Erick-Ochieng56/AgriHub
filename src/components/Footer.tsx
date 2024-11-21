import React from 'react';
import { Heart, Leaf, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              EcoHarvest
            </h3>
            <p className="mt-2 text-gray-600">
              Connecting sustainable farmers with conscious consumers.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-green-800">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-700">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-700">How It Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-700">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-green-800 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Stay Connected
            </h4>
            <p className="mt-2 text-gray-600">
              Subscribe to our newsletter for updates and farming tips.
            </p>
            <div className="mt-3 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 flex-grow"
              />
              <button className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600 flex items-center justify-center gap-1">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500" />
          <span>for sustainable farming</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;