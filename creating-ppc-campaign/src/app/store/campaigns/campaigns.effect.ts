import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CampaignService } from "src/app/services/campaign.service";
import { createCampaign, createCampaignSuccess, loadAllCampaigns, loadAllCampaignsSuccess } from "./campaigns.action";
import { catchError, map, mergeMap, of } from "rxjs";
import { loadAllCampaignsFailure } from "./campaigns.action";


@Injectable()
export class CampaignEffect {
    constructor(private actions$: Actions, private campaignService: CampaignService) {}

    $loadAllCampaigns = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllCampaigns),
            mergeMap(() => this.campaignService.getAllCampaigns().pipe(
                map(campaigns => {
                    return loadAllCampaignsSuccess({campaigns});
                }),
                catchError(err => of(loadAllCampaignsFailure({error: err.message})))
            ))
        );

    }
    )
    $createCampaign = createEffect(() => {
        return this.actions$.pipe(
            ofType(createCampaign),
            mergeMap((action) => of(createCampaignSuccess({ campaign: action.campaign })))
        );
    });
}
    