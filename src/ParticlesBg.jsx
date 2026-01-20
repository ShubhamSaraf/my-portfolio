import { useEffect } from "react";

export default function ParticlesBg() {
  useEffect(() => {
    const wait = () => {
      if (window.particlesJS?.load) {
        window.particlesJS.load("particles-js", "/particles.json");
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
