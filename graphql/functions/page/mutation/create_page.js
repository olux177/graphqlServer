const createPage = ( args, context)=>{
    try {
      return context.models.Page.create(args.page)
    }
    catch (e) {
      throw new Error(e);
    }
  }
export default createPage
