
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Support = () => {
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
            <h1 className="text-5xl font-bold text-emerald-300 mb-6">Support CPFA</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Your contribution helps us create a safer digital world for everyone.
            </p>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open("https://www.gofundme.com/f/501c3-nonprofit-cpfa-provide-supplies-for-kids", "_blank")}
            >
              Donate Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-cyan-300 mb-8 text-center">How Your Support Helps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">📦</span>
                  </div>
                  <CardTitle className="text-2xl text-white">Supplies</CardTitle>
                  <CardDescription className="text-lg text-blue-100">
                    For our cybersecurity workshops, we need supplies such as awards and advertising means like banners to maximize our outreach impact.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🏢</span>
                  </div>
                  <CardTitle className="text-2xl text-white">Venues</CardTitle>
                  <CardDescription className="text-lg text-blue-100">
                    Venues are essential for hosting our cybersecurity workshops, providing the physical space necessary to accommodate participants.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🔒</span>
                  </div>
                  <CardTitle className="text-2xl text-white">VPN Infrastructure</CardTitle>
                  <CardDescription className="text-lg text-blue-100">
                    Funds are vital for our free-distributed VPN to ensure its continued operation and improvement, providing online privacy for all users.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-12 text-center border-white/20"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Other Ways to Help</h2>
            <p className="text-xl text-blue-100 mb-8 opacity-90">
              Beyond financial support, you can help by volunteering, spreading awareness, and participating in our events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSePXAXg6ainaueAUC49e9X9jjsE5L8AvEM42QLztyzkiK28oA/viewform?usp=sf_link", "_blank")}
              >
                Volunteer
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Share Our Mission
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Support;
