import { NewCampaign } from "src/app/model/new-campaign";
import { createReducer, on } from "@ngrx/store";
import { deleteKeywordSuccess, deleteNewCampaignSuccess, updateCampaignAdGroupName, updateCampaignAdGroupNameSuccess, updateCampaignDetail, updateCampaignDetailSuccess, updateCampaignProductsSuccess, updateCampaignTypeSuccess, updateGivenKeywordSuccess, updateKeywordsSuccess } from "./newcampaign.action";


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
    adGroupName: "",
    keywords: [ ],
    stats:{"impression": 7.652, "clicks":1.375, "ACoS": 12.20},
    status: "running"   
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
    on(updateKeywordsSuccess, (state, { keywords }) => ({
        ...state,
        keywords: [
            ...keywords
        ]
    })),
    on(deleteKeywordSuccess, (state, { keyword }) => ({
        ...state,
        keywords: state.keywords.filter(k => k.keyword !== keyword.keyword)
    })),
    on(updateGivenKeywordSuccess, (state, { keyword }) => ({
        ...state,
        keywords: state.keywords.map(k => {
            if(k.keyword === keyword.keyword) {
                return keyword;
            }
            return k;
        })
    })),
    on(deleteNewCampaignSuccess, () => initialState)


    
        

    
    
);

