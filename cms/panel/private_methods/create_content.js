import models from '../schema';

export const panelContent = (panel,type,content)=>{
  contentObj = {
    panel,
    type,
    content
  }
  return models.ContentType.create(contentObj);  
}