import { Component } from '@angular/core';

export interface product {
  title: string
  price: number
  isAvailable: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';

  cartCount!: number

  receiveAddtoCart($event: number) {
    this.cartCount = $event
  }

  products: product[] = [
    {
      title: "JIGO",
      price: 1500,
      isAvailable: true
    },
    {
      title: "JIGO2",
      price: 140,
      isAvailable: false
    },
    {
      title: "JIGO3",
      price: 300,
      isAvailable: true
    },
    {
      title: "JIGO4",
      price: 11,
      isAvailable: false
    },
  ]
}
