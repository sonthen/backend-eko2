import { Component, OnInit } from '@angular/core';
import { APIService} from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:APIService) { }

  email:string="";
  password:string="";
  ngOnInit() {
  }

  login(){
    this.api.login(this.email, this.password);
  }
  

}
