import Section from "./Section";
import { Trophy, Award, Users, Mic } from "lucide-react";

export default function Achievements() {
  return (
    <Section id="achievements" className="bg-white/5">
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Achievements */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="text-electric-yellow" /> Achievements
          </h2>
          <div className="space-y-6">
            <AchievementItem 
              title="Smart India Hackathon 2024" 
              desc="Active Participant, contributing to innovative problem solving."
            />
            <AchievementItem 
              title="Certified Cybersecurity Analyst" 
              desc="Completed certification from Forage, demonstrating security awareness."
            />
            <AchievementItem 
              title="DSA Master Course" 
              desc="Completed CodeHelp Supreme 3.0, mastering complex algorithms."
            />
            <AchievementItem 
              title="100+ LeetCode Problems" 
              desc="Consistent problem solver with a focus on optimization."
            />
            <AchievementItem 
              title="Top 10 in Class XII" 
              desc="Academic excellence in higher secondary education."
            />
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            <Users className="text-electric-blue" /> Leadership
          </h2>
          <div className="grid gap-6">
            <LeadershipCard 
              role="Co-Head, Graphics Team"
              org="MALHAR Club"
              stats="Led 6 members • 20+ Posters"
            />
            <LeadershipCard 
              role="Head, Graphics Team"
              org="E-Baja Team"
              stats="Visual Identity • Team Management"
            />
            <LeadershipCard 
              role="Head, Graphics Team"
              org="Aavag Club"
              stats="1000+ Students Reached"
            />
          </div>
        </div>

      </div>
    </Section>
  );
}

function AchievementItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1 min-w-6 h-6 rounded-full border border-electric-yellow/30 flex items-center justify-center">
        <div className="w-2 h-2 bg-electric-yellow rounded-full" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-white/60">{desc}</p>
      </div>
    </div>
  );
}

function LeadershipCard({ role, org, stats }: { role: string; org: string; stats: string }) {
  return (
    <div className="p-6 rounded-xl bg-industrial-black border border-white/10 hover:border-electric-blue/50 transition-colors">
      <h3 className="text-xl font-bold text-white mb-1">{role}</h3>
      <p className="text-electric-blue font-medium mb-3">{org}</p>
      <p className="text-sm text-white/50 font-mono border-t border-white/10 pt-3 mt-auto">
        {stats}
      </p>
    </div>
  );
}
