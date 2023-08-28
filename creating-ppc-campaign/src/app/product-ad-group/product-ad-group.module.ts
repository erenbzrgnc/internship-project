import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { productsReducer } from '../store/products/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffect } from '../store/products/products.effect';
import { NewCampaignEffect } from '../store/newcampaign/newcampaign.effect';
import { NewCampaignReducer } from '../store/newcampaign/newcampaign.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("products", productsReducer),
    StoreModule.forFeature("newCampaign", NewCampaignReducer),
    EffectsModule.forFeature([ProductsEffect, NewCampaignEffect])

  ]
})
export class ProductAdGroupModule { }
