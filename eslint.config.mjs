import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";

import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig(
  [
    {
      files: ["**/*.{js,mjs,cjs,jsx}"],
      plugins: { js },
      extends: ["js/recommended"],
      languageOptions: {
        globals: { ...globals.browser, ...globals.node, ...globals.jest },
      },
    },
    pluginReact.configs.flat.recommended,
    {
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        "react/react-in-jsx-scope": "off",
      },
    },
    prettier,
  ],
  [globalIgnores(["node_modules/", ".next/"])],
);
