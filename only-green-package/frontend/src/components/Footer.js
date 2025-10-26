import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-950 text-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-amber-50 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-green-800" />
              </div>
              <span className="text-xl font-bold text-amber-50">Only Green</span>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed">
              Sustainable fashion for a better tomorrow. Quality hemp and bamboo products that care for you and the planet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-50">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-stone-300 hover:text-amber-50 transition-colors text-sm">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-300 hover:text-amber-50 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-300 hover:text-amber-50 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-stone-300 hover:text-amber-50 transition-colors text-sm">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-50">Customer Service</h3>
            <ul className="space-y-2">
              <li className="text-stone-300 text-sm">Shipping & Returns</li>
              <li className="text-stone-300 text-sm">Size Guide</li>
              <li className="text-stone-300 text-sm">Privacy Policy</li>
              <li className="text-stone-300 text-sm">Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-50">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-stone-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Eco Street, Green City, EC 12345</span>
              </li>
              <li className="flex items-center space-x-2 text-stone-300 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-stone-300 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hello@onlygreen.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-stone-400 text-sm">
            © 2025 Only Green. All rights reserved. Made with care for the planet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;