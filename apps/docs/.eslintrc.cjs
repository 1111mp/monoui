/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "../../.eslintrc.cjs",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      parserOptions: {
        project: true,
      },
      rules: {
        "@next/next/no-html-link-for-pages": "off",
        // These opinionated rules are enabled in stylistic-type-checked above.
        // Feel free to reconfigure them to your own preference.
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/consistent-type-definitions": "off",

        "@typescript-eslint/consistent-type-imports": [
          "warn",
          {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksVoidReturn: { attributes: false },
          },
        ],

        "jsx-a11y/anchor-has-content": "off",
        "jsx-a11y/heading-has-content": "off",
      },
    },
  ],
};

module.exports = config;
