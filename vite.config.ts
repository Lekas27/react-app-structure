import path from "path"; // ← import Node path module

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, type PluginOption } from "vite";

const shouldUseChecker = true;

export default defineConfig(async () => {
  const plugins: PluginOption[] = [react(), tailwindcss()];

  if (shouldUseChecker) {
    const { checker } = await import("vite-plugin-checker");

    const checkerPlugin = checker({
      typescript: {
        tsconfigPath: "./tsconfig.json",
        buildMode: true,
      },
      eslint: {
        lintCommand: "eslint .",
        useFlatConfig: true,
        dev: {
          overrideConfig: {
            overrideConfigFile: "./eslint.config.js",
          },
        },
      },
    });

    plugins.push(checkerPlugin);
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // <-- maps @ to ./src
      },
    },
  };
});
