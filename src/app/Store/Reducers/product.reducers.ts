import { RouterReducerState } from '@ngrx/router-store';
import {
  createReducer,
  on,
} from '@ngrx/store';
import { Product } from 'src/app/Models/product';
import {
  addProduct,
  addProductsSuccess,
  assignUser,
  deleteProductSuccess,
  getProductsSuccess,
  updateProductSuccess,
} from '../Actions/product.action';

export interface ProductState {
  product: ReadonlyArray<Product>;
  user: Readonly<string>;
  router: RouterReducerState<any>;
}

const initialState: ReadonlyArray<Product> = [];

export const productReducer = createReducer(
  initialState,
  on(getProductsSuccess, (state, { products }) => [...products]),
  on(addProductsSuccess, (state, { product }) => [...state, product]),
  on(deleteProductSuccess, (state, { productId }) =>
    state.filter((product) => product.id !== productId)
  ),
  on(updateProductSuccess, (state, { product }) => {
    const products = state.map((p) => {
      if (p.id === product.id) {
        return product;
      }
      return p;
    });
    return products;
  })
);

const initialUserSate = '';
export const userReducer = createReducer(
  initialUserSate,
  on(assignUser, (state, { user }) => user)
);
