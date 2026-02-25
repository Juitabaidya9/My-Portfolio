import Section from "./Section";
import { Mail, MapPin, Phone, Linkedin, Github, Code, Send } from "lucide-react";
import { ReactNode } from "react";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-white/60 mb-12 leading-relaxed">
            I am currently looking for opportunities in core electrical engineering, automation, or software development roles. If you have an exciting project or position, I'd love to hear from you.
          </p>
          
          <div className="space-y-6">
            <ContactItem icon={<Mail />} label="Email" value="juitabaidya@gmail.com" href="mailto:juitabaidya@gmail.com" />
            <ContactItem icon={<Phone />} label="Phone" value="8798662498" href="tel:8798662498" />
            <ContactItem icon={<MapPin />} label="Location" value="Santir Bazar, Tripura" />
          </div>

          <div className="flex gap-4 mt-12">
            <SocialIcon href="https://www.linkedin.com/in/juita-baidya/" icon={<Linkedin />} />
            <SocialIcon href="https://github.com/Juitabaidya9" icon={<Github />} />
            <SocialIcon href="https://leetcode.com/u/Juitabaidya/" icon={<Code />} />
          </div>
        </div>

        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <form className="space-y-6" action="https://formspree.io/f/xqedwwzv" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className="w-full bg-industrial-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-yellow transition-colors"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="w-full bg-industrial-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-yellow transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={4}
                className="w-full bg-industrial-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-yellow transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-electric-yellow text-industrial-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>

      </div>
    </Section>
  );
}

function ContactItem({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-electric-yellow">
        {icon}
      </div>
      <div>
        <p className="text-xs text-white/40 uppercase tracking-wider">{label}</p>
        {href ? (
          <a href={href} className="text-lg font-medium text-white hover:text-electric-yellow transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-lg font-medium text-white">{value}</p>
        )}
      </div>
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 hover:border-electric-yellow transition-all"
    >
      {icon}
    </a>
  );
}
