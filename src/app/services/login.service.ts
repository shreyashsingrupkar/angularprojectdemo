import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helperfile';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) { }

  //generate token
  public generateToken(LoginData:any){
    return this.http.post(`${baseUrl}/generate-token`,LoginData)
  }

  public getCurrentUserDetails(){
    return this.http.get(`${baseUrl}/current-user`)
  }

  //save token into localstorage
  public loginUser(token:any){
    localStorage.setItem('token',token.token);
    return true;
  }


  //user is logged in or not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==undefined|| tokenStr==''||tokenStr==null){
      return false;
    }
    else{
      return true;
    }
  }

  //logout remove token from local storage

  public logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //get token
  public getToken(){
    return localStorage.getItem("token")
  }

  //save user details on local storage
  public userDetails(LoginData:any){
    localStorage.setItem('user',JSON.stringify(LoginData))
  }

  //getUser details
  public getUserDetails(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logOut();
      return null
    }
  }

  // get user role
  public getUserRole(){
    let user=this.getUserDetails();
    return user.authorities[0].authority
  }


  

}
