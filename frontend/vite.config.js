import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/", // This sets the base public path
  build: {
    outDir: "./build/", // This sets the output directory
    rollupOptions: {
      input: {
        main: "index.html", // Entry point for the application
      },
      output: {
        entryFileNames: "[name].[hash].js",
        chunkFileNames: "chunks/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
})
