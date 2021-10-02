import { createAction, props } from '@ngrx/store';
import { Product } from '../../Models/product';

export const getProducts = createAction('[Product] Get product');
export const getProductsSuccess = createAction(
  '[Product] Get product success',
  (products: ReadonlyArray<Product>) => ({ products })

);
export const addProduct = createAction(
  '[Product] Add product',
  (product: Product) => ({ product })
 
);
export const addProductsSuccess = createAction(
  '[Product] Add product success',

  (product: Product) => ({ product })
);

export const assignUser = createAction(
  '[User] assign user',
  (user: string) => ({ user })
);

export const deleteProduct = createAction(
  '[Product] Delete product',
  (productId: number) => ({ productId })
);

export const deleteProductSuccess = createAction(
  '[Product] Delete product success',
  (productId: number) => ({ productId })
);

export const updateProduct = createAction(
  '[Product] Update product',
  (product: Product) => ({ product })
);

export const updateProductSuccess = createAction(
  '[Product] Update product success',
  (product: Product) => ({ product })
);

export const logout = createAction('[User] logout');
