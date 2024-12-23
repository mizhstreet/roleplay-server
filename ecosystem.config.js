// Modify this
const ORIGIN_URL = "https://minhbt.link";
const DB_HOST = "database-1.coidxbkl1hjm.us-east-1.rds.amazonaws.com";
const DB_PORT = 5432;
const DB_SCHEMA = "shop_db_schema";
const POSTGRES_USER = "postgres";
const POSTGRES_PASSWORD = "hoilamgi";
const POSTGRES_DB = "shop_db";

// Do not modify this
const DATABASE_URL = `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}?schema=${DB_SCHEMA}&sslmode=prefer`;
const PORT = 3000;

const env = {
  AWS_REGION: "us-east-1",
  NODE_ENV: "production",
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
