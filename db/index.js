import Sequelize from 'sequelize';
import config from "./config.json";

const sequelize = new Sequelize(config.development);

const db = {
  User: sequelize.import('./models/user'),
  Page: sequelize.import('./models/page'),
  Role: sequelize.import('./models/role'),
  Project: sequelize.import('./models/project'),
  PanelTag: sequelize.import('./models/panel_tag'),
  Panel: sequelize.import('./models/panel'),
  Section: sequelize.import('./models/section'),
};

const {Panel,Section,PanelTag} = db;

Panel.hasMany(Section)
Panel.hasMany(PanelTag)
// Object.keys(db).forEach((modelName) => {
//   if ('associate' in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;

export default db;
