import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/CaseStudies": {
        target: "https://macworldtech-nspt6z4y.manus.space",
        changeOrigin: true,
        rewrite: (requestPath) =>
          requestPath.replace(/^\/CaseStudies/, "") || "/",
      },
      "/styles.css": {
        target: "https://macworldtech-nspt6z4y.manus.space",
        changeOrigin: true,
      },
      "/script.js": {
        target: "https://macworldtech-nspt6z4y.manus.space",
        changeOrigin: true,
      },
      "/manus-storage": {
        target: "https://macworldtech-nspt6z4y.manus.space",
        changeOrigin: true,
      },
    },
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
