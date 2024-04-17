const { Router } = require("express");
const router = Router();
const {
  getAllDomains,
  getAllCategories,
  getTrainingsByDomain,
} = require("../controllers/DomainController");
router.get("/getAllDomains", getAllDomains);
router.get("/getAllCategories", getAllCategories);
router.get("/getTrainingsByDomain/:domain",getTrainingsByDomain); 
module.exports = router;
