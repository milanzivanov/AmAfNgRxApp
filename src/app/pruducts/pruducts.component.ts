import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruducts',
  templateUrl: './pruducts.component.html',
  styleUrls: ['./pruducts.component.css']
})
export class PruductsComponent implements OnInit {

  productName = 'A book';
  isDisabled = true;

  constructor() {
    setTimeout(() => {
    // this.productName = 'A Tree';
    this.isDisabled = false;
    }, 3000);
  }

  ngOnInit() {
  }



}
