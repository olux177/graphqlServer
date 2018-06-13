import models from './schema';
import Sequelize from "sequelize";

const Op = Sequelize.Op

export class Page{
  constructor(name="",url="",desc=""){
    // this.id = id;
    this.name=name;
    this.description=desc;
    this.url = url;

    models.sequelize.sync()
  }

  create(){
    const { Page } = models;
    return Page.findAndCountAll({
      where:{
        [Op.or]:[
          {name:this.name},
          {url : this.url}
        ]
      }
    })
    .then((page)=>{   
      if(page.count===0){
        return Page.create({
          name:this.name,
          url:this.url,
          description:this.description
        })
        .then((res)=>{
          return 'new page added';
        })
      }
      else{
        return 'page exist';
      }
    }) 
  }

  read(){
    const { Page } = models;
    
    return Page.findAll({
        where: {
          [Op.or]:[
            {id:this.id},
            {name:this.name}
          ]
        }
      })
      .spread(page => page.get() )
  }

  update(){
    const { Page } = models;
    const body = {};
    (this.name)?body.name=this.name:null
    (this.url)?body.url=this.url:null
    (this.description)?body.description=this.description:null
    
    return Page.find({where:{id:this.id}})
      .then((page)=>{
        return page.updateAttributes(body)
      })
  }

  addPanel(props){
    const { Page,Panel,PagePanel } = models;
    
    return Promise.all([
      Page.findOne({
        where:{
          [Op.or]:[{id:props.pageID},{name:props.name}]
        }
      })
      .catch((e)=> 'page not added'), 
      Panel.findOne({
        where:{
          [Op.or]:[{id:props.panelID},{name:props.name}]
        }
      })
      .catch((e)=> 'panel not added')
    ])
    .then(([a,b])=>{
      let resp = 'panel is not added!'
      if(a.dataValues&&b.dataValues){
        resp = 'panel is added!'
        return PagePanel.create({
          pageID:a.dataValues.id,
          panelID:b.dataValues.id,
        })
        .then((res)=>{
          return resp 
        })
        .catch((e)=>e)
      }
      else{
        console.log(resp)
        return resp

      }
    })
    .catch((e)=>'page panel not added')
  }

  removePanel(){

  }

  pagePanels(){

  }

  delete(){    
    const { Page } = models;
    Page.destroy({where:{id:this.id}})
      .then(() => {          
        return `${id.id} is removed`;
      }).catch((e) => {
        console.log(`Error ${e}`);
      })
  }
}
