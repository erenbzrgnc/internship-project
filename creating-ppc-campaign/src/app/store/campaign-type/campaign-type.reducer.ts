import { CampaignType } from "src/app/model/campaign-type";
import { createReducer } from "@ngrx/store";
import { loadAllCampaignTypesSuccess } from "./campaign-type.action";
import { on } from "@ngrx/store";

export const initialState:CampaignType[] = [];
export const campaignTypeReducer = createReducer(
    initialState,
    on(loadAllCampaignTypesSuccess, (state, {campaignType}) => {
        return campaignType;
    }
    ),


);
