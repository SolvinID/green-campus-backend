const httpStatus = require("http-status");
const TreeDao = require("../dao/TreeDao");
const logger = require("../config/logger");
const { returnSuccess, returnError } = require("../helper/responseHandler");

class TreeService {
  constructor() {
    this.treeDao = new TreeDao();
  }

  /**
   * Get Tree
   * @param {String} id
   * @returns {Object}
   */
  getTree = async (id) => {
    try {
      const tree = await this.treeDao.findById(id);
      if (!tree) {
        return returnError(httpStatus.NOT_FOUND, "Tree Not Found!");
      }
      return returnSuccess(httpStatus.OK, "Tree Found!", tree);
    } catch (e) {
      logger.error(e);
      return returnError(httpStatus.BAD_GATEWAY, "Something went wrong!");
    }
  };
}

module.exports = TreeService;
