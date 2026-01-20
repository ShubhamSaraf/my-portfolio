import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

{/*const links = ["Home", "About", "Projects", "Contact"];*/}
const links = ["Home", "About", "Contact"];


export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="nav">
      <div className="nav__inner">
        {/* Left: Logo */}
        <Link className="nav__logo" to="/" aria-label="Logo">
          <img src="/logo.png" alt="Shubham Saraf Logo" />
        </Link>

        {/* Center: Links */}
        <nav className="nav__links" aria-label="Primary">
          {links.map((label) => {
            const to = 
                label === "Home" ? "/" : 
                label === "About" ? "/about" :
                label === "Contact" ? "/contact" : 
                `/#${label.toLowerCase()}`;

            const isActive = active === label;
            return (
              <Link
                key={label}
                to={to}
                className={`nav__link ${isActive ? "is-active" : ""}`}
                onClick={() => setActive(label)}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Theme toggle */}
        <button
          className="nav__themeBtn"
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </div>
    </header>
  );
}
