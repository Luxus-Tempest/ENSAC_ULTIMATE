const { Router } = require("express");
const router = Router();
const {
  addCourseToTraining,
  getCourse,
} = require("../controllers/CourseController");
router.post("/newCourse/:trainingId", addCourseToTraining);
router.get("/getCourse/:courseId", getCourse);
module.exports = router;
