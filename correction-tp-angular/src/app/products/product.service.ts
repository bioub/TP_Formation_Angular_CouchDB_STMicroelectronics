import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Product } from './shared/product.model';
import PouchDB from 'pouchdb-browser';
import { map } from 'rxjs/operators';
import { omit } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  selectedProducts: Product[] = [];

  filters = {
    name: '',
    fmRadio: null,
    availability: []
  };

  private localDb;

  constructor() {
    this.localDb = new PouchDB('phones');
    const remoteDb = new PouchDB(
      'https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones',
    );
    this.localDb.replicate.from(remoteDb, {
      live: true,
      retry: true,
    });
  }

  getAllDocs(): Observable<Product[]> {
    return from(
      this.localDb.allDocs({
        include_docs: true,
      }),
    ).pipe<any, Product[]>(
      map((data: any) => data.rows.map((r) => omit(r.doc, ['_rev']))),
      map((projects) => this.applyFilter(projects))
    );
  }

  applyFilter(products: Product[]) {
    let results = products;

    if (this.filters.name) {
      results = results.filter((p) => p.name.includes(this.filters.name));
    }

    if (this.filters.fmRadio !== null) {
      results = results.filter((p) => p.hardware.fmRadio === this.filters.fmRadio);
    }

    if (this.filters.availability.length) {
      results = results.filter((p) => p.availability.some((el) => this.filters.availability.includes(el)));
    }

    return results;
  }

  getDocById(id: string): Observable<Product> {
    return from(this.localDb.get(id) as Promise<Product>);
  }

  setSelectedProducts(products: Product[]): void {
    this.selectedProducts = products;
  }
}
