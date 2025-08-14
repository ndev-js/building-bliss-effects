import React, { useEffect, useRef } from "react";
import { Users, Award, CheckCircle, ArrowRight, Sparkles, Building } from "lucide-react";

const About = () => {
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
      const elements = sectionRef.current.querySelectorAll(".about-item");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, value: "20+", label: "Years Experience", color: "from-blue-600 to-indigo-600" },
    { icon: Award, value: "500+", label: "Projects Completed", color: "from-indigo-600 to-blue-700" },
    { icon: CheckCircle, value: "98%", label: "Client Satisfaction", color: "from-blue-700 to-indigo-700" },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-indigo-400/20 rotate-45 animate-spin-slow-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="about-item opacity-0">
            <div className="inline-flex items-center gap-2 p-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-8 backdrop-blur-sm border border-blue-400/30">
              <Sparkles className="h-4 w-4 text-blue-300" />
              <span className="text-blue-200 text-sm font-medium">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text text-transparent">
                M.A Constructions
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a leading construction company with over two decades of experience in delivering 
              exceptional construction projects across residential, commercial, and industrial sectors.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="about-item opacity-0 text-center group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-3 hover:bg-white/20 relative overflow-hidden">
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg mx-auto`}>
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Our Story */}
          <div className="about-item opacity-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-blue-400" />
                Our Story
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Founded in 1999, M.A Constructions has grown from a small local contractor to a 
                respected name in the construction industry. Our journey has been marked by 
                unwavering commitment to quality, innovation, and customer satisfaction.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe that every project, regardless of size, deserves the same level of 
                attention to detail and professional excellence. This philosophy has earned us 
                the trust of hundreds of satisfied clients and numerous industry awards.
              </p>
            </div>
          </div>

          {/* Right Column - Key Highlights */}
          <div className="about-item opacity-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-blue-400" />
                Key Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Licensed & Insured:</strong> Full licensing and comprehensive insurance coverage
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Expert Team:</strong> Skilled professionals with extensive experience
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Quality Materials:</strong> Premium materials from trusted suppliers
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-gray-300">
                    <strong className="text-white">Timely Delivery:</strong> Projects completed on schedule and within budget
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="about-item opacity-0 mb-20">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-blue-600 to-indigo-700">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-indigo-700/80"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30">
                    <Building className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Building Excellence Since 1999</h3>
                  <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                    Join hundreds of satisfied clients who have trusted us with their construction projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="about-item opacity-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-3 hover:bg-white/20 relative overflow-hidden group">
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-4">Our Mission</h4>
                <p className="text-gray-300 leading-relaxed">
                  To deliver exceptional construction services that exceed expectations, 
                  while maintaining the highest standards of safety, quality, and professionalism.
                </p>
              </div>
            </div>
          </div>

          <div className="about-item opacity-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-3 hover:bg-white/20 relative overflow-hidden group">
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-4">Our Vision</h4>
                <p className="text-gray-300 leading-relaxed">
                  To be the most trusted and respected construction company, known for 
                  innovation, sustainability, and unwavering commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-item opacity-0 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-pattern-dots"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Start Your Construction Project?
              </h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can bring your vision to life with our expertise and dedication to quality
              </p>
              <button className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group shadow-xl hover:shadow-white/25">
                <span>Get Started Today</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
