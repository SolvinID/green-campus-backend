const httpStatus = require("http-status");
const TreeLocDao = require("../dao/TreeLocDao");

class TreeLocService {
    constructor() {
        this.treeLocDao = new TreeLocDao();
    }
}

module.exports = TreeLocService;