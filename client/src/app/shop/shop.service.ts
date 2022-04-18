import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/IPageination';
import { IBrand } from '../shared/models/productBrand';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

baseurl ="https://localhost:44396/api/";

  constructor(private http : HttpClient) { }

getProducts(shopParams: ShopParams){

  let params = new HttpParams();

  if(shopParams.brandId !==0){
    params = params.append('brandId',shopParams.brandId.toString());
  }

  if(shopParams.typeId !==0){
    params = params.append('typeId',shopParams.typeId.toString());
  }

  if(shopParams.search){
    params = params.append('search',shopParams.search);
  }

  params=params.append('sort',shopParams.sort);
  params = params.append('pageIndex',shopParams.pageNumber.toString());
  params = params.append('pageIndex',shopParams.pageSize.toString());

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
