import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  baseurl = 'http://127.0.0.1:8000/api';
  httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})
  
  constructor(private http: HttpClient) { }

  registerAUser(userData):Observable<any> {
    const body =  {
      firstname: userData.firstname, 
      lastname: userData.lastname, 
      username: userData.username,
      email: userData.email,
      password: userData.password
    };
    return this.http.post(this.baseurl + '/users/' , body , 
    {headers: this.httpHeaders});
  }

}
