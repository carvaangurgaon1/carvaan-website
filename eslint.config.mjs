// eslint.config.js
import nextPlugin from 'eslint-config-next';

export default [
  {
    // Files/folders to ignore
    ignores: ['node_modules', '.next', 'dist'],
  },
  ...nextPlugin(),
];
