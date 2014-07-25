/*
 * Viking Base registers gulp tasks for you.
 * For more information and examples see the
 * project on GitHub (https://github.com/jneurock/viking-base).
 */

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    vb = require('./bower_components/viking-base/node_modules/viking-base');

// Set module refeneces on vb object
vb.gulp = gulp;
vb.plugins = plugins;

// Output updates
vb.output.fonts = 'fonts/';
vb.output.img = 'img/';
vb.output.post = 'posts/';
vb.output.posts = 'posts.json';

// Source updates
vb.sources.css = 'bower_components/viking-base/css/**/*.css';
vb.sources.fonts = 'fonts/**/*';
vb.sources.img = 'img/**/*';
vb.sources.posts = 'posts/**/*.md';

// Task updates
vb.tasks.build.depends = [
  'fonts',
  'handlebars',
  'img',
  // 'posts',
  'root'
];

vb.tasks.fonts = {
  cb: function() {

    return gulp.src( this.sources.fonts )
      .pipe( gulp.dest( this.output.publish + this.output.fonts ) );
  }
};

vb.tasks.handlebars.depends = ['img'];

vb.tasks.img = {
  cb: function() {

    return gulp.src( this.sources.img )
      .pipe( gulp.dest( this.output.publish + this.output.img ) );
  }
};

// Modify tasks as you need before calling vb.registerGulpTasks
vb.registerGulpTasks();