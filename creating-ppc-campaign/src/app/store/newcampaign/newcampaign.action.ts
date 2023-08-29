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

export const updateKeywords = createAction(
    '[New Campaign] Update Keywords',
    props<{keywords: NewCampaign["keywords"]}>()
)

export const updateKeywordsSuccess = createAction(
    '[New Campaign] Update Keywords Success',
    props<{keywords: NewCampaign["keywords"]}>()
)

export const deleteKeyword = createAction(
    '[New Campaign] Delete Keyword',
    props<{keyword: NewCampaign["keywords"][0]}>()

)

export const deleteKeywordSuccess = createAction(
    '[New Campaign] Delete Keyword Success',
    props<{keyword: NewCampaign["keywords"][0]}>()
)

export const updateGivenKeyword = createAction(
    '[New Campaign] Update Given Keyword',
    props<{keyword: NewCampaign["keywords"][0]}>()
)

export const updateGivenKeywordSuccess = createAction(
    '[New Campaign] Update Given Keyword Success',
    props<{keyword: NewCampaign["keywords"][0]}>()
)
