const express = require("express");
const CampusController = require("../controllers/CampusController");

const router = express.Router();

const campusController = new CampusController();

router.get("/all", campusController.getAllCampus);
router.get("/:id", campusController.getTreesOnCampus);

module.exports = router;
