
import React from 'react';
import { ArrowRight, Building, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate   = useNavigate();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-500/20 rounded-full animate-float blur-3xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full animate-pulse blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 p-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-8 backdrop-blur-sm border border-blue-400/30">
          <Sparkles className="h-4 w-4 text-blue-300" />
          <span className="text-blue-200 text-sm font-medium">Professional Construction Services</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in leading-tight">
          Building Your
          <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text text-transparent animate-pulse">
            Dreams
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 animate-fade-in opacity-90 animation-delay-300 leading-relaxed max-w-4xl mx-auto">
          Professional construction services with over 20 years of experience. 
          We bring your vision to life with quality craftsmanship and innovative solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in animation-delay-600">
          {/* <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-blue-500/25"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button> */}
          
          <Button onClick={() => navigate('/portfolio')}
            variant="outline" 
            size="lg" 
            className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center gap-8 mt-16 animate-fade-in animation-delay-900">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300">20+</div>
            <div className="text-blue-200 text-sm">Years Experience</div>
          </div>
          <div className="w-px h-12 bg-blue-400/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-300">500+</div>
            <div className="text-blue-200 text-sm">Projects Completed</div>
          </div>
          <div className="w-px h-12 bg-indigo-400/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300">98%</div>
            <div className="text-blue-200 text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
