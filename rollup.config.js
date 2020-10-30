import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import del from 'rollup-plugin-delete'
import pkg from './package.json'

export default [
  // browser-friendly UMD build
  {
    input: 'src/main.js',
    output: [
      // un-minified
      {
        file: 'dist/main.umd.js',
        format: 'umd',
        name: 'css-safe-classname',
      },
      // minified
      {
        file: pkg.browser,
        format: 'umd',
        name: 'css-safe-classname',
        plugins: [terser()],
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      resolve(),
      commonjs(),
      babel({
        exclude: ['node_modules/**'],
      }),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/main.js',
    output: [
      // CommonJS (un-minified and minified)
      { file: 'dist/main.cjs.js', format: 'cjs', name: 'css-safe-classname' },
      {
        file: pkg.main,
        format: 'cjs',
        name: 'css-safe-classname',
        plugins: [terser()],
        sourcemap: true,
      },
      // ES module (un-minified and minified)
      { file: 'dist/main.esm.js', format: 'es', name: 'css-safe-classname' },
      {
        file: pkg.module,
        format: 'es',
        name: 'css-safe-classname',
        plugins: [terser()],
        sourcemap: true,
      },
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**'],
      }),
    ],
  },
]
