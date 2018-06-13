import Sequelize from 'sequelize';
import models from './panel/schema';

export class Crud{
  constructor(){  
    models.sequelize.sync()
  }
  create(){
    return models[this.table].create(this.data)
  }
  read(){
    return models[this.table].findById(name)
  }
  update(){
    return models[this.table].update(this.data)
  }
  delete(name){
    return models[this.table].delete()
  }
}