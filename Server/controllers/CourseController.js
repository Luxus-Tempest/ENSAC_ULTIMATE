const Course = require("../models/AppSchemas/Course");
const Training = require("../models/AppSchemas/Training");
const HttpError = require("../models/HttpError/ErrorModel");
// truc à gerer : une fois un cours est ajouté, on doit avoir une certaine séparation entre sa crétion et la création des chapitres...
exports.addCourseToTraining = async (req, res, next) => {
  const trainingId = req.params.trainingId;
  console.log(trainingId);
  try {
    const { title } = req.body;
    if (!title) {
      return next(
        new HttpError(
          "Des données nécéssaires qui manquent (addCourseToTraining)"
        )
      );
    }
    const newCourse = await Course.create({ title, trainingId });
    const concernedTraining = await Training.findById(trainingId);
    const currentCourses = concernedTraining.courses;
    let newCourses;
    if (!currentCourses.length) {
      newCourses = [newCourse._id];
    } else {
      newCourses = [...currentCourses, newCourse._id];
    }
    const newTraining = await Training.findByIdAndUpdate(
      trainingId,
      { courses: newCourses },
      { new: true }
    );
    res.status(201).json(newTraining);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getCourse = async (req, res, next) => {
  const courseId  = req.params.courseId;
  try {
    const concernedCourse = await Course.findById(courseId);
    res.status(201).json(concernedCourse);
  } catch (err) {
    console.log(err);
    return next(new HttpError(err));
  }
};
