// Submit page — multi-step submission form
function SubmitPage({ setPage }) {
  const [step, setStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "", credentials: "", email: "", institution: "",
    coContrib: "",
    title: "", procedure: "", videoType: "", approach: "", platform: "", duration: "",
    summary: "", objectives: "", steps: "", pearls: "",
    coiYes: false, coiText: "",
    consentDeident: false, consentEdu: false,
    uploadKind: "link", linkUrl: "", filename: ""
  });
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const steps = [
    { id: "contrib", label: "Contributor", n: "01" },
    { id: "case", label: "Case Details", n: "02" },
    { id: "education", label: "Educational Content", n: "03" },
    { id: "review", label: "Review & Submit", n: "04" },
  ];

  if (submitted) {
    return (
      <main style={{ paddingTop: 80, paddingBottom: 120 }}>
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <div style={{ width: 88, height: 88, margin: "0 auto", borderRadius: "50%", background: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--accent)" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <span className="eyebrow" style={{ justifyContent: "center", marginTop: 32 }}>Submission received</span>
          <h1 style={{ fontSize: 48, marginTop: 16 }}>Thank you, {form.name || "Doctor"}.</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Submission ID <span className="text-mono" style={{ color: "var(--accent)" }}>VAR-2026-{Math.floor(Math.random() * 9000 + 1000)}</span> · You'll receive an editorial decision within 14 business days. A confirmation has been sent to <strong style={{ color: "var(--text)" }}>{form.email || "your registered email"}</strong>.
          </p>
          <div className="flex gap-12" style={{ justifyContent: "center", marginTop: 40 }}>
            <button className="btn btn-primary" onClick={() => setPage("library")}>Browse the library <Icon.arrow/></button>
            <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setStep(0); }}>Submit another</button>
          </div>
        </div>
      </main>
    );
  }

  const goNext = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const goPrev = () => setStep(s => Math.max(s - 1, 0));

  return (
    <main>
      <section style={{ paddingTop: 64, paddingBottom: 24, borderBottom: "1px solid var(--border-soft)" }}>
        <div className="container" style={{ maxWidth: 1080 }}>
          <span className="eyebrow">Submit a Video</span>
          <h1 style={{ fontSize: 48, marginTop: 16 }}>Publish your teaching case.</h1>
          <p className="lead" style={{ marginTop: 12, maxWidth: 640 }}>
            All submissions are reviewed by our editorial board for technical accuracy, educational value and de-identification. Average decision time: <strong style={{ color: "var(--text)" }}>14 business days</strong>.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 32, paddingBottom: 96 }}>
        <div className="container" style={{ maxWidth: 1080, display: "grid", gridTemplateColumns: "260px 1fr", gap: 48, alignItems: "start" }}>
          {/* Stepper */}
          <aside style={{ position: "sticky", top: 88 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {steps.map((s, i) => {
                const active = i === step, done = i < step;
                return (
                  <button key={s.id} onClick={() => i <= step && setStep(i)} style={{
                    display: "flex", alignItems: "center", gap: 14, padding: "14px 0",
                    borderBottom: i < steps.length - 1 ? "1px solid var(--border-soft)" : "none",
                    cursor: i <= step ? "pointer" : "default", textAlign: "left", width: "100%",
                    opacity: i > step ? 0.5 : 1
                  }}>
                    <span style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: done ? "var(--accent)" : active ? "var(--accent-soft)" : "var(--surface-2)",
                      border: "1px solid " + (active || done ? "var(--accent)" : "var(--border)"),
                      color: done ? "white" : active ? "var(--accent)" : "var(--text-3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, flexShrink: 0
                    }}>{done ? <Icon.check/> : s.n}</span>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Step {i + 1}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: active ? "var(--accent)" : "var(--text)" }}>{s.label}</div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div style={{ marginTop: 24, padding: 16, background: "var(--surface-2)", border: "1px solid var(--border-soft)", borderRadius: 10, fontSize: 12, color: "var(--text-3)", lineHeight: 1.5 }}>
              <div style={{ color: "var(--text)", fontWeight: 600, marginBottom: 6 }}>Need help?</div>
              Read the editorial standards or contact <a style={{ color: "var(--accent)" }}>editors@varsit-e.org</a>.
            </div>
          </aside>

          {/* Form */}
          <div className="card" style={{ padding: 40 }}>
            {step === 0 && <StepContrib form={form} update={update}/>}
            {step === 1 && <StepCase form={form} update={update}/>}
            {step === 2 && <StepEdu form={form} update={update}/>}
            {step === 3 && <StepReview form={form} update={update}/>}

            <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--border-soft)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button className="btn btn-ghost" onClick={goPrev} disabled={step === 0} style={{ opacity: step === 0 ? 0.4 : 1 }}>
                <Icon.arrowLeft/> Previous
              </button>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-3)", letterSpacing: "0.1em" }}>STEP {step + 1} OF {steps.length}</div>
              {step < steps.length - 1 ? (
                <button className="btn btn-primary" onClick={goNext}>Continue <Icon.arrow/></button>
              ) : (
                <button className="btn btn-primary"
                  disabled={!form.consentDeident || !form.consentEdu}
                  style={{ opacity: (form.consentDeident && form.consentEdu) ? 1 : 0.4 }}
                  onClick={() => { if (form.consentDeident && form.consentEdu) { setSubmitted(true); window.scrollTo({ top: 0 }); } }}>
                  Submit for review <Icon.arrow/>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FormSection({ title, sub, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ fontSize: 22 }}>{title}</h3>
      {sub && <p style={{ marginTop: 6, fontSize: 14 }}>{sub}</p>}
      <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 20 }}>
        {children}
      </div>
    </div>
  );
}

