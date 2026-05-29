import { useState, useEffect, useCallback } from "react";

// Parse the URL hash into a route descriptor.
//   ""              -> { page: "home" }
//   "#/library?q=x" -> { page: "library", query: "x" }
//   "#/video/v1"    -> { page: "detail", videoId: "v1" }
//   "#/about"       -> { page: "about" }
//   "#/submit"      -> { page: "submit" }
export function parseHash(hash) {
  const raw = (hash || "").replace(/^#/, "");
  const [path, queryString] = raw.split("?");
  const parts = path.split("/").filter(Boolean);
  const params = new URLSearchParams(queryString || "");
  const q = params.get("q") || "";
  if (parts.length === 0) return { page: "home", query: q };
  const [first, second] = parts;
  if (first === "library") return { page: "library", query: q };
  if (first === "video") return { page: "detail", videoId: second || null };
  if (first === "about") return { page: "about" };
  if (first === "submit") return { page: "submit" };
  return { page: "home", query: q };
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const navigate = useCallback((to) => {
    const path = to.startsWith("/") ? to : "/" + to;
    const target = "#" + path;
    if (window.location.hash === target) {
      setRoute(parseHash(target)); // re-render even if unchanged
    } else {
      window.location.hash = target;
    }
  }, []);

  return { route, navigate };
}
