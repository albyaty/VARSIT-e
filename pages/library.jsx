// Video Library page
function LibraryPage({ setPage, setSelectedVideo }) {
  const data = window.VARSITE_DATA;
  const [query, setQuery] = React.useState("");
  const [filters, setFilters] = React.useState({});
  const [sort, setSort] = React.useState("newest");
  const [view, setView] = React.useState("grid");

  const openVideo = (v) => { setSelectedVideo(v); setPage("detail"); };

  const toggleFilter = (group, val) => {
    setFilters(prev => {
      const cur = new Set(prev[group] || []);
      if (cur.has(val)) cur.delete(val); else cur.add(val);
      return { ...prev, [group]: Array.from(cur) };
    });
  };

  const filtered = React.useMemo(() => {
    let list = data.videos;
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(v =>
        v.title.toLowerCase().includes(q) ||
        v.surgeon.toLowerCase().includes(q) ||
        v.institution.toLowerCase().includes(q) ||
        v.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    Object.entries(filters).forEach(([k, vals]) => {
      if (!vals.length) return;
      list = list.filter(v => {
        if (k === "type") return vals.includes(v.category);
        return vals.includes(v[k]);
      });
    });
    if (sort === "newest") list = [...list].sort((a, b) => b.year - a.year);
    if (sort === "popular") list = [...list].sort((a, b) => parseFloat(b.views) - parseFloat(a.views));
    if (sort === "duration") list = [...list].sort((a, b) => a.durationMin - b.durationMin);
    return list;
  }, [query, filters, sort]);

  const activeChips = Object.entries(filters).flatMap(([k, vals]) => vals.map(v => ({ k, v })));

  return (
    <main>
      {/* Library Hero */}
      <section style={{ paddingTop: 64, paddingBottom: 40, borderBottom: "1px solid var(--border-soft)" }}>
        <div className="container-wide">
          <span className="eyebrow">Video Library</span>
          <h1 style={{ fontSize: 56, marginTop: 16, maxWidth: 800 }}>The reference library<br/>for academic surgery.</h1>
          <p className="lead" style={{ marginTop: 16, maxWidth: 620 }}>
            {data.videos.length} peer-reviewed videos across step-by-step procedures, surgical movies, and live faculty webinars.
          </p>
          {/* Big search */}
          <div style={{ marginTop: 32, display: "flex", gap: 12, maxWidth: 720, alignItems: "center" }}>
            <div style={{ flex: 1, position: "relative" }}>
              <div style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }}>
                <Icon.search />
              </div>
              <input
                className="input"
                style={{ height: 56, paddingLeft: 44, fontSize: 15, borderRadius: 14 }}
                placeholder="Search procedures, surgeons, institutions, tags…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          {/* Quick category pills */}
          <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <CatPill label="All" count={data.videos.length} active={!filters.type?.length} onClick={() => setFilters(f => ({ ...f, type: [] }))} icon="◌"/>
            <CatPill label="Surgical Step-by-Step" sub="≤ 30 min · narrated" count={data.videos.filter(v => v.category === "Step-by-Step").length}
              active={filters.type?.includes("Step-by-Step")} onClick={() => toggleFilter("type", "Step-by-Step")}/>
            <CatPill label="Surgical Movies" sub="≤ 8 min · narrated" count={data.videos.filter(v => v.category === "Surgical Movie").length}
              active={filters.type?.includes("Surgical Movie")} onClick={() => toggleFilter("type", "Surgical Movie")}/>
            <CatPill label="Webinars & Presentations" sub="long-form" count={data.videos.filter(v => v.category === "Webinar").length}
              active={filters.type?.includes("Webinar")} onClick={() => toggleFilter("type", "Webinar")}/>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 32, paddingBottom: 80 }}>
        <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 40, alignItems: "start" }}>
          {/* Sidebar */}
          <aside style={{ position: "sticky", top: 88 }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
                <Icon.filter style={{ display: "inline", marginRight: 6, verticalAlign: "-2px" }}/>Filters
              </h4>
              {activeChips.length > 0 && (
                <button className="btn-ghost" style={{ fontSize: 12, color: "var(--accent)" }} onClick={() => setFilters({})}>Clear all</button>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {Object.entries(data.filterDefs).map(([key, def]) => (
                <FilterGroup key={key} label={def.label} options={def.options}
                  selected={filters[key] || []}
                  onToggle={(v) => toggleFilter(key, v)}/>
              ))}
            </div>
          </aside>

          {/* Results */}
          <div>
            <div className="flex items-center justify-between" style={{ marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>
                  {filtered.length}
                </span>
                <span className="text-2" style={{ fontSize: 14 }}>video{filtered.length !== 1 ? "s" : ""}{query ? ` matching "${query}"` : ""}</span>
              </div>
              <div className="flex gap-12 items-center">
                <select className="select" style={{ height: 36, paddingRight: 32, fontSize: 13, width: "auto" }} value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="newest">Sort: Newest</option>
                  <option value="popular">Sort: Most viewed</option>
                  <option value="duration">Sort: Shortest first</option>
                </select>
                <div style={{ display: "flex", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
                  <button onClick={() => setView("grid")} style={{ padding: "8px 12px", background: view === "grid" ? "var(--surface-2)" : "transparent", color: view === "grid" ? "var(--accent)" : "var(--text-3)" }}><Icon.grid/></button>
                  <button onClick={() => setView("list")} style={{ padding: "8px 12px", background: view === "list" ? "var(--surface-2)" : "transparent", color: view === "list" ? "var(--accent)" : "var(--text-3)", borderLeft: "1px solid var(--border)" }}><Icon.list/></button>
                </div>
              </div>
            </div>

            {/* Active chips */}
            {activeChips.length > 0 && (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--border-soft)" }}>
                {activeChips.map(({ k, v }) => (
                  <button key={k + v} className="pill active" onClick={() => toggleFilter(k, v)} style={{ cursor: "pointer" }}>
                    {v} <Icon.close />
                  </button>
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <div className="card" style={{ padding: 64, textAlign: "center" }}>
                <h3>No matches found</h3>
                <p style={{ marginTop: 8 }}>Try adjusting your filters or search query.</p>
              </div>
            )}

            {view === "grid" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
                {filtered.map(v => <VideoCard key={v.id} v={v} onOpen={openVideo}/>)}
              </div>
            )}

            {view === "list" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {filtered.map(v => <VideoListRow key={v.id} v={v} onOpen={openVideo}/>)}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function CatPill({ label, sub, count, active, onClick, icon }) {
  return (
    <button onClick={onClick} className="card" style={{
      padding: "10px 16px", borderRadius: 12, cursor: "pointer", textAlign: "left",
      borderColor: active ? "var(--accent)" : "var(--border)",
      background: active ? "var(--accent-soft)" : "var(--surface)",
      display: "flex", alignItems: "center", gap: 10
    }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: active ? "var(--accent)" : "var(--text)" }}>{label}</div>
        {sub && <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 2 }}>{sub}</div>}
      </div>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: active ? "var(--accent)" : "var(--text-3)", padding: "2px 8px", background: active ? "rgba(45,91,255,0.15)" : "var(--surface-2)", borderRadius: 6 }}>{count}</span>
    </button>
  );
}

function FilterGroup({ label, options, selected, onToggle }) {
  const [open, setOpen] = React.useState(true);
  return (
    <div style={{ borderBottom: "1px solid var(--border-soft)", paddingBottom: 12, marginBottom: 8 }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 0", fontSize: 13, fontWeight: 600, color: "var(--text)"
      }}>
        <span>{label}{selected.length > 0 && <span style={{ marginLeft: 8, color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: 11 }}>{selected.length}</span>}</span>
        <span style={{ fontSize: 14, color: "var(--text-3)", transform: open ? "rotate(0)" : "rotate(-90deg)", transition: "transform 0.15s" }}>⌄</span>
      </button>
      {open && (
        <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 4 }}>
          {options.map(o => {
            const active = selected.includes(o);
            return (
              <label key={o} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, cursor: "pointer", padding: "4px 0", color: active ? "var(--text)" : "var(--text-2)" }}>
                <span style={{
                  width: 16, height: 16, borderRadius: 4, border: "1.5px solid " + (active ? "var(--accent)" : "var(--border)"),
                  background: active ? "var(--accent)" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0
                }}>
                  {active && <Icon.check style={{ width: 10, height: 10 }}/>}
                </span>
                <input type="checkbox" checked={active} onChange={() => onToggle(o)} style={{ display: "none" }}/>
                <span>{o}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

function VideoListRow({ v, onOpen }) {
  return (
    <div className="card" style={{ padding: 16, display: "grid", gridTemplateColumns: "200px 1fr auto", gap: 20, alignItems: "center", cursor: "pointer" }} onClick={() => onOpen(v)}>
      <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 8, overflow: "hidden", background: v.thumb }}>
        <ThumbDecor seed={v.id}/>
        <span className="vcard-duration">{v.duration}</span>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <span className="tag">{v.category}</span>
          <span style={{ fontSize: 12, color: "var(--text-3)" }}>{v.year}</span>
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, lineHeight: 1.3, marginBottom: 6 }}>{v.title}</div>
        <div style={{ fontSize: 13, color: "var(--text-2)" }}>
          <strong style={{ color: "var(--text)" }}>{v.surgeon}</strong> · {v.institution} · {v.approach}
        </div>
      </div>
      <button className="btn btn-secondary">Watch <Icon.arrow/></button>
    </div>
  );
}

window.LibraryPage = LibraryPage;
