import { createAction, props } from "@ngrx/store";
import { NewCampaign } from "src/app/model/new-campaign";

export const updateCampaignDetail = createAction(
    '[New Campaign] Update Campaign Type',
    props<{Details: NewCampaign["details"] }>()
)

export const updateCampaignDetailSuccess = createAction(
    '[New Campaign] Update Campaign Type Success',
    props<{Details: NewCampaign["details"]}>()
)

export const updateCampaignType = createAction(
    '[New Campaign] Update Campaign Type',
    props<{campaignType: NewCampaign["campaignType"]}>()
)

export const updateCampaignTypeSuccess = createAction(
    '[New Campaign] Update Campaign Type Success',
    props<{campaignType: NewCampaign["campaignType"]}>()
)
