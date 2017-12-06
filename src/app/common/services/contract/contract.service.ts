import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Contract} from '../../interfaces/contract';

@Injectable()
export class ContractService {
  public step: number = 0;
  private _baseUrl = 'https://new.radw.co/api/v2/contract';

  constructor(private _httpClient: HttpClient) {}

  get url(): string {
    return `${this._baseUrl}/step/${this.step}`;
  }

  all(): Observable<Contract> {
    return this._httpClient.post(this.url, {})
      .map((response: any) => response.data);
  }

  create(body: {}): Observable<Contract> {
    return this._httpClient.post(this.url, body)
      .map((response: any) => response.data);
  }
}
