import { Component } from '@angular/core';
import { CampaignService } from '../services/campaign.service';
import { Observable } from 'rxjs';
import { CampaignType } from '../model/campaign-type';
@Component({
  selector: 'app-campaign-type-list',
  templateUrl: './campaign-type-list.component.html',
  styleUrls: ['./campaign-type-list.component.css']
})
export class CampaignTypeListComponent {
  campaignTypes$: Observable<CampaignType[]>;



  constructor(private campaignService: CampaignService ) { }

  ngOnInit(): void {

    this.campaignTypes$ = this.campaignService.getAllCampaignTypes();
    this.campaignTypes$.subscribe(data => {
      console.log(data);
    });

    
  } 


  

}
