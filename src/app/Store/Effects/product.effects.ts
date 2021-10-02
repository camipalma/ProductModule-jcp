import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { DataService } from 'src/app/Service/data.service';
import {
  getProducts,
  getProductsSuccess,
  addProduct,
  addProductsSuccess,
  deleteProduct,
  deleteProductSuccess,
  updateProduct,
  updateProductSuccess,
} from '../Actions/product.action';

@Injectable()
export class ProductEffects {
  loadProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(getProducts),
      exhaustMap(() =>
        this.dataService.getProducts().pipe(
          map((products) => getProductsSuccess(products)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(addProduct),
      tap((product) => console.log(product)),
      concatMap(({ product }) =>
        this.dataService.addProduct(product).pipe(
          map((newProduct) => addProductsSuccess(newProduct)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteProduct),
      mergeMap(({ productId }) =>
        this.dataService.deleteProduct(productId).pipe(
          map(() => deleteProductSuccess(productId)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateProduct),
      concatMap(({ product }) =>
        this.dataService.updateProduct(product).pipe(
          map(() => updateProductSuccess(product)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action$: Actions, private dataService: DataService) {}
}
