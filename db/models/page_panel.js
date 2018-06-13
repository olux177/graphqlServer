import Sequelize from "sequelize"

export default function (sequelize, DataTypes){
  return sequelize.define("cms_page_panel", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    }
  })
}
