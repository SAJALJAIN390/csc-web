import { motion } from "framer-motion";
import { FileText, Brain, Settings, Microscope, Printer, BarChart3 } from "lucide-react";

const modules = [
  { icon: FileText, title: "Research Papers", description: "Browse our curated library of mechanical engineering, robotics, and AI research.", color: "neon-blue", progress: 87 },
  { icon: Brain, title: "Design Thinking", description: "Case studies and design methodology for innovative product development.", color: "neon-purple", progress: 64 },
  { icon: Settings, title: "CAD Repository", description: "Access parametric models, assemblies, and engineering drawings.", color: "neon-green", progress: 92 },
  { icon: Microscope, title: "Simulation Lab", description: "Run FEA, CFD, and motion simulations with real-time results.", color: "neon-blue", progress: 45 },
  { icon: Printer, title: "3D Print Output", description: "Export print-ready STL files with optimized settings.", color: "neon-purple", progress: 73 },
  { icon: BarChart3, title: "Results & Reports", description: "Analyze simulation data with interactive charts and heatmaps.", color: "neon-green", progress: 58 },
];

const colorMap: Record<string, { text: string; bg: string; shadow: string }> = {
  "neon-blue": { text: "text-neon-blue", bg: "bg-neon-blue/10", shadow: "group-hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]" },
  "neon-purple": { text: "text-neon-purple", bg: "bg-neon-purple/10", shadow: "group-hover:shadow-[0_0_30px_rgba(123,97,255,0.2)]" },
  "neon-green": { text: "text-neon-green", bg: "bg-neon-green/10", shadow: "group-hover:shadow-[0_0_30px_rgba(0,255,163,0.2)]" },
};

export default function LabModules() {
  return (
    <section className="relative py-24 grid-overlay">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="font-heading text-xs tracking-[0.3em] text-neon-purple uppercase mb-3">Core Modules</p>
          <h2 className="section-heading text-foreground">
            Lab <span className="text-primary">Dashboard</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => {
            const colors = colorMap[mod.color];
            return (
              <motion.div
                key={mod.title}
                className={`group glass-panel-hover p-6 cursor-pointer gradient-border ${colors.shadow}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}>
                  <mod.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-2 tracking-wider">{mod.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{mod.description}</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Completion</span>
                    <span className={colors.text}>{mod.progress}%</span>
                  </div>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${mod.color === "neon-blue" ? "bg-neon-blue" : mod.color === "neon-purple" ? "bg-neon-purple" : "bg-neon-green"}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${mod.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
