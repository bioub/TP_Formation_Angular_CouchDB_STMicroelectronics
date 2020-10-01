import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../shared/product.model';
import { ColDef } from 'ag-grid-community';
import { Router } from '@angular/router';

@Component({
  selector: 'st-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[];

  defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
  };

  columnDefs: ColDef[] = [
    {
      field: '_id',
      flex: 1,
      checkboxSelection: true,
      pinned: 'left',
      lockPinned: true,
      lockPosition: true,
    },
    { field: 'name', flex: 1 },
    { field: 'additionalFeatures', flex: 3 },
  ];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAllDocs().subscribe((products) => {
      this.products = products;
    });
  }

  handleRowClick(event): void {
    this.router.navigate(['products', event.data._id]);
  }

  handleSelectionChanged(event): void {
    this.productService.setSelectedProducts(event.api.getSelectedRows());
  }
}
