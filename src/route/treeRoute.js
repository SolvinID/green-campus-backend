const express = require("express");
const TreeController = require("../controllers/TreeController");
const auth = require("../middlewares/auth");

const router = express.Router();

const treeController = new TreeController();

router.get("/all", treeController.getAllTree);
router.get("/:id", auth(), treeController.getTree);
router.get("/verify/:uuid", treeController.verifyQr);
router.get("/check/:locId", treeController.checkLocation);

module.exports = router;
