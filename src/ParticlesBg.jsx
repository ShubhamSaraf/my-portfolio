import { useEffect } from "react";

export default function ParticlesBg() {
  useEffect(() => {
    const wait = () => {
      if (window.particlesJS?.load) {
        window.particlesJS.load("particles-js", 
            `${import.meta.env.BASE_URL}particles.json`,
          () => {
            const pJS = window.pJSDom?.[0]?.pJS;
            if (pJS) {
              // Force hover detection to use window coordinates
              pJS.interactivity.detect_on = "window";

              // Re-bind event listeners using the new detect_on value
              pJS.fn?.vendors?.eventsListeners?.();
            }
          }
        );
      } else {
        setTimeout(wait, 50);
      }
    };
    wait();
  }, []);

  return (
    <div
      id="particles-js"
    />
  );
}
