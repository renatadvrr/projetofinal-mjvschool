import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/features/usuario/models/usuario.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  avaliableDateProducts: Date = new Date ('2021-10-22')
  usuario?: Usuario;
  
  constructor( private router: Router) { }

  ngOnInit(): void {
    const usuarioStorage = sessionStorage.getItem('usuario');
    if(usuarioStorage) {
      this.usuario = JSON.parse(usuarioStorage);
    }
  }
  navigateByUrl(path: string) {
    this.router.navigateByUrl(path);
  }
}
