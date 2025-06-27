import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: [],
    extends: [
      "plugin:prettier/recommended",
    ],
    rules: {
      // Solo errores importantes, desactiva reglas de estilo y advertencias menores
      "@typescript-eslint/no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "prettier/prettier": "warn"
    },
  },
]);
