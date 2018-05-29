import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruducts',
  templateUrl: './pruducts.component.html',
  styleUrls: ['./pruducts.component.css']
})
export class PruductsComponent implements OnInit {

  productName = 'A book';
  isDisabled = true;
  products = ['A book', 'The Milan'];

  constructor() {
    setTimeout(() => {
    // this.productName = 'A Tree';
    this.isDisabled = false;
    }, 3000);
  }

  ngOnInit() {
  }

  onAddProduct() {
    this.products.push(this.productName);
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter( p => p !== productName);
  }

}
