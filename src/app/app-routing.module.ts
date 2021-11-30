import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { ProductsDetailsComponent } from './features/products/pages/products-details/products-details.component';
import { ProductsPageComponent } from './features/products/pages/products-page/products-page.component';
import { CreateUsuarioPageComponent } from './features/usuario/pages/create-usuario/create-usuario-page.component';
import { UsuariosComponent } from './features/usuario/pages/usuarios/usuarios.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'home' }, 
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'produtores', component: UsuariosComponent, canActivate: [AuthGuard]},
  { path: 'creatAccount', component: CreateUsuarioPageComponent},
  { path: 'produtos', component: ProductsPageComponent, canActivate: [AuthGuard]},
  { path: 'produtos-details/:id', component: ProductsDetailsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
