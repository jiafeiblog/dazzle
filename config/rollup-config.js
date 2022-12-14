// import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import typescript from "rollup-plugin-typescript";
const path = require('path');

export default {
    input: path.resolve(__dirname, '../src/event-bus/index.ts'),
    output: {
        file: 'dist/dazzle.es.js',
        format: 'es'
    },
    plugins: [
        resolve(),
        // babel({
        //     babelrc: false,
        //     presets: ['@babel/preset-env']
        // }),
        typescript({
            exclude: "node_modules/**",
            typescript: require("typescript"),
        }),
    ]
}