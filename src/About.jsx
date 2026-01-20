export default function About() {
    return (
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
    )
}