import createPage1 from '../functions/page/mutation/create_page'
import {requiresAuth,requiresAdmin} from '../../acl/permission'
export default {
  Query: {
    page: requiresAdmin.createResolver((parent, args, {models}) => {
      return models.Page.findById(args.id)
    }),
    pages:async (parent,args,{ models })=>{
      return await models.Page.findAll({ limit: 10 })
    }
  },
  Mutation:{
    createPage :async (parent, args, {models})=>{
      try {
        return await models.Page.create(args.page)
      }
      catch (e) {
        throw new Error("db error");
      }
    },
    updatePage :async (parent, args, {models})=>{
      // const page = args
      // return models.Page.update(page)
        try {
          return await models.Page.update(
            args.page,
            { where: { id: args.id } }
          ).then((res)=>{
            return {id:args.id,name:args.page.name}
          })
        }
        catch (e) {
          throw new Error("db error");
        }
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
