import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-show-del-dep',
  templateUrl: './show-del-dep.component.html',
  styleUrls: ['./show-del-dep.component.css']
})
export class ShowDelDepComponent implements OnInit {

  constructor(private service: SharedService) { }

  DepartmentList: any = [];

  ModalTitle: string = "";
  ActivateAddEditDepComp: boolean = false;
  dep: any;

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComp = true;
    this.dep = {
      DepartmentId: 0,
      DepartmentName: ""
    }
  }

  editClick(item: any) {
    this.dep = item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepComp = true;
  }

  deleteClick(item: any) {
    if (confirm("Are you sure?")) {
      this.service.deleteDepartment(item.DepartmentId).subscribe(data => {
        alert(data.toString());
        this.refreshDepList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }
  refreshDepList() {
    this.service.getDepList().subscribe(data => {
      this.DepartmentList = data;
    });
  }
}
