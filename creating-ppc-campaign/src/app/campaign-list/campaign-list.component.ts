import { Component } from '@angular/core';
import { Observable, take } from 'rxjs';
import { NewCampaign } from '../model/new-campaign';
import { CampaignService } from '../services/campaign.service';
import { Store } from '@ngrx/store';
import { selectCampaigns } from '../store/campaigns/campaigns.selector';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent {

  campaignList$: Observable<NewCampaign[]>;
  totalImpressions = 0;
  totalClicks = 0;
  totalACoS = 0;
  
    constructor(private campaignService: CampaignService, private store: Store) { 
    
    }
  
    ngOnInit(): void {
      this.campaignList$ = this.store.select(selectCampaigns);
      console.log("campaignList$:", this.campaignList$)
      this.campaignList$.pipe(
        take(1)
      ).subscribe(campaigns => {
        this.totalImpressions = campaigns.reduce((acc, campaign) => acc + campaign.stats.impression, 0);
        this.totalClicks = campaigns.reduce((acc, campaign) => acc + campaign.stats.clicks, 0);
        this.totalACoS = campaigns.length > 0 ? campaigns.reduce((acc, campaign) => acc + campaign.stats.ACoS, 0) / campaigns.length : 0;
      });
    }


}
