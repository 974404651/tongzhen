var gulp = require("gulp");
const sass =require("gulp-sass");
gulp.task("copy",async function(){
	 gulp.src("./**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\tongzhen1"));
});

//监听任务
gulp.task("watchall", async ()=>{
	//监听html,进行复制
	gulp.watch("*.html",async ()=>{
      gulp.src("*.html")
	  .pipe(gulp.dest("D:\\phpStudy\\WWW\\tongzhen1"));
    });

    //监听sass文件
    gulp.watch("sass/**/*",async ()=>{
    	gulp.src("sass/**/*")
    	.pipe(sass())
    	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tongzhen1\\css"));
	});
	//监听js文件
    gulp.watch("js/**/*",async ()=>{
    	gulp.src("js/**/*")
    	.pipe(sass())
    	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tongzhen1\\js"));
    });

});
