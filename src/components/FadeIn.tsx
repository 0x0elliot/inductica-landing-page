"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transition: `opacity 500ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
