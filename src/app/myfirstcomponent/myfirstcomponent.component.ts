import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-myfirstcomponent',
  templateUrl: './myfirstcomponent.component.html',
  styleUrls: ['./myfirstcomponent.component.css']
})
export class MyfirstcomponentComponent implements OnInit {
  public greeting = "";
  public employees = [];
  constructor(private _employeeService : EmployeeService) { 

  }

  ngOnInit() {
     this._employeeService.getEmployees()
          .subscribe(data => this.employees = data);
  }
  sayHello(you){
    console.log(you);
    this.greeting = "cuonglb";
  }
  logMessage(value){
    console.log(value)
  }
}
