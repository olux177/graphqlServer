import Sequelize from "sequelize"
export default function (sequelize, DataTypes) {
  return sequelize.define("panel_tag", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      underscored: true,
    },
    description: {
      type: DataTypes.TEXT
    },
  });
}
