import { createReducer, on } from "@ngrx/store";
import { NewCampaign } from "src/app/model/new-campaign";
import { createCampaign, createCampaignSuccess, loadAllCampaignsSuccess } from "./campaigns.action";


export const initialState: NewCampaign[] = [];
export const campaignReducer = createReducer(
    initialState,
    on(loadAllCampaignsSuccess, (state, { campaigns }) => {
        return campaigns;
    }
    ),
    on(createCampaignSuccess, (state, { campaign }) => {
        return [...state, campaign];
    }
    )
    
);