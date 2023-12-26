const SuperDao = require("./SuperDao");
const models = require("../models");

const TreeLoc = models.tree_loc;

class TreeLocDao extends SuperDao {
  constructor() {
    super(TreeLoc);
  }

  async checkLocation(id) {
    return TreeLoc.findOne({
      where: { id: id },
      include: {
        model: models.tree,
        required: true,
        attributes: ["name", "sciName", "image"],
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "treeId"],
      },
    });
  }
}

module.exports = TreeLocDao;
