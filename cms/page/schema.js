import sequelize from '../../db/connection';

const db = {
  Page: sequelize.import('../../db/models/page'),
  Panel: sequelize.import('../../db/models/panel'),
  PagePanel: sequelize.import('../../db/models/page_panel')
};

const {
  Page,
  Panel,
  PagePanel
} = db;

Panel.belongsToMany(Page, {through: PagePanel, foreignKey: 'panelID'})
Page.belongsToMany(Panel, {through: PagePanel, foreignKey: 'pageID'})

db.sequelize = sequelize;
export default db;
