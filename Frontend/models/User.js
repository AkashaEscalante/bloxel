// models4/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },        // Nombre del usuario
    email: { type: String, required: true, unique: true }, // Correo único
    password: { type: String, required: true },    // Contraseña encriptada
    points: { type: Number, default: 0 },         // Puntos del estudiante
    lessonsCompleted: { type: Number, default: 0 }, // Lecciones completadas
    streak: { type: Number, default: 0 }           // Racha de días
});

module.exports = mongoose.model("User", UserSchema);
