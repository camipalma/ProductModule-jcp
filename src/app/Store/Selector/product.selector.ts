import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from 'src/app/Models/product';
import { ProductState } from '../Reducers/product.reducers';

export const productSelector = createSelector(
  (state: ProductState) => state.product,
  (products: ReadonlyArray<Product>) => products
);

export const productUserSelector = createSelector(
  (state: ProductState) => state.product,
  (state: ProductState) => state.user,
  (products: ReadonlyArray<Product>, user: Readonly<string>) => {
    return products.filter((product: Product) => product.userName === user);
  }
);

export const greater = (amount: number) =>
  createSelector(productSelector, (products) => {
    return products.filter((product: Product) => product.price >= amount);
  });

const routeParams = createSelector(
  (state: ProductState) => state.router.state,
  (state) => state.params
);

const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = getSelectors(selectRouter);

export const product = createSelector(
  productSelector,
  routeParams,
  // selectRouteParams,
  (products: ReadonlyArray<Product>, { id }) => {
    return products.filter((p) => p.id === Number(id))[0];
  }
);
