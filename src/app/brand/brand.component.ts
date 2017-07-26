import { Component, OnInit } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  files : FileList;
  myname :string;

  constructor(private http:Http) { }

  ngOnInit() {
  }

  fileChange(event){
    this.files = event.target.files;
    console.log(this.files);
  }

  upload(){


    let formData = new FormData();
    formData.append("image", this.files[0], this.files[0].name);
    formData.append("myname", this.myname);
    let headers = new Headers ();
    let options = new RequestOptions({ headers : headers});
    console.log(this.myname);

    return this.http.post('http://localhost:8000/api/brands/add', formData, options)
    .subscribe(result=>console.log(result));
  }
}
