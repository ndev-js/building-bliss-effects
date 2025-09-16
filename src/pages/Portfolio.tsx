import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, ZoomIn, Building, Home, Warehouse, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
      const elements = sectionRef.current.querySelectorAll(".portfolio-item");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  // Portfolio data - Add your actual project images and details here
  const projects = [
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
    {
      id: 7,
      title: "Corporate Headquarters",
      category: "Commercial",
      description: "Prestigious corporate building with executive facilities and modern design",
      image: "/7.jpg",
      icon: Home,
      features: ["Executive Facilities", "Prestigious Design", "Corporate Excellence"]
    },
    {
      id: 8,
      title: "Townhouse Development",
      category: "Residential",
      description: "Elegant townhouse community with shared amenities and modern living",
      image: "/8.jpg",
      icon: Home,
      features: ["Community Living", "Shared Amenities", "Modern Design"]
    },
    {
      id: 9,
      title: "Manufacturing Facility",
      category: "Industrial",
      description: "Advanced manufacturing plant with cutting-edge technology and efficiency",
      image: "/9.jpg",
      icon: Warehouse,
      features: ["Advanced Technology", "Efficiency Focused", "Modern Manufacturing"]
    },
    {
      id: 10,
      title: "Luxury Penthouse",
      category: "Residential",
      description: "Exclusive penthouse with panoramic views and luxury finishes",
      image: "/10.jpg",
      icon: Home,
      features: ["Panoramic Views", "Exclusive Design", "Luxury Finishes"]
    },
    {
      id: 11,
      title: "Retail Center",
      category: "Commercial",
      description: "Modern retail center with innovative store layouts and customer experience",
      image: "/11.jpg",
      icon: Building,
      features: ["Innovative Layout", "Customer Experience", "Modern Retail"]
    },
    {
      id: 12,
      title: "Custom Family Home",
      category: "Residential",
      description: "Bespoke family home designed for comfort, functionality, and style",
      image: "/12.jpg",
      icon: Home,
      features: ["Bespoke Design", "Family Focused", "Comfort & Style"]
    },
    {
      id: 12,
      title: "Beaconhouse Renovation work",
      category: "All",
      description: "Bespoke family home designed for comfort, functionality, and style",
      image: "/beaconhouse.jpeg",
      icon: Home,
      features: ["Bespoke Design", "Family Focused", "Comfort & Style"]
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Industrial", "Renovation"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectModal = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header with Back Button */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      <section ref={sectionRef} id="portfolio" className="py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/10 rounded-full animate-pulse blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="portfolio-item opacity-0">
              <div className="inline-flex items-center gap-2 p-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-8 backdrop-blur-sm border border-blue-400/30">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-medium">Our Portfolio</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                Our Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Showcasing our finest construction projects and architectural achievements
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="portfolio-item opacity-0 flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-200 hover:border-blue-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-item opacity-0 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-blue-300 relative overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                          <project.icon className="h-5 w-5 text-blue-400" />
                          <span className="text-blue-400 text-sm font-semibold">{project.category}</span>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                        <p className="text-gray-200 text-sm line-clamp-2">{project.description}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => openProjectModal(project.id)}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                      >
                        <ZoomIn className="h-5 w-5 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <project.icon className="h-5 w-5 text-blue-500" />
                      <span className="text-blue-600 text-sm font-semibold">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          {/* <div className="portfolio-item opacity-0 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can bring your construction vision to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25"
                >
                  <span>Get in Touch</span>
                  <ExternalLink className="h-5 w-5" />
                </Link>
                <Link 
                  to="/"
                  className="inline-flex items-center gap-3 bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300"
                >
                  <span>Back to Home</span>
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div> */}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <button
                    onClick={closeProjectModal}
                    className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
                
                <img
                  src={projects.find(p => p.id === selectedProject)?.image}
                  alt="Project"
                  className="w-full h-96 object-cover rounded-xl mb-6"
                />
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Project Details</h4>
                    <p className="text-gray-600">
                      {projects.find(p => p.id === selectedProject)?.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects.find(p => p.id === selectedProject)?.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full border border-blue-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
