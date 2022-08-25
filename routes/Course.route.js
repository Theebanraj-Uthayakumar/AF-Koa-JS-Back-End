const koaRouter = require("@koa/router");
const { addCourse, getCourses, updateCourse, deleteCourse} = require("../api/Course.api");


const router = new koaRouter({prefix:"/course"});

router.post("/add",addCourse);
router.put("/:courseId",updateCourse);
router.get("/",getCourses);
router.delete("/:courseId",deleteCourse);

module.exports = router;