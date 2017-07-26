import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class APIService {

  constructor(private http:Http, private router:Router) { }

  login(email:string, password:string){
    let data = {
      "email": email,
      "password": password
    };
    let body = JSON.stringify(data);
    let headers = new Headers ({ "Content-Type":"application/json"});
    let options = new RequestOptions({ headers : headers});

    this.http.post('http://localhost:8000/api/login', body, options)
    .subscribe(
      result => {
        localStorage.setItem('token', result.json().token); //untuk simpan ke cookies
        this.router.navigate(['user']);
      },
      err => {
        localStorage.removeItem('token');
        this.router.navigate(['register']);
      }
    )
  }


  validateuser(){
    let token = localStorage.getItem("token");
     if(token ==null)
     {
       this.router.navigate(['']);
     }

     else {
       //mekanisme untuk cek tokennya masih valid atau tidak
     }
  }


  getUserList(){
    let token = localStorage.getItem("token");
    let headers = new Headers ({ "Authorization":"Bearer " + token});
    let options = new RequestOptions({ headers : headers});

    return this.http.get('http://localhost:8000/api/userlist', options)
    .map(result=> result.json());

  }

  addUser (name:string, email:string, address:string){
   
    let data = {
      "name": name,
      "email": email,
      "address": address
    };
    let body = JSON.stringify(data);
    let token = localStorage.getItem('token');
    let headers = new Headers ({ 
      "Content-Type":"application/json",
      "Authorization":"Bearer " + token
    });
    
    let options = new RequestOptions({ headers : headers});

    return this.http.post('http://localhost:8000/api/userlist/add', body, options)
    .map(result=> result.json());
      // .subscribe(
      //   result => {
      //     this.router.navigate(['user']);
      //   }
      // err => {
      //   localStorage.removeItem('token');
      //   this.router.navigate(['register']);
      // }
    // )
  }

  deleteUser (id:number){
   
    let data = {
      "id": id
    };
    let body = JSON.stringify(data);
    
    let token = localStorage.getItem('token');
    let headers = new Headers ({ 
      "Content-Type":"application/json",
      "Authorization":"Bearer " + token
    });
    
    let options = new RequestOptions({ headers : headers});

    return this.http.post('http://localhost:8000/api/userlist/delete', body, options)
    .map(result=> result.json());
      
  }

}
