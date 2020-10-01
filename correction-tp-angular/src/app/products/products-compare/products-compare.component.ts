import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'st-products-compare',
  templateUrl: './products-compare.component.html',
  styleUrls: ['./products-compare.component.scss']
})
export class ProductsCompareComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.selectedProducts;
  }

}
