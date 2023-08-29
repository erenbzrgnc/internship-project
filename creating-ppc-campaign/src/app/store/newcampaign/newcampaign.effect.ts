import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { updateCampaignDetail, updateCampaignDetailSuccess, updateCampaignType, updateCampaignTypeSuccess, updateCampaignAdGroupName, updateCampaignProducts, updateCampaignProductsSuccess, updateCampaignAdGroupNameSuccess, updateKeywords, updateKeywordsSuccess, deleteKeyword, deleteKeywordSuccess, updateGivenKeyword, updateGivenKeywordSuccess, deleteNewCampaign, deleteNewCampaignSuccess} from "./newcampaign.action";
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

    updateCampaignProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateCampaignProducts),
            map((action) => {
                return updateCampaignProductsSuccess({ products: action.products});
            })
            
        );
    });

    updateCampaignAdGroupName$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateCampaignAdGroupName),
            map((action) => {
                console.log(action);
                return updateCampaignAdGroupNameSuccess({ adGroupName: action.adGroupName});
            })
            
        );
    }

    );

    updateKeywords$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateKeywords),
            map((action) => {
                console.log(action);
                return updateKeywordsSuccess({ keywords: action.keywords});
            })

        );
    }

    );  

    deleteKeyword$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteKeyword),
            map((action) => {
                console.log(action);
                return deleteKeywordSuccess({ keyword: action.keyword});
            })

        );
    }
    
    );

    updateGivenKeyword$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateGivenKeyword),
            map((action) => {
                console.log(action);
                return updateGivenKeywordSuccess({ keyword: action.keyword});
            })

        );
    }

    );

    deleteNewCampaign$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteNewCampaign),
            map((action) => {
                console.log(action);
                return deleteNewCampaignSuccess();
            })
        );
            }
        );






}
