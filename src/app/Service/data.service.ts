import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../Models/product';
import { catchError, delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'api/products/';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ReadonlyArray<Product>> {
    return this.http.get<ReadonlyArray<Product>>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  deleteProduct(productId: number) {
    return this.http.delete(`${this.url}/${productId}`).pipe(
      delay(2000),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
