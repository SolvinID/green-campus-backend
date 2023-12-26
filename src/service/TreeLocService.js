const httpStatus = require("http-status");
const TreeLocDao = require("../dao/TreeLocDao");
const { returnError, returnSuccess } = require("../helper/responseHandler");

class TreeLocService {
  constructor() {
    this.treeLocDao = new TreeLocDao();
  }

  checkLocation = async (locId) => {
    try {
      const tree = await this.treeLocDao.checkLocation(locId);
      if (!tree) {
        return returnError(httpStatus.NOT_FOUND, "Tree Not Found!");
      }

      return returnSuccess(httpStatus.OK, "Tree Found!", tree);
    } catch (e) {
      return { statusCode: httpStatus.BAD_GATEWAY, response: e };
    }
  };
}

module.exports = TreeLocService;
