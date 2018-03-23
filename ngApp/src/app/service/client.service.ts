import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../../app-settings';
import { Client } from '../entity/client';

@Injectable()
export class ClientService {

  private getCurrentClientUrl = AppSettings.API_ENDPOINT + '/client/currentClient';

  constructor(private http: Http) { }

  getCurrentClient(): Observable<Client> {
    return this.http.get(this.getCurrentClientUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

}
