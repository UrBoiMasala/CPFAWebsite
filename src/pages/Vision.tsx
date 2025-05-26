
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Vision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 dark:from-gray-900 dark:via-blue-900 dark:to-gray-800">
      <Navigation />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl font-bold text-emerald-300 mb-8 tracking-tight">Our Vision</h1>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl max-w-5xl mx-auto border border-white/20">
              <p className="text-xl text-blue-50 leading-relaxed font-light">
                CPFA aspires to expand across the entire Bay Area after successfully protecting Dublin. 
                This will include expanding our message across Alameda County to ensure more people are safer online.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-5xl font-bold text-cyan-300 mb-10 text-center tracking-tight">Our Story</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl max-w-5xl mx-auto border border-white/20">
              <p className="text-lg text-blue-50 leading-relaxed font-light">
                CPFA started in the summer of 2023 when Founder Vivaan Warrier and Co-founders Shanay Gaitonde 
                and Siddharth Alluri decided to start a non profit organization to educate young children and seniors 
                about the risks associated in the increasingly digital world. CPFA wants to expand its message to help 
                as many people as possible stay safe in the dangerous digital world.
              </p>
            </div>
          </motion.div>

          <div className="mb-16">
            <h2 className="text-5xl font-bold text-violet-300 mb-12 text-center tracking-tight">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <span className="text-white text-4xl">🛡️</span>
                </div>
                <h3 className="text-3xl font-bold text-cyan-200 mb-6">Protection</h3>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <p className="text-blue-100 leading-relaxed">
                    Ensuring digital safety for all members of our community through comprehensive education and awareness programs.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <span className="text-white text-4xl">📚</span>
                </div>
                <h3 className="text-3xl font-bold text-emerald-200 mb-6">Education</h3>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <p className="text-blue-100 leading-relaxed">
                    Empowering through knowledge and practical skills that help individuals navigate the digital world safely.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <span className="text-white text-4xl">🤝</span>
                </div>
                <h3 className="text-3xl font-bold text-purple-200 mb-6">Community</h3>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <p className="text-blue-100 leading-relaxed">
                    Building a network of cybersecurity advocates working together to create a safer digital environment.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Vision;
