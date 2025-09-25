// eslint.config.mjs
import next from "eslint-config-next";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  ...next(),
  {
    rules: {
      // You can add custom rules here
    },
  },
];
