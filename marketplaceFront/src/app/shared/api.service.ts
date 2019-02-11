import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = 'http://127.0.0.1:8000/api';
  httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})
  
  constructor(private http: HttpClient) { }

  /* Select Statements */  
  getAllProducts():Observable<any> {
    return this.http.get(this.baseurl + '/products/', 
    {headers: this.httpHeaders});
  }

  getAllCategories():Observable<any> {
    return this.http.get(this.baseurl + '/categories/', 
    {headers: this.httpHeaders});
  }

  /* Create Statements */
  
 
 
}
