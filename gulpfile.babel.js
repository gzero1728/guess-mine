import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";
import del from "del";
import bro from "gulp-browserify";
import babel from "babelify";

sass.compiler = require("node-sass");

const paths = {
    styles: {
        src: "assets/scss/styles.scss",
        dest: "src/static/styles",
        watch: "assets/scss/**/*.scss"
    },
    js: {
        src: "assets/js/main.js",
        dest: "src/static/js",
        watch: "assets/js/**/*.js"
    }
}

// static폴더를 모두 삭제(del) 
const clean = () => del(["src/static"]);

// 파일의 형식 변환을 설정
const styles = () =>
    // 1. 소스파일 위치 정의
    gulp.src(paths.styles.src)
        // 2. 소스파일을 pipe를 통해서 보냄
        .pipe(sass())
        // 3. 모든 브라우저에서 코드를 사용할 수 있도록 autoprefixer 적용
        .pipe(autoprefixer({
            cascade: false
        }))
        // 4. css파일이 gulp를 통해서 컴파일 
        .pipe(minifyCSS())
        // 목적지(dest) 설정
        .pipe(gulp.dest(paths.styles.dest));

const js = () =>
    gulp.src(paths.js.src)
        .pipe(
            bro({
                transform: [
                    babel.configure({
                        presets: ["@babel/preset-env"]
                    })
                ]
            })
        )
        .pipe(gulp.dest(paths.js.dest));

// scss가 변경될 때마다 styles함수를 적용시키기 위한 함수 
const watchFiles = () => {
    gulp.watch(paths.styles.watch, styles);
    gulp.watch(paths.js.watch, js);
}

// series함수를 통해 gulp 실행 순서를 지정(styles>watchFiles) 
const dev = gulp.series(clean, styles, js, watchFiles);

export const build = gulp.series(clean, styles, js);

// 다른 명령어 없이 gulp라는 커맨드로 실행했을 때 기본으로 dev를 실행
export default dev;