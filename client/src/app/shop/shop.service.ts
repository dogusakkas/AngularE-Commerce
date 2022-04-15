import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/IPageination';
import { IBrand } from '../shared/models/productBrand';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

baseurl ="https://localhost:44396/api/";

  constructor(private http : HttpClient) { }

getProducts(brandId? : number,typeId? : number){

  let params = new HttpParams();

  if(brandId){
    params = params.append('brandId',brandId.toString());
  }

  if(typeId){
    params = params.append('typeId',typeId.toString());
  }

  return this.http.get<IPagination>(this.baseurl + 'Products',{observe:'response',params})
  .pipe(
    map(response =>{
      return response.body
    })
  );
}

getBrands(){
  return this.http.get<IBrand[]>(this.baseurl + 'products/brands')
}

getTypes(){
  return this.http.get<IType[]>(this.baseurl + 'products/types')
}

}
