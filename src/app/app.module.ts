import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { APIService} from './service/api.service';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrandComponent } from './brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'user', component: UserComponent}
    ])

  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
