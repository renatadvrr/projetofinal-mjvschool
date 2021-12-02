import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { MatCardModule } from '@angular/material/card';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { CreateUsuarioPageComponent } from './pages/create-usuario/create-usuario-page.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioListComponent,
    UsuariosComponent,
    CreateUsuarioPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    SharedModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    UsuarioComponent,
    UsuarioListComponent,
    UsuariosComponent,
    CreateUsuarioPageComponent
  ]

})
export class UsuarioModule { }
