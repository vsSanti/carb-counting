export default {
  jwtSecret: process.env.JWT_SECRET || 'otijas818SSD(*-0)))@,dasoip',
  database: {
    host: process.env.DB_HOST ?? 'localhost',
    database: process.env.DB_DATABASE_NAME ?? 'carb-counting-auth-local',
    username: process.env.DB_USERNAME ?? 'postgres',
    password: process.env.DB_PASSWORD ?? 'docker',
  },
};
