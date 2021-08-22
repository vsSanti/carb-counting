export default {
  database: {
    host: process.env.DB_HOST ?? 'localhost',
    database: process.env.DB_DATABASE_NAME ?? 'carb-counting-meal-local',
    username: process.env.DB_USERNAME ?? 'postgres',
    password: process.env.DB_PASSWORD ?? 'docker',
  },
};
