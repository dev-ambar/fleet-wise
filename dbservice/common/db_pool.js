const Pool = require('pg').Pool;


/**
 * Start Database Connection Pool
 */

const dbConnectionPool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  max: process.env.DB_MAX,
  idleTimeoutMillis: process.env.DB_IDLE_TIMEOUT_MS,
  connectionTimeoutMillis: process.env.DB_CONNECTION_TIMEOUT_MS,
  ssl: { rejectUnauthorized: false },
});

// Refrence : https://node-postgres.com/apis/pool
module.exports = dbConnectionPool;

