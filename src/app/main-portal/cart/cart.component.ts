import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/shared-portal/messanger.service';
import { Service11Service } from 'src/app/shared-portal/service11.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  Data:any;
  filterdata:any=[]
  service11data:any=[]
 

  constructor( 

   private _messanger:MessangerService,
   private _Service11:Service11Service
 
  ) { 
    this._messanger.getMessageFromMyData().subscribe((datafrommesssanger:any)=>{
      this.Data = datafrommesssanger; 
      
      
      
      })
      this.getdatafromservice11();
      
  }
  ngOnInit(): void {
  

}

getdatafromservice11(){
  this.service11data  = this._Service11.getjsonData();
 this.filterdata = this.service11data.filter((Result:any)=>{

  return (Result.id === this.Data)
 })
 console.log(this.filterdata);
}
};