import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helperfile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(

    private http:HttpClient

  ) { }


  //addUser
  public addUser(user:any){
    return this.http.post(`${baseUrl}/user/`,user);
  }

  //user login
  public getUser(username:any,password:any){
    
  }
}
