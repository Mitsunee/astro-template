const foxkitOverrides = require("eslint-config-foxkit/legacy/overrides");
const foxkitReactOverrides = require("eslint-config-foxkit-react/legacy/overrides");

const foxkitTS = foxkitOverrides.typescript;
foxkitTS.files.push("**/*.astro");
const foxkitJSX = foxkitReactOverrides.jsx;
foxkitJSX.files.push("**/*.astro");

module.exports = {
  parserOptions: { sourceType: "module" },
  extends: [
    "foxkit",
    "foxkit-react/preact",
    "plugin:astro/recommended",
    "prettier"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".jsx", ".tsx", ".astro"] }
    ]
  },
  overrides: [
    // Configure TS
    {
      files: foxkitTS.files,
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname
      }
    },
    // patched overrides
    foxkitJSX,
    foxkitTS,
    // Astro plugin
    {
      files: ["**/*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      },
      rules: {
        "react/jsx-filename-extension": "off",
        "react/no-unknown-property": "off",
        "react/no-unescaped-entities": "off",
        "react/jsx-key": "off"
      }
    },
    // Import plugins
    {
      files: ["**/*.mjs", "**/*.ts?(x)", "**/*.astro"],
      extends: ["plugin:import/recommended", "plugin:import/typescript"],
      rules: {
        "sort-imports": "off",
        "import/order": "off",
        "import/first": "warn",
        "import/newline-after-import": "warn",
        "import/no-unresolved": "off"
      }
    }
  ],
  ignorePatterns: [
    "dist",
    "public",
    ".astro",
    ".astro-cache",
    "src/env.d.ts",
    ".pnpm-store"
  ]
};
