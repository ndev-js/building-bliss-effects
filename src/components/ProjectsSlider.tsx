import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Building, Home, Warehouse } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsSlider = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
      const elements = sectionRef.current.querySelectorAll(".slider-item");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  // Featured projects for homepage slider (showcasing 6 best projects)
  const featuredProjects = [
    {
      id: 12,
      title: "Beaconhouse Renovation work",
      category: "All",
      description: "Bespoke family home designed for comfort, functionality, and style",
      image: "/beaconhouse.jpeg",
      icon: Home,
      features: ["Bespoke Design", "Family Focused", "Comfort & Style"]
    },
    {
      id: 1,
      title: "Modern Residential Villa",
      category: "Residential",
      description: "Luxury 4-bedroom villa with contemporary design and premium finishes",
      image: "/1.jpg",
      icon: Home,
      features: ["4 Bedrooms", "Modern Design", "Premium Finishes"]
    },
    {
      id: 2,
      title: "Commercial Office Complex",
      category: "Commercial",
      description: "Multi-story office building with state-of-the-art facilities",
      image: "/2.jpg",
      icon: Home,
      features: ["Multi-story", "Modern Facilities", "Corporate Design"]
    },
    {
      id: 3,
      title: "Industrial Warehouse",
      category: "Industrial",
      description: "Large-scale warehouse facility with advanced logistics infrastructure",
      image: "/3.jpg",
      icon: Warehouse,
      features: ["Large Scale", "Logistics Ready", "Modern Infrastructure"]
    },
    {
      id: 4,
      title: "Luxury Apartment Complex",
      category: "Residential",
      description: "High-end apartment complex with luxury amenities and modern architecture",
      image: "/4.jpg",
      icon: Home,
      features: ["Luxury Amenities", "Modern Architecture", "Premium Location"]
    },
    {
      id: 5,
      title: "Shopping Mall",
      category: "Commercial",
      description: "Contemporary shopping mall with innovative retail space design",
      image: "/5.jpg",
      icon: Building,
      features: ["Retail Space", "Modern Design", "Customer Experience"]
    },
    {
      id: 6,
      title: "Family Home Renovation",
      category: "Renovation",
      description: "Complete home transformation with modern upgrades and extensions",
      image: "/6.jpg",
      icon: Home,
      features: ["Complete Renovation", "Modern Upgrades", "Family Focused"]
    },
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section ref={sectionRef} id="featured-projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full animate-pulse blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full animate-pulse blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-200/20 rounded-full animate-float blur-2xl"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-300/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-indigo-300/20 rotate-45 animate-spin-slow-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="slider-item opacity-0">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30">
              <span className="text-blue-700 text-sm font-medium px-4 py-2">Portfolio Showcase</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A glimpse of our finest construction achievements and architectural excellence
            </p>
          </div>
        </div>

        {/* Slider Container */}
        <div className="slider-item opacity-0 relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-blue-200/30">
            {/* Main Slide */}
            <div className="relative h-[500px] md:h-[600px]">
              <img
                src={featuredProjects[currentSlide].image}
                alt={featuredProjects[currentSlide].title}
                className="w-full h-full object-cover"
              />
              
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg animate-pulse-glow">
                    {React.createElement(featuredProjects[currentSlide].icon, { className: "h-7 w-7 text-white" })}
                  </div>
                  <span className="text-blue-300 text-lg font-semibold bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/30">
                    {featuredProjects[currentSlide].category}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {featuredProjects[currentSlide].title}
                </h3>
                
                <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-2xl leading-relaxed">
                  {featuredProjects[currentSlide].description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {featuredProjects[currentSlide].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25"
                  >
                    <span>View Project</span>
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <span>View All Projects</span>
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110 group"
            >
              <ChevronLeft className="h-7 w-7 text-white group-hover:text-blue-300 transition-colors duration-300" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110 group"
            >
              <ChevronRight className="h-7 w-7 text-white group-hover:text-blue-300 transition-colors duration-300" />
            </button>
          </div>

          {/* Enhanced Slide Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 w-12 shadow-lg shadow-blue-500/50"
                    : "bg-gray-400 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="slider-item opacity-0 text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to See More?
              </h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Explore our complete portfolio of construction projects and architectural achievements
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-white/25"
              >
                <span>View Full Portfolio</span>
                <ExternalLink className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
