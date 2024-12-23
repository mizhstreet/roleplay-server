// Modify this
const ORIGIN_URL = "http://localhost:5173";
const DB_HOST = "localhost";
const DB_PORT = 5432;
const DB_SCHEMA = "shop_db_schema";
const POSTGRES_USER = "minhbiu";
const POSTGRES_PASSWORD = "hoilamgi";
const POSTGRES_DB = "shop_db";

// Do not modify this
const DATABASE_URL = `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}?schema=${DB_SCHEMA}&sslmode=prefer`;
const PORT = 3000;

const env = {
  ORIGIN_URL,
  DB_HOST,
  DB_PORT,
  DB_SCHEMA,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  DATABASE_URL,
  PORT,
};

module.exports = {
  apps: [
    {
      script: "index.js",
      watch: ".",
      env: env,
    },
  ],
};
