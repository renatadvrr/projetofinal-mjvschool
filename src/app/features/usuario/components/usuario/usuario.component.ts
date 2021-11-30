import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @Input()

  usuario?: Usuario
  
  constructor() { }

  ngOnInit(): void {
  }

}
