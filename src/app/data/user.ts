import { Asignatura } from './asignatura'

export class User {
    nombre: string
    email:string
    rol: string
    asignaturas: Array<Asignatura>
}