import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

// Convert the module URL to a file path and get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(), // React plugin for Vite
    runtimeErrorOverlay(), // Runtime error overlay plugin
    themePlugin(), // Theme plugin for shadcn
    // Conditionally include the cartographer plugin in development mode
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      // Alias for the src directory (adjust if needed)
      "@": path.resolve(__dirname, "src"),
      // Alias for the shared directory
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  build: {
    // Output directory for the build files
    outDir: path.resolve(__dirname, "dist/public"),
    // Empty the output directory before building
    emptyOutDir: true,
  },
});
