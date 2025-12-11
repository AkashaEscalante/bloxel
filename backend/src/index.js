import express from "express";
import dotenv from "dotenv";
dotenv.config();

// 👇 IMPORTANTE: activar conexión a PostgreSQL
import "./bd.js";

import usuariosRoutes from "./routes/usuarios.routes.js";
import mascotasRoutes from "./routes/mascotas.routes.js";

const app = express();

app.use(express.json());

// Rutas
app.use("/usuarios", usuariosRoutes);
app.use("/mascotas", mascotasRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor en puerto ${process.env.PORT}`);
});
