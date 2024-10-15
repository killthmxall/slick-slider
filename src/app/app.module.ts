import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { GridComponent } from './grid/grid.component';

/* Se importa un nuevo módulo para el manejo de la directiva [(ngModel)]*/
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VistaPrincipalComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
