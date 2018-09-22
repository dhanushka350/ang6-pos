import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../app.module';


@Injectable({
  providedIn: 'root'
})

export class ProductService {


  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any> {
    return this.http.get('/api/product/all');
  }

  createProduct(product: Product): Observable<boolean> {
    console.log(product);
    return this.http.post<boolean>('/api/product/save', product);
  }
}

