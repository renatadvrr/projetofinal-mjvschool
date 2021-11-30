import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../service/usuario.service';
CUSTOM_ELEMENTS_SCHEMA

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  usuarioList: Array<Usuario> = [];

  filteredProdutores: Array<Usuario> = [];

  constructor(private usuariosServices: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioList = this.usuariosServices.getUsuario();
    this.filteredProdutores = this.usuarioList;
  }

  searchByName(event: any) {
    const value = event.target.value;
    const filteredProdutores = this.usuarioList.filter((produtor) => produtor.nome.toUpperCase().search(value.toUpperCase()) > -1);
    return this.filteredProdutores = filteredProdutores;
  }
}
