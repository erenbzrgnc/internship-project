import { Component } from '@angular/core';
import { CampaignService } from '../services/campaign.service';
import { Observable, tap } from 'rxjs';
import { CampaignType } from '../model/campaign-type';
import { Store } from '@ngrx/store';
import { selectCampaignTypes } from '../store/campaign-type/campaign-type.selector';
import { loadAllCampaignTypes } from '../store/campaign-type/campaign-type.action';
@Component({
  selector: 'app-campaign-type-list',
  templateUrl: './campaign-type-list.component.html',
  styleUrls: ['./campaign-type-list.component.css']
})
export class CampaignTypeListComponent {
  campaignTypes$: Observable<CampaignType[]>;



  constructor(private campaignService: CampaignService, private store: Store ) { }

  ngOnInit(): void {
    this.campaignTypes$ = this.store.select(selectCampaignTypes);

    /*
    this.campaignTypes$ = this.store.select(selectCampaignTypes).pipe(
      tap(campaignTypes => {
        if (campaignTypes && campaignTypes.length > 0) {
          console.log("campaignTypes$ is not null");
        } else {
          this.store.dispatch(loadAllCampaignTypes());
        }
      })
    );
    */
  }


  

}
