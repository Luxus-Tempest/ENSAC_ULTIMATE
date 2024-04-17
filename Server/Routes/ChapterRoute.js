const { Router } = require("express");
const router = Router();
const {
  addChapterToCourse,
  getChapter,
} = require("../controllers/ChapterController");
router.post("/addChapterToCourse/:courseId", addChapterToCourse);
router.get("/getChapter/:chapterId", getChapter);
module.exports = router;
