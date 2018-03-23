import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../../app-settings';
import { Basket } from '../entity/basket';
import { Product } from '../entity/product';

@Injectable()
export class BasketService {

  private addProductToBasketUrl = AppSettings.API_ENDPOINT + '/basket/addProduct';
  private deleteBasketUrl = AppSettings.API_ENDPOINT + '/basket/delete';
  private getBasketUrl = AppSettings.API_ENDPOINT + '/basket/getBasket';

  constructor(private http: Http) { }

  addProduct(product: Product): Observable<Basket> {
    return this.http.post(this.addProductToBasketUrl, product)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  deleteBasket(): Observable<Basket> {
    return this.http.delete(this.deleteBasketUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  getBasket(): Observable<Basket> {
    return this.http.get(this.getBasketUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

}