function Field({ label, hint, children, span }) {
  return (
    <div style={{ gridColumn: span ? "span " + span : "auto" }}>
      <label className="label">{label}</label>
      {children}
      {hint && <div className="hint">{hint}</div>}
    </div>
  );
}

function StepContrib({ form, update }) {
  return (
    <FormSection title="Contributor information" sub="The lead surgeon credited as the video's primary author.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <Field label="Full name">
          <input className="input" placeholder="Jane Doe" value={form.name} onChange={(e) => update("name", e.target.value)}/>
        </Field>
        <Field label="Credentials" hint="e.g. MD, MD PhD, FACS">
          <input className="input" placeholder="MD, FACS" value={form.credentials} onChange={(e) => update("credentials", e.target.value)}/>
        </Field>
        <Field label="Institutional email">
          <input className="input" type="email" placeholder="jdoe@institution.edu" value={form.email} onChange={(e) => update("email", e.target.value)}/>
        </Field>
        <Field label="Institution">
          <input className="input" placeholder="Cleveland Clinic" value={form.institution} onChange={(e) => update("institution", e.target.value)}/>
        </Field>
        <Field label="Co-contributors" hint="Optional · comma-separated, in author order" span={2}>
          <input className="input" placeholder="John Smith, MD; Sarah Lee, MD PhD" value={form.coContrib} onChange={(e) => update("coContrib", e.target.value)}/>
        </Field>
      </div>
    </FormSection>
  );
}

