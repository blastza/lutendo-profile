import { useEffect, useState } from "react";
import { P, codeSnippet } from "./data.js";

const NAV = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
];

function Highlight({ line }) {
  const parts = line.split(/(@\w+|"[^"]*"|\b(?:class|return|new)\b)/);
  return (
    <div>
      {parts.map((p, i) =>
        /^@/.test(p) ? <span className="n" key={i}>{p}</span>
        : /^"/.test(p) ? <span className="s" key={i}>{p}</span>
        : /^(class|return|new)$/.test(p) ? <span className="k" key={i}>{p}</span>
        : p
      )}
    </div>
  );
}

function ThemeToggle() {
  const [mode, setMode] = useState("auto");
  useEffect(() => {
    const root = document.documentElement;
    if (mode === "auto") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", mode);
  }, [mode]);
  const next = { auto: "dark", dark: "light", light: "auto" }[mode];
  return (
    <button className="tbtn" onClick={() => setMode(next)} aria-label="Change colour theme">
      Theme: {mode}
    </button>
  );
}

const Chips = ({ items }) => (
  <div className="chips">{items.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
);
const Points = ({ items }) => (
  <ul className="pts">{items.map((t) => <li key={t}>{t}</li>)}</ul>
);
const Dim = ({ children }) => <p style={{ margin: 0, color: "var(--dim)" }}>{children}</p>;

export default function App() {
  return (
    <>
      <div className="glow" />
      <header className="top">
        <div className="wrap">
          <a className="logo" href="#top">LD</a>
          <nav className="links" aria-label="Sections">
            {NAV.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="wrap" id="top">
        <div className="hero">
          <div className="in">
            <img className="photo" src="/profile.jpg" alt="Portrait of Lutendo Damuleli" width="112" height="112" />
            <div className="pill"><span className="dot" />Available immediately · Johannesburg</div>
            <h1>{P.name}</h1>
            <p className="lead">{P.role}. {P.lead}</p>
            <div className="btns">
              <a className="btn main" href={`mailto:${P.email}`}>Get in touch</a>
              <a className="btn" href={P.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="btn" href={P.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="btn" href={P.cv} target="_blank" rel="noopener noreferrer">View CV</a>
            </div>
          </div>
          <div className="code in d" aria-hidden="true">
            <div className="bar"><i /><i /><i /><span>EngineerController.java</span></div>
            <pre>{codeSnippet.map((l, i) => <Highlight line={l} key={i} />)}</pre>
          </div>
        </div>

        <section id="about">
          <h2>About</h2>
          <p className="about">{P.about}</p>
          <div className="stats">
            {P.stats.map(([n, l]) => (
              <div className="card stat" key={l}><b>{n}</b><span>{l}</span></div>
            ))}
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="grid">
            {P.skills.map(([title, items]) => (
              <div className="card" key={title}><h3>{title}</h3><Chips items={items} /></div>
            ))}
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <ol className="tl">
            <li>
              <h3>{P.job.title}</h3>
              <p className="when">{P.job.when}</p>
              <Points items={P.job.pts} />
            </li>
          </ol>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="card feat">
            <div>
              <h3>{P.proj.name}</h3>
              <p className="when">{P.proj.sub}</p>
              <Points items={P.proj.pts} />
              <div className="btns" style={{ marginTop: 22 }}>
                <a className="btn main" href={P.repo} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 17 }}>Built with</h3>
              <Chips items={P.proj.tags} />
            </div>
          </div>
        </section>

        <section id="education">
          <h2>Education and community</h2>
          <div className="two">
            {P.education.map((e) => (
              <div className="card" key={e.title + e.when}>
                <h3>{e.title}</h3>
                <p className="when">{e.when}</p>
                <Dim>{e.text}</Dim>
              </div>
            ))}
            <div className="card">
              <h3>{P.tutor.title}</h3>
              <p className="when">{P.tutor.when}</p>
              <Dim>{P.tutor.text}</Dim>
            </div>
          </div>
        </section>

        <section>
          <div className="cta">
            <h2>Let’s work together</h2>
            <p>I’m open to on-site, hybrid and remote roles in Johannesburg and beyond. Send me a message and I’ll get back to you.</p>
            <div className="btns">
              <a className="btn" href={`mailto:${P.email}`}>Email me</a>
              <a className="btn" href={P.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp me</a>
            </div>
          </div>
        </section>
      </main>

      <footer>© 2026 {P.name} · Johannesburg, South Africa</footer>
    </>
  );
}
