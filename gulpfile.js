// generated on 2017-01-12 using generator-webapp 2.3.2
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync').create();
const del = require('del');
// const wiredep = require().stream;
const runSequence = require('run-sequence');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

var dev = true;

gulp.task('styles', () => {
  return gulp.src('docs/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: [
        '.',
        'lib/sass',
        'node_modules/bootstrap-sass/assets/stylesheets',
      ]
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
  return gulp.src('docs/scripts/**/*.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(reload({stream: true}));
});

function lint(files, options) {
  return gulp.src(files)
    .pipe($.eslint({ fix: true }))
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

gulp.task('lint', () => {
  return lint('docs/scripts/**/*.js')
    .pipe(gulp.dest('docs/scripts'));
});
gulp.task('lint:test', () => {
  return lint('test/spec/**/*.js')
    .pipe(gulp.dest('test/spec'));
});

gulp.task('html', ['styles', 'scripts'], () => {
  return gulp.src('docs/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('docdist'));
});

gulp.task('images', () => {
  return gulp.src('docs/images/**/*')
    .pipe($.cache($.imagemin()))
    .pipe(gulp.dest('docdist/images'));
});

// gulp.task(, () => {
//   return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
//     .concat('docs/fonts/**/*'))
//     .pipe($.if(dev, gulp.dest('.tmp/fonts'), gulp.dest('dist/fonts')));
// });

gulp.task('extras', () => {
  return gulp.src([
    'docs/*',
    '!docs/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('docdist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', () => {
  runSequence(['clean' ], ['styles', 'scripts' ], () => {
    browserSync.init({
      notify: false,
      port: 9000,
      server: {
        baseDir: ['.tmp', 'docs'],
        // routes: {
        //   '/bower_components': 'bower_components'
        // }
      }
    });

    gulp.watch([
      'docs/*.html',
      'docs/images/**/*',
      '.tmp/styles/**/*.css',
      '.tmp/fonts/**/*'
    ]).on('change', reload);

    gulp.watch('docs/styles/**/*.scss', ['styles']);
    gulp.watch('lib/sass/**/*.scss', ['styles']);
    gulp.watch('docs/scripts/**/*.js', ['scripts']);
  });
});

gulp.task('serve:dist', ['default'], () => {
  browserSync.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', ['scripts'], () => {
  browserSync.init({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/scripts': '.tmp/scripts',
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('docs/scripts/**/*.js', ['scripts']);
  gulp.watch(['test/spec/**/*.js', 'test/index.html']).on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
// gulp.task(, () => {
//   gulp.src('docs/styles/*.scss')
//     .pipe($.filter(file => file.stat && file.stat.size))
//     .pipe(wiredep({
//       ignorePath: /^(\.\.\/)+/
//     }))
//     .pipe(gulp.dest('docs/styles'));
//
//   gulp.src('docs/*.html')
//     .pipe(wiredep({
//       exclude: ['bootstrap-sass'],
//       ignorePath: /^(\.\.\/)*\.\./
//     }))
//     .pipe(gulp.dest('app'));
// });

gulp.task('build', ['lint', 'html', 'images', 'extras'], () => {
  return gulp.src('docdist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', () => {
  return new Promise(resolve => {
    dev = false;
    runSequence(['clean'], 'build', resolve);
  });
});
