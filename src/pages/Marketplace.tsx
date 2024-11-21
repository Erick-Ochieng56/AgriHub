import React, { useState } from 'react';
import { Search, Filter, MapPin, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    farmer: "Green Valley Farm",
    location: "Riverside County",
    price: 4.99,
    unit: "kg",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea"
  },
  {
    id: 2,
    name: "Fresh Lettuce",
    farmer: "Sunshine Organics",
    location: "Mountain View",
    price: 2.99,
    unit: "head",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1"
  },
  {
    id: 3,
    name: "Sweet Corn",
    farmer: "Heritage Fields",
    location: "Central Valley",
    price: 0.99,
    unit: "ear",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076"
  }
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="flex gap-4">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </div>
        
        <div className="flex gap-2">
          {['Vegetables', 'Fruits', 'Grains', 'Dairy', 'Meat'].map((category) => (
            <button
              key={category}
              className="px-4 py-1 bg-white border border-gray-300 rounded-full hover:bg-green-50 hover:border-green-500 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm">{product.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-2">{product.farmer}</p>
              
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{product.location}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">
                  ${product.price}
                  <span className="text-sm text-gray-500">/{product.unit}</span>
                </span>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;