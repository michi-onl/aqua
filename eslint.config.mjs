import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Theme/accent state is read from localStorage after mount on purpose, so prerendered HTML hydrates cleanly.
    rules: { "react-hooks/set-state-in-effect": "off" },
  },
  globalIgnores([
    "cloudflare-env.d.ts",
    ".open-next/**",
    ".next/**",
    "next-env.d.ts",
  ]),
]);
