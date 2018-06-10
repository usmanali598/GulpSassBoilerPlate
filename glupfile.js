const gulp = require( 'gulp' );
const browserSync = require( 'browser-sync' ).create();
const sass = require( 'gulp-sass' );

gulp.task( 'sass', function ()
{
    return gulp.src( [ 'src/scss/*.scss' ] )
        .pipe( sass() )
        .pipe( gulp.dest( 'src/css' ) )
        .pipe( browserSync.stream() );
} );