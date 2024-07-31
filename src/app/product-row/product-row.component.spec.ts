import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Product {  // Export the Product interface
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {
  @Input() product!: Product;
  @Output() productChange = new EventEmitter<Product>();

  handleProductChange(event: any, field: string) {
    this.product = { ...this.product, [field]: event.target.value };
    this.productChange.emit(this.product);
  }
}
