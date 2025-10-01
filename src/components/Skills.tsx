import { Code, Database, Smartphone, Globe, Server, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: 'Web Development',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript','Next.js', 'React','Tailwind CSS'],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['Android', 'Kotlin','Flutter'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Java','Python','Node.js', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'Firebase'],
  },
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Java', 'Python', 'JavaScript', 'Kotlin', 'Dart'],
  },
  {
    title: 'Design & Tools',
    icon: Palette,
    skills: ['VS Code', 'GitHub','Figma','Android Studio'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-primary bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="gradient-card p-6 rounded-lg neon-border glow-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 glow-primary">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
