import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/model/product";

export const loadAllProducts = createAction(
    '[Products] Load All Products'
);

export const loadAllProductsSuccess = createAction(
    '[Products] Load All Products Success',
     props<{ products: Product[] }>()
);

export const loadAllProductsFailure = createAction(
    '[Products] Load All Products Failure',
    props<{ error: any }>()
);