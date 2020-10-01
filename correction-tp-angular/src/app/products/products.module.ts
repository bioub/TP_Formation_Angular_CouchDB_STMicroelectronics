import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsSearchComponent } from './products-search/products-search.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCompareComponent } from './products-compare/products-compare.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    ProductsSearchComponent,
    ProductsListComponent,
    ProductsCompareComponent,
    ProductDetailsComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    InputTextModule,
    TriStateCheckboxModule,
    ButtonModule,
    ListboxModule,
    ProductsRoutingModule,
    AgGridModule.withComponents([]),
  ],
})
export class ProductsModule {}
