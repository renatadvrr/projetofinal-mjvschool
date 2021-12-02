import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../models/products.model';
import {Location} from '@angular/common';


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
  
  constructor(
    private router: Router,
    private _location: Location) { }

  ngOnInit(): void {
  }

  productDetails() {
  this.router.navigateByUrl(`produtos-details/${this.products?.id}`)
  }

  
  back(): void {
    this._location.back();
  }

}
