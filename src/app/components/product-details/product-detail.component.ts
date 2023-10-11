import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  product: any; // Replace with an actual product model

  constructor(private route: ActivatedRoute) {
    const productId = this.route.snapshot.paramMap.get('id');
    // Fetch product details based on productId
    // Replace with actual data retrieval logic
  }

  addToCart(product: any) {
    // Implement cart functionality here
  }
}
