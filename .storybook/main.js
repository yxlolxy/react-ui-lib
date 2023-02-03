const path = require('path')
module.exports = {
    stories: [
        {
            directory: './src',
            titlePrefix: 'react-ui-lib',
            files: '*.stories.*',
        },
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
    ],
    framework: '@storybook/react',
    webpackFinal: async (config) => {
        return {
            ...config,
            module: { ...config.module, rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                      loader: require.resolve('babel-loader'),
                      options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                            '@babel/preset-react',
                        ],
                      },
                    },
                },
                {
                    test: /\.css$/,
                    include: path.resolve(__dirname, '../src'),
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    auto: /\.module\.css$/,
                                    localIdentName: '[local]--[hash:base64:5]',
                                },
                            },
                        },
                    ],
                },
            ]},
        }
    },
}