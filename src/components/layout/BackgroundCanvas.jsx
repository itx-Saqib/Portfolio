import { useEffect, useRef } from 'react';

/**
 * BackgroundCanvas — Premium animated background with:
 *  - Animated parallelogram / diagonal line grid (CSS-based, hardware-accelerated)
 *  - Glowing ambient blobs (static transform, no layout-shifting animations)
 *  - Noise texture overlay for depth
 *
 * The entire component is `fixed inset-0`, behind all content, and has
 * `pointer-events-none` so it never blocks interaction.
 *
 * Respects prefers-reduced-motion.
 */
const BackgroundCanvas = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden"
      style={{ backgroundColor: 'var(--color-background-primary, #09090b)' }}
    >
      {/* ── Animated diagonal line-grid (CSS keyframes) ──────────────────── */}
      <div className="bg-lines-grid" />

      {/* ── Static radial glow blobs ──────────────────────────────────────── */}
      {/* These use CSS animations that only change transform (GPU only) */}
      <div className="blob blob-violet" />
      <div className="blob blob-cyan" />
      <div className="blob blob-purple" />

      {/* ── Noise texture ─────────────────────────────────────────────────── */}
      <div className="noise-overlay" />
    </div>
  );
};

export default BackgroundCanvas;
