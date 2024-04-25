"use strict";
const axios = require("axios");
/**
 *  controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::backend.user", {
  async getUsers(ctx) {
    const { id } = ctx.params;

    const url = `https://bistouclette.net/api/users`;

    const { data } = await axios.get(url);

    console.log(data);

    for (const user of data) {
      await strapi.entityService.create("api::backend.user", {
        data: {
          username: user.username,
          prenom: user.first_name,
          nom: user.last_name,
          email: user.email,
          age: user.age,
        },
      });
    }
    return ctx.body;
  },
});
