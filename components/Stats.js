"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "./ui/SectionHeading";

const stats = [
  { value: 175, suffix: "+", label: "Project Done" },
  { value: 97, suffix: "%", label: "Happy Clients" },
  { value: 33, suffix: "+", label: "Global Countries" },
];

function Counter({ value, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1600;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span className="stats__number" ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats section section--light">
      <div className="container">
        <SectionHeading
          eyebrow="Company in Numbers"
          title="Leading the Way in Technological Advancements"
          copy="Placerat pellentesque pretium nullam eu sagittis fusce porttitor. Proin pretium risus finibus per tellus. Si cras pretium pede lectus tristique consectetuer."
        />
        <div className="stats__grid">
          {stats.map((s) => (
            <div className="stats__item" key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <h4>{s.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
