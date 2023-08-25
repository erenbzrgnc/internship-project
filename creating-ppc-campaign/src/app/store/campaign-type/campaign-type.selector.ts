import { createFeatureSelector } from "@ngrx/store";
import { CampaignType } from "src/app/model/campaign-type";


export const selectCampaignTypes = createFeatureSelector<CampaignType[]>('campaignTypes');