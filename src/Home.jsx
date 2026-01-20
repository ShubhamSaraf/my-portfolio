import { useEffect, useState } from "react";

function TypingText({ words, speed = 100, pause = 2000 }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    // pause when fully typed
    if (!isDeleting && text === current) {
      const id = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(id);
    }

    // move to next word after fully deleted
    if (isDeleting && text === "") {
      const id = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 250);
      return () => clearTimeout(id);
    }

    const id = setTimeout(() => {
      setText((prev) => {
        if (!isDeleting) return current.slice(0, prev.length + 1);
        return current.slice(0, prev.length - 1);
      });
    }, isDeleting ? Math.max(30, speed / 2) : speed);

    return () => clearTimeout(id);
  }, [text, isDeleting, wordIndex, words, speed, pause]);


  return (
    <span className="typing">
      {text}
      <span className="cursor" aria-hidden="true" />
    </span>
  );
}

export default function App() {
  return (
      <>
        {/* HOME SECTION */}
        <section id="home" className="hero">
          <div className="hero-left">
            <h1 className="hero-title">
              Hi, I’m <span>Shubham Saraf</span>
            </h1>

            <h2 className="hero-subtitle">
                AI/ML Engineer{" "}
                <TypingText words={[
                  "TensorFlow", 
                  "PyTorch", 
                  "Deep Learning", 
                  "OpenCV", "Python", 
                  "Docker", 
                  "End-to-End ML Systems", 
                  "Model Deployment", 
                  "Java", 
                  "Javascript"]} pause={2000} />
            </h2>

            <p className="hero-desc">
              Hi, I’m a Full Stack Developer, passionate about creating sleek,
              modern web applications using React, Tailwind, and the power of
              Java on the backend.
            </p>

            <div className="hero-actions">
              {/*<a href="#projects" className="btn primary">View Projects</a>*/}
              <a href="#/contact" className="btn secondary">Contact Me</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="avatar-glow breathe">
              <img src="/profile.jpg" alt="Profile" />
              {/* replace vite.svg with your photo later */}
            </div>
          </div>
        </section>
        {/* ABOUT SECTION */}
        <section id="about" className="about">
          <h2 className="section-title">About Me</h2>

          <div className="about-card">
            <p className="about-text">
              I’m <b>Shubham Saraf</b>, a passionate <span className="hl">AI & ML Engineer</span> with a strong interest 
              in computer vision and deep learning. I enjoy building intelligent systems that can learn from complex 
              visual and numerical data and translate research ideas into practical, real-world applications.
            </p>

            <p className="about-text">
              I hold a <b>Master’s degree in Computer Science</b> and have experience working on research-driven machine learning 
              projects, including deep learning models built on large-scale datasets and satellite imagery. My work 
              emphasizes robust model design, interpretability, and performance, and I’m especially drawn to problems 
              where AI can make systems more efficient and reliable.
            </p>

            <p className="about-text">
              Beyond research, I enjoy exploring diverse areas of AI through hands-on projects and value clean design, 
              thoughtful engineering, and end-to-end system thinking. I’m motivated by curiosity, continuous learning, and 
              collaboration in building meaningful technology.
            </p>

            <ul className="about-list">
              <li>Machine Learning & Deep Learning</li>
              <li>Computer Vision & image-based modeling</li>
              <li>End-to-end ML pipelines (training → evaluation → deployment)</li>
              <li>Model optimization, performance, and reliability</li>
              <li>Performance-focused ML solutions</li>
            </ul>
          </div>
        </section>
    </>
  );
}
