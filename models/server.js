const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

// Conectar a MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/bloxelDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

// ----------------- RUTAS -----------------

// Registro
app.post("/api/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = new User({ name, email, password });
        await user.save();
        res.json({ success: true, msg: "Usuario registrado" });
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message });
    }
});

// Login
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ success: false, msg: "Usuario no encontrado" });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ success: false, msg: "Contraseña incorrecta" });

        res.json({ success: true, user: { name: user.name, email: user.email, points: user.points } });
    } catch (err) {
        res.status(500).json({ success: false, msg: err.message });
    }
});

// Actualizar perfil
app.post("/api/updateProfile", async (req, res) => {
    const { email, name } = req.body;
    try {
        const user = await User.findOneAndUpdate({ email }, { name }, { new: true });
        res.json({ success: true, user });
    } catch (err) {
        res.status(500).json({ success: false, msg: err.message });
    }
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
