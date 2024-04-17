const { Router } = require("express");
const router = Router();
const {
  addAcademy,
  getAcademy,
  getAllAcademies,
} = require("../controllers/AcademyController");

router.post("/addAcademy", addAcademy);
router.get("/get/:id", getAcademy);
router.get("/getAll", getAllAcademies);

module.exports = router;
