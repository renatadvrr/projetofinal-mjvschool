import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../models/products.model';
import {Location} from '@angular/common';
import { Usuario } from 'src/app/features/usuario/models/usuario.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input()
  card?:Boolean;

  @Input()
  products?: Products;

  usuario?: Usuario;
  

  // ngOnInit(): void {
  //   const usuarioStorage = sessionStorage.getItem('usuario');
  //   if(usuarioStorage) {
  //     this.usuario = JSON.parse(usuarioStorage);
  //   }
  // }

  // navigateByUrl(path: string) {
  //   this.router.navigateByUrl(path);
  // }

  
  constructor(
    private router: Router,
    private _location: Location) { }

  ngOnInit(): void {
    const usuarioStorage = sessionStorage.getItem('usuario');
    if(usuarioStorage) {
      this.usuario = JSON.parse(usuarioStorage);
    }
  }


  productDetails() {
  this.router.navigateByUrl(`produtos-details/${this.products?.id}`)
  }

  
  back(): void {
    this._location.back();
  }
  navigateByUrl(path: string) {
    this.router.navigateByUrl(path);
  }
}
