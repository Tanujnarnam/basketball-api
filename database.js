import pg from 'pg'

import dotenev from 'dotenv'
dotenev.config()

const Pool = pg.Pool;

const pool = new Pool({
  user: process.env.SQL_USER,
  host: process.env.SQL_HOST,
  database: process.env.SQL_DATABASE,
  password: process.env.SQL_PASSWORD,
});

export default pool;

