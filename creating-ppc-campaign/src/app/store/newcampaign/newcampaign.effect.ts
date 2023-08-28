import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { updateCampaignDetail, updateCampaignDetailSuccess, updateCampaignType, updateCampaignTypeSuccess } from "./newcampaign.action";
import { map, mergeMap } from "rxjs";
@Injectable({ providedIn: 'root' })
export class NewCampaignEffect {
    constructor(private actions$: Actions) {}

    updateCampaignDetails$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateCampaignDetail),
            map((action) => {
                return updateCampaignDetailSuccess({ Details: action.Details});
            })
            
        );
    });
    
    updateCampaignType$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateCampaignType),
            map((action) => {
                return updateCampaignTypeSuccess({ campaignType: action.campaignType});
            })
            
        );
    });

}
