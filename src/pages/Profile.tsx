import React from 'react';
import { User, MapPin, Star, Package, Settings, ChevronRight } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-32 h-32 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <User className="h-16 w-16 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">John Smith</h2>
            <p className="text-gray-600 flex items-center justify-center gap-1">
              <MapPin className="h-4 w-4" />
              San Francisco, CA
            </p>
            <div className="mt-4 flex items-center justify-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="font-semibold">4.9</span>
              <span className="text-gray-500">(128 reviews)</span>
            </div>
            <button className="mt-6 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Edit Profile
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { icon: Package, label: 'My Orders' },
                { icon: Star, label: 'Reviews' },
                { icon: Settings, label: 'Settings' }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-green-600" />
                    <span>{label}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
            <div className="space-y-4">
              {[
                {
                  id: '#ORD-123',
                  date: 'Mar 15, 2024',
                  items: 'Organic Tomatoes, Fresh Lettuce',
                  status: 'Delivered',
                  total: 24.99
                },
                {
                  id: '#ORD-122',
                  date: 'Mar 12, 2024',
                  items: 'Sweet Corn, Bell Peppers',
                  status: 'In Transit',
                  total: 18.50
                }
              ].map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{order.id}</span>
                      <span className="text-sm text-gray-500">{order.date}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{order.items}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold">${order.total}</span>
                    <p className="text-sm text-green-600">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Saved Farms */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Saved Farms</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  name: 'Green Valley Farm',
                  location: 'Riverside County',
                  rating: 4.8,
                  image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad'
                },
                {
                  name: 'Sunshine Organics',
                  location: 'Mountain View',
                  rating: 4.6,
                  image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef'
                }
              ].map((farm) => (
                <div
                  key={farm.name}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                >
                  <img
                    src={farm.image}
                    alt={farm.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{farm.name}</h4>
                    <p className="text-sm text-gray-500">{farm.location}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm">{farm.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;