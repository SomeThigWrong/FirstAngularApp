import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MyfirstcomponentComponent,
    routingComponents,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
