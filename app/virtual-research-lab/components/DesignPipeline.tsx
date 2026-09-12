import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, PenTool, Activity, Zap, Wrench, Printer } from "lucide-react";

const stages = [
  { icon: Lightbulb, title: "Idea / Research", status: "Completed", color: "#00FFA3", files: ["requirements.pdf", "market_analysis.xlsx"], preview: "Initial research and concept validation phase complete." },
  { icon: PenTool, title: "CAD Design", status: "Completed", color: "#00D4FF", files: ["assembly_v3.step", "housing.sldprt"], preview: "3D modeling and detailed engineering drawings finalized." },
  { icon: Activity, title: "Simulation", status: "In Progress", color: "#7B61FF", files: ["fea_report.pdf", "cfd_mesh.dat"], preview: "Running FEA and CFD simulations for structural validation." },
  { icon: Zap, title: "Optimization", status: "Pending", color: "#00D4FF", files: ["topology_opt.stl"], preview: "Topology optimization and weight reduction pending." },
  { icon: Wrench, title: "Prototyping", status: "Pending", color: "#00FFA3", files: [], preview: "Physical prototype fabrication and testing." },
  { icon: Printer, title: "3D Printing", status: "Pending", color: "#7B61FF", files: [], preview: "Final production-ready 3D print output." },
];

export default function DesignPipeline() {
  const [activeStage, setActiveStage] = useState(2);

  return (
    <section className="relative py-24 grid-overlay">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-heading text-xs tracking-[0.3em] text-neon-green uppercase mb-3">Workflow</p>
          <h2 className="section-heading text-foreground">
            Design <span className="text-primary">Pipeline</span>
          </h2>
        </motion.div>

        {/* Pipeline nodes */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {stages.map((stage, i) => (
            <div key={stage.title} className="flex items-center">
              <motion.div
                className="pipeline-node flex flex-col items-center gap-2 p-4 rounded-xl cursor-pointer"
                onClick={() => setActiveStage(i)}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: activeStage === i ? 'rgba(10,22,40,0.8)' : 'transparent',
                  border: activeStage === i ? `1px solid ${stage.color}40` : '1px solid transparent',
                  boxShadow: activeStage === i ? `0 0 20px ${stage.color}20` : 'none',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: `${stage.color}15`,
                    border: `1px solid ${stage.color}40`,
                  }}
                >
                  <stage.icon className="w-5 h-5" style={{ color: stage.color }} />
                </div>
                <span className="text-xs font-heading tracking-wider text-muted-foreground whitespace-nowrap">{stage.title}</span>
                <span
                  className="text-[10px] font-heading tracking-wider px-2 py-0.5 rounded-full"
                  style={{
                    color: stage.status === "Completed" ? "#00FFA3" : stage.status === "In Progress" ? "#00D4FF" : "#64748b",
                    background: stage.status === "Completed" ? "rgba(0,255,163,0.1)" : stage.status === "In Progress" ? "rgba(0,212,255,0.1)" : "rgba(100,116,139,0.1)",
                  }}
                >
                  {stage.status}
                </span>
              </motion.div>
              {i < stages.length - 1 && <div className="pipeline-connector hidden md:block" />}
            </div>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            className="glass-panel p-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-heading text-lg tracking-wider text-foreground mb-3">{stages[activeStage].title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{stages[activeStage].preview}</p>
            {stages[activeStage].files.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-heading text-muted-foreground tracking-wider">FILES</p>
                {stages[activeStage].files.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-neon-blue">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                    {f}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
