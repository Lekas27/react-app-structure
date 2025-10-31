import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

const shouldUseChecker = true; // or any condition you want

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
  };
});
