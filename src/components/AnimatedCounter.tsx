import React, { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(el);

          const numericMatch = value.replace(/,/g, "").match(/\d+/);
          if (!numericMatch) {
            setDisplayValue(value);
            return;
          }

          const targetNum = parseInt(numericMatch[0], 10);
          const prefix = value.substring(0, value.indexOf(numericMatch[0]));
          const suffix = value.substring(value.indexOf(numericMatch[0]) + numericMatch[0].length);

          const duration = 1200;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing: easeOutCubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = Math.floor(easeProgress * targetNum);

            const formattedNum = currentNum.toLocaleString();
            setDisplayValue(`${prefix}${formattedNum}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {hasAnimated ? displayValue : "0"}
    </span>
  );
}
