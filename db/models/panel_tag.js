import Sequelize from "sequelize"
export default function (sequelize, DataTypes) {
  return sequelize.define("cms_panel_tag", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
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
