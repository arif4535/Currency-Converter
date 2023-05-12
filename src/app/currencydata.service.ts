import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrencyResponse } from './interface';

@Injectable({
  providedIn: 'root'
})
export class CurrencydataService {
  constructor(private http: HttpClient) {}

  getcurrencydata(country: string) {
    const url = `https://api.exchangerate.host/latest?base=${country}`;
    return this.http.get<ICurrencyResponse>(url);
  }
}
