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

  createProduct(product: Product) {
    return this.http.post('/api/product/save', product);
  }

  deleteProduct(id: number) {
    return this.http.delete('/api/product/delete/' + id);
  }

  getItemByCoded(code: string): Observable<any> {
    return this.http.get('/api/product//by/code/' + code);
  }
}

