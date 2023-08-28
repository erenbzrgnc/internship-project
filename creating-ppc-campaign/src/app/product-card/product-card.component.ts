import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

    @Input() product: Product;

    @Input() included: boolean;
    @Output() productAdded = new EventEmitter<any>();
    @Output() productRemoved = new EventEmitter<any>();



    constructor() { }
  
    ngOnInit(): void {

    }

    addProduct() {
      this.productAdded.emit(this.product);
    }
  
    removeProduct() {
      this.productRemoved.emit(this.product);
    }
  

}
