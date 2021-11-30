import { Products } from "../../products/models/products.model";
import { PhonePipe } from"../../../shared/pipes/phone/phone.pipe"
export interface Usuario {
    id: number;
    nome: string;
    email: string;
    cel: string | PhonePipe;
    password: string;
    estado: string;
    city: string;
}