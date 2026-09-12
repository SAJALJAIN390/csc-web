import { motion } from "framer-motion";
import { Download, Send, Clock, Layers, Box } from "lucide-react";

const prints = [
  { name: "Robotic End Effector v3", format: "STL", size: "12.4 MB", time: "4h 23m", infill: "25%", material: "PLA+" },
  { name: "Flexure Joint Assembly", format: "STL", size: "8.7 MB", time: "2h 45m", infill: "40%", material: "PETG" },
  { name: "Sensor Housing", format: "STL", size: "3.2 MB", time: "1h 10m", infill: "20%", material: "ABS" },
];

export default function PrintReady() {
  return (
    <section className="relative py-24 grid-overlay">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-heading text-xs tracking-[0.3em] text-neon-blue uppercase mb-3">Manufacturing</p>
          <h2 className="section-heading text-foreground">
            3D Print <span className="text-primary">Ready</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {prints.map((item, i) => (
            <motion.div
              key={item.name}
              className="glass-panel p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* STL Preview placeholder */}
              <div className="h-40 rounded-lg mb-4 flex items-center justify-center" style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.1)' }}>
                <Box className="w-16 h-16 text-neon-blue opacity-30" />
              </div>

              <h3 className="font-heading text-sm font-semibold text-foreground mb-3 tracking-wider">{item.name}</h3>

              <div className="space-y-2 mb-4">
                {[
                  { icon: Layers, label: "Format", value: item.format },
                  { icon: Clock, label: "Est. Time", value: item.time },
                  { label: "Infill", value: item.infill },
                  { label: "Material", value: item.material },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className="text-foreground font-heading">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <button className="btn-neon-solid text-[10px] py-2 px-3 flex-1 flex items-center justify-center gap-1"><Download className="w-3 h-3" /> Download STL</button>
                <button className="btn-neon text-[10px] py-2 px-3 flex-1 flex items-center justify-center gap-1"><Send className="w-3 h-3" /> Send to Lab</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
