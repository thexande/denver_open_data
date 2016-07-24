var knex = require('../config/db.js')

module.exports = {
  getSalesData: () => {
    return knex('property_sales').limit(100)
  }
}