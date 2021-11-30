import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  avaliableDateProducts: Date = new Date ('2021-10-22')
  constructor() { }

  ngOnInit(): void {
  }

}
