import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/components/footer/footer.component';
import { HeaderComponent } from './header/components/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PhonePipe } from './pipes/phone/phone.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhonePipe
  ],
  imports: [
    CommonModule,
     MatMenuModule,
     MatToolbarModule,
     MatButtonModule,
     RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PhonePipe
  ],

  
})
export class SharedModule { }

