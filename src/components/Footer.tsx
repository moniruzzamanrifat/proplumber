import React from 'react';
import { Wrench, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">ProPlumb</span>
            </div>
            <p className="text-gray-400">
              Professional plumbing services you can trust. Available 24/7 for all your plumbing needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Leak Repair</li>
              <li className="text-gray-400">Pipe Services</li>
              <li className="text-gray-400">Water Heaters</li>
              <li className="text-gray-400">Emergency Services</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Instagram} />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ProPlumb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
      <Icon className="h-5 w-5" />
    </a>
  );
}