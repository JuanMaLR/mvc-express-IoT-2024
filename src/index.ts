import dotenvFlow from "dotenv-flow";
import express from "express";
import studentRouter from "./routes/student";
import testRoutes from "./routes/test";
import unknownResource from "./middlewares/unknown-resource";
import unknownError from "./middlewares/unknown-error";
import validationError from "./middlewares/validation-error";

//Para poder acceder a las variables del ambiente (.env)
dotenvFlow.config();

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas de la api
app.use("/student", studentRouter);

// Rutas de prueba
app.use("/error", testRoutes);

// Middlewares
app.use(validationError); // Error de validacion
app.use(unknownResource); // Error 404, recurso no encontrado

// Middlewares de error
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
