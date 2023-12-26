const express = require("express");
const TreeController = require("../controllers/TreeController");

const router = express.Router();

const treeController = new TreeController();

router.get("/:id", treeController.getTree);

module.exports = router;
