module.exports = function myBabelPreset() {
    return {
        plugins: [
            "@babel/plugin-transform-block-scoping",
            "@babel/plugin-transform-strict-mode",
            "@babel/plugin-transform-arrow-functions"
        ]
    }
}