import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/services/product.service";
import { loadAllProducts, loadAllProductsFailure, loadAllProductsSuccess } from "./products.action";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class ProductsEffect {
    constructor(private actions$: Actions, private productService: ProductService) {}

    loadAllProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllProducts),
            mergeMap(() => this.productService.getAllProducts().pipe(
                map(products => {
                    return loadAllProductsSuccess({products});
                }),
                catchError(err => of(loadAllProductsFailure({error: err.message})))
            ))
        );
    })

}
