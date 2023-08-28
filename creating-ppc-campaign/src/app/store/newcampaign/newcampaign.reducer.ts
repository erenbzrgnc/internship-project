import { NewCampaign } from "src/app/model/new-campaign";
import { createReducer, on } from "@ngrx/store";
import { deleteNewCampaign, updateCampaignAdGroupName, updateCampaignAdGroupNameSuccess, updateCampaignDetail, updateCampaignDetailSuccess, updateCampaignProductsSuccess, updateCampaignTypeSuccess } from "./newcampaign.action";


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
    },
    products: [

    ],
    adGroupName: ""
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
    })),
    on(updateCampaignProductsSuccess, (state, { products }) => ({
        ...state,
        products: [

            ...products
        ]
    })),
    on(updateCampaignAdGroupNameSuccess, (state, { adGroupName }) => ({
        ...state,
        adGroupName: adGroupName
    })),
    on(deleteNewCampaign, (state) => ({
        ...state,
        ...initialState
    }))
    
);

