import { Component,  Inject,  OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MasterService } from 'src/app/services/master.service';



export interface DialogData{
  name:string | undefined;
  phone:string | undefined;
  email:string | undefined;
  destination:string | undefined
  code:string | undefined;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {


  finaldata:any
 btn:true | undefined
 

  constructor(private service:MasterService,public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }
 

  ngOnInit(): void {
  }
  saveemployee(data: any) {
 data.id =12
    this.service.saveEmployee(data).subscribe({
      next:
       (res) => {
          console.log('hello');
          console.log(res);
          this.finaldata = res;
       },
       error:  (err: Error)=>{
        alert(err.message)
      }
    }
    );
 }
 btnClose(){
  this.dialogRef.close()

 }
 

}



