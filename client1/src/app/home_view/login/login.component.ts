import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  msg: any;

  constructor(private _authService:AuthserviceService, private routes:Router) {
  }
  ngOnInit() {
  }

  check(d1:any, d2:any) {
    var st=this._authService.userLoginCheck(d1,d2);
    if(st==true){
      console.log("login");
      this.routes.navigate(['/create-employee']);
    }
    else{
      this.msg="Invalid username or password";
    }
  }

}
