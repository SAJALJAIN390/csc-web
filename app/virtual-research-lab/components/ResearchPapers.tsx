import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Eye, Search } from "lucide-react";

const papers = [
  { title: "Topology Optimization for Additive Manufacturing", author: "Dr. S. Kumar", domain: "Mechanical", level: "Research", abstract: "A novel approach to topology optimization considering AM constraints..." },
  { title: "Bio-Inspired Soft Robotics Actuators", author: "Prof. L. Chen", domain: "Robotics", level: "Advanced", abstract: "Design and fabrication of pneumatic soft actuators using silicone elastomers..." },
  { title: "Deep Learning for Defect Detection in FDM", author: "R. Patel et al.", domain: "AI", level: "Beginner", abstract: "CNN-based real-time defect detection system for FDM 3D printing processes..." },
  { title: "Crash Impact Dynamics of Composite Structures", author: "Dr. M. Fischer", domain: "Mechanical", level: "Research", abstract: "Finite element analysis of energy absorption in CFRP crash structures..." },
  { title: "Swarm Robotics for Warehouse Automation", author: "K. Tanaka", domain: "Robotics", level: "Advanced", abstract: "Multi-agent path planning algorithms for autonomous warehouse robots..." },
  { title: "Generative Design with Reinforcement Learning", author: "A. Johansson", domain: "AI", level: "Research", abstract: "Using RL agents to explore design spaces for optimal mechanical components..." },
];

const domains = ["All", "Mechanical", "Robotics", "AI"];
const levels = ["All", "Beginner", "Advanced", "Research"];

export default function ResearchPapers() {
  const [domainFilter, setDomainFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");

  const filtered = papers.filter(
    (p) => (domainFilter === "All" || p.domain === domainFilter) && (levelFilter === "All" || p.level === levelFilter)
  );

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-heading text-xs tracking-[0.3em] text-neon-purple uppercase mb-3">Library</p>
          <h2 className="section-heading text-foreground">
            Research <span className="text-primary">Papers</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex gap-2 items-center">
            <span className="text-xs font-heading text-muted-foreground tracking-wider">DOMAIN:</span>
            {domains.map((d) => (
              <button key={d} onClick={() => setDomainFilter(d)} className={`px-3 py-1.5 rounded text-xs font-heading tracking-wider transition-all ${domainFilter === d ? "btn-neon-solid" : "btn-neon"}`}>
                {d}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-xs font-heading text-muted-foreground tracking-wider">LEVEL:</span>
            {levels.map((l) => (
              <button key={l} onClick={() => setLevelFilter(l)} className={`px-3 py-1.5 rounded text-xs font-heading tracking-wider transition-all ${levelFilter === l ? "btn-neon-solid" : "btn-neon"}`}>
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((paper, i) => (
            <motion.div
              key={paper.title}
              className="glass-panel p-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-heading tracking-wider px-2 py-0.5 rounded-full" style={{ color: '#00D4FF', background: 'rgba(0,212,255,0.1)' }}>{paper.domain}</span>
                <span className="text-[10px] font-heading tracking-wider px-2 py-0.5 rounded-full" style={{ color: '#7B61FF', background: 'rgba(123,97,255,0.1)' }}>{paper.level}</span>
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-1 tracking-wider">{paper.title}</h3>
              <p className="text-xs text-neon-purple mb-2">{paper.author}</p>
              <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{paper.abstract}</p>
              <div className="flex gap-2">
                <button className="btn-neon text-[10px] py-1.5 px-3 flex items-center gap-1"><Eye className="w-3 h-3" /> View</button>
                <button className="btn-neon text-[10px] py-1.5 px-3 flex items-center gap-1"><Download className="w-3 h-3" /> Download</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
