import React, { useEffect, useRef } from "react";
import { CheckCircle, Users, Clock, Award, Shield, Star, ArrowRight, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
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
      const elements = sectionRef.current.querySelectorAll(".why-choose-item");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our team of professionals brings years of experience and expertise to every project, ensuring quality results.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and deliver projects on time, every time.",
      color: "from-indigo-600 to-indigo-700"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "We maintain the highest standards of quality in every aspect of our construction projects.",
      color: "from-blue-700 to-blue-800"
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building lasting relationships through transparency, honesty, and reliable service delivery.",
      color: "from-sky-600 to-sky-700"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We go above and beyond to exceed your expectations.",
      color: "from-indigo-700 to-indigo-800"
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Service",
      description: "From concept to completion, we handle every aspect of your construction project with care.",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  return (
    <section ref={sectionRef} id="why-choose-us" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full animate-pulse blur-2xl"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-indigo-400/20 rotate-45 animate-spin-slow-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="why-choose-item opacity-0">
            <div className="inline-flex items-center gap-2 p-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-8 backdrop-blur-sm border border-blue-400/30">
              <Sparkles className="h-4 w-4 text-blue-300" />
              <span className="text-blue-200 text-sm font-medium">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text text-transparent">
                M.A Constructions
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              When you choose M.A Constructions as your construction partner, you benefit from a team of professionals 
              who are passionate about what they do. We bring experience, expertise, and unwavering commitment to every project.
            </p>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="why-choose-item opacity-0 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-3 hover:bg-white/20 relative overflow-hidden">
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg mx-auto`}>
                    <reason.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 text-center">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300 text-center">
                    {reason.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="why-choose-item opacity-0 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group shadow-xl hover:shadow-blue-500/25">
            <span>Start Your Project Today</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          <p className="text-gray-400 mt-6 text-sm">
            Whether it's a residential, commercial, or industrial project, M.A Constructions is your trusted partner in construction.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
