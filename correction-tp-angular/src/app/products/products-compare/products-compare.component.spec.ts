import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCompareComponent } from './products-compare.component';

describe('ProductsCompareComponent', () => {
  let component: ProductsCompareComponent;
  let fixture: ComponentFixture<ProductsCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
