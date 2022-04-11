import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPagination } from '../shared/models/IPageination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

baseurl ="https://localhost:44396/api/";

  constructor(private http : HttpClient) { }

getProducts(){
  return this.http.get<IPagination>(this.baseurl + 'Products');
}

}
