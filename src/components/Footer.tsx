
import React from "react";
import { Building, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white py-16 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">M.A Constructions</h3>
                <p className="text-blue-300 text-sm">Building Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional construction services with over 20 years of experience. 
              We bring your vision to life with quality craftsmanship and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-500/30">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-500/30">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-500/30">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-500/30">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-300">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Commercial Construction</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Residential Projects</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Renovation & Remodeling</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Maintenance Services</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Project Management</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-300">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-blue-300 transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="hover:text-blue-300 transition-colors duration-300">Services</a></li>
              <li><a href="#mission" className="hover:text-blue-300 transition-colors duration-300">Mission</a></li>
              <li><a href="#about" className="hover:text-blue-300 transition-colors duration-300">About</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-300">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30">
                  <User className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <p className="font-medium">Muhammad Asif </p>
                  <p className="text-sm text-gray-400">CEO</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30">
                  <Mail className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <p className="font-medium">maconstructions097@gmail.com</p>
                  <p className="text-sm text-gray-400">Email us anytime</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30">
                  <MapPin className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <p className="font-medium">76-Rose Commercial Ground floor
                                    
</p>
                  <p className="text-sm text-gray-400"> Park View City Multan Road Lahore</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 M.A Constructions. All rights reserved.
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">Cookie Policy</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
