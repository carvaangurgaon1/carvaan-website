// eslint.config.js
import nextPlugin from 'eslint-config-next';

export default [
  {
    ignores: ['node_modules', '.next', 'dist'],
    // skip the @rushstack patch (works around the error)
    plugins: [],
  },
  ...nextPlugin(),
];
