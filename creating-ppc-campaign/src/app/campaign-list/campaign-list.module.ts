import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { campaignReducer } from '../store/campaigns/campaigns.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CampaignEffect } from '../store/campaigns/campaigns.effect';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("campaigns", campaignReducer),
    EffectsModule.forFeature([CampaignEffect])

  ]
})
export class CampaignListModule { }
