// Video detail page
function DetailPage({ video, setPage, setSelectedVideo }) {
  const data = window.VARSITE_DATA;
  const [tab, setTab] = React.useState("overview");
  const [playing, setPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(18);
  const v = video || data.videos[0];

  const related = data.videos.filter(x => x.id !== v.id && (x.procedure === v.procedure || x.surgeon === v.surgeon)).slice(0, 4);
  const openVideo = (vid) => { setSelectedVideo(vid); setTab("overview"); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <main style={{ paddingBottom: 80 }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid var(--border-soft)", padding: "16px 0" }}>
        <div className="container-wide" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-3)" }}>
          <a onClick={() => setPage("home")} style={{ cursor: "pointer" }}>VARSIT-E</a>
          <span>/</span>
          <a onClick={() => setPage("library")} style={{ cursor: "pointer" }}>Video Library</a>
          <span>/</span>
          <span style={{ color: "var(--text-2)" }}>{v.category}</span>
          <span>/</span>
          <span style={{ color: "var(--text)" }}>{v.procedure}</span>
        </div>
      </div>

      <div className="container-wide" style={{ paddingTop: 32, display: "grid", gridTemplateColumns: "1fr 360px", gap: 40, alignItems: "start" }}>
        {/* LEFT */}
        <div>
          {/* Player */}
          <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", background: v.thumb, border: "1px solid var(--border)" }}>
            {playing && v.embedUrl ? (
              <iframe
                src={v.embedUrl + (v.embedUrl.includes("?") ? "&" : "?") + "autoplay=1"}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, zIndex: 5 }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={v.title}
              />
            ) : null}
            <ThumbDecor seed={v.id}/>
            {/* HUD */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,8,12,0.85) 0%, transparent 30%, transparent 70%, rgba(7,8,12,0.6) 100%)" }}/>
            <div style={{ position: "absolute", top: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between", alignItems: "center", color: "white" }}>
              <div className="flex gap-8 items-center">
                <span style={{ padding: "4px 10px", borderRadius: 6, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" }}>4K · NARRATED</span>
                <span style={{ padding: "4px 10px", borderRadius: 6, background: "rgba(45,91,255,0.6)", backdropFilter: "blur(8px)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" }}>{v.category}</span>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em" }}>VARSIT-E PLAYER</div>
            </div>
            {/* Center play */}
            {!(playing && v.embedUrl) && <button onClick={() => setPlaying(!playing)} style={{
              position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
              width: 88, height: 88, borderRadius: "50%", background: "var(--accent)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 16px 48px var(--accent-glow)"
            }}>
              {playing ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M6 4l14 8-14 8z"/></svg>
              )}
            </button>}
            {/* Bottom HUD */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 20, color: "white" }}>
              <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,0.2)", overflow: "hidden", marginBottom: 12, cursor: "pointer" }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setProgress(((e.clientX - rect.left) / rect.width) * 100);
                }}>
                <div style={{ height: "100%", width: progress + "%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)" }}/>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-12 items-center">
                  <button style={{ color: "white" }}>{playing ? "⏸" : "▶"}</button>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>05:14 / {v.duration}</span>
                  <span style={{ fontSize: 12, opacity: 0.7 }}>· Step 3 of {v.steps.length}: {v.steps[Math.min(2, v.steps.length - 1)]?.title}</span>
                </div>
                <div className="flex gap-12 items-center" style={{ fontSize: 12, opacity: 0.8 }}>
                  <span>1×</span><span>CC</span><span>HD</span><span>⛶</span>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div style={{ marginTop: 32 }}>
            <div className="flex gap-8 items-center" style={{ marginBottom: 16, flexWrap: "wrap" }}>
              <span className="tag">{v.category}</span>
              <span className="tag">{v.procedure}</span>
              <span className="tag">{v.approach}</span>
              {v.platform !== "—" && <span className="tag">{v.platform}</span>}
              <span className="tag" style={{ color: "var(--accent)", borderColor: "var(--accent)", background: "var(--accent-soft)" }}>{v.difficulty}</span>
            </div>
            <h1 style={{ fontSize: 42, lineHeight: 1.15 }}>{v.title}</h1>
            <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <div className="flex gap-12 items-center">
                <Avatar name={v.surgeon}/>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{v.surgeon}</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)" }}>{v.institution} · {v.year}</div>
                </div>
              </div>
              <div className="flex gap-8">
                <button className="btn btn-secondary"><Icon.bookmark/> Save</button>
                <button className="btn btn-secondary"><Icon.share/> Share</button>
                <button className="btn btn-secondary"><Icon.download/> Cite</button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ marginTop: 32, borderBottom: "1px solid var(--border-soft)", display: "flex", gap: 4 }}>
            {[
              ["overview", "Overview"],
              ["steps", "Surgical Steps"],
              ["pearls", "Teaching Pearls"],
              ["transcript", "Transcript"],
            ].map(([k, l]) => (
              <button key={k} onClick={() => setTab(k)} style={{
                padding: "12px 16px", fontSize: 13, fontWeight: 600,
                color: tab === k ? "var(--text)" : "var(--text-3)",
                borderBottom: "2px solid " + (tab === k ? "var(--accent)" : "transparent"),
                marginBottom: -1
              }}>{l}</button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ paddingTop: 32 }}>
            {tab === "overview" && (
              <div>
                <h3>Case summary</h3>
                <p style={{ marginTop: 12, fontSize: 16 }}>{v.summary}</p>
                <h3 style={{ marginTop: 40 }}>Learning objectives</h3>
                <ul style={{ marginTop: 16, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {v.objectives.map((o, i) => (
                    <li key={i} style={{ display: "flex", gap: 14, alignItems: "start", padding: 16, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12 }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", padding: "4px 8px", background: "var(--accent-soft)", borderRadius: 6, flexShrink: 0, marginTop: 2 }}>0{i + 1}</span>
                      <span style={{ fontSize: 15 }}>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tab === "steps" && (
              <div>
                <h3>Surgical steps</h3>
                <p style={{ marginTop: 8, marginBottom: 24 }}>Click any step to jump the player to that timestamp.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {v.steps.map((s, i) => (
                    <button key={i} className="card" style={{
                      padding: 16, display: "flex", gap: 16, alignItems: "center",
                      cursor: "pointer", textAlign: "left", width: "100%"
                    }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", minWidth: 50, fontWeight: 600 }}>{s.t}</span>
                      <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--surface-2)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600 }}>{i + 1}</span>
                      <span style={{ flex: 1, fontWeight: 500 }}>{s.title}</span>
                      <Icon.play style={{ color: "var(--text-3)" }}/>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {tab === "pearls" && (
              <div>
                <h3>Teaching pearls</h3>
                <p style={{ marginTop: 8, marginBottom: 24 }}>Author's notes, written for senior trainees.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {v.pearls.map((p, i) => (
                    <div key={i} className="card" style={{ padding: 24, position: "relative", overflow: "hidden" }}>
                      <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: "var(--accent)" }}/>
                      <div style={{ display: "flex", gap: 12, alignItems: "start", paddingLeft: 12 }}>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 600, color: "var(--accent)", lineHeight: 1, marginTop: -2 }}>"</span>
                        <p style={{ fontSize: 16, color: "var(--text)", lineHeight: 1.5 }}>{p}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "transcript" && (
              <div>
                <h3>Narration transcript</h3>
                <div className="card" style={{ padding: 24, marginTop: 16, fontSize: 14, lineHeight: 1.7 }}>
                  <p style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)", fontSize: 11, marginBottom: 12 }}>00:00:14</p>
                  <p>"Welcome. In this video we will demonstrate a {v.approach.toLowerCase()} approach to {v.procedure.toLowerCase()}. The patient is positioned in modified flank, with appropriate padding and arm positioning to allow full robotic boom range…"</p>
                  <p style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)", fontSize: 11, marginTop: 24, marginBottom: 12 }}>00:01:48</p>
                  <p>"Notice the consistent retraction angle here. This is a setup detail that pays dividends throughout the case…"</p>
                  <p style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)", fontSize: 11, marginTop: 24, marginBottom: 12 }}>00:03:22</p>
                  <p>"At this point we identify the gonadal vein and use it as our roadmap to the renal hilum…"</p>
                  <p style={{ marginTop: 24, fontStyle: "italic", color: "var(--text-3)" }}>— Full transcript continues.</p>
                </div>
              </div>
            )}
          </div>

          {/* Educational notice */}
          <div style={{ marginTop: 48, padding: 20, border: "1px solid var(--border-soft)", borderRadius: 12, background: "var(--surface-2)", fontSize: 12, color: "var(--text-3)", display: "flex", gap: 12 }}>
            <span style={{ color: "var(--accent)", flexShrink: 0 }}>ⓘ</span>
            <span>
              This video is provided for academic and educational use only. All patient identifiers have been removed in accordance with VARSIT-E's de-identification standard. Reproduction outside of educational settings without written permission is prohibited. © 2026 VARSIT-E.
            </span>
          </div>
        </div>

        {/* RIGHT — Sticky meta */}
        <aside style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="card" style={{ padding: 24 }}>
            <h5 style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-3)", marginBottom: 16 }}>Case Metadata</h5>
            <dl style={{ margin: 0, display: "grid", gap: 14 }}>
              <MetaRow l="Procedure" v={v.procedure}/>
              <MetaRow l="Approach" v={v.approach}/>
              <MetaRow l="Platform" v={v.platform}/>
              <MetaRow l="Duration" v={v.duration}/>
              <MetaRow l="Difficulty" v={v.difficulty} accent/>
              <MetaRow l="Surgeon" v={v.surgeon}/>
              <MetaRow l="Institution" v={v.institution}/>
              <MetaRow l="Published" v={v.year}/>
              <MetaRow l="Views" v={v.views}/>
            </dl>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <h5 style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-3)", marginBottom: 12 }}>Tags</h5>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {v.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </aside>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ marginTop: 80, paddingTop: 64, borderTop: "1px solid var(--border-soft)" }}>
          <div className="container-wide">
            <div className="section-head">
              <div>
                <span className="eyebrow">Related videos</span>
                <h2 style={{ marginTop: 12, fontSize: 36 }}>More from {v.surgeon.split(",")[0]}</h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
              {related.map(r => <VideoCard key={r.id} v={r} onOpen={openVideo}/>)}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function MetaRow({ l, v, accent }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 13 }}>
      <dt style={{ color: "var(--text-3)" }}>{l}</dt>
      <dd style={{ margin: 0, fontWeight: 600, textAlign: "right", color: accent ? "var(--accent)" : "var(--text)" }}>{v}</dd>
    </div>
  );
}

function Avatar({ name }) {
  const initials = name.split(" ").slice(0, 2).map(s => s[0]).join("");
  return <div className="avatar">{initials}</div>;
}

window.DetailPage = DetailPage;
