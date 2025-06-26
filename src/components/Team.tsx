
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Anderson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '25+ Years',
      specialty: 'Project Management'
    },
    {
      name: 'Sarah Mitchell',
      position: 'Lead Architect',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '15+ Years',
      specialty: 'Sustainable Design'
    },
    {
      name: 'Mike Rodriguez',
      position: 'Construction Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '18+ Years',
      specialty: 'Site Operations'
    },
    {
      name: 'Emily Chen',
      position: 'Safety Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      experience: '12+ Years',
      specialty: 'Safety Compliance'
    }
  ];

  return (
    <section id="team" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-12 w-12 text-yellow-500 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
              Our Expert Team
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Meet the professionals who bring decades of experience and expertise to every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-yellow-500 group-hover:border-yellow-400 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-yellow-500 font-semibold mb-3">
                  {member.position}
                </p>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">
                    <span className="font-semibold">Experience:</span> {member.experience}
                  </p>
                  <p className="text-gray-300 text-sm">
                    <span className="font-semibold">Specialty:</span> {member.specialty}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
