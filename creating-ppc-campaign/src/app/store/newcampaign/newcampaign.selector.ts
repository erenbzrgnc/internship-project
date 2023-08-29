import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NewCampaign } from "src/app/model/new-campaign";
import { Keyword } from "src/app/model/keyword";
import { map } from "rxjs";

export const selectNewCampaign = createFeatureSelector<NewCampaign>('newCampaign');
export const selectKeywords = createSelector(
    selectNewCampaign,
    (newCampaign: NewCampaign) => newCampaign.keywords
);
