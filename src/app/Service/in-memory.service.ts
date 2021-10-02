import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      products: this.mockProducts(),
    };
  }

  private mockProducts(): Product[] {
    const product = new Product(
      'GoPro Hero10 Black Action Camera',
      'All-out speed and ultimate ease come together in the most powerful GoPro ever, HERO10 Black. ',
      2099
    );
    product.id = 1;

    const product1 = new Product(
      'LG 34WL500-B UltraWide Monitor',
      'The 21:9 UltraWide™ Full HD resolution (2560x1080) offers 33% more screen space compared to Full HD resolution display. ',
      1299
      
    );
    product1.id = 2;

    const product2 = new Product(
      'Fujifilm X-T4 Digital Mirrorless Camera',
      'Addressing the needs of multimedia image-makers, the black FUJIFILM X-T4 is a versatile mirrorless camera that blends advanced stills and video capabilities along with enhanced workflow and assistive functionality.',
      7499
    );
    product2.id = 3;

    const products = [product, product1, product2];
    return products;
  }
}
