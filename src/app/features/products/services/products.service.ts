import { Injectable } from '@angular/core';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsList: Array<Products> = [
    {
      id: 1, 
      nome: 'Banana', 
      tipo: 'caturra', 
      unidmedida: 'dúzia', 
      quantidade: 10,
      produtor: 'João',
      city: 'Belo Horizonte',
      contato: '2222222',
    },
    {
      id: 2, 
      nome: 'Abacaxi', 
      tipo: 'da Bahia', 
      unidmedida: 'unidade', 
      quantidade:14,
      produtor: 'Maria',
      city: 'Itabirito',
      contato: '22333333', 
    },
    {
      id: 3, 
      nome: 'Mandioca', 
      tipo: '', 
      unidmedida: 'Kg', 
      quantidade:5,
      produtor: 'José',
      city: 'Abaeté',
      contato: '444444', 
    },
    {
      id: 4, 
      nome: 'Limão', 
      tipo: 'Taiti', 
      unidmedida: 'Kg', 
      quantidade:20,
      produtor: 'Luiz',
      city: 'Juiz de Fora',
      contato: '5555555',
    },
    {
      id: 5, 
      nome: 'Acerola', 
      tipo: '', 
      unidmedida: 'Kg', 
      quantidade:3,
      produtor: 'Cleide',
      city: 'Setubinha',
      contato: '666666', 
    }
  ];

  constructor() { }

  getProducts() {
    return this.productsList;
  }

  getById(id: number) {
    return this.productsList.find((productsList) => productsList.id === id);
  }

}
