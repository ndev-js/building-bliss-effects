
import React from 'react';
import { Building, Hammer, Wrench, Construction } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Complete commercial building solutions from planning to completion.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses']
    },
    {
      icon: Construction,
      title: 'Residential Projects',
      description: 'Custom homes and residential developments built to perfection.',
      features: ['Custom Homes', 'Renovations', 'Extensions']
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our expert renovation services.',
      features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Interior Design']
    },
    {
      icon: Wrench,
      title: 'Maintenance Services',
      description: 'Ongoing maintenance and repair services to keep your property in top condition.',
      features: ['Regular Inspections', 'Emergency Repairs', 'Preventive Maintenance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            We provide comprehensive construction services tailored to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
