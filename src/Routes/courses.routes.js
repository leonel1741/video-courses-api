const {Router} = require("express");
const { getAllCourses, createCourse, updateCourse } = require("../Controllers");


const router = Router();

router.get("/courses", getAllCourses );
router.post("/courses", createCourse);
router.put("/courses/:id", updateCourse);

module.exports = router;