module.exports = function (gulp, plugins, config) {
    return function (cb) {

        var theme = config.theme.mbootstrap;

        gulp.watch([
            theme.source.js.jquery.files,
            theme.source.js.bootstrap.files,
            theme.source.js.jquery.scripts.files,
            theme.source.js.dir + '**/*.js'
        ], gulp.series('build-mbootstrap-scripts'));

        gulp.watch(theme.source.scss.dir + '**/*.scss', gulp.series('build-mbootstrap-styles'));

        cb();
    };
};
