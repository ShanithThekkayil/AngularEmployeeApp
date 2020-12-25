import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://localhost:65337/api';
  readonly PhotoUrl = 'http://localhost:65337/Photos'

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Department/GetDepartment');
  }

  postDepartment(val:any){
    return this.http.post(this.APIUrl + '/Department/PostDepartment',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl + '/Department/UpdateDepartment',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl + '/Department?DeptId='+val);
  }

  getEmployees(val1:any,val2:any):Observable<any[]> {
    return this.http.get<any>(this.APIUrl + 'Employee/GetEmployees?PageNo='+val1 +'&PageSize='+val2);
  }

  postEmployee(val:any){
    return this.http.post(this.APIUrl + '/Employee/PostEmployee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl + '/Employee/UpdateEmployee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl + '/Employee?EmployeeId=='+val);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl + '/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Employee/GetAllDepartmentNames');
  }
}
