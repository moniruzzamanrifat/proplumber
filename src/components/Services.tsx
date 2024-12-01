import React from 'react';
import { Droplet, Wrench, Home, ThermometerSun } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive plumbing solutions for residential and commercial properties
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={Droplet}
            title="Leak Repair"
            description="Quick detection and repair of all types of leaks"
          />
          <ServiceCard
            icon={Wrench}
            title="Pipe Services"
            description="Installation, repair, and replacement of pipes"
          />
          <ServiceCard
            icon={Home}
            title="Bathroom & Kitchen"
            description="Complete plumbing solutions for your home"
          />
          <ServiceCard
            icon={ThermometerSun}
            title="Water Heaters"
            description="Installation and repair of water heaters"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}