// "use strict";
//
// /**
//  * `users` middleware
//  */
//
// // module.exports = (config, { strapi }) => {
// //   // Add your own logic here.
// //   return async (ctx, next) => {
// //     strapi.log.info('In users middleware.');
// //
// //     await next();
// //   };
// // };
//
// module.exports = (config, { strapi }) => {
//   async function getUsers(ctx) {
//     const { id } = ctx.params;
//
//     const url = `https://bistouclette.net/api/user/${id}`;
//
//     const { data } = await axios.get(url);
//
//     await strapi.services.users.create("api::end-user.end-user", {
//       data: data,
//     });
//
//     return ctx.body;
//   }
//
// };
