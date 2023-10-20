import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
empdata:any
name:any
email:any
code:any
phone:any
destination:any

  

  constructor(public dialog:MatDialog,private service:MasterService) {
   
  
this.getEmployee()

  
    
   }
   getEmployee(){
    this.service.getEmployee().subscribe(result=>{
      this.empdata=result
    })
   }
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: {name: this.name, code: this.code,emai:this.email,phone:this.phone,destination:this.destination}
    });
  }
  EditFunction(){

  }
  DeleteFunction(code:any){
  
    if(confirm("Do you Want Delete")){
      this.service.RemoveEmployee(code).subscribe(result=>{
        this.getEmployee()
      })
    }

  }
 


  ngOnInit(): void {
  
  }
  



}


  


