import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignTypeEffect } from '../store/campaign-type/campaign-type.effect';
import { campaignTypeReducer } from '../store/campaign-type/campaign-type.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CampaignService } from '../services/campaign.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('campaignTypes', campaignTypeReducer),
    EffectsModule.forFeature([CampaignTypeEffect])
    
  ]
})
export class CampaignTypeListModule { }
