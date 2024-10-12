import { Student } from "../interfaces/student";
import {
  findAllStudents,
  insertStudent,
  updateStudent,
} from "../models/student";

// Obtener todos los alumnos
export const findAll = async () => {
  return await findAllStudents();
};

// Crear un nuevo alumno
export const insert = async (student: Student) => {
  return await insertStudent(student);
};

export const update = async (id: number, student: Student) => {
  return await updateStudent(id, student);
};
