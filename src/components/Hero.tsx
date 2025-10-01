import { useState, useEffect } from 'react';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const roles = ['Full Stack Developer', 'Mobile Developer', 'AI ML Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center animate-fade-in-up">
        {/* <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-40 h-40 rounded-full gradient-primary p-1 animate-glow-pulse">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <div className="text-6xl"><img src="" alt="" /></div>
              </div>
            </div>
          </div>
        </div> */}

        <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
          Never give up things because Greate things take long time!
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-foreground">
          Gowtham S
        </h2>
        
        <div className="h-16 flex items-center justify-center mb-4">
          <p className="text-xl md:text-2xl text-primary font-medium animate-fade-in" key={currentRoleIndex}>
            {roles[currentRoleIndex]}
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Creating seamless digital experiences across web, mobile, and app platforms.
          Passionate about transforming ideas into elegant, user-friendly solutions that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="glow-primary gradient-primary border-0 text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'CV.pdf'; 
                link.download = 'Gowtham_Resume.pdf';  
                link.click();
                }}
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="neon-border neon-border-hover text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
          >
            <Mail className="mr-2" size={20} />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
