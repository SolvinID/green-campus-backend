const SuperDao = require("./SuperDao");
const models = require("../models");

const Synonim = models.synonim;

class SynonimDao extends SuperDao {
  constructor() {
    super(Synonim);
  }
}

module.exports = SynonimDao;
