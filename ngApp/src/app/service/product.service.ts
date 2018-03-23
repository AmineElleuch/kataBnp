import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../../app-settings';
import { Product } from '../entity/product';

@Injectable()
export class ProductService {

  private getAllProductsUrl = AppSettings.API_ENDPOINT + '/product/list';

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.getAllProductsUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

}