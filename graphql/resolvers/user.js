export default {
  Query: {
    me: (parent, args, { models }) => {
      return models.User.findById(1)
    },
    users:(parent,args,{ models })=>{
      console.log('polly');
      return models.User.findAll({ limit: 10 })
    },
    // login:async (parent, args, {models,SECRET}, info)=>{
    //   return tryLogin(args.email, args.password, models, SECRET)
    // }
  },
}
