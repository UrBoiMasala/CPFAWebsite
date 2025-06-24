
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* CPFA Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/cc06afdb-d802-43af-be40-7ea3b59f9409.png" 
                alt="CPFA Logo" 
                className="w-10 h-10 rounded-full"
              />
              <span className="text-blue-400 font-bold text-2xl">CPFA</span>
            </div>
            <p className="text-gray-300 text-base mb-6 leading-relaxed">
              A 501c3 certified non-profit striving to teach seniors and young students vital cybersecurity lessons.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
              onClick={() => window.open("https://docs.google.com/forms/d/1A3BscXSeie3QRJ1la7zTaznuQGXcqDfhApSpbQtk44Q/prefill", "_blank")}
            >
              Join Our Community
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/solutions" 
                  className="text-gray-300 hover:text-blue-400 text-base transition-colors duration-300 block"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link 
                  to="/vision" 
                  className="text-gray-300 hover:text-blue-400 text-base transition-colors duration-300 block"
                >
                  Vision
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-blue-400 text-base transition-colors duration-300 block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/support" 
                  className="text-gray-300 hover:text-blue-400 text-base transition-colors duration-300 block"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-xl mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300 text-base">Dublin, CA</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300 text-base">cpfa.contact@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-white text-xl mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="lg"
                className="p-3 hover:bg-blue-600 transition-colors duration-300 rounded-full"
                onClick={() => window.open("https://www.instagram.com/cpfa.official/", "_blank")}
              >
                <Instagram className="h-6 w-6 text-gray-300 hover:text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 CPFA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
