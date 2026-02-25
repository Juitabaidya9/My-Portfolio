import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Code, Zap, X, ExternalLink } from "lucide-react";
import { ReactNode, useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const openResume = (url: string) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-yellow/10 border border-electric-yellow/20 text-electric-yellow text-xs font-bold tracking-wider uppercase mb-6">
            <Zap size={14} className="fill-electric-yellow" />
            Engineering Intelligence
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white">
            Electrical Engineering Student | Power Systems, Automation & Smart Technologies
          </h1>
          
          <p className="text-lg text-white/60 max-w-xl mb-8 leading-relaxed">
            Final-year Electrical Engineering student at <span className="text-white font-medium">NIT Agartala</span> with hands-on experience in power plants, PLC automation, IoT systems, and full-stack development.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 items-center">
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => openResume("https://drive.google.com/file/d/1dJu0XOZiAJj-3MC9Q6HuB0Ix8Fdhq-gV/preview")}
                className="flex items-center gap-2 px-5 py-3 bg-electric-yellow text-industrial-black font-bold rounded-lg hover:bg-yellow-400 transition-colors cursor-pointer"
              >
                <Download size={20} />
                Resume (Core)
              </button>
              <button 
                onClick={() => openResume("https://drive.google.com/file/d/1D7R5iFoJPHhX3_H-5Ievx8y6Nm9SDO6B/preview")}
                className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
              >
                <Download size={20} />
                Resume (Software)
              </button>
            </div>
            
            <div className="flex gap-3">
              <SocialButton href="https://www.linkedin.com/in/juita-baidya/" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialButton href="https://github.com/Juitabaidya9" icon={<Github size={20} />} label="GitHub" />
              <SocialButton href="https://leetcode.com/u/Juitabaidya/" icon={<Code size={20} />} label="LeetCode" />
            </div>
          </div>

        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 group">
            {/* Placeholder for user image - using a professional abstract tech/engineer placeholder if no real image provided */}
            <img 
              src="https://image2url.com/r2/default/images/1772007364610-42d6609a-1e67-465f-a46f-b9e3ac128548.jpeg" 
              alt="Juita Baidya" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              loading="eager"
              style={{ imageRendering: "auto" }} // Ensure browser uses best quality
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-8 border-t border-white/10 pt-8">
            <StatItem number="100+" label="LeetCode Problems" />
            <StatItem number="3+" label="Industrial Trainings" />
            <StatItem number="4+" label="Technical Projects" />
            <StatItem number="SIH'24" label="Participant" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-electric-yellow/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-electric-blue/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[85vh] bg-industrial-black rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 h-14 bg-white/5 border-b border-white/10 flex items-center justify-between px-6 z-10">
                <h3 className="text-white font-medium">Resume Preview</h3>
                <div className="flex items-center gap-4">
                  <a 
                    href={pdfUrl.replace('/preview', '/view')} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-electric-yellow transition-colors"
                    title="Open in New Tab"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-white/60 hover:text-red-400 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
              <div className="w-full h-full pt-14 bg-white/5">
                <iframe 
                  src={pdfUrl} 
                  className="w-full h-full border-none" 
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-lg border border-white/20 text-white hover:border-electric-yellow hover:text-electric-yellow transition-colors bg-white/5"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white font-display">{number}</h3>
      <p className="text-xs text-white/50 uppercase tracking-wide mt-1">{label}</p>
    </div>
  );
}
