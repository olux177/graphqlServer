import Sequelize from 'sequelize';
import Acl from 'acl';
import AclSeq from 'acl-sequelize';
import config from "../db/config.json"
const dbconnection = new Sequelize(config.development);

export const acl = new Acl(new AclSeq(dbconnection, { prefix: 'acl_' }));
const createResolver = (resolver) => {
  const baseResolver = resolver;
  baseResolver.createResolver = (childResolver) => {
    const newResolver = async (parent, args, context) => {
      await resolver(parent, args, context);
      return childResolver(parent, args, context);
    };
    return createResolver(newResolver);
  };
  return baseResolver;
};

export const requiresAuth = createResolver((parent, args, context) => {
  if (!context.user ) {
    throw new Error('Not authenticated');
  }
});

export const requiresAdmin = requiresAuth.createResolver(
  (parent, args, context) => {
    acl.isAllowed(context.user.id, 'blogs', null, function(err, res){
      if(!res){
        throw new Error('Not Authorised');
      }
    })
  },
);
