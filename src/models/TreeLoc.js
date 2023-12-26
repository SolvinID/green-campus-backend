"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TreeLoc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasOne(models.campus);
      // models.campus.belongsTo(this);
    }
  }
  TreeLoc.init(
    {
      description: DataTypes.STRING,
      lat: DataTypes.FLOAT,
      lng: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "tree_loc",
    }
  );
  return TreeLoc;
};
