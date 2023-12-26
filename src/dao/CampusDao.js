const SuperDao = require("./SuperDao");
const models = require("../models");

const Campus = models.campus;

class CampusDao extends SuperDao {
  constructor() {
    super(Campus);
  }

  async getTreeOnCampus(id) {
    return Campus.findAll({
      where: { id },
      include: {
        model: models.tree_loc,
        required: true,
      },
    });
  }
}

module.exports = CampusDao;
