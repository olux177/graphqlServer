import models from '../schema';

export const getType = ()=>{
  const typeObj = {
    type:data.type,
    desc:`the desc of ${data.type}`,
  }
  return models.ContentType.findOrCreate({where:{type:typeObj.type}});
}