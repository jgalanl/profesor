import { Asignatura } from './asignatura'

export class User {
    email:string
    rol: string
    asignaturas: Array<Asignatura>
}