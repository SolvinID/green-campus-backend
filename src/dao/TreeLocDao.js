const SuperDao = require("./SuperDao");
const models = require("../models");

const TreeLoc = models.tree_loc;

class TreeLocDao extends SuperDao {
  constructor() {
    super(TreeLoc);
  }
}

module.exports = TreeLocDao;
