import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Java Course - Mastering the Fundamentals',
    issuer: 'Scaler',
    date: 'Sep 2025',
    description: 'Master the fundamentals of Java and gain the skills needed for advanced Java development.',
    link: '#',
  },
  {
    title: 'Google Android Basics with Compose',
    issuer: 'Google Android Developers with Eduskill Org',
    date: 'Aug 2025',
    description: 'Certification in covers the basics of building apps with Jetpack Compose, the recommended toolkit for building user interfaces on Android.',
    link: 'https://drive.google.com/file/d/1ccwFyaT8IjO_JyYmoDWRs5-mobYJE5NM/view?usp=drive_link',
  },
  {
    title: 'Intro to Machine Learning',
    issuer: 'Kaggle',
    date: 'Jul 2025',
    description: 'Learn the core ideas in machine learning, and building models.',
    link: 'https://drive.google.com/file/d/1jmxhl3trLPWeOegtatUQ2BWIoGRmuRAh/view?usp=drive_link',
  },

];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-primary bg-clip-text text-transparent">
          Certifications
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Professional certifications and achievements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="gradient-card p-6 rounded-lg neon-border glow-hover animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 glow-primary flex-shrink-0">
                  <Award className="text-primary" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {cert.description}
                  </p>
                  
                  <a
                    href={cert.link}
                    target='_blank'
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View Certificate
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
