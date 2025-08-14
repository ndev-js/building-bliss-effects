
import React, { useEffect, useRef } from "react";
import { Users, Award, Star, Shield, Clock, CheckCircle } from "lucide-react";

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".team-item");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "John Doe",
      position: "Project Manager",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialties: ["Project Planning", "Team Leadership", "Quality Control"]
    },
    {
      name: "Sarah Johnson",
      position: "Senior Architect",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialties: ["Design Excellence", "Building Codes", "Sustainability"]
    },
    {
      name: "Mike Chen",
      position: "Site Supervisor",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      specialties: ["Site Management", "Safety Protocols", "Timeline Management"]
    }
  ];

  const teamStats = [
    { icon: Users, value: "25+", label: "Team Members" },
    { icon: Award, value: "150+", label: "Projects Completed" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
    { icon: Shield, value: "100%", label: "Safety Record" }
  ];

  return (
    <section ref={sectionRef} id="team" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full animate-float blur-3xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/20 rounded-full animate-pulse blur-2xl"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-300/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-indigo-300/30 rotate-45 animate-spin-slow-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="team-item opacity-0">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our experienced professionals bring decades of construction expertise to every project, 
              ensuring quality, safety, and excellence in everything we build.
            </p>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {teamStats.map((stat, index) => (
            <div
              key={index}
              className="team-item opacity-0 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:border-blue-300 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl group-hover:bg-white">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg mx-auto">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {stat.value}
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-item opacity-0 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 hover:border-blue-300 overflow-hidden">
                {/* Member Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {member.experience}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.position}</p>
                  
                  {/* Specialties */}
                  <div className="space-y-2">
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Our Team */}
        <div className="team-item opacity-0 mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-pattern-dots"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 text-center">
                Why Choose Our Team?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Timely Delivery</h4>
                  <p className="text-blue-100 text-sm">Projects completed on schedule</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Quality Work</h4>
                  <p className="text-blue-100 text-sm">Excellence in every detail</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Safety First</h4>
                  <p className="text-blue-100 text-sm">Zero compromise on safety</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Client Focus</h4>
                  <p className="text-blue-100 text-sm">Your satisfaction is our priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="team-item opacity-0 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Work with Our Team?
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and see how our experienced team can bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25">
                <span>Get Started</span>
                <Users className="h-6 w-6" />
              </button>
              <button className="inline-flex items-center gap-3 bg-gray-100 text-gray-700 px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300">
                <span>View Portfolio</span>
                <Award className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
