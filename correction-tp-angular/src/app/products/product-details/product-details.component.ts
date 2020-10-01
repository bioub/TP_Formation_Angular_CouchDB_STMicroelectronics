import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'st-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  mainImageUrl = '';

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('productId')),
        switchMap((productId) => this.productService.getDocById(productId)),
      )
      .subscribe((product) => {
        this.product = product;
        this.setImage(product.images[0]);
      });
  }

  setImage(imageUrl): void {
    this.mainImageUrl = imageUrl;
  }
}
