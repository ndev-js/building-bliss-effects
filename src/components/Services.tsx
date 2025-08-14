import React, { useEffect, useRef, useState } from "react";
import { Building, Hammer, Wrench, Construction, ArrowRight, CheckCircle, Sparkles, ChevronLeft, ChevronRight, Star, Award, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState(0);

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
      const elements = sectionRef.current.querySelectorAll(".service-item");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance services every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Building,
      title: "Pre Construction",
      subtitle: "Planning & Design Excellence",
      description: `Transform your vision into detailed blueprints with our comprehensive pre-construction services. We handle everything from architectural design to 3D modeling, ensuring your project starts on solid ground.`,
      features: ["Architectural Design", "3D Modeling", "MEP Services", "Landscaping"],
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      accent: "blue",
      benefits: ["Cost Optimization", "Risk Mitigation", "Quality Assurance"],
      stats: { projects: "150+", satisfaction: "98%", timeline: "2-4 weeks" }
    },
    {
      icon: Hammer,
      title: "Grey Structure",
      subtitle: "Foundation & Structural Integrity",
      description: `Build with confidence using our expert grey structure construction. We ensure every foundation, column, beam, and slab meets the highest engineering standards for lasting durability.`,
      features: ["Foundation", "Structural Elements", "Quality Materials", "Engineering Standards"],
      color: "from-indigo-600 to-indigo-700",
      bgColor: "from-indigo-50 to-indigo-100",
      accent: "indigo",
      benefits: ["Structural Integrity", "Durability", "Safety Standards"],
      stats: { projects: "200+", satisfaction: "99%", timeline: "8-12 weeks" }
    },
    {
      icon: Wrench,
      title: "Finishing Work",
      subtitle: "Interior & Exterior Perfection",
      description: `Create stunning living spaces with our comprehensive finishing services. From electrical and plumbing to flooring and painting, we bring beauty and functionality to every detail.`,
      features: ["Electrical & Plumbing", "HVAC Systems", "Flooring & Painting", "Aesthetic Elements"],
      color: "from-sky-600 to-sky-700",
      bgColor: "from-sky-50 to-sky-100",
      accent: "sky",
      benefits: ["Modern Aesthetics", "Functionality", "Comfort"],
      stats: { projects: "180+", satisfaction: "97%", timeline: "6-10 weeks" }
    },
    {
      icon: Construction,
      title: "Renovation",
      subtitle: "Transform & Modernize",
      description: `Breathe new life into existing spaces with our renovation expertise. We modernize, extend, and transform while preserving the character and integrity of your original structure.`,
      features: ["Modern Upgrades", "Extensions", "Space Transformation", "Character Preservation"],
      color: "from-blue-700 to-blue-800",
      bgColor: "from-blue-50 to-blue-100",
      accent: "blue",
      benefits: ["Value Addition", "Modern Living", "Space Optimization"],
      stats: { projects: "120+", satisfaction: "96%", timeline: "4-8 weeks" }
    }
  ];

  const getAccentColor = (accent: string) => {
    const colors = {
      blue: "text-blue-600",
      indigo: "text-indigo-600",
      sky: "text-sky-600"
    };
    return colors[accent as keyof typeof colors] || "text-blue-600";
  };

  const getAccentBg = (accent: string) => {
    const colors = {
      blue: "bg-blue-100",
      indigo: "bg-indigo-100",
      sky: "bg-sky-100"
    };
    return colors[accent as keyof typeof colors] || "bg-blue-100";
  };

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToService = (index: number) => {
    setActiveService(index);
  };

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full animate-float blur-3xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-200/20 rounded-full animate-pulse blur-2xl"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-300/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-indigo-300/30 rotate-45 animate-spin-slow-reverse"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern-hex"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-24">
          <div className="service-item opacity-0">
            <div className="inline-flex items-center gap-2 p-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-8 backdrop-blur-sm border border-blue-400/30">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium px-4 py-1">What We Offer</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Comprehensive construction solutions from concept to completion, delivered with 
              <span className="font-semibold text-blue-600"> precision</span> and 
              <span className="font-semibold text-indigo-600"> excellence</span>
            </p>
          </div>
        </div>

        {/* Service Cards Grid - Always Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item opacity-0 group cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setActiveService(index)}
            >
              <Card className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white h-full ${
                activeService === index ? 'ring-4 ring-blue-500/50 shadow-2xl' : ''
              }`}>
                {/* Service Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mt-6 mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                
                {/* Service Content */}
                <CardHeader className="text-center p-4 pb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 mt-2">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                
                {/* Quick Stats */}
                <div className="px-4 pb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-3">
                    <span>{service.stats.projects} Projects</span>
                    <span>{service.stats.satisfaction} Satisfaction</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${service.color}`}
                      style={{ width: `${parseInt(service.stats.satisfaction)}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Featured Service Slider */}
        <div className="service-item opacity-0 mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Main Service Display */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Service Details */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6">
                    <Star className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-700 text-sm font-medium">Featured Service</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {services[activeService].title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {services[activeService].description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 ${getAccentBg(services[activeService].accent)} text-sm font-medium rounded-full border border-current ${getAccentColor(services[activeService].accent)} opacity-80`}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 w-fit">
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Right Side - Service Visual */}
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-12 lg:p-16 flex items-center justify-center">
                {/* Service Icon */}
                <div className={`w-32 h-32 bg-gradient-to-br ${services[activeService].color} rounded-3xl flex items-center justify-center shadow-2xl animate-pulse-glow`}>
                  {React.createElement(services[activeService].icon, { className: "h-16 w-16 text-white" })}
                </div>
                
                {/* Floating Stats */}
                <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{services[activeService].stats.projects}</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">{services[activeService].stats.satisfaction}</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevService}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextService}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Service Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToService(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === activeService
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 w-12 shadow-lg shadow-blue-500/50"
                    : "bg-gray-400 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="service-item opacity-0 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-16 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-pattern-dots"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 p-3 bg-white/20 rounded-full mb-8 backdrop-blur-sm border border-white/30">
                <Award className="h-5 w-5 text-white" />
                <span className="text-white text-sm font-medium">Ready to Start?</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-blue-100 mb-10 text-xl max-w-3xl mx-auto leading-relaxed">
                Transform your construction vision into reality with our comprehensive services and expert team
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-white/25">
                  <span>Get Started Today</span>
                  <ArrowRight className="h-6 w-6" />
                </button>
                <button className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300">
                  <span>Schedule Consultation</span>
                  <Zap className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
