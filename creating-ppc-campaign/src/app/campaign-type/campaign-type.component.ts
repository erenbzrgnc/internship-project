import { Component, Input } from '@angular/core';
import { CampaignType } from '../model/campaign-type';
import { Store } from '@ngrx/store';
import { updateCampaignType } from '../store/newcampaign/newcampaign.action';

@Component({
  selector: 'app-campaign-type',
  templateUrl: './campaign-type.component.html',
  styleUrls: ['./campaign-type.component.css']
})
export class CampaignTypeComponent {

  @Input() campaignType: CampaignType;

  constructor(private store: Store) { }

  ngOnInit(): void {

  }

  selectCampaignType() {
    this.store.dispatch(updateCampaignType({ campaignType: this.campaignType }));
  }

}
