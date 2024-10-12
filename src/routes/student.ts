// routes/usuarios.ts
import { Router } from "express";
import { getStudents, createStudent } from "../controllers/student";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/", getStudents);

// Crear un alumno nuevo en la BD
router.post("/", createStudent);

export default router;
