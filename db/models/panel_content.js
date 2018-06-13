import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("cms_panel_content", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
           
      // type: Sequelize.INTEGER,
      // primaryKey: true,
      // autoIncrement: true,
    },
    value: {
      type: DataTypes.STRING
    },
    style: {
      type: DataTypes.STRING
    }
  })
}
