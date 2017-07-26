import { Component, OnInit } from '@angular/core';

import { APIService} from '../service/api.service';
// import * as $ from 'jquery';
// import * as $ from 'jquery-ui';

declare var $:any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  token:string="";
  constructor(private api:APIService) { }

  userlist:object[];

  ngOnInit() {
     this.api.validateuser();
     this.api.getUserList()
             .subscribe(result=>this.userlist = result);

            
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "highlight",
        duration: 1000
      },
      hide: {
        effect: "fade",
        duration: 1000
      }
    });
    
  }

  name:string="";
  email:string="";
  address:string="";

  addUser(){
    this.api.addUser(this.name, this.email, this.address)
    .subscribe(result=> this.userlist = result);


    this.name ="";
    this.email="";
    this.address="";

    // this.api.getUserList()
    // .subscribe(result=> this.userlist = result);


  }

  open(){
    

     $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  
  }

 
  deleteUser(id:number){
    console.log(id);
    this.api.deleteUser(id)
    .subscribe(result=> this.userlist = result);
  }
}
