import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  product?: Products

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const product = this.productsService.getById(parseInt(params['id']));
      this.product = product;
    })
  }

}
