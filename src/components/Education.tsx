import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'K.S.R. College of Engineering, Tiruchengode',
    period: '2023 - 2027',
    description: 'Currently pursuing 3rd year.',
    achievement: 'CGPA : 9.4',
  },
  {
    degree: '12th Standard',
    institution: 'Kalaimagal vidhyashram Matric.Hr.Sec School',
    period: '2022 - 2023',
    description: '',
    achievement: 'Percentage: 94.5%',
  },

];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-primary bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Continuous learning and skill development journey
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="gradient-card p-6 rounded-lg neon-border glow-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 glow-primary shrink-0">
                  <GraduationCap className="text-primary" size={28} /> 
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar size={16} />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {edu.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-secondary">
                    <Award size={16} />
                    <span className="text-sm font-medium">{edu.achievement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
