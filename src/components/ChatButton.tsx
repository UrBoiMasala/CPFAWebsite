
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import ChatBot from './ChatBot';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Reset indicator when navigating to a new page
    setShowIndicator(true);
    
    // Hide the indicator after 20 seconds (8 cycles of 2 seconds each + 4 seconds buffer)
    const timer = setTimeout(() => {
      setShowIndicator(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Reset on route change

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
          aria-label="Open AI Chat"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </motion.div>
      
      {/* Chatbot Indicator */}
      {showIndicator && !isOpen && (
        <motion.div
          key={location.pathname} // Force re-animation on route change
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.0,
            delay: 2.0,
            repeat: 8,
            repeatType: "reverse",
            repeatDelay: 1.0
          }}
          className="fixed bottom-24 right-20 z-40 pointer-events-none"
        >
          <div className="bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium">
            💬 Try our AI chatbot!
            <div className="absolute bottom-0 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-600 transform translate-y-full"></div>
          </div>
        </motion.div>
      )}
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40"
          >
            <ChatBot onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatButton;
