import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

const header = {headers: new Headers({'Content-Type': 'application/json'})};
const BASE_URL = "http://localhost:64772/api/UserApi/";

@Injectable()
export class LoginService {

  constructor(private http: Http) { }
  LoginAccess(username) {
    return this.http.get(BASE_URL+"GetUserByMail?email="+username)
      .map((res)=> {
        console.log(res.json().Name);
        return res.json();
      });
  }

  block(user){
    return this.http.patch(BASE_URL+"BlockedAmount?emailid="+user.emailid+"&amount="+user.amount , user, header)
      .map(res =>res.json())
  }

  addmoney(user, multiple){
    console.log(user.AccountBalance);
    return this.http.patch("http://localhost:64772/api/UserApi/AddWinningAmount?emailid="+user.emailid+"&amount="+user.amount+"&multiply="+multiple
      , user, header)
      .map(res =>res.json())
  }
}
