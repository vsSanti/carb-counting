export default {
  jwtSecret: process.env.LOCAL_JWT_SECRET ?? process.env.JWT_SECRET,
  database: {
    host: process.env.LOCAL_DB_HOST ?? process.env.DB_HOST,
    database: process.env.LOCAL_DB_DATABASE_NAME ?? process.env.DB_DATABASE_NAME,
    username: process.env.LOCAL_DB_USERNAME ?? process.env.DB_USERNAME,
    password: process.env.LOCAL_DB_PASSWORD ?? process.env.DB_PASSWORD,
  },
};
