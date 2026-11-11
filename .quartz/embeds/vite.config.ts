import { defineConfig } from "vite";
import { spiceUnits } from "./unit-patch.mjs";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import { generateEntries } from "./routes.mjs";
const entries = generateEntries(process.cwd(), resolve("../.."));
export default defineConfig({
  resolve: {
    alias: {
      "~": resolve("."),
      "/demos": resolve("demos"),
      "jsxgraph/distrib/jsxgraph.css": resolve(
        "node_modules/jsxgraph/distrib/jsxgraph.css",
      ),
    },
  },
  root: ".generated",
  server: { fs: { allow: [resolve(".")] } },
  base: "./",
  plugins: [spiceUnits(), tailwindcss()],
  build: {
    outDir: process.env.EMBED_OUT ? resolve(process.env.EMBED_OUT) : "../dist",
    emptyOutDir: true,
    manifest: true,
    rollupOptions: { input: entries },
  },
  worker: { format: "es" },
});
