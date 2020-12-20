module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "~@/styles/style.scss";',
            },
        },
    },
    assetsDir: "assets",
};