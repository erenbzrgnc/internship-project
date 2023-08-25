import { createAction, props } from "@ngrx/store";
import { CampaignType } from "src/app/model/campaign-type";

export const loadAllCampaignTypes= createAction(
    '[Campaign Type] Get All Campaign Types'
)

export const loadAllCampaignTypesSuccess= createAction(
    '[Campaign Type] Get All Campaign Types Success', 
    props<{campaignType: CampaignType[]}>()  
)

export const loadAllCampaignTypesFailure= createAction(
    '[Campaign Type] Get All Campaign Types Failure',
    props<{error: any}>()
)

