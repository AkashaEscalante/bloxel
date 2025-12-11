import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ mensaje: "Ruta de mascotas funcionando 🐶🐱" });
});

export default router;
