// lib/animations.ts

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  show:   { opacity: 1, y: 0 },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x: 0 },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0 },
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show:   { opacity: 1, scale: 1 },
};

export const zoomOut = {
  hidden: { opacity: 0, scale: 1.15 },
  show:   { opacity: 1, scale: 1 },
};

// ── Transition Presets ──

export const smooth = { duration: 0.6, ease: [0.4, 0, 0.2, 1] };
export const snappy = { duration: 0.4, ease: [0.4, 0, 0.2, 1] };
export const slow   = { duration: 0.9, ease: 'easeOut' };

// ── Stagger Container (للـ lists والـ grids) ──

export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

// ── Helper: delay سريع ──

export const withDelay = (variant: object, delay: number) => ({
  ...variant,
  show: { ...(variant as any).show, transition: { ...smooth, delay } },
});