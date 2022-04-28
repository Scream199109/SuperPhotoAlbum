"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Photo }) {
      Album.belongsTo(User, { foreignKey: "userId" });
      Album.hasMany(Photo, { foreignKey: "albumId" });
    }
  }
  Album.init(
    {
      title: {
        type: DataTypes.TEXT,
      },
      private: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Album",
    }
  );
  return Album;
};
