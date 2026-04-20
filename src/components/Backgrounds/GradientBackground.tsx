import { type CSSProperties, useId } from "react";

// ─────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────

export interface ColorStop {
  color: string;
  position?: string;
}

export interface LinearConfig {
  type: "linear";
  angle?: number | string;
  stops: ColorStop[];
}

export interface RadialConfig {
  type: "radial";
  shape?: "circle" | "ellipse";
  size?: string;
  stops: ColorStop[];
}

export type GradientConfig = LinearConfig | RadialConfig;

export interface AnimationConfig {
  duration?: number;
  easing?: CSSProperties["animationTimingFunction"];
  mode?: "shift" | "pulse";
}

export interface GradientBackgroundProps {
  gradient: GradientConfig;
  animation?: AnimationConfig;
  fixed?: boolean;
  zIndex?: number;
  className?: string;
}

// ─────────────────────────────────────────────
// Builders
// ─────────────────────────────────────────────

const buildStops = (stops: ColorStop[]) =>
  stops
    .map((s) => (s.position ? `${s.color} ${s.position}` : s.color))
    .join(", ");

const buildGradient = (gradient: GradientConfig): string => {
  if (gradient.type === "linear") {
    const angle = gradient.angle ?? 180;
    const angleStr = typeof angle === "number" ? `${angle}deg` : angle;
    return `linear-gradient(${angleStr}, ${buildStops(gradient.stops)})`;
  }
  const shape = gradient.shape ?? "circle";
  const size = gradient.size ?? "125% 125% at 50% 50%";
  return `radial-gradient(${shape} ${size}, ${buildStops(gradient.stops)})`;
};

// ─────────────────────────────────────────────
// Componente
// ─────────────────────────────────────────────

/**
 * `GradientBackground`
 *
 * Camada de gradiente CSS — linear ou radial.
 * Para mesh gradient use o componente `MeshBackground`.
 *
 * @example
 * <div style={{ position: 'relative', height: '100vh' }}>
 *   <GradientBackground
 *     gradient={{
 *       type: 'radial',
 *       size: '125% 125% at 50% 10%',
 *       stops: [
 *         { color: '#0F0F11', position: '50%' },
 *         { color: '#3ca2fa', position: '100%' },
 *       ],
 *     }}
 *   />
 * </div>
 */
export const GradientBackground = ({
  gradient,
  animation,
  fixed = false,
  zIndex = 0,
  className,
}: GradientBackgroundProps) => {
  const uid = useId().replace(/:/g, "");
  const bg = buildGradient(gradient);

  const duration = animation?.duration ?? 8;
  const easing = animation?.easing ?? "ease-in-out";
  const mode = animation?.mode ?? "shift";

  const css = `
    .gb-${uid} {
      position: ${fixed ? "fixed" : "absolute"};
      inset: 0;
      pointer-events: none;
      z-index: ${zIndex};
      background: ${bg};
      ${animation && mode === "shift" ? `background-size: 200% 200%; animation: gb-shift-${uid} ${duration}s ${easing} infinite;` : ""}
      ${animation && mode === "pulse" ? `animation: gb-pulse-${uid} ${duration}s ${easing} infinite;` : ""}
    }
    ${
      animation && mode === "shift"
        ? `
      @keyframes gb-shift-${uid} {
        0%   { background-position: 0% 50%; }
        50%  { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }`
        : ""
    }
    ${
      animation && mode === "pulse"
        ? `
      @keyframes gb-pulse-${uid} {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0.7; }
      }`
        : ""
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div
        aria-hidden="true"
        className={`gb-${uid}${className ? ` ${className}` : ""}`}
      />
    </>
  );
};

export default GradientBackground;
