import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from './Models/product';
import {
  addProduct,
  assignUser,
  getProducts,
  logout,
} from './Store/Actions/product.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = new Product();
  title = 'productModule';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.store.dispatch(getProducts());
    this.store.dispatch(assignUser('Cami'));
  }

  addNewProduct(): void {
    this.store.dispatch(addProduct(this.newProduct));
    this.newProduct = new Product();
  }

  changeUser(): void {
    this.store.dispatch(assignUser('Joane'));
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
