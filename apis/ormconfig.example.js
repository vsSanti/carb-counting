const { SnakeNamingStrategy } = require('typeorm-naming-strategies');

module.exports = [
  {
    name: 'local-auth',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'username',
    password: 'password',
    database: 'carb-counting-auth-local',
    synchronize: true,
    dropSchema: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
    entities: ['src/auth/infra/db/pg/entities/**/*.ts'],
    migrations: ['src/auth/infra/db/pg/migrations/**/*.ts'],
    cli: {
      entitiesDir: 'src/auth/infra/db/pg/entities',
      migrationsDir: 'src/auth/infra/db/pg/migrations',
    },
  },
  {
    name: 'local-meal',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'username',
    password: 'password',
    database: 'carb-counting-meal-local',
    synchronize: true,
    dropSchema: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
    entities: ['src/meal/infra/db/pg/entities/**/*.ts'],
    migrations: ['src/meal/infra/db/pg/migrations/**/*.ts'],
    cli: {
      entitiesDir: 'src/meal/infra/db/pg/entities',
      migrationsDir: 'src/meal/infra/db/pg/migrations',
    },
  },
];
