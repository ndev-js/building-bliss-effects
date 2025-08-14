import React, { useEffect, useRef } from "react";
import { Target, Users, Award, Heart, Shield, Star } from "lucide-react";
import { featureCardsContent } from "@/content/content";

const Mission = () => {
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
      const elements = sectionRef.current.querySelectorAll(".mission-item");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  // Icon mapping for core values
  const iconMap = {
    "Quality": Star,
    "Integrity": Shield,
    "Safety": Shield,
    "Innovation": Award,
    "Client-Centric": Heart
  };

  // Get core values from content
  const coreValues = featureCardsContent.find(section => section.heading === "Our Core Values")?.content || [];

  return (
    <section ref={sectionRef} id="mission" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full animate-float blur-3xl" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-200/20 rounded-full animate-pulse blur-2xl"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-300/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-indigo-300/30 rotate-45 animate-spin-slow-reverse"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern-grid"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Mission Statement */}
        <div className="text-center mb-20">
          <div className="mission-item opacity-0">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30">
              <span className="text-blue-700 text-sm font-medium px-4 py-2">Our Purpose</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To create exceptional spaces that inspire, enhance communities, and stand the test of time through
              <span className="font-semibold text-blue-600"> innovation</span>,
              <span className="font-semibold text-indigo-600"> sustainability</span>, and
              <span className="font-semibold text-blue-800"> unwavering commitment to excellence</span>.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-16">
          <div className="mission-item opacity-0">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide every decision and action we take
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreValues.map((value, index) => {
            const IconComponent = iconMap[value.title as keyof typeof iconMap] || Target;
            return (
              <div
                key={index}
                className="mission-item opacity-0 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-blue-300 relative overflow-hidden h-full">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg mx-auto">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300 text-center">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 text-center">
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="mission-item opacity-0 text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-pattern-hex"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Build Your Vision?
              </h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Let's create something extraordinary together with our mission-driven approach
              </p>
              <div className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl">
                <span>Start Your Journey</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
