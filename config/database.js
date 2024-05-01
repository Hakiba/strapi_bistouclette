module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env(
        "DATABASE_HOST",
        "strapi-bistouclette.cteo2w20i3ru.eu-north-1.rds.amazonaws.com"
      ),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "strapi-bistouclette"),
      user: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "rVBzESfD6FW"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
