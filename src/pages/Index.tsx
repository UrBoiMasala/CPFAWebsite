import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, BookOpen, Zap, MapPin, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import InteractiveGlobe from "@/components/InteractiveGlobe";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      <Navigation />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between mb-16 min-h-[60vh]"
          >
            {/* Left side - CPFA Text */}
            <div className="flex-1 text-center lg:text-left lg:pr-12">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4"
                style={{
                  background: "linear-gradient(135deg, #93C5FD 0%, #60A5FA 25%, #3B82F6 50%, #2563EB 75%, #1D4ED8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                CPFA
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-blue-200"
              >
                Cybersecurity Protection for All
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0"
              >
                Protecting communities through education, innovation, and comprehensive cybersecurity solutions.
                Building a safer digital world for everyone, one workshop at a time.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSePXAXg6ainaueAUC49e9X9jjsE5L8AvEM42QLztyzkiK28oA/viewform?usp=sf_link", "_blank")}
                >
                  Join Community
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 shadow-xl" asChild>
                  <Link to="/solutions">Learn More</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right side - 3D Spinning Prism (Hidden on mobile) */}
            <div className="hidden lg:flex flex-1 justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative w-80 h-80"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  animate={{ 
                    rotateX: 360,
                    rotateY: 360,
                    rotateZ: 180
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="relative w-full h-full"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Front face */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl"
                    style={{ 
                      transform: "translateZ(80px)",
                      borderRadius: "20px"
                    }}
                  >
                    <img 
                      src="/lovable-uploads/cc06afdb-d802-43af-be40-7ea3b59f9409.png" 
                      alt="CPFA Logo" 
                      className="w-32 h-32 object-contain filter drop-shadow-2xl"
                    />
                  </div>
                  
                  {/* Back face */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-2xl"
                    style={{ 
                      transform: "translateZ(-80px) rotateY(180deg)",
                      borderRadius: "20px"
                    }}
                  >
                    <img 
                      src="/lovable-uploads/cc06afdb-d802-43af-be40-7ea3b59f9409.png" 
                      alt="CPFA Logo" 
                      className="w-32 h-32 object-contain filter drop-shadow-2xl"
                    />
                  </div>
                  
                  {/* Right face */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-2xl"
                    style={{ 
                      transform: "rotateY(90deg) translateZ(80px)",
                      borderRadius: "20px"
                    }}
                  >
                    <Shield className="w-32 h-32 text-white filter drop-shadow-2xl" />
                  </div>
                  
                  {/* Left face */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl"
                    style={{ 
                      transform: "rotateY(-90deg) translateZ(80px)",
                      borderRadius: "20px"
                    }}
                  >
                    <Zap className="w-32 h-32 text-white filter drop-shadow-2xl" />
                  </div>
                  
                  {/* Top face */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-2xl"
                    style={{ 
                      transform: "rotateX(90deg) translateZ(80px)",
                      borderRadius: "20px"
                    }}
                  >
                    <Users className="w-32 h-32 text-white filter drop-shadow-2xl" />
                  </div>
                  
                  {/* Bottom face */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-2xl"
                    style={{ 
                      transform: "rotateX(-90deg) translateZ(80px)",
                      borderRadius: "20px"
                    }}
                  >
                    <BookOpen className="w-32 h-32 text-white filter drop-shadow-2xl" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Interactive Workshops and Community Support - New Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {/* Interactive Workshops */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="relative h-64 sm:h-80 lg:h-96">
                <img 
                  src="/lovable-uploads/c21a4b72-0cb3-4368-ae57-a348b6b0a5ae.png" 
                  alt="Interactive Workshops" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Interactive Workshops</h3>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Hands-on learning experiences for all ages
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Community Support */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="relative h-64 sm:h-80 lg:h-96">
                <img 
                  src="/lovable-uploads/2e92ae1f-0683-4297-a54b-500721a35666.png" 
                  alt="Community Support" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Community Support</h3>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Building a safer digital future together
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Globe Section */}
          <div className="hidden sm:block">
            <InteractiveGlobe />
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-16"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-white bg-gray-800/30 rounded-2xl p-6 lg:p-8 backdrop-blur-sm border border-gray-700/30"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">50+</div>
              <div className="text-gray-300 text-base lg:text-lg">Community Members</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-white bg-gray-800/30 rounded-2xl p-6 lg:p-8 backdrop-blur-sm border border-gray-700/30"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">3</div>
              <div className="text-gray-300 text-base lg:text-lg">Products Launched</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-white bg-gray-800/30 rounded-2xl p-6 lg:p-8 backdrop-blur-sm border border-gray-700/30"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">100%</div>
              <div className="text-gray-300 text-base lg:text-lg">Commitment to Safety</div>
            </motion.div>
          </motion.div>

          {/* Footer Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-12 mb-16 border border-gray-700/30"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* CPFA Description */}
              <div className="sm:col-span-2 lg:col-span-1">
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
                  className="w-full sm:w-auto text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSePXAXg6ainaueAUC49e9X9jjsE5L8AvEM42QLztyzkiK28oA/viewform?usp=sf_link", "_blank")}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
