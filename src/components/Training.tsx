import Section from "./Section";
import { Factory, Activity, Zap } from "lucide-react";
import { ReactNode } from "react";

export default function Training() {
  return (
    <Section id="training">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industrial Exposure</h2>
          <p className="text-white/60 max-w-xl">
            Hands-on experience in critical infrastructure and heavy industry automation.
          </p>
        </div>
        <div className="hidden md:block h-px bg-white/20 flex-grow ml-8 mb-2"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <TrainingCard
          company="ONGC Tripura Power Company Ltd"
          role="Industrial Trainee"
          icon={<Zap size={32} />}
          points={[
            "Combined Cycle Power Plant Operations",
            "Grid Synchronization & Load Dispatch",
            "SCADA Monitoring Systems",
            "Transformers & Protection Systems"
          ]}
          color="border-electric-yellow"
        />
        <TrainingCard
          company="RINL – Vizag Steel Plant"
          role="Automation Trainee"
          icon={<Factory size={32} />}
          points={[
            "PLC Automation & Control Logic",
            "Ladder Logic Programming",
            "EOT Crane Control Systems",
            "Industrial Safety Protocols"
          ]}
          color="border-electric-blue"
        />
      </div>
    </Section>
  );
}

function TrainingCard({ company, role, points, icon, color }: { company: string; role: string; points: string[]; icon: ReactNode; color: string }) {
  return (
    <div className={`group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden`}>
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${color === 'border-electric-yellow' ? 'electric-yellow' : 'electric-blue'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
      
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-electric-yellow transition-colors">{company}</h3>
          <p className="text-white/50 font-medium mt-1">{role}</p>
        </div>
        <div className={`p-3 rounded-lg bg-white/5 ${color === 'border-electric-yellow' ? 'text-electric-yellow' : 'text-electric-blue'}`}>
          {icon}
        </div>
      </div>

      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-white/70">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${color === 'border-electric-yellow' ? 'bg-electric-yellow' : 'bg-electric-blue'}`} />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
