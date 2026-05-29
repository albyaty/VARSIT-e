import React, { useState, useEffect, useMemo } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import { useHashRoute } from "./useHashRoute.js";
import { DATA } from "./data.js";
import { Nav, Footer } from "./components.jsx";
import HomePage from "./pages/home.jsx";
import LibraryPage from "./pages/library.jsx";
import DetailPage from "./pages/detail.jsx";
import AboutPage from "./pages/about.jsx";
import SubmitPage from "./pages/submit.jsx";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [accent, setAccent] = useState("#2d5bff");
  const { route, navigate } = useHashRoute();

  // Apply theme + accent to the document
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.style.setProperty("--accent", accent);
    const hex = accent.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    root.style.setProperty("--accent-glow", `rgba(${r}, ${g}, ${b}, 0.35)`);
    root.style.setProperty("--accent-soft", `rgba(${r}, ${g}, ${b}, 0.12)`);
    root.style.setProperty("--accent-2", `rgb(${Math.min(r + 30, 255)}, ${Math.min(g + 30, 255)}, ${Math.min(b + 30, 255)})`);
  }, [theme, accent]);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.page, route.videoId]);

  const setPage = (id) => navigate(id === "home" ? "/" : "/" + id);
  const openVideo = (v) => navigate("/video/" + v.id);
  const selectedVideo = useMemo(
    () => (route.videoId ? DATA.videos.find(v => v.id === route.videoId) : null),
    [route.videoId]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, accent, setAccent }}>
      <div className="shell">
        <Nav page={route.page} navigate={navigate} />
        {route.page === "home" && <HomePage setPage={setPage} openVideo={openVideo} />}
        {route.page === "library" && <LibraryPage setPage={setPage} openVideo={openVideo} initialQuery={route.query || ""} />}
        {route.page === "detail" && <DetailPage video={selectedVideo} setPage={setPage} openVideo={openVideo} />}
        {route.page === "about" && <AboutPage setPage={setPage} />}
        {route.page === "submit" && <SubmitPage setPage={setPage} />}
        <Footer navigate={navigate} />
      </div>
    </ThemeContext.Provider>
  );
}
