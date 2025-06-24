import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";

const About = () => {
  const teamMembers = [
    {
      name: "Shanay Gaitonde",
      title: "Co-Founder / COO",
      image: "/uploads/842c21be-f27b-4859-a98e-d2b00bbec915.png",
      fallback: "SG",
      tags: ["Operations", "Strategy", "Leadership"],
      description: "Shanay leads our operations and strategic initiatives, ensuring CPFA runs efficiently while expanding our reach across the Bay Area."
    },
    {
      name: "Siddharth Alluri",
      title: "Co-Founder / CFO", 
      image: "/uploads/30bc18a4-1150-47c7-96f8-9e07a38c51b0.png",
      fallback: "SA",
      tags: ["Finance", "Planning", "Growth"],
      description: "Siddharth manages our financial operations and growth planning, ensuring sustainable expansion of our cybersecurity programs."
    },
    {
      name: "Vivaan Warrier",
      title: "Founder / CEO",
      image: "/uploads/e508ab0e-00a9-4585-a663-c7c3d5d349ee.png", 
      fallback: "VW",
      tags: ["Vision", "Innovation", "Community"],
      description: "Vivaan founded CPFA with a vision to make cybersecurity accessible to all, leading our mission to protect communities through education."
    },
    {
      name: "Paresh Prabhu Raj",
      title: "Chief Technology Officer",
      image: "/uploads/2468e903-5372-4490-9f95-52c5722e94dd.png",
      fallback: "PP",
      tags: ["CTO", "Technology", "Innovation"],
      description: "Paresh leads our technology initiatives and innovation, driving the technical vision and development of our cybersecurity solutions."
    }
  ];

  const teamSections = [
    {
      title: "Marketing/Management",
      members: [
        { name: "Krishay Kuchimanchi", tags: ["Head of Marketing", "Strategy"] },
        { name: "Abhinav Muddasani", tags: ["Marketing", "Outreach"] },
        { name: "Chet Pothuraju", tags: ["Management", "Operations"] },
        { name: "Pranav Peethani", tags: ["Strategy", "Growth"] },
        { name: "Kinjal Srivastava", tags: ["Communications", "Events"] }
      ]
    },
    {
      title: "Cybersecurity Engineers",
      members: [
        { name: "Arjun Selvakumaran", tags: ["Security", "Research"] },
        { name: "Aditya Shetty", tags: ["Engineering", "Development"], image: "/uploads/0448f290-5f80-49d9-9e5f-c2b5b1a17425.png", imagePosition: "object-top" },
        { name: "Saketh Chakravadhanula", tags: ["Analysis", "Protection"] }
      ]
    },
    {
      title: "Financial Management",
      members: [
        { name: "Raghav Sinha", tags: ["Finance", "Analysis"] },
        { name: "Nithin Aruswamy", tags: ["Operations", "Management"], image: "/uploads/ae3c12ea-3398-47e7-a2b0-0495abbcff14.png" }
      ]
    },
    {
      title: "Web Development",
      members: [
        { name: "Pranav Achar", tags: ["Frontend", "Design"] },
        { name: "Gavin Katz", tags: ["Backend", "Systems"] },
        { name: "Anirudh Muralidharan", tags: ["Fullstack", "Architecture"] }
      ]
    },
    {
      title: "App Developer",
      members: [
        { name: "Sahiel Bose", tags: ["Mobile", "iOS"] },
        { name: "Ashish Bhogasamudram", tags: ["Android", "Cross-platform"] },
        { name: "Akul Patel", tags: ["Development", "UI/UX"] },
        { name: "Aahan Rathod", tags: ["Mobile Development", "Innovation"], image: "/uploads/30462696-e60d-4eda-b820-b1736ce0bb41.png" }
      ]
    },
    {
      title: "AI Engineer",
      members: [
        { name: "Sanjana Salkar", tags: ["AI", "Machine Learning"], image: "/uploads/4e82d30b-2afd-41a4-a747-8446efe061ff.png" },
        { name: "Ronak Hiremath", tags: ["Data Science", "Analytics"] },
        { name: "Varish Doma", tags: ["Deep Learning", "Research"] },
        { name: "Jayden Pham", tags: ["AI Systems", "Innovation"] },
        { name: "Chittresh Mitra", tags: ["Algorithms", "Development"] }
      ]
    },
    {
      title: "CPFA India Branch",
      members: [
        { name: "Tarun Muralidharan", tags: ["India Team Lead", "Operations"] },
        { name: "Akiv Ritesh Shetty", tags: ["India Operations", "Leadership"] },
        { name: "Laya Shankar", tags: ["Community", "Outreach"] },
        { name: "Aryan Lodha", tags: ["Programs", "Education"] },
        { name: "Bhuvan Karthikeyan", tags: ["Technical", "Support"] },
        { name: "Vishal Surendar", tags: ["Development", "Innovation"] }
      ]
    }
  ];

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
            <h1 className="text-5xl font-bold text-white mb-6">About CPFA</h1>
          </motion.div>

          {/* CPFA Leadership Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">CPFA Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((leader, index) => (
                <Dialog key={leader.name}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20">
                      <CardHeader className="text-center">
                        <div className="flex justify-center mb-4">
                          <Avatar className="w-24 h-24 border-4 border-blue-400">
                            <AvatarImage src={leader.image} alt={leader.name} className="object-cover" />
                            <AvatarFallback className="text-xl font-bold bg-blue-600 text-white">
                              {leader.fallback}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <CardTitle className="text-white">{leader.name}</CardTitle>
                        <p className="text-blue-200">{leader.title}</p>
                        <div className="flex flex-wrap gap-2 justify-center mt-4">
                          {leader.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-blue-600 text-white">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{leader.name}</DialogTitle>
                      <DialogDescription>
                        {leader.description}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </motion.div>

          {/* Team Sections */}
          {teamSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + sectionIndex * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">{section.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.members.map((member) => (
                  <Card key={member.name} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-3">
                        {member.image ? (
                          <Avatar className="w-16 h-16 border-2 border-blue-400">
                            <AvatarImage 
                              src={member.image} 
                              alt={member.name} 
                              className={`object-cover ${member.imagePosition || ''}`}
                            />
                            <AvatarFallback className="text-white text-sm font-bold bg-gradient-to-r from-green-500 to-blue-500">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-white text-lg">{member.name}</CardTitle>
                      <div className="flex flex-wrap gap-1 justify-center mt-3">
                        {member.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-blue-300 text-blue-100 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Chatbot Indicator */}
          <motion.div
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
        </div>
      </div>
    </div>
  );
};

export default About;
