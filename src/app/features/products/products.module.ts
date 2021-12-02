import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ProductsComponent } from './components/products/products.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { UsuarioModule } from '../usuario/usuario.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { CreateProductPageComponent } from './pages/create-product/create-product-page/create-product-page.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsPageComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    CreateProductPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    ProductsComponent,
    ProductsPageComponent,
    ProductsListComponent,
    CreateProductPageComponent
  ]

})
export class ProductsModule { }
