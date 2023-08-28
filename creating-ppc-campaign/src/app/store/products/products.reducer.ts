import { createReducer, on } from "@ngrx/store";

import { loadAllProductsSuccess } from "./products.action";
import { Product } from "src/app/model/product";

export const initialState: Product[] = [];
export const productsReducer = createReducer(
    initialState,
    on(loadAllProductsSuccess, (state, { products }) => {
        return products;
    }
    
    ),
);