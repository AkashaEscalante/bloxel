import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

export const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

// Probar conexión
pool.connect()
  .then(() => console.log("🐘 PostgreSQL conectado exitosamente 🚀"))
  .catch(err => console.error("❌ Error al conectar a PostgreSQL:", err));
