import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'st-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss'],
})
export class ProductsSearchComponent implements OnInit {
  filters;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.filters = this.productService.filters;
  }

  search() {
    this.productService.filters = { ...this.filters };
  }

  reset() {
    this.filters.name = '';
    this.filters.gps = null
    this.filters.availability = [];
  }
}
