import Sequelize from "sequelize"

export default function (sequelize, DataTypes){
  return sequelize.define("cms_panel",{
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
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
