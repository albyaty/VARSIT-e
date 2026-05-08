// About page
function AboutPage({ setPage }) {
  const data = window.VARSITE_DATA;
  return (
    <main>
      {/* Hero */}
      <section style={{ paddingTop: 96, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 0%, var(--accent-soft) 0%, transparent 70%)" }}/>
        <div className="container-wide" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>About VARSIT-E</span>
          <h1 style={{ marginTop: 24, fontSize: 72, maxWidth: 980, margin: "24px auto 0" }}>
            Built by surgeons.<br/>
            <span style={{ color: "var(--accent)" }}>For surgeons in training.</span>
          </h1>
          <p className="lead" style={{ marginTop: 28, maxWidth: 720, marginLeft: "auto", marginRight: "auto", fontSize: 20 }}>
            VARSIT-E is an academic surgical video platform built around a single belief: a great procedure deserves to be published with the same rigor as a great paper.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" }}>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              { n: "01", t: "Peer review", d: "Every video is reviewed by faculty editors for technical accuracy, educational value, and de-identification before publication." },
              { n: "02", t: "Open access", d: "Free to view for trainees, faculty and academic institutions worldwide. Always credited, never paywalled." },
              { n: "03", t: "Citable scholarship", d: "Each video receives a permanent identifier so contributing surgeons can cite their work in CVs, grants and tenure portfolios." },
            ].map(p => (
              <div key={p.n}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.12em", marginBottom: 16 }}>{p.n}</div>
                <h3>{p.t}</h3>
                <p style={{ marginTop: 12, fontSize: 15 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section">
        <div className="container-wide">
          <div className="section-head">
            <div>
              <span className="eyebrow">Founding faculty</span>
              <h2 style={{ marginTop: 16 }}>The editorial board</h2>
              <p className="lead" style={{ marginTop: 16, maxWidth: 640 }}>
                VARSIT-E's founding editorial board defines technical standards, oversees peer review, and curates the library.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {data.faculty.map((f, i) => <FacultyCard key={f.name} f={f} idx={i}/>)}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border-soft)" }}>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[
              { v: "312", l: "Curated procedures", s: "from 27 institutions" },
              { v: "84", l: "Contributing faculty", s: "across 14 specialties" },
              { v: "1.4k", l: "Hours of teaching", s: "fully narrated, indexed by step" },
              { v: "100%", l: "De-identified", s: "before publication" },
            ].map(s => (
              <div key={s.l} style={{ paddingTop: 24, borderTop: "1px solid var(--border-soft)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 600, letterSpacing: "-0.04em", color: "var(--accent)", lineHeight: 1 }}>{s.v}</div>
                <div style={{ marginTop: 12, fontSize: 14, fontWeight: 600 }}>{s.l}</div>
                <div style={{ marginTop: 4, fontSize: 13, color: "var(--text-3)" }}>{s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-wide">
          <div className="section-head">
            <div>
              <span className="eyebrow">Editorial process</span>
              <h2 style={{ marginTop: 16 }}>How a video gets published</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative" }}>
            {[
              { n: "01", t: "Submission", d: "Surgeon submits video, case summary, learning objectives and pearls." },
              { n: "02", t: "De-identification audit", d: "Editorial team verifies removal of all patient identifiers and protected metadata." },
              { n: "03", t: "Peer review", d: "Two faculty reviewers evaluate technical accuracy and educational value." },
              { n: "04", t: "Publication", d: "Accepted videos are published with a permanent identifier and indexed by procedure." },
            ].map((s, i, arr) => (
              <div key={s.n} style={{
                padding: "24px 24px 24px 0",
                borderRight: i < arr.length - 1 ? "1px solid var(--border-soft)" : "none",
                paddingLeft: i === 0 ? 0 : 24, position: "relative"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, color: "var(--accent)" }}>{s.n}</span>
                  {i < arr.length - 1 && <span style={{ flex: 1, height: 1, background: "var(--border-soft)", marginLeft: 8, marginRight: -24 }}/>}
                </div>
                <h4>{s.t}</h4>
                <p style={{ marginTop: 8, fontSize: 14 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 56, textAlign: "center" }}>
            <button className="btn btn-primary btn-lg" onClick={() => setPage("submit")}>Submit your video <Icon.arrow/></button>
          </div>
        </div>
      </section>
    </main>
  );
}

function FacultyCard({ f, idx }) {
  return (
    <div className="card" style={{ padding: 28, position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%",
        background: "radial-gradient(circle, " + f.color + "30 0%, transparent 70%)",
      }}/>
      <div style={{ position: "relative" }}>
        <div style={{
          width: 88, height: 88, borderRadius: "50%",
          background: "linear-gradient(135deg, " + f.color + " 0%, #07080c 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600, color: "white",
          border: "1px solid var(--border)", marginBottom: 20,
          boxShadow: "0 8px 32px " + f.color + "40"
        }}>{f.initials}</div>
        <h3 style={{ fontSize: 22 }}>{f.name}</h3>
        <div style={{ marginTop: 6, fontSize: 13, color: "var(--accent)", fontWeight: 600 }}>{f.role}</div>
        <div style={{ fontSize: 13, color: "var(--text-3)", marginTop: 2 }}>{f.institution}</div>
        <p style={{ marginTop: 16, fontSize: 14 }}>{f.bio}</p>
        <div style={{ marginTop: 20, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {f.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

window.AboutPage = AboutPage;
