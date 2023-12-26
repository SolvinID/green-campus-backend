const SuperDao = require("./SuperDao");
const models = require("../models");

const Tree = models.tree;

class TreeDao extends SuperDao {
  constructor() {
    super(Tree);
  }
}

module.exports = TreeDao;
