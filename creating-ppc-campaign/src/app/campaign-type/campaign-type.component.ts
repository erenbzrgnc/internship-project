import { Component, Input } from '@angular/core';
import { CampaignType } from '../model/campaign-type';

@Component({
  selector: 'app-campaign-type',
  templateUrl: './campaign-type.component.html',
  styleUrls: ['./campaign-type.component.css']
})
export class CampaignTypeComponent {

  @Input() campaignType: CampaignType;

}