function StepCase({ form, update }) {
  return (
    <>
      <FormSection title="Video & case details" sub="Provide procedural metadata so reviewers and trainees can find and classify your work.">
        <Field label="Video title">
          <input className="input" placeholder="Robotic Single-Port Partial Nephrectomy: A Step-by-Step Approach" value={form.title} onChange={(e) => update("title", e.target.value)}/>
        </Field>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <Field label="Procedure">
            <input className="input" placeholder="Partial Nephrectomy" value={form.procedure} onChange={(e) => update("procedure", e.target.value)}/>
          </Field>
          <Field label="Video type">
            <select className="select" value={form.videoType} onChange={(e) => update("videoType", e.target.value)}>
              <option value="">Select type…</option>
              <option>Surgical Step-by-Step (max 30 min)</option>
              <option>Surgical Movie (max 8 min)</option>
              <option>Webinar / Video Presentation</option>
            </select>
          </Field>
          <Field label="Surgical approach">
            <input className="input" placeholder="Robotic Transperitoneal" value={form.approach} onChange={(e) => update("approach", e.target.value)}/>
          </Field>
          <Field label="Robotic platform" hint="If applicable">
            <input className="input" placeholder="da Vinci SP" value={form.platform} onChange={(e) => update("platform", e.target.value)}/>
          </Field>
          <Field label="Duration" hint="mm:ss">
            <input className="input" placeholder="27:14" value={form.duration} onChange={(e) => update("duration", e.target.value)}/>
          </Field>
        </div>
        <Field label="Case summary" hint="Brief deidentified clinical summary, indication, and key intra-op decisions (~120 words).">
          <textarea className="textarea" rows={5} placeholder="A 58-year-old male with a 3.2 cm enhancing renal mass…" value={form.summary} onChange={(e) => update("summary", e.target.value)}/>
        </Field>
      </FormSection>

      <FormSection title="Video source" sub="We recommend hosting on Vimeo (unlisted, password-protected) or YouTube (unlisted) — VARSIT-E embeds your hosted player so quality, captions and analytics stay with you. Direct uploads are also accepted for archival.">
        <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
          {[["link", "Vimeo / YouTube / Drive link"], ["upload", "Upload master file"]].map(([k, l]) => (
            <button key={k} onClick={() => update("uploadKind", k)} className="pill" style={{
              cursor: "pointer", borderColor: form.uploadKind === k ? "var(--accent)" : "var(--border)",
              background: form.uploadKind === k ? "var(--accent-soft)" : "var(--surface)",
              color: form.uploadKind === k ? "var(--accent)" : "var(--text-2)"
            }}>{l}</button>
          ))}
        </div>
        {form.uploadKind === "link" ? (
          <>
          <Field label="Video URL" hint="Paste an unlisted Vimeo, YouTube unlisted, or Google Drive shareable link. Vimeo unlisted + password is the editorial preference for sensitive surgical content.">
            <input className="input" placeholder="https://vimeo.com/123456789  ·  or  https://youtu.be/…" value={form.linkUrl} onChange={(e) => update("linkUrl", e.target.value)}/>
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 8 }}>
            {[
              { p: "Vimeo (unlisted + password)", n: "Recommended", best: true },
              { p: "YouTube (unlisted)", n: "Free, broad CDN" },
              { p: "Google Drive (shareable)", n: "Archival fallback" },
            ].map(o => (
              <div key={o.p} style={{ padding: 12, border: "1px solid " + (o.best ? "var(--accent)" : "var(--border)"), borderRadius: 10, background: o.best ? "var(--accent-soft)" : "var(--surface-2)" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: o.best ? "var(--accent)" : "var(--text)" }}>{o.p}</div>
                <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 2 }}>{o.n}</div>
              </div>
            ))}
          </div>
          </>
        ) : (
          <div style={{ padding: 32, border: "2px dashed var(--border)", borderRadius: 12, textAlign: "center", background: "var(--surface-2)" }}>
            <Icon.upload style={{ width: 28, height: 28, color: "var(--text-3)" }}/>
            <div style={{ marginTop: 12, fontWeight: 600 }}>Drag your video file here</div>
            <div style={{ marginTop: 6, fontSize: 13, color: "var(--text-3)" }}>MP4 or MOV · 4K preferred · up to 12 GB</div>
            <button className="btn btn-secondary" style={{ marginTop: 16 }}>Choose file</button>
          </div>
        )}
      </FormSection>
    </>
  );
}

