import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localePt from '@angular/common/locales/pt';
import { UsuarioModule } from './features/usuario/usuario.module';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';

import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { ProductsModule } from './features/products/products.module';

registerLocaleData(localePt); 

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    SharedModule,
    HomeModule,
    LoginModule,
    ProductsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
