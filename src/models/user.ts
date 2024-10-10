import pool from "../db";
import { RowDataPacket } from "mysql2/promise";

// Tipo para representar un Alumno
export interface Alumno {
  id: number;
  nombre: string;
  fecha_nacimiento: Date;
}

// Obtener todos los alumnos
export const findAllUsers = async (): Promise<Alumno[]> => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM alumnos");
  return rows as Alumno[];
};
