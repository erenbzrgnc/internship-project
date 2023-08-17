import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdGroupComponent } from './product-ad-group.component';

describe('ProductAdGroupComponent', () => {
  let component: ProductAdGroupComponent;
  let fixture: ComponentFixture<ProductAdGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAdGroupComponent]
    });
    fixture = TestBed.createComponent(ProductAdGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
