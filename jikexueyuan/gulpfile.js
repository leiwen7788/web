var gulp = require('gulp');
	less = require('gulp-less');


// gulp.task('task1',function(){

// })
// gulp.task('task1',function(){
	
// })
// gulp.task('task1',function(){
	
// })
gulp.task('default', function() {
  	gulp.src('css/jikexueyuan.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});