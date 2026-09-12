import React from 'react';
import { motion, type Variants } from 'framer-motion';

const viewportOnce = { once: true, amount: 0.2 as const };

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const heroContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function FadeInUp({ children, className, style }: WrapperProps) {
  return (
    <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, style }: WrapperProps) {
  return (
    <motion.div variants={scaleInVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function SlideInLeft({ children, className, style }: WrapperProps) {
  return (
    <motion.div variants={slideLeftVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function SlideInRight({ children, className, style }: WrapperProps) {
  return (
    <motion.div variants={slideRightVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className, style }: WrapperProps) {
  return (
    <motion.div variants={staggerContainerVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, style }: WrapperProps) {
  return (
    <motion.div variants={staggerItemVariants} className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function HeroTextReveal({ children, className, style }: WrapperProps) {
  return (
    <motion.div variants={heroContainerVariants} initial="hidden" animate="visible" className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function HeroItem({ children, className, style }: WrapperProps) {
  return (
    <motion.div variants={heroItemVariants} className={className} style={style}>
      {children}
    </motion.div>
  );
}
