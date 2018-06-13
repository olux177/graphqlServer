import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("cms_panel_content_type", {
    id: {      
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  })
}
