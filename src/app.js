const express = require("express");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const { UserRoutes, CourseRoutes, VideoRoutes, CategoryRoutes } = require("./Routes");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = process.env.PORT || 8000;

db.authenticate()
    .then(() => console.log("Autenticacion exitosa"))
    .catch((error) => console.log(error));

db.sync({ force: false })
    .then(() => console.log("Base de datos autenticada"))
    .catch((error) => console.log(error));

initModels();

app.get("/", (req, res, next) => {
    res.status(200).json("Todo bien");
    next();
});

app.use("/api/v1", UserRoutes);
app.use("/api/v1", CourseRoutes);
app.use("/api/v1", VideoRoutes);
app.use("/api/v1", CategoryRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));