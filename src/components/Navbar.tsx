import { useState, useEffect } from "react";
import { Menu, X, Building, Phone, Mail, MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Mission", href: "#mission" },
    { name: "Portfolio", href: "#featured-projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar - Only visible when not scrolled */}
      {!isScrolled && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-2 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-300" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-300" />
                  <span>info@maconstructions.com</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-300" />
                <span>123 Construction Ave, City, State</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "top-0 bg-white/95 backdrop-blur-md shadow-xl border-b border-blue-100 py-3" 
          : "top-8 bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className={`w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                isScrolled ? 'scale-100' : 'scale-110'
              }`}>
                <Building className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
              </div>
              <div className="hidden sm:block">
                <div className={`font-bold text-xl transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  M.A Constructions
                </div>
                <div className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-blue-600' : 'text-blue-200'
                }`}>
                  Building Excellence
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" 
                      : "text-white hover:text-blue-200 hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}>
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? "text-gray-700 hover:bg-blue-50" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mt-4 pb-4 animate-fade-in">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-100">
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-3 border-t border-blue-100">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
