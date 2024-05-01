"use strict";
const axios = require("axios");
/**
 *  controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::backend.user", {
  async getUsers(ctx) {
    const url = `https://bistouclette.net/api/users`;

    const { data } = await axios.get(url);
    let count = 0;

    for (const user of data) {
      if (
        !(await strapi
          .query("api::backend.user")
          .findOne({ where: { username: user.username } }))
      ) {
        try {
          await strapi.entityService.create("api::backend.user", {
            data: {
              username: user.username,
              prenom: user.first_name,
              nom: user.last_name,
              email: user.email,
              age: user.age,
            },
          });
        } catch (e) {
          return e;
        }
      } else {
        count++;
        await strapi.query("api::backend.user").update({
          where: { username: user.username },
          data: {
            prenom: user.first_name,
            nom: user.last_name,
            email: user.email,
            age: user.age,
          },
        });
        continue;
      }
    }

    if (count > 0) {
      return `${count} users updated successfully`;
    }
    return "Users added successfully";
  },

  async updateUser(ctx) {
    const { id } = ctx.params;

    const url = `https://bistouclette.net/api/users/${id}`;

    const { data } = await axios.get(url);

    console.log(data);

    await strapi.entityService.update("api::backend.user", {
      id,
      data: {
        username: data.username,
        prenom: data.first_name,
        nom: data.last_name,
        email: data.email,
        age: data.age,
      },
    });

    return ctx.body;
  },
});
