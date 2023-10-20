import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MasterService {
  
 
 
 

  constructor(private http:HttpClient) { }

  apiUrl='http://localhost:3000/employees';
  getEmployee(){
    return this.http.get(this.apiUrl)
  }
  
  saveEmployee(inputdata:any){
    console.log(inputdata)
 return this.http.post(this.apiUrl,inputdata)
  }
 GetEmployeebycode(code:any){
  return this.http.get(this.apiUrl+'/'+code)
 }
 
   
   RemoveEmployee(code:any){
    return this.http.delete(this.apiUrl+'/'+code);
   }
  


 


}


