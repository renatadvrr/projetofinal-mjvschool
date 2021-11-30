import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/features/usuario/service/usuario.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  error: boolean = false;

  email?: string;
  password?: string;

  constructor( 
    private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    console.log(this.email, this.password);
    const usuario = this.usuarioService.getUsuarioByEmailAndPassword(this.email, this.password);
    if (!usuario) {
      this.error = true;
    } else {
      sessionStorage.setItem('usuario', JSON.stringify(usuario));
      this.router.navigateByUrl('produtos');
    }
  
  }
  validateUser(loginForm: NgForm) {
    const usuario = this.usuarioService.getUsuarioByEmailAndPassword(loginForm.value.email, loginForm.value.password);
    if(!usuario) {
      return this.error = true;
    }
    this.router.navigateByUrl('usuarios');
    return sessionStorage.setItem('currentUsuarios', JSON.stringify(usuario));

  }

}
