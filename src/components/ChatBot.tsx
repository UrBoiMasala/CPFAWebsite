
import React, { useState, useRef, useEffect } from 'react';
import { Send, HelpCircle, Save, Trash2, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface ChatMessage {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: 'bot',
      content: 'Welcome to CPFA AI-Chatbot! I\'m here to help with cybersecurity questions and analysis. Type "help_menu" to see available commands.',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (type: 'user' | 'bot', content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now(),
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleCommand = async (command: string) => {
    const commandLower = command.trim().toLowerCase();
    
    if (commandLower === 'clear_screen') {
      setMessages([{
        id: Date.now(),
        type: 'bot',
        content: 'Chat cleared. How can I help you?',
        timestamp: new Date()
      }]);
      return;
    }
    
    if (commandLower === 'help_menu') {
      const helpText = `**CPFA AI-Chatbot - Available Commands:**

1. **clear_screen**: Clears the chat window
2. **save_chat**: Saves chat history 
3. **help_menu**: Shows this help menu
4. **contact_dev**: Shows CPFA contact information
5. **vuln_analysis**: Analyze security vulnerabilities
6. **static_code_analysis**: Analyze code for security issues

You can also ask me general cybersecurity questions!`;
      addMessage('bot', helpText);
      return;
    }
    
    if (commandLower === 'save_chat') {
      const chatData = JSON.stringify(messages, null, 2);
      const blob = new Blob([chatData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'cpfa_chat_history.json';
      a.click();
      URL.revokeObjectURL(url);
      addMessage('bot', 'Chat history saved successfully!');
      toast({
        title: "Chat Saved",
        description: "Your chat history has been downloaded.",
      });
      return;
    }
    
    if (commandLower === 'contact_dev') {
      const contactInfo = `**Contact CPFA Team:**

📧 **Email**: cpfa.contact@gmail.com
🌐 **Website**: https://mycpfa.org
📱 **Instagram**: @cpfa.official

We're here to help with all your cybersecurity needs!`;
      addMessage('bot', contactInfo);
      return;
    }
    
    if (commandLower.startsWith('vuln_analysis')) {
      addMessage('bot', `**Vulnerability Analysis**

To perform a comprehensive vulnerability analysis, I would need:

1. **Scan Type**: (e.g., network scan, web app scan, system scan)
2. **Target Information**: IP ranges, domains, or systems
3. **Scan Data**: Upload scan results or logs

**Common Vulnerability Categories:**
- Network vulnerabilities
- Web application security flaws
- System misconfigurations
- Outdated software/patches
- Weak authentication mechanisms

Would you like guidance on any specific vulnerability type?`);
      return;
    }
    
    if (commandLower.startsWith('static_code_analysis')) {
      addMessage('bot', `**Static Code Analysis**

For effective static code analysis, please provide:

1. **Programming Language**: (Python, JavaScript, Java, C++, etc.)
2. **Code Snippet**: The code you want analyzed
3. **Specific Concerns**: What security issues to focus on

**Common Security Issues I Look For:**
- SQL Injection vulnerabilities
- Cross-Site Scripting (XSS)
- Buffer overflows
- Insecure cryptographic practices
- Hard-coded credentials
- Input validation issues

Share your code and I'll help identify potential security risks!`);
      return;
    }
    
    // Handle general cybersecurity queries
    await simulateAIResponse(command);
  };

  const simulateAIResponse = async (query: string) => {
    setIsLoading(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let response = '';
    
    if (query.toLowerCase().includes('password')) {
      response = `**Password Security Best Practices:**

🔐 **Strong Password Guidelines:**
- Use at least 12 characters
- Include uppercase, lowercase, numbers, and symbols
- Avoid personal information
- Use unique passwords for each account

🛡️ **Additional Security:**
- Enable two-factor authentication (2FA)
- Use a password manager
- Regularly update passwords
- Monitor for data breaches

Would you like specific guidance on any of these topics?`;
    } else if (query.toLowerCase().includes('phishing')) {
      response = `**Phishing Protection Guide:**

🎣 **How to Identify Phishing:**
- Check sender email addresses carefully
- Look for urgent or threatening language
- Verify URLs before clicking
- Be suspicious of unexpected attachments

🛡️ **Protection Strategies:**
- Never provide sensitive info via email
- Use email filters and security software
- Report suspicious emails
- Educate your team regularly

Stay vigilant and trust your instincts!`;
    } else if (query.toLowerCase().includes('malware')) {
      response = `**Malware Protection & Response:**

🦠 **Common Malware Types:**
- Viruses and worms
- Trojans and ransomware
- Spyware and adware
- Rootkits and botnets

🛡️ **Prevention Measures:**
- Keep software updated
- Use reputable antivirus
- Avoid suspicious downloads
- Regular system backups
- Network segmentation

Need help with a specific malware incident?`;
    } else {
      response = `**Cybersecurity Analysis:**

I've analyzed your query about "${query}". Here are some key security considerations:

🔍 **Security Assessment:**
- Risk evaluation needed
- Implement defense-in-depth strategy
- Regular security audits recommended
- User awareness training important

💡 **Recommendations:**
- Follow industry best practices
- Keep systems updated
- Monitor for threats continuously
- Have an incident response plan

Would you like me to elaborate on any specific aspect?`;
    }
    
    setIsLoading(false);
    addMessage('bot', response);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue.trim();
    addMessage('user', userMessage);
    setInputValue('');
    
    await handleCommand(userMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className="w-80 sm:w-84 h-[420px] sm:h-[450px] bg-gray-900 border-gray-700 shadow-2xl">
      <CardHeader className="bg-blue-600 text-white rounded-t-lg relative pr-12">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors"
        >
          ✕
        </button>
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
          <img 
            src="/uploads/cc06afdb-d802-43af-be40-7ea3b59f9409.png" 
            alt="CPFA Logo" 
            className="w-5 h-5 rounded"
          />
          CPFA AI-Chatbot
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0 h-full flex flex-col">
        <ScrollArea className="flex-1 p-3 sm:p-4">
          <div className="space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-2 sm:p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-100'
                  }`}
                >
                  <div className="text-xs sm:text-sm whitespace-pre-wrap">{message.content}</div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-gray-100 p-2 sm:p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-400 border-t-transparent rounded-full"></div>
                    <span className="text-xs sm:text-sm">Analyzing...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        
        <div className="p-3 sm:p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex gap-1 sm:gap-2 mb-2 flex-wrap">
            <Badge variant="outline" className="text-xs border-blue-400 text-blue-400">
              <HelpCircle size={10} className="mr-1" />
              help_menu
            </Badge>
            <Badge variant="outline" className="text-xs border-green-400 text-green-400">
              <FileText size={10} className="mr-1" />
              vuln_analysis
            </Badge>
            <Badge variant="outline" className="text-xs border-purple-400 text-purple-400">
              <Save size={10} className="mr-1" />
              save_chat
            </Badge>
          </div>
          
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about cybersecurity..."
              className="flex-1 p-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-400 focus:outline-none text-xs sm:text-sm"
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 px-2 sm:px-3"
            >
              <Send size={14} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatBot;
