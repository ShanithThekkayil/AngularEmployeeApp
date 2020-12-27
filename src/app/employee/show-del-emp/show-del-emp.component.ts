import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-show-del-emp',
  templateUrl: './show-del-emp.component.html',
  styleUrls: ['./show-del-emp.component.css']
})
export class ShowDelEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  EmployeeList: any = [];

  ModalTitle: string = "";
  ActivateAddEditEmpComp: boolean = false;
  emp: any;

  ngOnInit(): void {
    this.refreshEmpList(1,10);
  }

  addClick() {
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true;
    this.emp = {
      EmployeeId: 0,
      EmployeeName: "",
      Department: 0,
      DateofJoining: "",
      PhotoFileName:"anonymous.png"
    }
  }

  editClick(item: any) {
    console.log(item);
    this.emp = item;
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item: any) {
    if (confirm("Are you sure?")) {
      this.service.deleteEmployee(item.EmployeeId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList(1,10);
      });
    }
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList(1,10);
  }
  refreshEmpList(item1:any, Item2:any) {
    this.service.getEmployees(item1,Item2).subscribe(data => {
      this.EmployeeList = data;
    });
  }
}
