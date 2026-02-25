import Section from "./Section";
import { ArrowUpRight, ExternalLink, Box, Layout, Sun, Lightbulb } from "lucide-react";
import { ReactNode } from "react";

export default function Projects() {
  return (
    <Section id="projects" className="bg-white/5">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProjectCard
          title="Rubik’s Cube Solver"
          desc="An algorithmic solver using Kociemba's algorithm to find the optimal solution for any scrambled cube state."
          tags={["Python", "Flask", "HTML/CSS", "Kociemba Algo"]}
          icon={<Box size={40} className="text-electric-yellow" />}
          link="https://rubiks-cube-solver-liard.vercel.app/frontend/index.html"
        />
        <ProjectCard
          title="Responsive Registration Page"
          desc="A modern, fully responsive registration interface with real-time validation and accessible form controls."
          tags={["HTML5", "CSS3", "JavaScript", "Validation"]}
          icon={<Layout size={40} className="text-electric-blue" />}
          link="https://registrationfrom-pi.vercel.app/"
        />
        <ProjectCard
          title="Solar Parameter Monitoring"
          desc="IoT system for real-time acquisition of solar panel data using Arduino, DHT11, and LDR sensors."
          tags={["Arduino", "IoT", "Sensors", "C++"]}
          icon={<Sun size={40} className="text-orange-400" />}
          link="https://github.com/Juitabaidya9/Solar-Parameter-Monitoring"
        />
        <ProjectCard
          title="LDR-Based Automatic Lighting System"
          desc="Developed an energy-efficient automatic lighting control system using Arduino Uno and an LDR sensor. The system detects ambient light intensity and automatically switches lighting based on environmental conditions."
          tags={["Arduino Uno", "LDR Sensor", "Embedded Systems", "Control Systems"]}
          icon={<Lightbulb size={40} className="text-yellow-300" />}
          link="https://drive.google.com/file/d/1V9FtDFdiMTXLgAe33sxxxwNTCDemlVw0/view?usp=sharing"
        />
      </div>
    </Section>
  );
}

function ProjectCard({ title, desc, tags, icon, link }: { title: string; desc: string; tags: string[]; icon: ReactNode; link: string }) {
  return (
    <div className="group flex flex-col h-full p-6 rounded-2xl bg-industrial-black border border-white/10 hover:border-electric-yellow/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-electric-yellow/5 hover:-translate-y-1">
      <div className="mb-6 flex justify-between items-start">
        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
          {icon}
        </div>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-white transition-colors"
          aria-label="View Source"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-electric-yellow transition-colors">{title}</h3>
      <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">{desc}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 rounded-full text-white/70 border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
