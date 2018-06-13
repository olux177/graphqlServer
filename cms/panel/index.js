import models from './schema';
import {Crud} from "../crud";
import {getType} from "./private_methods/get_type";
import {getPanel} from "./private_methods/get_panel";
import {panelContent} from "./private_methods/create_content";

export class Panel{
  constructor(name,desc=""){
    this.name=name
    this.desc=desc
    models.sequelize.sync()
  }

  create(){
    const {
      Panel,PanelTag,PanelContent,PanelContentType
    } = models;

    return Panel.findOrCreate({
      where:{name:this.name}
    })
    .spread((panel)=>{
      this.contents.map((item)=>{        
        PanelContentType.findOrCreate({
          where: {name: item.type}
        })
        .spread((type)=>{
          PanelContent.findOrCreate({
            where:{
              value:item.value,
              panelID:panel.get({plain:true}).id,
              typeID:type.get({plain:true}).id
            }
          })
        })
      })
      return panel.get({plain:true})
    })
    
  }

  read(){
    const {
      Panel,PanelTag,PanelContent,PanelContentType
    } = models;
    
    return Panel.findAll({
      where: {
        name:this.name
      },
      include: [
        {
          model: PanelContent, 
          as: 'contents',
          include:[{
            model:PanelContentType,
            as:'type'
          }]
        }
      ]
    })
    .spread(panel => panel.get() )
  }

  readContent(id){    
    const {
      Panel,PanelContent,PanelContentType
    } = models;
    return PanelContent.findAll({
      where: {id:id},
      include:[
        {
          model:PanelContentType,
          as:'type'
        },{
          model:Panel,
          as:'panel'
        }
      ]
    })
    .spread(panel => {
      return panel.get() 
    })
  }

  update(table,id,body){
    const {
      Panel,PanelTag,PanelContent,PanelContentType
    } = models;

    switch (table) {
      case 'panel':          
        return Panel.find({where:id})
        .then((panel)=>{
          return panel.updateAttributes(body)
        })

      case 'content':
        return PanelContent.find({where:id})
        .then((content)=>{
          return content.updateAttributes(body)
        })

      case 'type':
        return PanelContentType.find({where:id})
        .then((type)=>{
          return type.updateAttributes(body)
        })

      default:
        return Panel.find({where:id})
        .then((type)=>{
          return type.dataValues
        })
    }
    
    // return Panel.update(body,{where:id})
    // .then((p) => Panel.find({where:id}) )
  }
  delete(table,id){    
    const {
      Panel,PanelTag,PanelContent,PanelContentType
    } = models;

    switch (table) {
      case 'panel':          
        return Panel.destroy({where:id})
        .then(() => {          
          return `${id.id} is removed`;
        }).catch((e) => {
          console.log(`Error ${e}`);
        })

      case 'content':
        return PanelContent.destroy({where:id})
        .then(() => {          
          return `${id.id} is removed`;
        }).catch((e) => {
          console.log(`Error ${e}`);
        })


      case 'type':
        return PanelContentType.find({where:id})
        .then((type)=>{
          return type.updateAttributes(body)
        })

      default:
        return Panel.find({where:id})
        .then((type)=>{
          return type.dataValues
        })
    }
  }
}
