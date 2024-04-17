const Training = require("../models/AppSchemas/Training");
const Academy = require("../models/AppSchemas/Academy");
const HttpError = require("../models/HttpError/ErrorModel");
// protégé par un mw..
exports.addTraining = async (req, res, next) => {
  const id = req.user.id;
  const {
    academyId,
    name,
    category,
    picture,
    video,
    difficulty,
    subtitle,
    description,
  } = req.body;
  try {
    if (
      !academyId.trim() ||
      !name.trim() ||
      !category.trim() ||
      !picture.trim() ||
      !video.trim() ||
      !difficulty.trim() ||
      !subtitle.trim() ||
      !description.trim()
    ) {
      return next(
        new HttpError("Données nécéssaires qui manquent !,(addTraining)")
      );
    }
    const existingTraining = await Training.find({ name });
    const existingId = existingTraining.academyId;
    if (existingTraining && existingId == academyId) {
      return next(
        new HttpError(
          "Cette formation porte le meme nom qu'une autre formation dans cette académie ! (AddTraining)"
        )
      );
    }
    const concernedAcademy = await Academy.findById(academyId);
    if (!concernedAcademy.professors.includes(id)) {
      return next(
        new HttpError(
          "Ce professeur ne peut pas ajouter une formation dans cette académie !!"
        )
      );
    }
    const newTraining = await Training.create({
      academyId,
      providerProf: id,
      name,
      category,
      picture,
      video,
      difficulty,
      subtitle,
      description,
    });
    const academy = await Academy.findById(academyId);
    const currentTrainings = academy.trainings;
    let newTrainings;
    if (!currentTrainings.length) {
      newTrainings = [newTraining._id];
    } else {
      newTrainings = [...currentTrainings, newTraining._id];
    }
    const newAcademy = await Academy.findByIdAndUpdate(
      academyId,
      {
        trainings: newTrainings,
      },
      { new: true }
    );
    res.status(201).json(newTraining);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getTraining = async (req, res, next) => {
  const trainingId = req.params.id;
  try {
    const concernedTraining = await Training.findById(trainingId);
    res.status(201).json(concernedTraining);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getAllTrainings = async (req, res, next) => {
  try {
    const allTrainings = await Training.find();
    res.status(201).json(allTrainings);
  } catch (err) {
    return next(new HttpError(err));
  }
};
// ces deux contolrs servent à faire qlq configs, je les ai fait juste pour recifier une petite erreur que j'ai commit au niveau du controlr addTraining(tu n'est pas censé de les lire....)
exports.addToAcademyTraining = async (req, res, next) => {
  const academyId = req.params.academyId;
  const newTrainingId = req.body.trainingId;
  try {
    const concernedAcademy = await Academy.findById(academyId);
    const currentTrainings = concernedAcademy.trainings;
    let newTrainings;
    if (!currentTrainings.length) {
      newTrainings = [newTrainingId];
    } else {
      newTrainings = [...currentTrainings, newTrainingId];
    }
    console.log(newTrainings);
    const newAcademy = await Academy.findByIdAndUpdate(
      academyId,
      {
        trainings: newTrainings,
      },
      { new: true }
    );
    res.status(201).json(newAcademy);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.freeTrainingsFromAcademy = async (req, res, next) => {
  const academyId = req.params.academyId;
  try {
    const newAcademy = await Academy.findByIdAndUpdate(
      academyId,
      { trainings: [] },
      { new: true }
    );
    res.status(201).json(newAcademy);
  } catch (err) {
    return next(new HttpError(err));
  }
};
// ce controleur est trop spécifique , je l'utilise dans le composant CourseSideBar pour formuler ce qu'on appel "room" en se basant sur les Id des responsables de l'académie qui a fournit ce cours :
exports.getRoomFromTraining = async (req, res, next) => {
  const trainingId = req.params.trainingId;
  try {
    const concernedTraining = await Training.findById(trainingId);
    const academyId = concernedTraining.academyId;
    const concernedAcademy = await Academy.findById(academyId);
    const responsables = concernedAcademy.responsables;
    let room = "";
    for (let i = 0; i < responsables.length; i++) {
      room += responsables[i];
    }
    res.status(201).json(room);
  } catch (err) {
    return next(new HttpError(err));
  }
};
