import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.PNG"], // Keep this for PNG assets
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
    outDir: "dist",
    emptyOutDir: true, // Ensures a clean build
  },
  publicDir: "public", // Ensures Netlify gets _redirects file
});
