import { babel } from '@rollup/plugin-babel';

export default {
  input: './src/js/scripts.js',
  output: {
    file: './dist/js/bundle.js',
    format: 'cjs',
    banner: '/* eslint-disable */',
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
    }),
  ],
};
