module.exports = {
  type: 'postgres',
  logging: true,
  host: '172.17.0.2',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'ouitrain_bdd',
  entities: [__dirname + '/src/entities/*.entity.ts'],
  synchronize: true,
  cli: {
    entitiesDir: 'entities',
  },
};
