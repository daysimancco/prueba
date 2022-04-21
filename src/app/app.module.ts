import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioPeruComponent } from './inicioPeru/inicioPeru.component';

@NgModule({
  declarations: [	
    AppComponent,
      InicioPeruComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
