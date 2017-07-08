var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

//Task# 1
//Purpose: This task transpiles/transform the .jsx code to javascript code on the fly by using reactify. Once done, then by using vinyl-source-stream
//         it creates main.js file on the fly inside the dist directory with transformed javascript code in it.
gulp.task("bundle", function () {
    return browserify({
        entries: "./app/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});


//Task# 2
//Purpose: Copies index.html, bootstrap.min.css and style.css files to ./app/dist folder.
gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html", "app/style.css"])
        .pipe(gulp.dest("app/dist"));
});

//Confirms that the task is over. It should be the default one
gulp.task("default",["copy"],function(){
   console.log("Complete!"); 
});