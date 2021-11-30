import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  templateUrl: './create-usuario-page.component.html',
  styleUrls: ['./create-usuario-page.component.scss']
})

export class CreateUsuarioPageComponent implements OnInit {
  
  usuario: Usuario = this.usuarioService.getDefaultUsuario();
  constructor( 
    private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.usuario);
  }

  onSubmit(usuarioForm: NgForm){
    console.log(usuarioForm);
    const formvalue = usuarioForm.form.value;
    this.usuario.nome = formvalue.nome;
    this.usuario.cel = formvalue.cel;
    this.usuario.city = formvalue.city;
    this.usuario.estado = formvalue.estado;
    this.usuario.email = formvalue.email;
    this.usuario.password = formvalue.password;
    
    this.usuarioService.createUsuario(this.usuario);
    alert('Sua conta foi criada com sucesso!');
    this.router.navigateByUrl('login');
  }

}
