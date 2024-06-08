module.exports = {
  parserOptions: { sourceType: "module" },
  extends: [
    "foxkit/strict",
    "foxkit/ts-strict",
    "foxkit/preact",
    "plugin:astro/recommended",
    "prettier"
  ],
  rules: {
    "react/react-in-jsx-scope": "off"
  },
  overrides: [
    {
      files: ["**/*.ts?(x)", "**/*.astro"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname
      }
    },
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
