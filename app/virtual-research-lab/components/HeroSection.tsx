import { motion } from "framer-motion";
import Link from "next/link";
import HeroModel from "./HeroModel";
import ParticleGrid from "./ParticleGrid";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-overlay">
      <ParticleGrid />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px]" style={{ background: 'rgba(0,212,255,0.05)' }} />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'rgba(123,97,255,0.05)' }} />

      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wider font-display">
              <span className="text-foreground">Virtual CAD &</span>
              <br />
              <span className="text-primary neon-glow-blue">Simulation</span>
              <br />
              <span className="text-foreground">Research Lab</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground font-body max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Design. Simulate. Validate. Manufacture.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="btn-neon-solid">Explore Lab</button>
            <Link href="/virtual-research-lab/cad-repository">
              <button className="btn-neon">CAD Repository</button>
            </Link>
            <button className="btn-neon">View Research</button>
          </motion.div>

          <motion.div
            className="flex gap-8 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: "2.4K+", label: "Models" },
              { value: "150+", label: "Papers" },
              { value: "500+", label: "Simulations" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-xl text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="h-[400px] lg:h-[550px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <HeroModel />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, transparent, #00D4FF)' }} />
        <span className="text-xs text-muted-foreground font-heading tracking-widest">SCROLL</span>
      </motion.div>
    </section>
  );
}
