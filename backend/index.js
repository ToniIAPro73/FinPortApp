require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes"); // 👈 Importa las rutas

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes); // 👈 Usa las rutas bajo /api/users

app.get("/", (req, res) => {
  res.send("✅ FinPortApp Backend está funcionando");
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");
    app.listen(PORT, () =>
      console.log(`🚀 Servidor backend en http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.error("❌ Error al conectar a MongoDB:", error);
  });
