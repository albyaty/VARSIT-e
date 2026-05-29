import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works both at the GitHub Pages subpath
// (/VARSIT-e/) and at localhost root — and survives a future rename or custom domain.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsInlineLimit: 8192,
  },
});
