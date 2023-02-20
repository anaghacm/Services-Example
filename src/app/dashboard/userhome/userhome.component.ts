import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit {

  public userInfo!:any;
  public btnText:string='Get Country Details';
  public displayInfo:boolean=false;
  
  constructor(private ds:DataServiceService) { 
    this.userInfo=this.ds.getData();
  }

  ngOnInit(): void {
  }

  

  displayCountryInfo(){
    this.displayInfo=!this.displayInfo;
    if(this.displayInfo){
      this.btnText='Hide Country Details';
    }
    else{
      this.btnText='Get Country Details';
    }
  }
}
