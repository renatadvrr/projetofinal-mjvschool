import { Usuario } from "../../usuario/models/usuario.model";


export interface Products {
    id: number;
    nome: string;
    tipo: string;
    unidmedida: string;
    quantidade: number;
    produtor: Usuario ['nome'];
    city: Usuario ['city'];
    contato: Usuario['cel'];
}