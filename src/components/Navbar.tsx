import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShoppingBasket, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-green-800">EcoHarvest</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/marketplace" className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
              <ShoppingBasket className="h-5 w-5" />
              <span>Marketplace</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;