import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../Models/product';
import { deleteProduct, updateProduct } from '../Store/Actions/product.action';
import { ProductState } from '../Store/Reducers/product.reducers';
import { productUserSelector } from '../Store/Selector/product.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products$ = this.store.pipe(select(productUserSelector));
  products: Product[];
  done = new Subject();
  selectedIndex: number = null;
  price = 0;
  constructor(private store: Store<ProductState>) {}

  ngOnInit(): void {
    this.products$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.products = JSON.parse(JSON.stringify(data))));

  }

  enableEdit(product: Product, index: number): void {
    this.selectedIndex = index;
    this.price = product.price;
  }

  cancelEdit(): void {
    this.selectedIndex = null;
  }


  update(product: Product): void {
    const p = { ...product };
    p.price = this.price;
    // dispatch action to update
    this.store.dispatch(updateProduct(p));
    this.selectedIndex = null;
  }

  deleteProduct(productId: number): void {
    this.store.dispatch(deleteProduct(productId));
  }

  ngOnDestroy(): void {
    this.done.next();
    this.done.complete();
  }
}
