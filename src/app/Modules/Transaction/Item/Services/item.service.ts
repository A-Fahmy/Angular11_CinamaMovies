import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from '../Models/item.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {


  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true,
  };
  constructor(private http:HttpClient) { }
  // getItemList(){
  //   debugger;
  //   return this.http.get(environment.apiURL+'/Item').toPromise();
  //  }

   getItemList(): Observable<Item[]> {
    return this.http.get<Item[]>(environment.apiURL + '/Item/GetItems', this.headers).pipe();
  }

  }
