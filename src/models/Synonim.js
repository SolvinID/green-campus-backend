"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Synonim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Synonim.init(
    {
      type: { type: DataTypes.ENUM, values: ["homotypic", "heterotypic"] },
      sciName: DataTypes.STRING,
      url: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "synonim",
    }
  );
  return Synonim;
};
