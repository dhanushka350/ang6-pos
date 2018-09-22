import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Http, Headers} from '@angular/http';
import {catchError} from 'rxjs/internal/operators';
import {Product} from '../app.module';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

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
    console.log(product);
    this.http.post('/api/product/save', product).subscribe(data => {
      console.log(data);
    });
  }
}

