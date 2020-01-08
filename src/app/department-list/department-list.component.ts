import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected] = "isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    <ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public selectedID;
  departments = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"}
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get("id"));
      this.selectedID = id;
    })
  }
  onSelect(department){
    // this.router.navigate(["/department",department.id])
    this.router.navigate([department.id],{relativeTo: this.route});
  }
  isSelected(department){
    return department.id === this.selectedID;
  }

}
