// eslint.config.mjs
import js from "@eslint/js";
import next from "eslint-config-next";

export default [
  js.configs.recommended,
  ...next(),
  {
    rules: {
      // add your custom rules here if needed
    },
  },
];
