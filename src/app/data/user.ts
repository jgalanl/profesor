import { Asignatura } from "./asignatura";

export class User {
  nombre: string;
  rol: string;
   email: string;
  nivel: string;
  asignaturas: Array<Asignatura>;
}
