import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { Catalog } from './data/catalog';
import { SyndromeService } from './services/syndromes.service';
import { SyndromeListComponent } from './syndrome-list/syndrome-list.component';
import { SyndromeDetailComponent } from './syndrome-detail/syndrome-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SyndromeListComponent,
    SyndromeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [SyndromeService, Catalog],
  bootstrap: [AppComponent]
})
export class AppModule { }
