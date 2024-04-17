const { Router } = require("express");
const {
  loginProfessor,
  getProfessor,
  editProfessor,
  getAllProfs,
} = require("../controllers/ProfessorController");
const authMiddleware = require("../middlewares/Authorize");
const router = Router();
router.post("/login", loginProfessor);
router.get("/get/:id", getProfessor);
router.get("/getAllProfs",getAllProfs); 
router.put("/edit", authMiddleware, editProfessor);
module.exports = router;
