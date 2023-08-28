import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, filter, map, first } from 'rxjs/operators';
import { selectProducts } from '../store/products/products.selector';
import { loadAllProducts } from '../store/products/products.action';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<boolean> {

  constructor(private store: Store) {}

  resolve(): Observable<boolean> {
    return this.store.select(selectProducts).pipe(
      tap(products => {
        if (!products || products.length === 0) {
          this.store.dispatch(loadAllProducts());
        }
      }),
      filter(products => products && products.length > 0),
      map(products => !!products && products.length > 0),
      first()
    );
  }
}
