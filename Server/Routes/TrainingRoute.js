const { Router } = require("express");
const router = Router();
const {
  addTraining,
  getTraining,
  getAllTrainings,
  addToAcademyTraining,
  freeTrainingsFromAcademy,
  getRoomFromTraining,
} = require("../controllers/TrainingController");
const authMiddleware = require("../middlewares/Authorize");
router.post("/addTraining", authMiddleware, addTraining);
router.get("/getTraining/:id", getTraining);
router.get("/getRoom/:trainingId", getRoomFromTraining);
router.get("/getAllTrainings", getAllTrainings);
router.patch("/addToAcademyTraining/:academyId", addToAcademyTraining);
router.patch("/freeTrainings/:academyId", freeTrainingsFromAcademy);
module.exports = router;
