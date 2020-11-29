module.exports = function (gulp, plugins, config) {
    return function (cb) {

        var theme = config.theme.mbootstrap;

        var stream =
            gulp.src( theme.build.css.dir )
                .pipe( plugins.vinylPaths(plugins.del) )
                .pipe( gulp.dest(theme.build.css.dir) );

        return cb();
    }
};
