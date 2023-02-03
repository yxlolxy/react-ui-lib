import nodeResolvePlugin from '@rollup/plugin-node-resolve'
import stylesPlugin from "rollup-plugin-styles"
import jsonPlugin from '@rollup/plugin-json'
import typescriptPlugin from '@rollup/plugin-typescript'
import pkg from './package.json'

const entry = 'src/index.ts'
const peerDeps = Object.keys(pkg.peerDependencies)

const esModule = {
    input: entry,
    external: peerDeps,
    plugins: [
        jsonPlugin(),
        stylesPlugin({
            include: 'src/**/*',
            exclude: "stories/**/*",
            extensions: ['.css'],
            autoModules: true,
        }),
        typescriptPlugin(),
        nodeResolvePlugin(),
    ].filter(Boolean),
    output: {
        format: 'es',
        dir: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
    },
}

export default [ esModule]
