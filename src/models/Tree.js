"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.tree_loc);
      models.tree_loc.belongsTo(this);

      this.hasMany(models.synonim);
      models.synonim.belongsTo(this);
    }
  }
  Tree.init(
    {
      uuid: DataTypes.UUID,
      name: DataTypes.STRING,
      sciName: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      benefit: DataTypes.STRING,
      additionals: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tree",
    }
  );
  return Tree;
};
