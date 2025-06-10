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
  res.send("✅ FinPortApp Backend está funcionando correctamente");
});

// Conexión a MongoDB
<<<<<<< HEAD
mongoose.connect(process.env.MONGO_URI)
=======
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
>>>>>>> cc809f8b2956ae3ceeb770b1c3d79ec9a49f49ea
  .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");
    app.listen(PORT, () =>
      console.log(`🚀 Servidor backend en http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.error("❌ Error al conectar a MongoDB:", error);
  });
