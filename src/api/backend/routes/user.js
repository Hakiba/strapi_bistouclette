"use strict";

/**
 *  router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::backend::user", {
  prefix: "",
  only: [],
  except: ["delete"],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOne: {},
    create: {},
    update: {},
    delete: {},
  },
});

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/backend/users",
      handler: "user.getUsers",
    },
  ],
};
