import React, { useState } from 'react';
import { Wrench, Phone, Clock, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 border-b">
          <div className="flex items-center space-x-2 text-blue-600">
            <Phone size={20} />
            <span className="font-semibold">(555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={20} className="text-blue-600" />
            <span>24/7 Emergency Service</span>
          </div>
        </div>
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold">ProPlumb</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Get Estimate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <MobileNavLink href="#services" onClick={toggleMenu}>Services</MobileNavLink>
              <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
              <MobileNavLink href="#testimonials" onClick={toggleMenu}>Testimonials</MobileNavLink>
              <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Get Estimate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-600 hover:text-blue-600 transition">
      {children}
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-gray-600 hover:text-blue-600 transition text-lg py-2 border-b border-gray-100"
    >
      {children}
    </a>
  );
}