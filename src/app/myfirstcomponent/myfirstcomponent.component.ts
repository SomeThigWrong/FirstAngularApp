import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfirstcomponent',
  templateUrl: './myfirstcomponent.component.html',
  styleUrls: ['./myfirstcomponent.component.css']
})
export class MyfirstcomponentComponent implements OnInit {
  public greeting = "";
  constructor() { }

  ngOnInit() {
  }
  sayHello(you){
    console.log(you);
    this.greeting = "cuonglb";
  }
  logMessage(value){
    console.log(value)
  }
}
