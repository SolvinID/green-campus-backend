const httpStatus = require("http-status");
const logger = require("../config/logger");
const CampusService = require("../service/CampusService");

class CampusController {
  constructor() {
    this.campusService = new CampusService();
  }

  getAllCampus = async (req, res) => {
    try {
      const campus = await this.campusService.getAllCampus();
      res.status(campus.statusCode).json(campus.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  getTreeonCampus = async (req, res) => {
    try {
      const campus = await this.campusService.getTreeonCampus(req.params.id);
      res.status(campus.statusCode).json(campus.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };
}

module.exports = CampusController;
