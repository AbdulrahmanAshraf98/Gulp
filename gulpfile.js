//Top Level Function
/*
            -[1]-task
            -[2]-src
            -[3]-dest
            -[4]-watch

*/
const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));
c

//create a new  Task  using task function
//task takes two parameters  name task ,  callback function =>task
/*
------------------------------------------------------------------------
Task 1 Logging any thing 
------------------------------------------------------------------------
 */
//task
gulp.task("log", async () => {
	console.log("logging ||");
});

/*
------------------------------------------------------------------------
Task 2  copy style file from Css Folder Than Create Folder Css2 and put
        file inside it
------------------------------------------------------------------------
 */
gulp.task("copy", async () => {
	//-[1]-first get File
	//-[2]-Pip Function to create ReaderStreamer and WriterStreamer
	//-[3]-send Dest function as argument to Pip
	//-[4]-dest take argument the distention
	gulp.src("css/style.css").pipe(gulp.dest("css2/css/"));
});
/*
------------------------------------------------------------------------
Task 3  watch  style file from Css Folder Than Create Folder Css2 and put
        file inside it and Watching Modify  And Modify it
------------------------------------------------------------------------
 */
gulp.task("watching", async () => {
	gulp.watch("css/style.css", async () => {
		gulp.src("css/style.css").pipe(gulp.dest("css2/css/"));
	});
});
/*
------------------------------------------------------------------------
Task 4  watch  sass  file from sass Folder Than Create Folder dust and 
        compile file inside it to css file and Watching Modify
        And Modify it if any change happened in sass file
------------------------------------------------------------------------
 */
gulp.task("watchingSass", async () => {
	gulp.watch("sass/*", async () => {
		gulp
			.src("sass/main.scss")
			.pipe(sass({ outputStyle: "compressed" }))
			.pipe(gulp.dest("dist/css/"));
	});
});

