import { createAction, props } from "@ngrx/store"
import {NewCampaign} from "../../model/new-campaign"

export const loadAllCampaigns = createAction(
    '[Campaign] Get All Campaigns'
)

export const loadAllCampaignsSuccess = createAction(
    '[Campaign] Get All Campaigns Success',
    props<{campaigns: NewCampaign[]}>()
)

export const loadAllCampaignsFailure = createAction(
    '[Campaign] Get All Campaigns Failure',
    props<{error: string}>()
)

export const createCampaign = createAction(
    '[Campaign] Create Campaign',
    props<{campaign: NewCampaign}>()
)

export const createCampaignSuccess = createAction(
    '[Campaign] Create Campaign Success',
    props<{campaign: NewCampaign}>()
)

