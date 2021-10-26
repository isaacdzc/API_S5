const { Pool } = require("pg");
require('dotenv').config();

/**
 * Conexión a la base de datos
 */
 class connection {
  constructor() {
    this.pool = new Pool({
      user: `${process.env.DB_USER}`,
      host: `${process.env.DB_HOST}`,
      database: `${process.env.DB}`,
      password: `${process.env.DB_PW}`,
      port: `${process.env.DB_PORT}`,
    });
  }

  //Función para ejecutar scripts con PostgreSQL
  async execute(sql) {
    let res = await this.pool.query(sql);
    return res;
  }
}

module.exports = connection;