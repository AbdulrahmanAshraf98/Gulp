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
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const pug = require("gulp-pug");

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
	return gulp.src("css/style.css").pipe(gulp.dest("css2/css/"));
});
/*
------------------------------------------------------------------------
Task 3  watch  style file from Css Folder Than Create Folder Css2 and put
        file inside it and Watching Modify  And Modify it
------------------------------------------------------------------------
 */
gulp.task("watching", async () => {
	return gulp.watch("css/style.css", async () => {
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
	return gulp.watch("sass/*", async () => {
		gulp
			.src("sass/main.scss")
			.pipe(sass({ outputStyle: "compressed" }))
			.pipe(gulp.dest("dist/css/"));
	});
});

/*
------------------------------------------------------------------------
Task 5  Concatenation Css Files to one  css File 
			[1]-install gulp-concat 
			[2]-Import gulp-concat
			[3]-get all css files using src method 
			[4]-use concat function takes parameter Name of output file
				to concat all files in one file
			[5]-use dest to choose distention folder for output 
------------------------------------------------------------------------
 */
gulp.task("concatCSSFile", async () => {
	return gulp
		.src("css/*")
		.pipe(concat("style.css"))
		.pipe(gulp.dest("dist/css/"));
});

/*
------------------------------------------------------------------------
Task 6  Concatenation Css Files to one  css File then   
		Add Prefix for css file 
			[1]-install gulp-concat 
			[2]-Import gulp-concat
			[3]-get all css files using src method 
			[4]-use autoprefixer function tales parameter Name of 
				browser 
			[5]-use dest to choose distention folder for output 
------------------------------------------------------------------------
 */
gulp.task("add-Prefix-For-Css", async () => {
	return gulp
		.src("css/*")
		.pipe(
			autoprefixer(
				"last 2 versions",
				"safari 5",
				"ie6",
				"ie7",
				"ie 8",
				"ie 9",
				"opera 12.1",
				"ios 6",
				"android 4",
			),
		)
		.pipe(concat("style.css"))
		.pipe(gulp.dest("dist/css/"));
});

/*
------------------------------------------------------------------------
Task 6  Compile All sass files
------------------------------------------------------------------------
 */
gulp.task("compile-all-sass", async () => {
	return gulp
		.src("sass/*.scss")
		.pipe(sass({ outputStyle: "compressed" }))
		.pipe(
			autoprefixer(
				"last 2 versions",
				"safari 5",
				"ie6",
				"ie7",
				"ie 8",
				"ie 9",
				"opera 12.1",
				"ios 6",
				"android 4",
			),
		)
		.pipe(concat("main.css"))
		.pipe(gulp.dest("dist/css/"));
});

/*
------------------------------------------------------------------------
Task 6  Compile Pug  files to Html 
------------------------------------------------------------------------
 */
gulp.task("compile-pug-file", async () => {
	gulp
		.src("./html/index.pug")
		.pipe(pug({ pretty: false }))
		.pipe(gulp.dest("dist"));
});