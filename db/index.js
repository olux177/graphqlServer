import Sequelize from 'sequelize';
import config from "./config.json";
import sequelize from './connection'
// const sequelize = new Sequelize(config.development);

const db = {};

db.sequelize = sequelize;
export default db;
