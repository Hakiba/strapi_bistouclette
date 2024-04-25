"use strict";

/**
 *  router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/backend/users",
      handler: "user.getUsers",
    },
  ],
};
