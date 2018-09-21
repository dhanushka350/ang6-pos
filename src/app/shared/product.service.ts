import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public API = '//localhost:8080';

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any> {
    return this.http.get( '/api/product/all/products');
  }

  save(product: any) {
    return this.http.post(this.API + '/product/save', product);
  }
}
