import Sequelize from 'sequelize';
import config from "./config.json";

const sequelize = new Sequelize(config.development);
export default sequelize