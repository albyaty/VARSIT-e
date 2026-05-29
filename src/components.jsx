// Shared UI components
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext.jsx";

// ===== Icons =====
export const Icon = {
  search: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>,
  play: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M6 4l14 8-14 8z"/></svg>,
  arrow: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  arrowLeft: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
  filter: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 6h18M7 12h10M10 18h4"/></svg>,
  close: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M18 6 6 18M6 6l12 12"/></svg>,
  check: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="20 6 9 17 4 12"/></svg>,
  upload: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>,
  sun: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>,
  moon: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  menu: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 12h18M3 6h18M3 18h18"/></svg>,
  external: (p) => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>,
  share: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>,
  bookmark: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
  download: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>,
  list: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>,
  grid: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  spark: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>,
};

// ===== Logo =====
export function Logo({ height = 28 }) {
  const { theme } = useTheme();
  const base = import.meta.env.BASE_URL;
  const src = theme === "light" ? base + "assets/wordmark-light.png" : base + "assets/wordmark-dark.png";
  return <img src={src} alt="VARSIT-E" style={{ height, width: "auto", display: "block" }} />;
}

// ===== Nav =====
export function Nav({ page, navigate }) {
  const { theme, setTheme } = useTheme();
  const [q, setQ] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef(null);

  const links = [
    { id: "home", label: "Home" },
    { id: "library", label: "Video Library" },
    { id: "about", label: "About" },
    { id: "submit", label: "Submit" },
  ];

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (searchRef.current) searchRef.current.focus();
        else navigate("/library");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  const go = (id) => { setMenuOpen(false); navigate(id === "home" ? "/" : "/" + id); };
  const submitSearch = (e) => {
    e.preventDefault();
    navigate("/library" + (q ? "?q=" + encodeURIComponent(q) : ""));
    setMenuOpen(false);
  };

  return (
    <header className="nav">
      <div className="container-wide">
        <div className="nav-inner">
          <div className="flex items-center gap-24">
            <a className="nav-logo" href="#/" onClick={(e) => { e.preventDefault(); go("home"); }} aria-label="VARSIT-E home">
              <Logo height={26} />
            </a>
            <nav className="nav-links" aria-label="Primary">
              {links.map(l => (
                <a key={l.id}
                   className={"nav-link" + (page === l.id ? " active" : "")}
                   href={"#/" + (l.id === "home" ? "" : l.id)}
                   onClick={(e) => { e.preventDefault(); go(l.id); }}
                   aria-current={page === l.id ? "page" : undefined}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="nav-actions">
            <form className="nav-search" onSubmit={submitSearch} role="search">
              <Icon.search />
              <input ref={searchRef} value={q} onChange={(e) => setQ(e.target.value)}
                     placeholder="Search videos, surgeons…" aria-label="Search videos" />
              <kbd>⌘K</kbd>
            </form>
            <button className="btn btn-icon btn-secondary"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label={"Switch to " + (theme === "dark" ? "light" : "dark") + " mode"} title="Toggle theme">
              {theme === "dark" ? <Icon.sun /> : <Icon.moon />}
            </button>
            <button className="btn btn-secondary nav-signin" title="Accounts coming soon">Sign in</button>
            <button className="btn btn-primary" onClick={() => go("submit")}>Submit a Video</button>
            <button className="btn btn-icon btn-secondary nav-toggle"
                    onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu" aria-expanded={menuOpen}>
              {menuOpen ? <Icon.close /> : <Icon.menu />}
            </button>
          </div>
        </div>
        <nav className={"nav-mobile" + (menuOpen ? " open" : "")} aria-label="Mobile">
          {links.map(l => (
            <a key={l.id} className={page === l.id ? "active" : ""} onClick={() => go(l.id)}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ===== Footer =====
export function Footer({ navigate }) {
  const go = (id) => navigate(id === "home" ? "/" : "/" + id);
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <Logo height={26} />
            <p style={{ marginTop: 16, maxWidth: 360, fontSize: 14 }}>
              An academic surgical video education platform built by surgeons, for surgeons. Open access. Peer-curated.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 8, alignItems: "center" }}>
              <span className="pill"><span className="pill-dot live-dot"/>312 videos · 27 institutions</span>
            </div>
          </div>
          <div>
            <h5>Platform</h5>
            <ul>
              <li><a onClick={() => go("library")}>Video Library</a></li>
              <li><a onClick={() => go("submit")}>Submit a Video</a></li>
              <li><a onClick={() => go("about")}>Events</a></li>
              <li><a onClick={() => go("about")}>Education</a></li>
              <li><a onClick={() => go("about")}>Research &amp; Innovation</a></li>
            </ul>
          </div>
          <div>
            <h5>About</h5>
            <ul>
              <li><a onClick={() => go("about")}>Who we are</a></li>
              <li><a onClick={() => go("about")}>Editorial Board</a></li>
              <li><a onClick={() => go("about")}>Peer Review Process</a></li>
              <li><a href="mailto:editors@varsit-e.org">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li><a onClick={() => go("about")}>Educational use policy</a></li>
              <li><a onClick={() => go("about")}>De-identification standard</a></li>
              <li><a onClick={() => go("about")}>Terms</a></li>
              <li><a onClick={() => go("about")}>Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 VARSIT-E · Expert Surgical Video Education</span>
          <span className="text-mono" style={{ fontSize: 11, letterSpacing: "0.1em" }}>v 1.0 · ACADEMIC PREVIEW</span>
        </div>
      </div>
    </footer>
  );
}

// ===== Video Card =====
export function VideoCard({ v, onOpen }) {
  return (
    <div className="vcard" onClick={() => onOpen(v)} role="button" tabIndex={0}
         onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(v); } }}
         aria-label={"Open " + v.title}>
      <div className="vcard-thumb">
        <div className="vcard-thumb-bg" style={{ background: v.thumb }} />
        <ThumbDecor seed={v.id} />
        <span className="vcard-cat">{v.category}</span>
        <span className="vcard-duration">{v.duration}</span>
        <div className="vcard-play"><Icon.play /></div>
      </div>
      <div>
        <div className="vcard-title">{v.title}</div>
        <div className="vcard-meta" style={{ marginTop: 6 }}>
          <strong>{v.surgeon.split(",")[0]}</strong>
          <span>·</span>
          <span>{v.institution}</span>
        </div>
        <div className="vcard-tags">
          {v.tags.slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

// Decorative SVG overlay on thumbnails so they read as surgical/tech, not stock
export function ThumbDecor({ seed }) {
  const variant = (seed.charCodeAt(1) || 0) % 4;
  const common = { position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 };
  if (variant === 0) {
    return (
      <svg style={common} viewBox="0 0 320 180" preserveAspectRatio="none">
        <g fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5">
          {Array.from({ length: 14 }).map((_, i) => <line key={i} x1="0" y1={i * 14} x2="320" y2={i * 14 + 4} />)}
        </g>
        <circle cx="220" cy="90" r="36" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray="2 4"/>
        <circle cx="220" cy="90" r="6" fill="rgba(255,255,255,0.85)"/>
        <text x="20" y="160" fill="rgba(255,255,255,0.5)" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2">PROC.001 · CH 04</text>
      </svg>
    );
  }
  if (variant === 1) {
    return (
      <svg style={common} viewBox="0 0 320 180" preserveAspectRatio="none">
        <g fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1">
          <path d="M0 90 Q 80 40 160 90 T 320 90"/>
          <path d="M0 110 Q 80 60 160 110 T 320 110" opacity="0.6"/>
          <path d="M0 130 Q 80 80 160 130 T 320 130" opacity="0.3"/>
        </g>
        <g fill="rgba(255,255,255,0.7)">
          <circle cx="80" cy="60" r="2"/><circle cx="160" cy="90" r="3"/><circle cx="240" cy="60" r="2"/>
        </g>
        <text x="20" y="30" fill="rgba(255,255,255,0.55)" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2">SIG · LIVE</text>
      </svg>
    );
  }
  if (variant === 2) {
    return (
      <svg style={common} viewBox="0 0 320 180" preserveAspectRatio="none">
        <g stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none">
          {Array.from({ length: 10 }).map((_, i) => <line key={i} x1={32 * i} y1="0" x2={32 * i} y2="180"/>)}
        </g>
        <rect x="120" y="70" width="80" height="40" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
        <line x1="160" y1="70" x2="160" y2="110" stroke="rgba(255,255,255,0.4)" strokeDasharray="2 2"/>
        <text x="124" y="64" fill="rgba(255,255,255,0.6)" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">ROI 1</text>
      </svg>
    );
  }
  return (
    <svg style={common} viewBox="0 0 320 180" preserveAspectRatio="none">
      <g fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1">
        <circle cx="160" cy="90" r="50"/><circle cx="160" cy="90" r="32"/><circle cx="160" cy="90" r="14"/>
        <line x1="160" y1="40" x2="160" y2="140" strokeDasharray="1 3"/>
        <line x1="110" y1="90" x2="210" y2="90" strokeDasharray="1 3"/>
      </g>
      <text x="20" y="160" fill="rgba(255,255,255,0.5)" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2">TARGET · LOCKED</text>
    </svg>
  );
}
