import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  userLoginCheck(username:string,password:string){

    if(username=="harsha" && password=="12345"){
      localStorage.setItem("username","harsha");
      localStorage.setItem("password","12345");
      return true;
    }
    else{
      return false;
    }

  }

}
