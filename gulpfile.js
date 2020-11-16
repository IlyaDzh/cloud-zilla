const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("scss", done => {
    gulp.src("app/scss/*.scss")
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("app/css/"));
    done();
});

gulp.task("watch", () => {
    gulp.watch("app/scss/*.scss", gulp.series("scss"));
});
