import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  urlClient = "http:localhost:8080/api/apps";

  constructor(private http : HttpClient) { }

  
}