function StepEdu({ form, update }) {
  return (
    <>
      <FormSection title="Learning objectives" sub="Three to five outcomes a viewer should achieve after watching. One per line.">
        <textarea className="textarea" rows={5} placeholder="Recognize anatomical landmarks for SP transperitoneal renal access&#10;Master the docking sequence for the da Vinci SP platform&#10;…" value={form.objectives} onChange={(e) => update("objectives", e.target.value)}/>
      </FormSection>
      <FormSection title="Surgical steps" sub="A timestamped step list for in-player navigation. Format: 03:42 — Step name, one per line.">
        <textarea className="textarea" rows={6} placeholder="00:00 — Patient positioning & port placement&#10;02:48 — SP docking and instrument loading&#10;…" value={form.steps} onChange={(e) => update("steps", e.target.value)}/>
      </FormSection>
      <FormSection title="Teaching pearls" sub="Author's clinical insights — what you'd say standing at the scrub sink with a senior trainee. One per line.">
        <textarea className="textarea" rows={5} placeholder="Pre-operative 3D reconstruction is essential for SP planning…" value={form.pearls} onChange={(e) => update("pearls", e.target.value)}/>
      </FormSection>
      <FormSection title="Conflict of Interest" sub="Required for all submissions.">
        <div style={{ display: "flex", gap: 8 }}>
          {[["false", "No relevant disclosures"], ["true", "I have disclosures to report"]].map(([k, l]) => (
            <button key={k} onClick={() => update("coiYes", k === "true")} className="pill" style={{
              cursor: "pointer",
              borderColor: String(form.coiYes) === k ? "var(--accent)" : "var(--border)",
              background: String(form.coiYes) === k ? "var(--accent-soft)" : "var(--surface)",
              color: String(form.coiYes) === k ? "var(--accent)" : "var(--text-2)"
            }}>{l}</button>
          ))}
        </div>
        {form.coiYes && (
          <textarea className="textarea" rows={3} placeholder="List financial or institutional relationships relevant to this submission…" value={form.coiText} onChange={(e) => update("coiText", e.target.value)}/>
        )}
      </FormSection>
    </>
  );
}

function StepReview({ form, update }) {
  return (
    <>
      <FormSection title="Review your submission" sub="Confirm the details below match your intended submission.">
        <div className="card" style={{ padding: 20, background: "var(--surface-2)", border: "1px solid var(--border-soft)" }}>
          <Summary l="Contributor" v={form.name ? `${form.name}${form.credentials ? ", " + form.credentials : ""}` : "—"}/>
          <Summary l="Institution" v={form.institution || "—"}/>
          <Summary l="Title" v={form.title || "—"}/>
          <Summary l="Procedure" v={form.procedure || "—"}/>
          <Summary l="Type" v={form.videoType || "—"}/>
          <Summary l="Approach" v={form.approach || "—"}/>
          <Summary l="Duration" v={form.duration || "—"}/>
          <Summary l="Upload" v={form.uploadKind === "link" ? (form.linkUrl || "Link pending") : (form.filename || "File pending")}/>
        </div>
      </FormSection>
      <FormSection title="Required attestations" sub="Both confirmations are required to submit.">
        <Checkbox checked={form.consentDeident} onChange={(v) => update("consentDeident", v)}>
          <strong>I confirm full de-identification.</strong> All patient identifiers, faces, dates, MRNs, institution-identifying overlays and metadata have been removed from this video and supporting materials.
        </Checkbox>
        <Checkbox checked={form.consentEdu} onChange={(v) => update("consentEdu", v)}>
          <strong>I grant educational use rights.</strong> I have the legal right to publish this video and grant VARSIT-E a non-exclusive, royalty-free license for academic and educational distribution.
        </Checkbox>
      </FormSection>
    </>
  );
}

function Summary({ l, v }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontSize: 14, borderBottom: "1px solid var(--border-soft)" }}>
      <span style={{ color: "var(--text-3)" }}>{l}</span>
      <span style={{ fontWeight: 600, textAlign: "right", maxWidth: "60%" }}>{v}</span>
    </div>
  );
}

function Checkbox({ checked, onChange, children }) {
  return (
    <label style={{ display: "flex", gap: 12, alignItems: "start", cursor: "pointer", padding: 16, border: "1px solid " + (checked ? "var(--accent)" : "var(--border)"), borderRadius: 10, background: checked ? "var(--accent-soft)" : "var(--surface)" }}>
      <span style={{
        width: 22, height: 22, borderRadius: 6, border: "1.5px solid " + (checked ? "var(--accent)" : "var(--border)"),
        background: checked ? "var(--accent)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0, marginTop: 1
      }}>
        {checked && <Icon.check/>}
      </span>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} style={{ display: "none" }}/>
      <span style={{ fontSize: 14, lineHeight: 1.5 }}>{children}</span>
    </label>
  );
}

window.SubmitPage = SubmitPage;
