import { babel } from '@rollup/plugin-babel';

export default {
  input: './src/js/scripts.js',
  output: {
    file: './dist/js/bundle.js',
    banner: '/* eslint-disable */',
    format: 'cjs',
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
    }),
  ],
};
