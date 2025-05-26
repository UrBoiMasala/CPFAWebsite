
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Shield, Trophy } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 dark:from-gray-900 dark:via-blue-900 dark:to-gray-800">
      <Navigation />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-emerald-300 mb-6">Our Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect and educate our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Workshops */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Workshops</CardTitle>
                  <CardDescription className="text-blue-100">
                    Our workshops provide young children with essential knowledge and skills, protecting them from harmful viruses and scams they may encounter in the future.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-blue-100 space-y-2 mb-6">
                    <li>• Interactive sessions</li>
                    <li>• Hands-on learning</li>
                    <li>• Real-world scenarios</li>
                    <li>• Expert guidance</li>
                  </ul>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSePXAXg6ainaueAUC49e9X9jjsE5L8AvEM42QLztyzkiK28oA/viewform?usp=sf_link", "_blank")}
                  >
                    Join Workshop
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* VPN Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">VPN Service</CardTitle>
                  <CardDescription className="text-blue-100">
                    A fully functional VPN designed by CPFA, launching fall 2024. Providing secure, private internet access at minimal cost.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-blue-100 space-y-2 mb-6">
                    <li>• End-to-end encryption</li>
                    <li>• No-logs policy</li>
                    <li>• High-speed servers</li>
                    <li>• 24/7 support</li>
                  </ul>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSePXAXg6ainaueAUC49e9X9jjsE5L8AvEM42QLztyzkiK28oA/viewform?usp=sf_link", "_blank")}
                  >
                    Join Beta
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Hackathon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Hack-a-thon</CardTitle>
                  <CardDescription className="text-blue-100">
                    Join our upcoming hackathons starting in 2025. Collaborate, innovate, and develop solutions for real-world cybersecurity challenges.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-blue-100 space-y-2 mb-6">
                    <li>• Team competitions</li>
                    <li>• Mentorship</li>
                    <li>• Prizes</li>
                    <li>• Networking</li>
                  </ul>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSePXAXg6ainaueAUC49e9X9jjsE5L8AvEM42QLztyzkiK28oA/viewform?usp=sf_link", "_blank")}
                  >
                    Register Interest
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-12 text-center border-white/20"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Movement</h2>
            <p className="text-xl text-blue-100 mb-8 opacity-90">
              Help us by supporting our monthly workshops and sharing our mission with friends and family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSePXAXg6ainaueAUC49e9X9jjsE5L8AvEM42QLztyzkiK28oA/viewform?usp=sf_link", "_blank")}
              >
                Join Community
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Share Mission
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Solutions;
