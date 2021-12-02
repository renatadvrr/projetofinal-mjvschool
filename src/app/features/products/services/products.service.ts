import { Injectable } from '@angular/core';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getById(arg0: number) {
    throw new Error('Method not implemented.');
  }
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

  getDefaultProduct(): Products {
    // const dateToday = moment().format('YYYY/MM/DD');
    return {
    id: this.generateNextId(),
    nome: '',
    tipo: '',
    unidmedida:'',
    quantidade:0,
    produtor: '',
    city: '',
    contato: ''
   }
  }
  getProduct() {
    return this.productsList;
  }

  getProductByName(name: string) {
     return this.productsList.find((productsList) => productsList.nome === name);
   }
   getProductById(id: number) {
    return this.productsList.find((productsList) => productsList.id === Number(id));
    }

   getProductByFilterName(name: string) {
     return this.productsList.filter((productsList) => productsList.nome.toUpperCase().search(name.toUpperCase()) > -1);
   }

   getProductByFilterId(id: number) {
     const productsList = this.getProductById(Number(id));
     if(!productsList) {
       return [];
     }
     return [productsList];
   }

   createProduct(product: Products) {
     this.productsList.push(product);
     return this.productsList;
   }


   removeProduct(id: number) {
     const productIndex = this.productsList.findIndex((product) => product.id === Number(id));
     this.productsList.splice(productIndex, 1);
   }

   generateNextId(): number {
     return this.productsList[(this.productsList.length - 1)].id + 1;
   }
}


