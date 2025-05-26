
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/solutions", label: "Solutions" },
    { path: "/vision", label: "Vision" },
    { path: "/about", label: "About" },
    { path: "/support", label: "Support" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/cc06afdb-d802-43af-be40-7ea3b59f9409.png" 
              alt="CPFA Logo" 
              className="w-10 h-10 rounded-full"
            />
            <span className="text-blue-400 font-bold text-lg">CPFA</span>
          </div>
          
          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                  location.pathname === item.path
                    ? "bg-blue-900/20 text-blue-400"
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 hidden sm:block"
              onClick={() => window.open("https://www.gofundme.com/f/501c3-nonprofit-cpfa-provide-supplies-for-kids", "_blank")}
            >
              Donate Now
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-blue-900/20 text-blue-400"
                      : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                size="sm"
                className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                onClick={() => {
                  window.open("https://www.gofundme.com/f/501c3-nonprofit-cpfa-provide-supplies-for-kids", "_blank");
                  setIsMobileMenuOpen(false);
                }}
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
