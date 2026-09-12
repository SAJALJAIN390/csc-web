import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const stressData = Array.from({ length: 20 }, (_, i) => ({
  strain: (i * 0.5).toFixed(1),
  stress: Math.min(i * 12 + Math.random() * 10, 200 + Math.random() * 20),
}));

const tempData = Array.from({ length: 15 }, (_, i) => ({
  time: `${i * 2}s`,
  temp: 25 + i * 8 + Math.sin(i) * 5,
  threshold: 150,
}));

export default function SimulationResults() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-heading text-xs tracking-[0.3em] text-neon-green uppercase mb-3">Analysis</p>
          <h2 className="section-heading text-foreground">
            Simulation <span className="text-primary">Results</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div className="glass-panel p-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-sm tracking-wider text-foreground">Stress vs Strain</h3>
              <span className="text-xs text-neon-blue font-heading tracking-wider">FEA Results</span>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={stressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,212,255,0.1)" />
                <XAxis dataKey="strain" stroke="#64748b" tick={{ fontSize: 10 }} />
                <YAxis stroke="#64748b" tick={{ fontSize: 10 }} />
                <Tooltip contentStyle={{ backgroundColor: "rgba(6,13,26,0.95)", border: "1px solid rgba(0,212,255,0.2)", borderRadius: "8px", fontSize: 12, color: '#e2e8f0' }} />
                <Line type="monotone" dataKey="stress" stroke="#00D4FF" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div className="glass-panel p-6" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-sm tracking-wider text-foreground">Temperature Distribution</h3>
              <span className="text-xs text-neon-purple font-heading tracking-wider">CFD Results</span>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={tempData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,212,255,0.1)" />
                <XAxis dataKey="time" stroke="#64748b" tick={{ fontSize: 10 }} />
                <YAxis stroke="#64748b" tick={{ fontSize: 10 }} />
                <Tooltip contentStyle={{ backgroundColor: "rgba(6,13,26,0.95)", border: "1px solid rgba(123,97,255,0.2)", borderRadius: "8px", fontSize: 12, color: '#e2e8f0' }} />
                <Area type="monotone" dataKey="temp" stroke="#7B61FF" fill="#7B61FF" fillOpacity={0.15} strokeWidth={2} />
                <Line type="monotone" dataKey="threshold" stroke="#ff4444" strokeDasharray="5 5" strokeWidth={1} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div className="glass-panel p-6 lg:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-sm tracking-wider text-foreground">Stress Heatmap Legend</h3>
              <button className="btn-neon text-xs py-2 px-4">▶ Play Animation</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">0 MPa</span>
              <div className="flex-1 h-4 rounded-full" style={{ background: "linear-gradient(90deg, #00FFA3, #00D4FF, #7B61FF, #ff4444)" }} />
              <span className="text-xs text-muted-foreground">250 MPa</span>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {[
                { label: "Max Stress", value: "247.3 MPa", color: "text-destructive" },
                { label: "Min Stress", value: "0.12 MPa", color: "text-neon-green" },
                { label: "Safety Factor", value: "1.82", color: "text-neon-blue" },
                { label: "Deformation", value: "0.034 mm", color: "text-neon-purple" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className={`font-heading text-lg ${item.color}`}>{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
