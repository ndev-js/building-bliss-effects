
import React, { useEffect, useRef } from "react";
import { Badge, ArrowRight, Sparkles } from "lucide-react";

const Projects = () => {
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
      const elements = sectionRef.current.querySelectorAll(".project-item");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Modern Office Complex",
      category: "Commercial",
      description: "A state-of-the-art office building featuring sustainable design and modern amenities.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Sustainable Design", "Modern Amenities", "Smart Building Systems"]
    },
    {
      title: "Luxury Residential Villa",
      category: "Residential",
      description: "Custom-built luxury villa with premium finishes and innovative design elements.",
      image: "https://images.unsplash.com/photo-1600596545925-45b6c3e7c92f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Premium Finishes", "Custom Design", "Smart Home Integration"]
    },
    {
      title: "Industrial Warehouse",
      category: "Industrial",
      description: "Large-scale warehouse facility designed for maximum efficiency and storage capacity.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["High Efficiency", "Large Capacity", "Modern Logistics"]
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
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
          <div className="project-item opacity-0">
            <div className="inline-flex items-center gap-2 p-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-8 backdrop-blur-sm border border-blue-400/30">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Our Projects</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Recent{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Explore some of our latest construction projects that showcase our expertise, 
              quality craftsmanship, and innovative design solutions.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item opacity-0 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 hover:border-blue-300 overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold border-0">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* View Project Button */}
                  <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-all duration-300">
                    <span>View Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="project-item opacity-0 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-16 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-pattern-dots"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to See More Projects?
              </h3>
              <p className="text-blue-100 mb-10 text-xl max-w-3xl mx-auto leading-relaxed">
                Explore our complete portfolio of construction projects and architectural achievements 
                to see the full scope of our capabilities and expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-white/25">
                  <span>View Full Portfolio</span>
                  <ArrowRight className="h-6 w-6" />
                </button>
                <button className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300">
                  <span>Contact Us</span>
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
