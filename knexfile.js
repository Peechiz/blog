// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'rocket'
    },
    debug: true
  },

  production: {
    client: 'pg',
    connection: {
      database: 'DATABASE_URL',
      user     : 'xlrlthqvrqlvxz',
      password : 'ussVVmPn6kvVPDXIbeghPFcRsF',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
