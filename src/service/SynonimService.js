const httpStatus = require("http-status");
const SynonimDao = require("../dao/SynonimDao");
const logger = require("../config/logger");

class SynonimService {
  constructor() {
    this.synonimDao = new SynonimDao();
  }
}

module.exports = SynonimService;
