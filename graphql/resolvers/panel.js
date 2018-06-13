
export default {
  Query: {
    me: (parent, args, { models }) => {
      return models.User.findById(1)
    },
    panel:(parent,args,{ models,Panel })=>{
      const wel = new Panel();
      wel.name = args.name;      
      return wel.read();
    },
    panelContent:(parent,args,{ models,Panel })=>{
      const wel = new Panel();  
      return wel.readContent(args.id);
    }
  },
  Mutation:{ 
    createPanel :async (parent, args, {models,Panel})=>{
      try {
        const insert = new Panel();
        insert.name = args.name;
        insert.contents = args.contents;      
        return await insert.create();
      }
      catch (e) {
        throw new Error("db error");
      }
    },
    updatePanel :async (parent, args, {models,Panel})=>{
      try {
        const edit = new Panel(),
          table = 'panel',
          id = {id:args.id},
          body = {};
          (args.name)?body.name=args.name:null;
          (args.description)?body.description=args.description:null;         
        return await edit.update(table,id,body);
      }
      catch (e) {
        throw new Error("db error");
      }
    },
    updatePanelContent :async (parent, args, {models,Panel})=>{
      try {
        const edit = new Panel(),
          table = "content",
          id = {id:args.id},
          body = {};
          (args.value)?body.value=args.value:null;
          (args.style)?body.style=args.style:null;         
        return await edit.update(table,id,body);
      }
      catch (e) {
        throw new Error("db error");
      }
    },
    updatePanelContentType :async (parent, args, {models,Panel})=>{
      try {
        const edit = new Panel(),
          table = "type",
          id = {id:args.id},
          body = {};
          (args.name)?body.name=args.name:null;
          (args.description)?body.description=args.description:null;         
        return await edit.update(table,id,body);
      }
      catch (e) {
        throw new Error("db error");
      }
    },
    deletePanel :async (parent, args, {models,Panel})=>{
      try {
        const del = new Panel(),
          table = "panel",
          id = {id:args.id}        
        return await del.delete(table,id);
      }
      catch (e) {
        throw new Error("db error");
      }
    },
    deletePanelContent :async (parent, args, { models,Panel})=>{
      try {
        const del = new Panel(),
          table = "content",
          id = {id:args.id};
        return await del.delete(table,id);
      } 
      catch (e) {
        throw new Error("db error");
      }
    }
  }
}
