import { useEffect } from "react";

export default function ParticlesBg() {
  useEffect(() => {
    const initializeParticles = () => {
      window.particlesJS?.load(
        "particles-js",
        `${import.meta.env.BASE_URL}particles.json`,
      );
    };

    if (window.particlesJS?.load) {
      initializeParticles();
      return undefined;
    }

    const existingScript = document.querySelector("script[data-particles]");
    const script = existingScript ?? document.createElement("script");

    if (!existingScript) {
      script.src = `${import.meta.env.BASE_URL}particles.min.js`;
      script.async = true;
      script.dataset.particles = "true";
    }

    script.addEventListener("load", initializeParticles, { once: true });
    if (!existingScript) document.body.appendChild(script);

    return () => script.removeEventListener("load", initializeParticles);
  }, []);

  return <div id="particles-js" />;
}
