import { Component, Input } from '@angular/core';
import { Product } from '../product-row/product-row.component';  // Correct import

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  @Input() order: Product[] = [];
}
