// src/app/services/product.service.ts

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 19.99, imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 24.99, imageUrl: 'product2.jpg' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 29.99, imageUrl: 'product3.jpg' },
    // Add more products here
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
