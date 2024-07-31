import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product-row/product-row.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [{ name: '', quantity: 0 }];
  order: Product[] = [];

  constructor(private http: HttpClient) {}

  addProduct() {
    const lastProduct = this.products[this.products.length - 1];
    if (lastProduct.name && lastProduct.quantity > 0) {
      this.products.push({ name: '', quantity: 0 });
    } else {
      alert('Please complete the current product selection before adding a new one.');
    }
  }

  handleProductChange(index: number, product: Product) {
    this.products[index] = product;
  }

  showOrder() {
    this.order = this.products.filter(product => product.name && product.quantity > 0);
  }

  readOrder() {
    const text = this.order.map(item => `${item.name} ${item.quantity}`).join(', ');
    const apiKey = 'YOUR_API_KEY'; // Replace with your Voice RSS API key
    const url = `https://api.voicerss.org/?key=${apiKey}&hl=en-us&src=${encodeURIComponent(text)}&c=mp3`;

    this.http.get(url, { responseType: 'blob' }).subscribe(
      (response: Blob) => {
        const audioUrl = URL.createObjectURL(response);
        const audio = new Audio(audioUrl);
        audio.play();
      },
      (error: any) => {
        console.error('Error fetching the audio:', error);
      }
    );
  }
}
