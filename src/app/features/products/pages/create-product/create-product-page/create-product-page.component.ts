import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../../models/products.model';
import { ProductsService } from '../../../services/products.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.scss']
})
export class CreateProductPageComponent implements OnInit {
  product: Products = this.productService.getDefaultProduct();
  
  constructor(private productService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.product);
  }

  onSubmit(productForm: NgForm){
    console.log(productForm);
    const formvalue = productForm.form.value;
    this.product.nome = formvalue.nome;
    this.product.tipo = formvalue.tipo;
    this.product.city = formvalue.city;
    this.product.unidmedida = formvalue.unidmedida;
    this.product.quantidade = formvalue.quantidade;
    this.product.produtor = formvalue.produtor;
    this.product.contato = formvalue.contato;

    
    this.productService.createProduct(this.product);
    alert('Sua conta foi criada com sucesso!');
    this.router.navigateByUrl('login');
  }

}
