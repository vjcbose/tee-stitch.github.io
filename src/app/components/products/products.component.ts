import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    // Add more products here
  ];
}
