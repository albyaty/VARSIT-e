// Home page
import React from "react";
import { DATA } from "../data.js";
import { Icon, VideoCard } from "../components.jsx";

const HERO_VIDEO_SRC = import.meta.env.BASE_URL + "assets/hero-teaser.mp4";
const HERO_VIDEO_POSTER = import.meta.env.BASE_URL + "assets/hero-teaser-poster.jpg";

export default function HomePage({ setPage, openVideo }) {
  const data = DATA;
  const featured = data.videos.slice(0, 6);

  return (
    <main>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: 80, paddingBottom: 120 }}>
        <HeroBackdrop />
        <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-grid">
            <div className="fade-up">
              <span className="eyebrow">Academic Surgical Education · Open Access</span>
              <h1 style={{ marginTop: 24 }}>
                Expert surgical<br />video education,<br />
                <span style={{ color: "var(--accent)", fontFamily: "\"Space Grotesk\"" }}>frame by frame.</span>
              </h1>
              <p className="lead" style={{ marginTop: 28, maxWidth: 540 }}>
                A peer-curated library of step-by-step procedures, surgical movies, and faculty webinars from the world's leading academic operating rooms.
              </p>
              <div className="flex gap-12" style={{ marginTop: 36, flexWrap: "wrap" }}>
                <button className="btn btn-primary btn-lg" onClick={() => setPage("library")}>
                  Explore the Library <Icon.arrow />
                </button>
                <button className="btn btn-secondary btn-lg" onClick={() => setPage("submit")}>
                  <Icon.upload /> Submit a Video
                </button>
              </div>
              <div className="stats-4" style={{ gap: 24, marginTop: 64, maxWidth: 600 }}>
                {[
                  { v: "312", l: "Curated videos" },
                  { v: "27", l: "Institutions" },
                  { v: "84", l: "Expert surgeons" },
                  { v: "1.4k", l: "Teaching hours" }
                ].map((s) => (
                  <div key={s.l}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--text)" }}>{s.v}</div>
                    <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ paddingTop: 32, paddingBottom: 96 }}>
        <div className="container-wide">
          <div className="section-head">
            <div>
              <span className="eyebrow">Featured this week</span>
              <h2 style={{ marginTop: 16 }}>Newly curated procedures</h2>
            </div>
            <button className="btn btn-ghost" onClick={() => setPage("library")}>
              All videos <Icon.arrow />
            </button>
          </div>
          <div className="grid-3" style={{ gap: 32 }}>
            {featured.slice(0, 3).map((v) => <VideoCard key={v.id} v={v} onOpen={openVideo} />)}
          </div>
          <div className="grid-3" style={{ gap: 32, marginTop: 32 }}>
            {featured.slice(3, 6).map((v) => <VideoCard key={v.id} v={v} onOpen={openVideo} />)}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" }}>
        <div className="container-wide mission-grid">
          <span className="eyebrow" style={{ alignSelf: "start" }}>Our mission</span>
          <div>
            <h2 style={{ fontSize: "clamp(28px, 4.5vw, 40px)", lineHeight: 1.15 }}>
              We believe surgical mastery should be <span style={{ color: "var(--accent)" }}>open, peer-reviewed, and visible</span> — not hidden inside private archives.
            </h2>
            <p className="lead" style={{ marginTop: 28, maxWidth: 760 }}>
              VARSIT-E is built by academic faculty to publish, peer-review, and discuss surgical video as a first-class scholarly artifact. Every contribution is reviewed for technical accuracy, educational value, and de-identification before publication.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section-sm">
        <div className="container-wide">
          <div className="section-head">
            <div>
              <span className="eyebrow">Coming next</span>
              <h2 style={{ marginTop: 16 }}>Beyond the video library</h2>
            </div>
          </div>
          <div className="grid-3" style={{ gap: 24 }}>
            {[
              { tag: "01", t: "Events", d: "Live faculty surgery streams, hands-on workshops, and annual VARSIT-E symposium.", soon: "Q3 2026" },
              { tag: "02", t: "Education", d: "Structured curricula, case-of-the-week, board prep modules and resident pathways.", soon: "Q4 2026" },
              { tag: "03", t: "Research & Innovation", d: "Multi-institutional collaborative protocols, AR/AI surgical-vision research and publishing.", soon: "2027" }
            ].map((p) => (
              <div key={p.tag} className="card" style={{ padding: 28, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, fontFamily: "var(--font-display)", fontSize: 110, fontWeight: 600, color: "var(--surface-2)", lineHeight: 1, letterSpacing: "-0.05em" }}>
                  {p.tag}
                </div>
                <div style={{ position: "relative" }}>
                  <span className="pill" style={{ marginBottom: 16 }}>
                    <span className="pill-dot" />Coming {p.soon}
                  </span>
                  <h3>{p.t}</h3>
                  <p style={{ marginTop: 12, fontSize: 14 }}>{p.d}</p>
                  <div style={{ marginTop: 24, color: "var(--accent)", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                    Get notified <Icon.arrow />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container-wide">
          <div className="card" style={{ padding: "clamp(32px, 5vw, 56px)", textAlign: "center", background: "var(--surface)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, var(--accent-soft) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <span className="eyebrow">Submit your work</span>
              <h2 style={{ marginTop: 16, fontSize: "clamp(32px, 6vw, 56px)" }}>Have a teaching case worth publishing?</h2>
              <p className="lead" style={{ marginTop: 16, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
                Submissions are reviewed by faculty editors for technical accuracy, educational value and de-identification.
              </p>
              <div className="flex gap-12" style={{ justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
                <button className="btn btn-primary btn-lg" onClick={() => setPage("submit")}>
                  Begin a submission <Icon.arrow />
                </button>
                <button className="btn btn-secondary btn-lg" onClick={() => setPage("about")}>Read editorial guidelines</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroBackdrop() {
  return (
    <>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 80% 60% at 70% 30%, var(--accent-soft) 0%, transparent 60%)"
      }} />
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.4 }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 1600 800">
        <defs>
          <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.15" />
          </pattern>
        </defs>
        <rect width="1600" height="800" fill="url(#dots)" style={{ color: "var(--text-2)" }} />
      </svg>
    </>
  );
}

function HeroVisual() {
  return (
    <div style={{ position: "relative", aspectRatio: "9 / 10", width: "100%", maxWidth: 620, marginLeft: "auto" }} className="fade-up">
      <div style={{
        position: "absolute", inset: 0,
        borderRadius: 18, overflow: "hidden",
        border: "1px solid var(--border)",
        background: "#050610",
        boxShadow: "var(--shadow-strong)"
      }}>
        <video
          src={HERO_VIDEO_SRC}
          poster={HERO_VIDEO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(5,6,16,0.18) 0%, rgba(5,6,16,0.04) 22%, rgba(5,6,16,0.12) 56%, rgba(5,6,16,0.72) 100%)"
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at 38% 28%, rgba(45,91,255,0.22) 0%, rgba(45,91,255,0) 48%)"
        }} />
        <div style={{
          position: "absolute", top: 18, left: 18, right: 18,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 12, color: "rgba(255,255,255,0.78)",
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase"
        }}>
          <span>Featured Procedure</span>
          <span>Autoplay Preview</span>
        </div>
        <div style={{
          position: "absolute", left: 16, right: 16, bottom: 16,
          padding: "14px 16px", borderRadius: 12,
          background: "rgba(7,8,12,0.55)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.12)"
        }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: "0.14em", marginBottom: 8 }}>CASE METADATA</div>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1.65fr 0.85fr", gap: 12, fontSize: 12, color: "white" }}>
            <div><div style={{ color: "rgba(255,255,255,0.55)" }}>Procedure</div><div style={{ fontWeight: 600 }}>Radical Prostatectomy</div></div>
            <div><div style={{ color: "rgba(255,255,255,0.55)" }}>Approach</div><div style={{ fontWeight: 600 }}>Single Port Transvesical</div></div>
            <div><div style={{ color: "rgba(255,255,255,0.55)" }}>Level</div><div style={{ fontWeight: 600, color: "#7aa0ff" }}>Advanced</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
