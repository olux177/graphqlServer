import sequelize from '../../db/connection';

const db = {
  PanelTag: sequelize.import('../../db/models/panel_tag'),
  Panel: sequelize.import('../../db/models/panel'),
  PanelContent:sequelize.import('../../db/models/panel_content'),
  PanelContentType: sequelize.import('../../db/models/content_type'),
};

const {
  Panel,
  PanelTag,
  PanelContent,
  PanelContentType
} = db;

Panel.belongsToMany(PanelTag, {through: 'Cms_Tag_Panel', foreignKey: 'panelID'})
PanelTag.belongsToMany(Panel, {through: 'Cms_Tag_Panel', foreignKey: 'tagID'})

Panel.hasMany(PanelContent, {as: 'contents', foreignKey: 'panelID',})
PanelContent.belongsTo(Panel, {as: 'panel'});

PanelContent.belongsTo(PanelContentType, {as: 'type',foreignKey: 'typeID',});

db.sequelize = sequelize;
export default db;
