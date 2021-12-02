import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productsList: Array<Products> = [];

  filteredProducts: Array<Products> = [];
  
  constructor(private productsServices: ProductsService) { }
  
  ngOnInit(): void {
    this.productsList = this.productsServices.getProduct();
    this.filteredProducts = this.productsList;
  }

  searchByProducts(event: any) {
    const value = event.target.value;
    const filteredProducts = this.productsList.filter((produto) => produto.nome.toUpperCase().search(value.toUpperCase()) > -1);
    return this.filteredProducts = filteredProducts;
    
  }

}
