// VARSIT-E — sample video & faculty data

window.VARSITE_DATA = (() => {
  // Procedurally-generated thumbnail backgrounds — abstract surgical/tech imagery without real patient content
  const thumbs = {
    // hue, hue2, pattern
    a: "linear-gradient(135deg, #0b1430 0%, #1c2c66 40%, #2d5bff 100%)",
    b: "linear-gradient(135deg, #0a0f24 0%, #163259 50%, #4d7bff 100%)",
    c: "radial-gradient(circle at 30% 30%, #2d5bff 0%, #0a1130 60%, #07080c 100%)",
    d: "linear-gradient(160deg, #1a0f2e 0%, #2b1a5e 50%, #2d5bff 100%)",
    e: "radial-gradient(ellipse at 70% 30%, #4d7bff 0%, #0d1a3d 50%, #07080c 100%)",
    f: "linear-gradient(135deg, #07080c 0%, #1a2348 50%, #2d5bff 100%)",
    g: "linear-gradient(135deg, #0a1838 0%, #1d3070 100%)",
    h: "radial-gradient(circle at 60% 40%, #2d5bff 0%, #14224d 50%, #07080c 100%)",
    i: "linear-gradient(160deg, #0e1a3a 0%, #243d80 60%, #4d7bff 100%)",
    j: "linear-gradient(135deg, #1a0e2a 0%, #2d1f4e 50%, #2d5bff 100%)",
    k: "radial-gradient(circle at 40% 60%, #4d7bff 0%, #0d1a3d 60%, #07080c 100%)",
    l: "linear-gradient(135deg, #0a0f24 0%, #1c2c66 100%)",
  };

  const videos = [
    {
      id: "v1",
      title: "Robotic Single-Port Partial Nephrectomy: A Step-by-Step Approach",
      surgeon: "Jihad Kaouk, MD",
      institution: "Cleveland Clinic",
      duration: "27:14",
      durationMin: 27,
      category: "Step-by-Step",
      type: "step-by-step",
      procedure: "Partial Nephrectomy",
      approach: "Robotic Single-Port",
      platform: "da Vinci SP",
      difficulty: "Advanced",
      tags: ["Renal", "SP", "Oncology", "Narrated"],
      views: "12.4k", year: 2025, thumb: thumbs.a,
      embedUrl: "https://player.vimeo.com/video/76979871?h=8272103f6e&title=0&byline=0&portrait=0",
      summary: "A 58-year-old male with a 3.2 cm enhancing renal mass in the upper pole of the right kidney. Single-port robotic transperitoneal approach performed via supraumbilical incision with successful tumor enucleation and renorrhaphy. Warm ischemia time 18 minutes.",
      objectives: [
        "Recognize anatomical landmarks for SP transperitoneal renal access",
        "Master the docking sequence for the da Vinci SP platform",
        "Apply controlled hilar clamping and structured tumor enucleation",
        "Reconstruct the renorrhaphy with sliding-clip technique"
      ],
      steps: [
        { t: "00:00", title: "Patient positioning & port placement" },
        { t: "02:48", title: "SP docking and instrument loading" },
        { t: "05:12", title: "Colon mobilization & retroperitoneal exposure" },
        { t: "09:30", title: "Hilar dissection and vessel control" },
        { t: "13:45", title: "Tumor identification with intraoperative ultrasound" },
        { t: "16:20", title: "Hilar clamping and tumor enucleation" },
        { t: "21:08", title: "Two-layer renorrhaphy with sliding clips" },
        { t: "25:00", title: "Specimen retrieval and closure" }
      ],
      pearls: [
        "Pre-operative 3D reconstruction is essential for SP planning given the limited working volume.",
        "Maintain camera-instrument triangulation by adjusting the boom rather than re-docking.",
        "Use bulldog clamps prior to cold-cut to confirm controlled ischemia before commitment."
      ]
    },
    {
      id: "v2",
      title: "Retzius-Sparing Robotic Prostatectomy: Posterior Approach",
      surgeon: "Riccardo Autorino, MD, PhD",
      institution: "Rush University",
      duration: "28:42", durationMin: 28,
      category: "Step-by-Step", type: "step-by-step",
      procedure: "Radical Prostatectomy", approach: "Robotic Transperitoneal",
      platform: "da Vinci Xi", difficulty: "Advanced",
      tags: ["Prostate", "Retzius-Sparing", "Continence"],
      views: "9.1k", year: 2025, thumb: thumbs.b,
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      summary: "67-year-old with intermediate-risk prostate cancer (Gleason 3+4=7, PSA 8.4). Retzius-sparing approach preserves the anterior periprostatic anatomy to maximize early continence recovery.",
      objectives: ["Identify Douglas pouch landmarks", "Develop the posterior plane", "Preserve anterior fascia"],
      steps: [
        { t: "00:00", title: "Posterior peritoneal incision" },
        { t: "04:20", title: "Seminal vesicle dissection" },
        { t: "09:00", title: "Denonvilliers fascia development" },
        { t: "14:30", title: "Lateral pedicle control" },
        { t: "20:15", title: "Apical dissection" },
        { t: "25:00", title: "Vesicourethral anastomosis" }
      ],
      pearls: [
        "Hydrodissection helps identify the Denonvilliers plane in patients with prior inflammation.",
        "Avoid energy on the lateral pedicles to preserve neurovascular bundle integrity."
      ]
    },
    {
      id: "v3",
      title: "Open Radical Cystectomy with Studer Neobladder Reconstruction",
      surgeon: "Christopher J. Weight, MD",
      institution: "Cleveland Clinic",
      duration: "06:48", durationMin: 7,
      category: "Surgical Movie", type: "movie",
      procedure: "Radical Cystectomy", approach: "Open",
      platform: "—", difficulty: "Expert",
      tags: ["Bladder", "Diversion", "Reconstruction"],
      views: "7.6k", year: 2024, thumb: thumbs.c,
      summary: "Highlights of a complete open radical cystectomy with bilateral pelvic lymph node dissection and Studer orthotopic neobladder, condensed into a focused teaching reel.",
      objectives: ["Survey the operative field", "Outline templated PLND", "Reconstruct an orthotopic reservoir"],
      steps: [
        { t: "00:00", title: "Exposure and ureteral identification" },
        { t: "01:30", title: "Pedicle control" },
        { t: "03:00", title: "Bilateral PLND" },
        { t: "04:20", title: "Bowel harvest & detubularization" },
        { t: "05:30", title: "Neobladder configuration" },
        { t: "06:15", title: "Urethral anastomosis" }
      ],
      pearls: ["Always confirm ureteral viability before anastomosis with a watertight seal."]
    },
    {
      id: "v4",
      title: "Robotic Inguinal Lymphadenectomy: Templated Dissection",
      surgeon: "Petar Bajic, MD",
      institution: "Cleveland Clinic",
      duration: "22:10", durationMin: 22,
      category: "Step-by-Step", type: "step-by-step",
      procedure: "Lymphadenectomy", approach: "Robotic",
      platform: "da Vinci Xi", difficulty: "Intermediate",
      tags: ["Penile", "Lymph Nodes", "Templated"],
      views: "4.2k", year: 2025, thumb: thumbs.d,
      summary: "Robotic videoscopic inguinal lymphadenectomy via subfascial approach in a patient with cT1 squamous cell carcinoma of the penis with palpable adenopathy.",
      objectives: ["Identify saphenofemoral junction", "Outline subfascial template", "Maintain skin flap viability"],
      steps: [
        { t: "00:00", title: "Patient positioning, port placement" },
        { t: "03:30", title: "Subfascial space development" },
        { t: "08:00", title: "Saphenous vein identification & ligation" },
        { t: "13:00", title: "Templated nodal dissection" },
        { t: "18:00", title: "Specimen retrieval & drain placement" }
      ],
      pearls: ["Preserve a thick skin flap to mitigate post-op wound dehiscence."]
    },
    {
      id: "v5",
      title: "Female Pelvic Floor Reconstruction: Apical Suspension",
      surgeon: "Raevti Bole, MD",
      institution: "Cleveland Clinic",
      duration: "24:55", durationMin: 25,
      category: "Step-by-Step", type: "step-by-step",
      procedure: "Pelvic Floor", approach: "Robotic Transperitoneal",
      platform: "da Vinci Xi", difficulty: "Intermediate",
      tags: ["Pelvic Floor", "Reconstruction", "Female"],
      views: "3.8k", year: 2025, thumb: thumbs.e,
      summary: "Robotic sacrocolpopexy with concurrent paravaginal repair for stage III apical and anterior compartment prolapse. Lightweight polypropylene Y-mesh placed via transperitoneal route.",
      objectives: ["Develop presacral plane", "Anchor mesh tension-free", "Avoid ureteral injury"],
      steps: [
        { t: "00:00", title: "Adhesiolysis & exposure" },
        { t: "04:00", title: "Vaginal apex dissection" },
        { t: "10:00", title: "Anterior & posterior mesh attachment" },
        { t: "16:30", title: "Sacral promontory anchoring" },
        { t: "21:00", title: "Peritoneal closure" }
      ],
      pearls: ["Always identify the right ureter before sacral anchoring."]
    },
    {
      id: "v6",
      title: "Live Webinar: Updates in Cytoreductive Nephrectomy 2026",
      surgeon: "Jihad Kaouk, MD + Panel",
      institution: "VARSIT-E Faculty Roundtable",
      duration: "62:30", durationMin: 62,
      category: "Webinar", type: "webinar",
      procedure: "Cytoreductive Nephrectomy", approach: "Discussion",
      platform: "—", difficulty: "All levels",
      tags: ["Webinar", "2026", "Panel"],
      views: "5.5k", year: 2026, thumb: thumbs.f,
      summary: "A multidisciplinary panel discusses the evolving role of cytoreductive nephrectomy in the era of immune checkpoint inhibitors, with case-based debate.",
      objectives: ["Review CARMENA & SURTIME data updates", "Identify ideal CN candidates"],
      steps: [
        { t: "00:00", title: "Introduction" },
        { t: "06:00", title: "Case 1: oligometastatic ccRCC" },
        { t: "24:00", title: "Case 2: locally advanced disease" },
        { t: "42:00", title: "Audience Q&A" }
      ],
      pearls: ["Selection — not technique — drives outcome in CN."]
    },
    {
      id: "v7",
      title: "Transvesical Single-Port Simple Prostatectomy",
      surgeon: "Jihad Kaouk, MD",
      institution: "Cleveland Clinic",
      duration: "29:18", durationMin: 29,
      category: "Step-by-Step", type: "step-by-step",
      procedure: "Simple Prostatectomy", approach: "Robotic Single-Port",
      platform: "da Vinci SP", difficulty: "Advanced",
      tags: ["BPH", "SP", "Transvesical"],
      views: "6.7k", year: 2025, thumb: thumbs.g,
      summary: "Single-port transvesical simple prostatectomy in a patient with 142 cc prostate refractory to medical therapy. Direct bladder access avoids the peritoneal cavity entirely.",
      objectives: ["Map suprapubic access", "Manage adenoma enucleation plane"],
      steps: [
        { t: "00:00", title: "Suprapubic SP port placement" },
        { t: "05:30", title: "Bladder docking & insufflation" },
        { t: "10:00", title: "Bladder neck circumferential incision" },
        { t: "16:00", title: "Adenoma enucleation" },
        { t: "23:00", title: "Trigonization & hemostasis" }
      ],
      pearls: ["Confirm AirSeal pressure < 15 mmHg to avoid extraperitoneal emphysema."]
    },
    {
      id: "v8",
      title: "Augmented Reality Guidance for Complex Renal Masses",
      surgeon: "Riccardo Autorino, MD, PhD",
      institution: "Rush University",
      duration: "07:20", durationMin: 7,
      category: "Surgical Movie", type: "movie",
      procedure: "Partial Nephrectomy", approach: "Robotic AR-Guided",
      platform: "da Vinci Xi + AR Overlay", difficulty: "Advanced",
      tags: ["AR", "Renal", "Innovation"],
      views: "8.9k", year: 2026, thumb: thumbs.h,
      summary: "Concise demonstration of intraoperative augmented-reality overlay guiding tumor enucleation in a complex hilar renal mass.",
      objectives: ["Understand AR-overlay calibration", "Recognize registration drift signs"],
      steps: [{ t: "00:00", title: "AR registration" }, { t: "02:30", title: "Tumor mapping" }, { t: "05:00", title: "Enucleation" }],
      pearls: ["Re-register after every major retraction shift."]
    },
    {
      id: "v9",
      title: "Inflatable Penile Prosthesis: Reservoir Placement Pearls",
      surgeon: "Petar Bajic, MD",
      institution: "Cleveland Clinic",
      duration: "06:05", durationMin: 6,
      category: "Surgical Movie", type: "movie",
      procedure: "Penile Prosthesis", approach: "Open Infrapubic",
      platform: "—", difficulty: "Intermediate",
      tags: ["Prosthetics", "Andrology"],
      views: "3.1k", year: 2025, thumb: thumbs.i,
      summary: "Focused movie on safe reservoir placement strategies including ectopic high-submuscular technique to avoid bowel and vascular injury.",
      objectives: ["Identify Retzius vs ectopic landmarks"],
      steps: [{ t: "00:00", title: "Approach" }, { t: "02:00", title: "Ectopic placement" }, { t: "04:30", title: "Closure" }],
      pearls: ["Always palpate for vascular pulsations before reservoir insertion."]
    },
    {
      id: "v10",
      title: "Webinar: Trifecta Outcomes in Modern Partial Nephrectomy",
      surgeon: "Christopher J. Weight, MD",
      institution: "Cleveland Clinic",
      duration: "48:12", durationMin: 48,
      category: "Webinar", type: "webinar",
      procedure: "Partial Nephrectomy", approach: "Discussion",
      platform: "—", difficulty: "All levels",
      tags: ["Outcomes", "Webinar"],
      views: "4.4k", year: 2025, thumb: thumbs.j,
      summary: "A data-driven discussion of the trifecta and pentafecta outcome metrics in robotic partial nephrectomy across high-volume centers.",
      objectives: ["Define modern outcome metrics"],
      steps: [{ t: "00:00", title: "Introduction" }, { t: "10:00", title: "Data review" }, { t: "30:00", title: "Q&A" }],
      pearls: ["Trifecta is necessary but not sufficient — function trumps margins long term."]
    },
    {
      id: "v11",
      title: "Salvage Robotic Prostatectomy after Radiation Failure",
      surgeon: "Jihad Kaouk, MD",
      institution: "Cleveland Clinic",
      duration: "26:40", durationMin: 27,
      category: "Step-by-Step", type: "step-by-step",
      procedure: "Salvage Prostatectomy", approach: "Robotic Transperitoneal",
      platform: "da Vinci Xi", difficulty: "Expert",
      tags: ["Salvage", "Post-Radiation", "Reconstruction"],
      views: "5.9k", year: 2024, thumb: thumbs.k,
      summary: "Salvage radical prostatectomy in a patient with biochemical recurrence following primary radiotherapy. Approach emphasizes tissue plane recognition in the irradiated pelvis.",
      objectives: ["Recognize fibrotic plane challenges"],
      steps: [{ t: "00:00", title: "Exposure" }, { t: "10:00", title: "Apical dissection" }, { t: "20:00", title: "Anastomosis" }],
      pearls: ["Anticipate higher anastomotic leak risk — leave catheter longer."]
    },
    {
      id: "v12",
      title: "Female Sexual Health Surgery: Vestibulectomy Technique",
      surgeon: "Raevti Bole, MD",
      institution: "Cleveland Clinic",
      duration: "07:55", durationMin: 8,
      category: "Surgical Movie", type: "movie",
      procedure: "Vestibulectomy", approach: "Open",
      platform: "—", difficulty: "Intermediate",
      tags: ["Female", "Sexual Health"],
      views: "2.6k", year: 2025, thumb: thumbs.l,
      summary: "Modified vestibulectomy with vaginal advancement flap for refractory provoked vestibulodynia.",
      objectives: ["Demarcate vestibular tissue", "Preserve hymenal landmarks"],
      steps: [{ t: "00:00", title: "Mapping" }, { t: "03:00", title: "Excision" }, { t: "05:30", title: "Flap advancement" }],
      pearls: ["Tension-free closure is paramount; mobilize widely."]
    },
  ];

  const faculty = [
    {
      name: "Jihad Kaouk, MD",
      role: "Founding Director, Surgical Innovation",
      institution: "Cleveland Clinic",
      bio: "Pioneer of single-port and laparo-endoscopic single-site surgery. Author of 600+ peer-reviewed publications shaping modern robotic urologic oncology.",
      tags: ["Single-Port", "Robotic Oncology", "Innovation"],
      initials: "JK", color: "#2d5bff"
    },
    {
      name: "Riccardo Autorino, MD, PhD",
      role: "Chair of Urology",
      institution: "Rush University",
      bio: "Internationally recognized for image-guided and AR-augmented robotic surgery, with focus on educational outcomes research.",
      tags: ["AR Surgery", "Imaging", "Education"],
      initials: "RA", color: "#4d7bff"
    },
    {
      name: "Christopher J. Weight, MD",
      role: "Director of Urologic Oncology",
      institution: "Cleveland Clinic",
      bio: "Open and minimally-invasive oncology surgeon with deep expertise in advanced bladder cancer and outcomes-driven nephron-sparing surgery.",
      tags: ["Bladder Cancer", "Reconstruction", "Outcomes"],
      initials: "CW", color: "#7a9aff"
    },
    {
      name: "Petar Bajic, MD",
      role: "Director, Center for Men's Health",
      institution: "Cleveland Clinic",
      bio: "Andrologic and reconstructive surgeon focused on prosthetics, microsurgery and men's health innovation.",
      tags: ["Andrology", "Microsurgery", "Prosthetics"],
      initials: "PB", color: "#2d5bff"
    },
    {
      name: "Raevti Bole, MD",
      role: "Reconstructive & Functional Urology",
      institution: "Cleveland Clinic",
      bio: "Reconstructive urologist specializing in pelvic floor disorders, female sexual health, and complex reconstructive surgery.",
      tags: ["Pelvic Floor", "Sexual Health", "Reconstruction"],
      initials: "RB", color: "#4d7bff"
    },
  ];

  const filterDefs = {
    type: { label: "Video Type", options: ["Step-by-Step", "Surgical Movie", "Webinar"] },
    procedure: { label: "Procedure", options: ["Partial Nephrectomy", "Radical Prostatectomy", "Radical Cystectomy", "Lymphadenectomy", "Pelvic Floor", "Simple Prostatectomy", "Salvage Prostatectomy", "Penile Prosthesis", "Vestibulectomy", "Cytoreductive Nephrectomy"] },
    approach: { label: "Surgical Approach", options: ["Robotic Single-Port", "Robotic Transperitoneal", "Open", "Robotic AR-Guided", "Open Infrapubic", "Robotic"] },
    platform: { label: "Robotic Platform", options: ["da Vinci SP", "da Vinci Xi", "da Vinci Xi + AR Overlay", "—"] },
    difficulty: { label: "Difficulty", options: ["Intermediate", "Advanced", "Expert", "All levels"] },
    surgeon: { label: "Surgeon", options: ["Jihad Kaouk, MD", "Riccardo Autorino, MD, PhD", "Christopher J. Weight, MD", "Petar Bajic, MD", "Raevti Bole, MD"] },
    institution: { label: "Institution", options: ["Cleveland Clinic", "Rush University"] },
  };

  return { videos, faculty, filterDefs, thumbs };
})();
