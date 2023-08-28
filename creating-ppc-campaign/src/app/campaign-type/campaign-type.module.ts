import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NewCampaignReducer } from '../store/newcampaign/newcampaign.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CampaignTypeEffect } from '../store/campaign-type/campaign-type.effect';
import { NewCampaignEffect } from '../store/newcampaign/newcampaign.effect';



@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    StoreModule.forFeature('newCampaign', NewCampaignReducer),
    EffectsModule.forFeature([CampaignTypeEffect, NewCampaignEffect]),
  ]
})
export class CampaignTypeModule { }
