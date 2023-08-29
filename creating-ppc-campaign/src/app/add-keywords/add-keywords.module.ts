import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NewCampaignReducer } from '../store/newcampaign/newcampaign.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NewCampaignEffect } from '../store/newcampaign/newcampaign.effect';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    StoreModule.forFeature("newCampaign", NewCampaignReducer),
    EffectsModule.forFeature([NewCampaignEffect])
  ]
})
export class AddKeywordsModule { }
