import { Component, Input, Output, EventEmitter } from '@angular/core';
import { product } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cartCount: number = 0
  @Input() productData!: product


  
  @Output() cartCountEvent = new EventEmitter<number>()
  
  addToCart() {
    this.cartCount++
    this.cartCountEvent.emit(this.cartCount)
    console.log(this.cartCount)
  }

}