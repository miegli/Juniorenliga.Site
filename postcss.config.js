module.exports = {
    plugins: {
        'postcss-assets': {
            cachebuster: false,
            basePath: 'DistributionPackages/',
            baseUrl: '/_Resources/Static/Packages',
            loadPaths: ['**/Resources/Public/**/*']
        },
        'postcss-url': {
            filter: /\/_Resources\/Static\/Packages\/[\w]+\.[\w]+\/Resources\/Public\/.*/,
            url: asset => asset.url.replace('/Resources/Public/', '/')
        },
        autoprefixer: {
            grid: true
        },
        cssnano: {
            preset: ['default', { discardComments: { removeAll: true } }]
        }
    }
};
