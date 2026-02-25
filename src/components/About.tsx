import Section from "./Section";
import { Cpu, Database, Globe, Zap } from "lucide-react";
import { ReactNode } from "react";

export default function About() {
  return (
    <Section id="about" className="bg-white/5">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Engineering Meets <span className="text-electric-yellow">Software</span>
          </h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              I am a final-year Electrical Engineering student at <strong className="text-white">NIT Agartala</strong> with a passion for bridging the gap between hardware control and software intelligence.
            </p>
            <p>
              My journey involves deep exposure to <strong className="text-white">Power Systems, PLC & SCADA</strong> automation, alongside building scalable web applications and IoT solutions. I believe in structured logic—whether it's designing a ladder logic diagram for a crane or writing an optimized algorithm for a Rubik's Cube solver.
            </p>
            <p>
              With a clean coding mindset and a problem-solving approach honed through <strong className="text-white">DSA and LeetCode</strong>, I am ready to tackle challenges in both core electrical and modern tech domains.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SkillCard 
            icon={<Zap className="text-electric-yellow" />} 
            title="Core Electrical" 
            desc="Power Systems, Machines, Protection" 
          />
          <SkillCard 
            icon={<Cpu className="text-electric-blue" />} 
            title="Automation & IoT" 
            desc="PLC, SCADA, Arduino, Sensors" 
          />
          <SkillCard 
            icon={<Globe className="text-green-400" />} 
            title="Web Development" 
            desc="React, Node.js, Flask, MongoDB" 
          />
          <SkillCard 
            icon={<Database className="text-purple-400" />} 
            title="Problem Solving" 
            desc="DSA, C++, Python, LeetCode" 
          />
        </div>
      </div>
    </Section>
  );
}

function SkillCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-electric-yellow/50 transition-colors group">
      <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-white/50">{desc}</p>
    </div>
  );
}
