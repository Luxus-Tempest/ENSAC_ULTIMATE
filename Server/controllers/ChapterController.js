const Chapter = require("../models/AppSchemas/Chapter");
const Course = require("../models/AppSchemas/Course");
const HttpError = require("../models/HttpError/ErrorModel");
exports.addChapterToCourse = async (req, res, next) => {
  const { courseId } = req.params;
  try {
    const { title, content, video } = req.body;
    if (!title.trim() || !content.trim() || !video.trim()) {
      return next(new HttpError("Données nécéssaires qui manquent !! "));
    }
    const newChapter = await Chapter.create({
      title,
      content,
      video,
      courseId,
    });
    const concernedCourse = await Course.findById(courseId);
    const currentChapters = concernedCourse.chapters;
    let newChapters;
    if (!currentChapters.length) {
      newChapters = [newChapter._id];
    } else {
      newChapters = [...currentChapters, newChapter._id];
    }
    const newCourse = await Course.findByIdAndUpdate(
      courseId,
      { chapters: newChapters },
      { new: true }
    );
    res.status(201).json(newCourse);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getChapter = async (req, res, next) => {
  const chapterId = req.params.chapterId;
  try {
    const concernedChapter = await Chapter.findById(chapterId);
    res.status(201).json(concernedChapter);
  } catch (err) {
    return next(new HttpError());
  }
};
