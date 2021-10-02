import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductState } from '../Store/Reducers/product.reducers';
import { product } from '../Store/Selector/product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product$ = this.store.pipe(select(product));
  constructor(private store: Store<ProductState>) {}

  ngOnInit(): void {
  }

}
