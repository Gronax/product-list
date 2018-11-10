import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/products';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  /** Getting products from Json file via HttpClient. */
  public getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(environment.productJsonUrl);
  }
}
