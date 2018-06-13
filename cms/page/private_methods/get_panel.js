import models from '../schema';
import Sequelize from "sequelize"

export const getPanel = (name,description)=>{
  const panelObj = {
    name,
    description
  }  
  
  return  models.Panel.create(panelObj);
  // res.then((d)=>
  //   console.log(d)
    
  // )
  // // console.log(res);
  // return res
}