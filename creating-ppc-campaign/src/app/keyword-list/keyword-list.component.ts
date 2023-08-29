import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Keyword } from '../model/keyword';
import { selectKeywords, selectNewCampaign} from "../store/newcampaign/newcampaign.selector"
import { deleteKeyword, deleteNewCampaign, updateGivenKeyword } from '../store/newcampaign/newcampaign.action';
import { CampaignService } from '../services/campaign.service';
import { Router } from '@angular/router';
import { createCampaign } from '../store/campaigns/campaigns.action';

@Component({
  selector: 'app-keyword-list',
  templateUrl: './keyword-list.component.html',
  styleUrls: ['./keyword-list.component.css']

})
export class KeywordListComponent {

  
  
    keywordList$: Observable<Keyword[]>; 
    constructor(private store: Store, private campaignService: CampaignService, private router: Router) {

      this.keywordList$ = this.store.select(selectKeywords);
    

     }
  
    ngOnInit(): void {
    }

    handleKeywordRemoved(keyword: Keyword) {
      console.log("Keyword removed:", keyword);
      this.store.dispatch(deleteKeyword({keyword: keyword}));
    }

    handleKeywordChanged(changedKeyword: any) {
      console.log("Keyword changed:", changedKeyword);
      this.store.dispatch(updateGivenKeyword({keyword: changedKeyword}));
    }

    saveCampaign() {

      



      this.store.select(selectNewCampaign).pipe(
        take(1) // Take just one value from the observable and then unsubscribe
      ).subscribe(campaign => {
        this.campaignService.creeateCampaign(campaign).then(res => {
          
          console.log(res);
          this.store.dispatch(createCampaign({campaign: campaign}));
          this.store.dispatch(deleteNewCampaign());
          this.router.navigate(['/all-campaigns']);
        }).catch(err => {
          console.log(err);
        });
      });
    }

}


