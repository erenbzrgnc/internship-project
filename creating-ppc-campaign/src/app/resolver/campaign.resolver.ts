import { Inject, Injectable } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, first, filter, map } from 'rxjs/operators';
import { loadAllCampaignTypes } from '../store/campaign-type/campaign-type.action';
import { selectCampaigns } from '../store/campaigns/campaigns.selector';
import { loadAllCampaigns } from '../store/campaigns/campaigns.action';
@Injectable({
  providedIn: 'root'
})
export class campaignResolver {
  constructor(private store: Store) {}
  resolve(): Observable<boolean> {
    return this.store.select(selectCampaigns).pipe(
      tap(campaigns => {
        if (!campaigns || campaigns.length === 0) {
          this.store.dispatch(loadAllCampaigns());
        }
      }),
      filter(campaignTypes => campaignTypes && campaignTypes.length > 0),
      map(campaignTypes => !!campaignTypes && campaignTypes.length > 0),
      first()
    );
  }


}