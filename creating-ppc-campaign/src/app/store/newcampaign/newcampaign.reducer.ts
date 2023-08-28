import { NewCampaign } from "src/app/model/new-campaign";
import { createReducer, on } from "@ngrx/store";
import { updateCampaignDetail, updateCampaignDetailSuccess, updateCampaignTypeSuccess } from "./newcampaign.action";


export const initialState: NewCampaign = {
    campaignType: {
        title: "",
        description: ""
    },
    details: {
        campaignName: "",
        dailyBudget: 0,
        startDate: undefined,
        endDate: undefined
    }
}
export const newCampaignDetail: NewCampaign["details"] = {
    campaignName: "",
    dailyBudget: 0,
    startDate: undefined,
    endDate: undefined
}
export const NewCampaignReducer = createReducer(
    initialState,
    on(updateCampaignDetailSuccess, (state, { Details }) => ({
        ...state, 
        details: {
            ...state.details,
            ...Details
        }
    })),
    on(updateCampaignTypeSuccess, (state, { campaignType }) => ({
        ...state,
        campaignType: {
            ...state.campaignType,
            ...campaignType
        }
    }))
);