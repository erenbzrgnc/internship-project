import { createFeatureSelector } from "@ngrx/store";
import { NewCampaign } from "src/app/model/new-campaign";

export const selectNewCampaign = createFeatureSelector<NewCampaign>('newCampaign');
