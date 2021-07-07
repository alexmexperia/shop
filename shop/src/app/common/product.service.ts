import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FbResponse,Product,resposne } from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  type='Mobile'

  constructor(
    private http: HttpClient
  ) { }

  create(product:any){
    return this.http.post(`${environment.fbDbURL}/products.json`,product)
    .pipe(
      map((res: any) => {
        return{
          ...product,
          id: res.name,
          date: new Date(product.date)
        }
      })
    )
  }

  getAll() {
    return this.http.get(`${environment.fbDbURL}/products.json`)
    .pipe( map ( res => {
      return Object.keys(res)
      .map( key => ({
        ...res[key],
        id: key,
        date: new Date(res[key].date)
      }))
    }))
  }

  getById(id) {
    return this.http.get(`${environment.fbDbURL}/products/${id}.json`)
    .pipe ( map( (res:Product) => {
      return {
          ...res,
          id,
          date: new Date(''+res.date)
      }
    }))
  }

  remove(id){
    return this.http.delete(`${environment.fbDbURL}/products/${id}.json`)
  }

  update(product:Product){
    return this.http.patch(`${environment.fbDbURL}/products/${product.id}.json`,product)
    .pipe(
      map((res: any) => {
        return{
          ...product,
          id: res.name,
          date: new Date(''+product.date)
        }
      })
    )
  }

  setType(type){
    this.type=type
  }

}
