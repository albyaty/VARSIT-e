// Home page
const { useState: useStateH } = React;

function HomePage({ setPage, setSelectedVideo }) {
  const data = window.VARSITE_DATA;
  const featured = data.videos.slice(0, 6);
  const openVideo = (v) => {setSelectedVideo(v);setPage("detail");};

  return (
    <main>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: 80, paddingBottom: 120 }}>
        <HeroBackdrop />
        <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 80, alignItems: "center" }}>
            <div className="fade-up">
              <span className="eyebrow">Academic Surgical Education | Open Access</span>
              <h1 style={{ marginTop: 24 }}>
                Expert surgical<br />video education,<br />
                <span style={{ color: "var(--accent)", fontFamily: "\"Space Grotesk\"" }}>frame by frame.</span>
              </h1>
              <p className="lead" style={{ marginTop: 28, maxWidth: 540 }}>
                A peer-curated library of step-by-step procedures, surgical movies, and faculty webinars from the world's leading academic operating rooms.
              </p>
              <div className="flex gap-12" style={{ marginTop: 36 }}>
                <button className="btn btn-primary btn-lg" onClick={() => setPage("library")}>
                  Explore the Library <Icon.arrow />
                </button>
                <button className="btn btn-secondary btn-lg" onClick={() => setPage("submit")}>
                  <Icon.upload /> Submit a Video
                </button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 64, maxWidth: 600 }}>
                {[
                { v: "312", l: "Curated videos" },
                { v: "27", l: "Institutions" },
                { v: "84", l: "Expert surgeons" },
                { v: "1.4k", l: "Teaching hours" }].
                map((s) =>
                <div key={s.l}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--text)" }}>{s.v}</div>
                    <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 4 }}>{s.l}</div>
                  </div>
                )}
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {featured.slice(0, 3).map((v) => <VideoCard key={v.id} v={v} onOpen={openVideo} />)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginTop: 32 }}>
            {featured.slice(3, 6).map((v) => <VideoCard key={v.id} v={v} onOpen={openVideo} />)}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" }}>
        <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 80 }}>
          <span className="eyebrow" style={{ alignSelf: "start" }}>Our mission</span>
          <div>
            <h2 style={{ fontSize: 40, lineHeight: 1.15 }}>
              We believe surgical mastery should be <span style={{ color: "var(--accent)" }}>open, peer-reviewed, and visible</span> - not hidden inside private archives.
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
            { tag: "01", t: "Events", d: "Faculty case conferences, hands-on workshops, and the annual VARSIT-E symposium.", soon: "Q3 2026" },
            { tag: "02", t: "Education", d: "Structured curricula, case-of-the-week, board prep modules and resident pathways.", soon: "Q4 2026" },
            { tag: "03", t: "Research & Innovation", d: "Multi-institutional collaborative protocols, AR/AI surgical-vision research and publishing.", soon: "2027" }].
            map((p) =>
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
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container-wide">
          <div className="card" style={{ padding: 56, textAlign: "center", background: "var(--surface)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, var(--accent-soft) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <span className="eyebrow">Submit your work</span>
              <h2 style={{ marginTop: 16, fontSize: 56 }}>Have a teaching case worth publishing?</h2>
              <p className="lead" style={{ marginTop: 16, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
                Submissions are reviewed by faculty editors for technical accuracy, educational value and de-identification.
              </p>
              <div className="flex gap-12" style={{ justifyContent: "center", marginTop: 32 }}>
                <button className="btn btn-primary btn-lg" onClick={() => setPage("submit")}>
                  Begin a submission <Icon.arrow />
                </button>
                <button className="btn btn-secondary btn-lg">Read editorial guidelines</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>);

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
    </>);

}

function HeroVisual() {
  return (
    <div style={{ position: "relative", aspectRatio: "4 / 5", width: "100%", maxWidth: 560, marginLeft: "auto" }} className="fade-up">
      <div style={{
        position: "absolute", inset: 0,
        borderRadius: 18, overflow: "hidden",
        border: "1px solid var(--border)",
        background: "radial-gradient(circle at 30% 30%, #2d5bff 0%, #0a1130 55%, #050610 100%)",
        boxShadow: "var(--shadow-strong)"
      }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="hero-visual-glow" cx="0.5" cy="0.45" r="0.55">
              <stop offset="0%" stopColor="rgba(45,91,255,0.55)"/>
              <stop offset="100%" stopColor="rgba(45,91,255,0)"/>
            </radialGradient>
          </defs>
          <rect width="400" height="500" fill="url(#hero-visual-glow)"/>
          <g fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1">
            <circle cx="200" cy="225" r="120"/>
            <circle cx="200" cy="225" r="85"/>
            <circle cx="200" cy="225" r="50"/>
            <line x1="200" y1="80" x2="200" y2="370" strokeDasharray="2 6"/>
            <line x1="60" y1="225" x2="340" y2="225" strokeDasharray="2 6"/>
          </g>
          <circle cx="200" cy="225" r="4" fill="white"/>
          <text x="24" y="36" fill="rgba(255,255,255,0.7)" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2">CH 03 - STEP 04 OF 12</text>
          <text x="24" y="476" fill="rgba(255,255,255,0.7)" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2">00:14:32 - 4K - NARRATED</text>
          <text x="376" y="36" textAnchor="end" fill="rgba(255,255,255,0.7)" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2">SP ROBOTIC</text>
        </svg>
        <div style={{
          position: "absolute", left: "50%", top: "45%", transform: "translate(-50%, -50%)",
          width: 84, height: 84, borderRadius: "50%", background: "var(--accent)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 16px 48px var(--accent-glow)"
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M6 4l14 8-14 8z"/></svg>
        </div>
        <div style={{
          position: "absolute", left: 16, right: 16, bottom: 16,
          padding: "14px 16px", borderRadius: 12,
          background: "rgba(7,8,12,0.55)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.12)"
        }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: "0.14em", marginBottom: 8 }}>CASE METADATA</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, fontSize: 12, color: "white" }}>
            <div><div style={{ color: "rgba(255,255,255,0.55)" }}>Procedure</div><div style={{ fontWeight: 600 }}>Partial Nx</div></div>
            <div><div style={{ color: "rgba(255,255,255,0.55)" }}>Approach</div><div style={{ fontWeight: 600 }}>SP Robotic</div></div>
            <div><div style={{ color: "rgba(255,255,255,0.55)" }}>WIT</div><div style={{ fontWeight: 600 }}>18 min</div></div>
            <div><div style={{ color: "rgba(255,255,255,0.55)" }}>Level</div><div style={{ fontWeight: 600, color: "#7aa0ff" }}>Advanced</div></div>
          </div>
        </div>
      </div>
    </div>);

}

window.HomePage = HomePage;
