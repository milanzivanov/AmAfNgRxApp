import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pruduct',
  templateUrl: './pruduct.component.html',
  styleUrls: ['./pruduct.component.css']
})
export class PruductComponent implements OnInit {

  @Input() productName: string;
  @Output() productClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.productClicked.emit();
  }

}
