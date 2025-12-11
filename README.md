Bloxel – Plataforma de Aprendizaje de Excel estilo Duolingo

Aplicación web educativa inspirada en la metodología de Duolingo, diseñada para aprender Excel mediante lecciones interactivas, sesiones cortas, sistema de niveles, seguimiento de progreso y logros desbloqueables.

📋 Descripción

Bloxel es una plataforma moderna de aprendizaje que permite a los usuarios mejorar sus habilidades de Excel de forma dinámica y gamificada.

Ofrece funcionalidades como:

🎯 Lecciones interactivas con ejercicios prácticos
🔥 Sistema de niveles, desde básico hasta avanzado
📊 Progreso visual y estadísticas
🏆 Logros y recompensas por completar actividades
⏳ Sesiones diarias que fomentan la constancia
💾 Persistencia de datos en PostgreSQL
🔐 Sistema de usuarios, perfiles y autenticación
🧱 Frontend y backend completamente separados

🛠️ Tecnologías Utilizadas
Backend

Node.js – Servidor backend

Express.js – Framework web

PostgreSQL – Base de datos principal

Prisma / Sequelize / SQL nativo (según tu stack real)

JWT – Autenticación segura

Bae44 – Generador/hosting backend

Frontend

React / Next.js (o la tecnología que uses)

TypeScript

Vite o Webpack

TailwindCSS / CSS3

Axios para consumo de API

📁 Estructura del Proyecto

Esta estructura es un ejemplo típico. La ajusto si me confirmas tu stack exacto.

bloxel/
├── backend/
│   ├── src/
│   │   ├── index.js            # Punto de entrada del servidor
│   │   ├── config/             # Configuración general
│   │   ├── routes/             # Endpoints de API
│   │   ├── controllers/        # Lógica de negocio
│   │   ├── middlewares/        # Auth, validaciones, etc.
│   │   ├── database/
│   │   │   ├── connection.js   # Conexión PostgreSQL
│   │   │   ├── schema.sql      # Estructura de tablas
│   │   │   └── queries/        # Queries SQL
│   ├── .env.example            # Variables de entorno
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx             # Componente principal
│   │   ├── pages/              # Lecciones, login, dashboard
│   │   ├── components/         # UI reutilizable
│   │   ├── services/           # API client
│   │   └── context/            # Estado global
│   ├── vite.config.ts
│   ├── .env.example
│   └── package.json
│
└── README.md

🚀 Instalación y Configuración
Requisitos previos

Node.js 18+

PostgreSQL 14+

npm o yarn

1️⃣ Configurar Base de Datos

Crea la base de datos:

CREATE DATABASE bloxel;


Ejecuta el archivo SQL:

backend/database/schema.sql

2️⃣ Configurar Backend
cd backend
npm install


Copia el archivo de entorno:

cp .env.example .env


Configura tu conexión:

DATABASE_URL=postgresql://usuario:password@localhost:5432/bloxel
JWT_SECRET=tu_secreto
PORT=3000


Inicia servidor:

npm start


Backend disponible en:
👉 http://localhost:3000

3️⃣ Configurar Frontend
cd frontend
npm install


Copia las variables:

cp .env.example .env


Configura:

VITE_API_URL=http://localhost:3000


Ejecuta el frontend:

npm run dev


Frontend disponible en:
👉 http://localhost:5173

📡 API Endpoints
🧑‍🎓 Usuarios
Método	Endpoint	Descripción
POST	/api/auth/register	Registro
POST	/api/auth/login	Login
GET	/api/users/me	Datos del usuario
📘 Lecciones
Método	Endpoint	Descripción
GET	/api/lessons	Listar lecciones
GET	/api/lessons/{id}	Obtener una lección
POST	/api/lessons/progress	Guardar progreso
🎯 Niveles
Método	Endpoint	Descripción
GET	/api/levels	Obtener niveles
GET	/api/levels/status	Estado del usuario
🏆 Logros
Método	Endpoint	Descripción
GET	/api/achievements	Lista de logros
POST	/api/achievements/unlock	Desbloquear logro
🎯 Características Principales

Backend:

Validación robusta

Autenticación JWT

Arquitectura modular

Conexión a PostgreSQL optimizada

Listo para deploy con Bae44 / Render / Railway

Frontend:

Componentes reutilizables

UI moderna

Manejo de estado global

Integración con API

Flujo tipo Duolingo

Gamificación:

Barras de progreso

Lecciones diarias

XP por actividad

Logros desbloqueables

Sistema de rachas

🐛 Solución de Problemas
🔴 No conecta a la base de datos

✔ Verifica credenciales del .env
✔ PostgreSQL debe estar corriendo
✔ Ejecuta el schema.sql antes de iniciar

🟡 Error CORS

Agrega la URL del frontend en el backend.

🔵 El frontend no carga datos

Verifica:

VITE_API_URL=http://localhost:3000

📄 Licencia

MIT License. Puedes usar, modificar y distribuir libremente.

👥 Contribuciones

Haz un fork

Crea una rama

Envía tu pull request

📞 Contacto

Para dudas o sugerencias, abre un issue en GitHub.
