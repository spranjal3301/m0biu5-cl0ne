"use client";

import { type ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

type DirectionVariant = { y?: number; x?: number };

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const directionVariants: Record<string, DirectionVariant> = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
    none: {},
  };

  const initialVariant = directionVariants[direction] || {};

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...initialVariant,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : initialVariant.y || 0,
        x: isInView ? 0 : initialVariant.x || 0,
      }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}
