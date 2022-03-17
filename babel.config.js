module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                chrome: '79',
                ie: '11'
            },
            useBuiltIns: 'usage', //'entry', false
            corejs: {
                version: 2
            }
        }]
    ]
}