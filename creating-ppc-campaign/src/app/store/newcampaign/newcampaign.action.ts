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

export const updateCampaignProducts = createAction(
    '[New Campaign] Update Campaign Products',
    props<{products: NewCampaign["products"]}>()
)

export const updateCampaignProductsSuccess = createAction(
    '[New Campaign] Update Campaign Products Success',
    props<{products: NewCampaign["products"]}>()
)

export const updateCampaignAdGroupName = createAction(
    '[New Campaign] Update Campaign Ad Group Name',
    props<{adGroupName: NewCampaign["adGroupName"]}>()
)

export const updateCampaignAdGroupNameSuccess = createAction(
    '[New Campaign] Update Campaign Ad Group Name Success',
    props<{adGroupName: NewCampaign["adGroupName"]}>()
)
export const deleteNewCampaign = createAction(
    '[New Campaign] Delete New Campaign'
)

export const deleteNewCampaignSuccess = createAction(
    '[New Campaign] Delete New Campaign Success'
)