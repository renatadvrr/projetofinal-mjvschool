import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/features/usuario/models/usuario.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuario?: Usuario;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const usuarioStorage = sessionStorage.getItem('usuario');
    if(usuarioStorage) {
      this.usuario = JSON.parse(usuarioStorage);
    }
  }

  navigateByUrl(path: string) {
    this.router.navigateByUrl(path);
  }

  exit() {
    sessionStorage.clear();
    this.navigateByUrl('/home');
  }

}
