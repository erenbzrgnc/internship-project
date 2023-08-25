import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CampaignService } from 'src/app/services/campaign.service';
import { loadAllCampaignTypes, loadAllCampaignTypesFailure, loadAllCampaignTypesSuccess } from './campaign-type.action';
import { catchError, map, mergeMap, of } from 'rxjs';


@Injectable()
export class CampaignTypeEffect {
    constructor( private actions$: Actions, private campaignService: CampaignService) {}

   

    loadAllCampaignTypes$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllCampaignTypes),
            mergeMap(() => this.campaignService.getAllCampaignTypes().pipe(
                map(campaignType => {
                    return loadAllCampaignTypesSuccess({campaignType});
                }),
                catchError(err => of(loadAllCampaignTypesFailure({error: err.message})))
            ))
        );
    })

    /*

    loadAllCampaignTypes$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllCampaignTypes),
            mergeMap(() => this.campaignService.getAllCampaignTypes().pipe(
                map(campaignType => {
                    return loadAllCampaignTypesSuccess({campaignType});
                }),
                catchError(err => of(loadAllCampaignTypesFailure({error: err.message})))
            ))
        );
    })
*/

}
