import { createFeatureSelector } from "@ngrx/store";
import { Product } from "src/app/model/product";

export const selectProducts = createFeatureSelector<Product[]>('products');