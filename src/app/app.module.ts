import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    MyfirstcomponentComponent,
    routingComponents,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
