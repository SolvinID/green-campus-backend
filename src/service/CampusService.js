const httpStatus = require("http-status");
// const logger = require("../config/logger");
const { returnSuccess, returnError } = require("../helper/responseHandler");
const CampusDao = require("../dao/CampusDao");

class CampusService {
  constructor() {
    this.campus = new CampusDao();
  }

  /**
   * Get All Campus
   * @param {String} id
   * @returns {Object}
   */
  getAllCampus = async () => {
    try {
      const campus = await this.campus.findAll();
      if (!campus) {
        return returnError(httpStatus.NOT_FOUND, "Campus Not Found!");
      }
      return returnSuccess(httpStatus.OK, "Campus Found!", campus);
    } catch (e) {
      // logger.error(e);
      return returnError(httpStatus.BAD_GATEWAY, "Something went wrong!");
    }
  };

  /**
   * Get Tree on Campus
   * @param {String} id
   * @returns {Object}
   */

  getTreeonCampus = async (id) => {
    try {
      const campus = await this.campus.getTreeOnCampus(id);
      if (!campus) {
        return returnError(httpStatus.NOT_FOUND, "Campus Not Found!");
      }
      return returnSuccess(httpStatus.OK, "Campus Found!", campus);
    } catch (e) {
      // logger.error(e);
      return returnError(httpStatus.BAD_GATEWAY, "Something went wrong!");
    }
  };
}

module.exports = CampusService;
