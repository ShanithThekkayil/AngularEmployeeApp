import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() emp: any;
  EmployeeId: string = "";
  EmployeeName: string = "";
  Department: string = "";
  DateofJoining: string = "";
  PhotoFileName: string = "";
  PhotoFilePath: string = "";

  DepartmentsList: any=[];

  ngOnInit(): void {
    this.LoadDepartmentList();

    this.EmployeeId = this.emp.EmployeeId;
    this.EmployeeName = this.emp.EmployeeName;
    this.Department = this.emp.Department;
    this.DateofJoining = this.emp.DateofJoining;
    this.PhotoFileName = this.emp.PhotoFileName;
    this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
  }

  LoadDepartmentList() {
    this.service.getAllDepartmentNames().subscribe((data: any) => {
      this.DepartmentsList = data;
    });
  }

  addEmployee() {
    var val = {
      EmployeeId: this.emp.EmployeeId,
      EmployeeName: this.emp.EmployeeName,
      Department: this.emp.Department,
      DateofJoining: this.emp.DateofJoining,
      PhotoFileName: this.emp.PhotoFileName,
      PhotoFilePath: this.emp.PhotoFileName
    };
    
    this.service.postEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  updateEmployee() {
    var val = {
      EmployeeId: this.emp.EmployeeId,
      EmployeeName: this.emp.EmployeeName,
      Department: this.emp.Department,
      DateofJoining: this.emp.DateofJoining,
      PhotoFileName: this.emp.PhotoFileName,
      PhotoFilePath: this.emp.PhotoFileName
    };
    
    this.service.updateEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  uploadPhoto(event:any) {
    var file = event.target.files[0];
    const formData:FormData=new FormData();

    formData.append('UploadedFile',file,file.name);
    this.service.uploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    });

  }
}
