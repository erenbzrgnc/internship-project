import { createFeatureSelector } from "@ngrx/store";
import { NewCampaign } from "src/app/model/new-campaign";


export const selectCampaigns = createFeatureSelector<NewCampaign[]>('campaigns');