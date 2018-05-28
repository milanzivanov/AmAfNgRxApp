import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PruductComponent } from './pruduct/pruduct.component';
import { PruductsComponent } from './pruducts/pruducts.component';

@NgModule({
  declarations: [
    AppComponent,
    PruductComponent,
    PruductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
