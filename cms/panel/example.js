const welPanel = new Panel("welcome")
welPanel.name = "welcome panel"
welPanel.desc = "this is explaining welPanel";

// const welPanelSection = new Section('welPanel')
const welPanelSection = [
  {
      type:"icon",
      value:"icon/welcome.ico"
  },
  {
      type:"header",
      value:"welcome"
  },
  {
      type:"paragraph",
      value:"welcome to olux studio"
  },
];
panel={
  name:'welPanel',
  desc:'this is welPanel',
  contents:[
    {
      header:{
        type:'header',
        value:'welcome',
      }
    },
    {
      paragraph:{
        type:'paragraph',
        value:'welcome to olux studio',
      }
    }
  ]
}
welPanel.section(welPanelSection)
welPanel.create()
welPanel.read('welcome panel')
