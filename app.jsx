// Main App
function App() {
  const [theme, setTheme] = React.useState("dark");
  const [accent, setAccent] = React.useState("#2d5bff");
  const [page, setPage] = React.useState("home");
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    const root = document.documentElement;
    root.style.setProperty("--accent", accent);
    const hex = accent.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    root.style.setProperty("--accent-glow", `rgba(${r}, ${g}, ${b}, 0.35)`);
    root.style.setProperty("--accent-soft", `rgba(${r}, ${g}, ${b}, 0.12)`);
    root.style.setProperty("--accent-2", `rgb(${Math.min(r + 30, 255)}, ${Math.min(g + 30, 255)}, ${Math.min(b + 30, 255)})`);
  }, [theme, accent]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page, selectedVideo?.id]);

  return (
    <div className="shell">
      <Nav page={page} setPage={setPage} theme={theme} setTheme={setTheme}/>
      {page === "home" && <HomePage setPage={setPage} setSelectedVideo={setSelectedVideo}/>}
      {page === "library" && <LibraryPage setPage={setPage} setSelectedVideo={setSelectedVideo}/>}
      {page === "detail" && <DetailPage video={selectedVideo} setPage={setPage} setSelectedVideo={setSelectedVideo}/>}
      {page === "about" && <AboutPage setPage={setPage}/>}
      {page === "submit" && <SubmitPage setPage={setPage}/>}
      <Footer setPage={setPage} theme={theme}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
