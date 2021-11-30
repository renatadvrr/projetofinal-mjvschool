import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Usuario } from '../models/usuario.model';
//import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: Array<Usuario> = [
    {
      id: 1,
      nome: 'Maria da Silva',
      email: 'msilva@gmail.com',
      cel: '553199559955',
      password: '123',
      city: 'Belo Horizonte',
      estado: 'Minas Gerais',
    },
    
    {
        id: 2,
        nome: 'João da Silva',
        email: 'jsilva@gmail.com',
        cel: '553399999955',
        password: '123',
        city: 'Abaeté',
        estado: 'Minas Gerais',
    },
    {
        id: 3,
        nome: 'Luiz da Silva',
        email: 'lsilva@gmail.com',
        cel: '553399555555',
        password: '123',
        city: 'Itabirito',
        estado: 'Minas Gerais',
    }
  ];

  constructor() { }

  getDefaultUsuario(): Usuario {
    // const dateToday = moment().format('YYYY/MM/DD');
    return {
    id: this.generateNextId(),
    nome: '',
    email: '',
    cel: '',
    password: '',
    city: '',
    estado: ''
   }
  }
  getUsuario() {
    return this.usuarios;
  }

  getUsuarioByEmailAndPassword(email: string | undefined, password: string | undefined) {
    return this.usuarios.find((usuario) => usuario.email === email && usuario.password === password);
  }

getUsuarioById(id: number) {
return this.usuarios.find((usuario) => usuario.id === Number(id));
}

   getUsuarioByName(name: string) {
     return this.usuarios.find((usuario) => usuario.nome === name);
   }

   getUsuariosByFilterName(name: string) {
     return this.usuarios.filter((usuario) => usuario.nome.toUpperCase().search(name.toUpperCase()) > -1);
   }

   getUsuariosByFilterId(id: number) {
     const usuario = this.getUsuarioById(Number(id));
     if(!usuario) {
       return [];
     }
     return [usuario];
   }

   createUsuario(usuario: Usuario) {
     this.usuarios.push(usuario);
     return this.usuarios;
   }


   removeUsuario(id: number) {
     const usuarioIndex = this.usuarios.findIndex((usuario) => usuario.id === Number(id));
     this.usuarios.splice(usuarioIndex, 1);
   }

   generateNextId(): number {
     return this.usuarios[(this.usuarios.length - 1)].id + 1;
   }
}
