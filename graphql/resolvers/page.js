export default {
  Query: {
    page: (parent, args, { models }) => {
      return models.User.findById(args.id)
    },
    pages:(parent,args,{ models })=>{
      return models.User.findAll({ limit: 10 })
    }
  },
  Mutation:{
    createPage :async (parent, args, {models})=>{
      const page = args
      return models.Page.create(page)
    },
    updatePage :async (parent, args, {models})=>{
      const page = args
      return models.Page.update(page)
    },
    deletePage:async (parent, args, {models})=>{
      try {
        return await models.Page.destroy({
          where: {id: args.id}
        });
      } 
      catch (e) {
        throw new Error(e);
      }
    }
  }
}
