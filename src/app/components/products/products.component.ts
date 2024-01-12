import { Component } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: '5745747597',
      name: 'Tshirt',
      type: 'Garment',
      color: 'Blue',
      price: 9.99
    },
    {
      id: '5745747598',
      name: 'Jacket',
      type: 'Cotton',
      color: 'Red',
      price: 8.99
    } 
  ];

}
