import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-col">
          <h3 className="footer-brand">&lt;Shubham Saraf /&gt;</h3>
          <p className="footer-text">
            AI & Machine Learning Engineer focused on building intelligent,
            scalable, and reliable systems with real-world impact.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/*<li><a herf="#/projects">Projects</a></li>*/}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* FOCUS AREAS */}
        <div className="footer-col">
          <h4>Focus Areas</h4>
          <ul>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Computer Vision</li>
            <li>End-to-End ML Systems</li>
            <li>Explainable AI</li>
          </ul>
        </div>

        {/* CONNECT */}
        <div className="footer-col">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/shubham-saraf-581815212/" target="_blank">in</a>
            <a href="https://github.com/ShubhamSaraf" target="_blank">gh</a>
            <a href="mailto:shubham.saraf.1302@gmail.com">✉</a>
          </div>
          <p className="footer-text small">
            Pune, Maharashtra<br />
            Open to global opportunities
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Shubham Saraf · Built with React & Vite
        </p>
      </div>
    </footer>
  );
}
