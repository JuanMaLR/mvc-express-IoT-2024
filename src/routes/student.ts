// routes/usuarios.ts
import { Router } from "express";
import {
  getStudents,
  createStudent,
  updateStudent,
} from "../controllers/student";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/", getStudents);

// Crear un alumno nuevo en la BD
router.post("/", createStudent);

// Actualizar un alumno de la BD
router.put("/:id", updateStudent);

export default router;
