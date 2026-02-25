import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Arsenal</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <SkillCategory 
          title="Core Electrical" 
          skills={[
            "Electrical Machines",
            "Transformers",
            "Protection Relays",
            "Switchgear",
            "Power Quality"
          ]} 
        />
        
        <SkillCategory 
          title="Automation & Control" 
          skills={[
            "PLC Fundamentals",
            "Ladder Logic",
            "SCADA Systems",
            "Industrial I/O",
            "VFD"
          ]} 
        />
        
        <SkillCategory 
          title="Programming" 
          skills={[
            "C++ (STL)",
            "Python",
            "Data Structures & Algo",
            "Object Oriented Programming"
          ]} 
        />
        
        <SkillCategory 
          title="Web & Tools" 
          skills={[
            "HTML5 / CSS3 / JavaScript",
            "React & Tailwind CSS",
            "Flask / MongoDB / SQL",
            "Git / VS Code"
          ]} 
        />
      </div>
    </Section>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
        <span className="w-2 h-8 bg-electric-yellow rounded-full"></span>
        {title}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-white/80">{skill}</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white/30 group-hover:bg-electric-yellow transition-colors duration-500 rounded-full"
                style={{ width: `${Math.floor(Math.random() * 20) + 80}%` }} // Random width for visual effect between 80-100%
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
