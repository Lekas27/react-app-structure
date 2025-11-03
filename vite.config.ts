import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type PluginOption } from "vite";

const shouldUseChecker = true;

export default defineConfig(async () => {
  const plugins: PluginOption[] = [react(), tailwindcss(), tsconfigPaths()];

  if (shouldUseChecker) {
    const { checker } = await import("vite-plugin-checker");

    const checkerPlugin = checker({
      typescript: {
        tsconfigPath: "./tsconfig.app.json",
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
