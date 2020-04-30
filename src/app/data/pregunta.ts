import { Opcion } from './opcion'

export class Pregunta {
    enunciado:string
    id:number
    nivel:string
    explicacion:string
    opciones: Array<Opcion>
}