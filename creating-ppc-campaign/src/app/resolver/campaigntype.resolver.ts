import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, first, filter, map } from 'rxjs/operators';
import { loadAllCampaignTypes } from '../store/campaign-type/campaign-type.action';
import { selectCampaignTypes } from '../store/campaign-type/campaign-type.selector';

@Injectable({
  providedIn: 'root'
})
export class CampaignTypeResolver {

  constructor(private store: Store) {}

  resolve(): Observable<boolean> {
    return this.store.select(selectCampaignTypes).pipe(
      tap(campaignTypes => {
        if (!campaignTypes || campaignTypes.length === 0) {
          this.store.dispatch(loadAllCampaignTypes());
        }
      }),
      filter(campaignTypes => campaignTypes && campaignTypes.length > 0),
      map(campaignTypes => !!campaignTypes && campaignTypes.length > 0),
      first()
    );
  }
}
