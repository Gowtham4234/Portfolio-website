import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { icon: Github, url: 'https://github.com/Gowtham4234', label: 'GitHub' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/gowtham-s-19862528b/', label: 'LinkedIn' },
  { icon: Mail, url: 'mailto:ceitgowtham27@gmail.com', label: 'Email' },
];

const SocialLinks = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex justify-center items-center gap-6 flex-wrap">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="p-4 rounded-full gradient-card neon-border glow-hover animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={social.label}
            >
              <social.icon
                size={30}
                className="text-primary group-hover:text-secondary transition-colors duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
