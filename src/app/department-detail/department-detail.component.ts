import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentID;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentID = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id"));
      this.departmentID = id;
    })
  }
  goPrevious() {
    let previousID = this.departmentID - 1;
    this.router.navigate(["/department", previousID]);
  }
  goNext() {
    let nextID = this.departmentID + 1;
    this.router.navigate(["/department", nextID]);
  }
  gotoDepartment() {
    let selectedID = this.departmentID ? this.departmentID : null;
    // this.router.navigate(["/department",{id:selectedID}]);
    this.router.navigate(["../", { id: selectedID }], { relativeTo: this.route });
  }
  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route })
  }
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route })
  }
}
