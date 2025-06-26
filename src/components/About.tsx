
import React from 'react';
import { Users, Shield, Clock, Droplets } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Shield, value: '500+', label: 'Projects Waterproofed' },
    { icon: Users, value: '15+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Droplets, value: '100%', label: 'Water Protection' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About RoyalGripPro
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              With over 15 years of specialized experience in waterproofing solutions, RoyalGripPro has 
              established itself as a leader in membrane sheet waterproofing technology.
            </p>
            <p className="text-gray-300 mb-8">
              Our team of certified professionals is committed to delivering superior waterproofing 
              solutions using premium membrane sheets and advanced installation techniques. From 
              residential basements to commercial rooftops, we ensure complete water protection 
              with long-lasting results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mx-auto w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-3">
                    <stat.icon className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Waterproofing team at work"
              className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-yellow-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
