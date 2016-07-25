var knex = require('../config/db.js')
module.exports = {
  getSalesData: () => {
    return knex('property_sales').select("RECEPTION_DATE", "SALE_PRICE").limit(100)
  }
}