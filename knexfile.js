// Update with your config settings.

module.exports = {
  production: {
    connection: process.env.CLEARDB_DATABASE_URL
  },
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'flyingmonky',
      database: 'denver_house_sales'
    }
  }
};
