import { defineConfig } from "vite";
import { spiceUnits } from "./unit-patch.mjs";
import tailwindcss from "@tailwindcss/vite";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
const entries = readdirSync("entries", { recursive: true })
  .filter((p) => String(p).endsWith(".html"))
  .map((p) => resolve("entries", String(p)));
export default defineConfig({
  resolve: {
    alias: {
      "/src": resolve("src"),
      "jsxgraph/distrib/jsxgraph.css": resolve(
        "node_modules/jsxgraph/distrib/jsxgraph.css",
      ),
    },
  },
  root: "entries",
  base: "./",
  plugins: [spiceUnits(), tailwindcss()],
  build: {
    outDir: process.env.EMBED_OUT || "../dist",
    emptyOutDir: true,
    manifest: true,
    rollupOptions: { input: entries },
  },
  worker: { format: "es" },
});
