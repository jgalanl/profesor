import { Opcion } from './opcion'

export class Pregunta {
    enunciado:string
    id:number
    nivel:string
    opciones: Array<Opcion>
}