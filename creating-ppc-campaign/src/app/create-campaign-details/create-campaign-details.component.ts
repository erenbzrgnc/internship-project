import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-campaign-details',
  templateUrl: './create-campaign-details.component.html',
  styleUrls: ['./create-campaign-details.component.css']
})
export class CreateCampaignDetailsComponent {

  constructor() { }

  campaignForm: FormGroup;
  ngOnInit(): void {
    this.campaignForm = new FormGroup({ 
      "campaignName": new FormControl(null, [Validators.required]),
      "dailyBudget": new FormControl(1, [Validators.required]),
      "startDate": new FormControl(null, [Validators.required]),
      "endDate": new FormControl(null, [Validators.required]),
    });
  }

}
