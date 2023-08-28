import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateCampaignDetail } from '../store/newcampaign/newcampaign.action';

@Component({
  selector: 'app-create-campaign-details',
  templateUrl: './create-campaign-details.component.html',
  styleUrls: ['./create-campaign-details.component.css']
})
export class CreateCampaignDetailsComponent {

  constructor(private store: Store) { }

  campaignForm: FormGroup;
  ngOnInit(): void {
    this.campaignForm = new FormGroup({ 
      "campaignName": new FormControl(null, [Validators.required]),
      "dailyBudget": new FormControl(1, [Validators.required]),
      "startDate": new FormControl(null, [Validators.required]),
      "endDate": new FormControl(null, [Validators.required]),
    });
  }

  submitDetails() {
    this.store.dispatch(updateCampaignDetail({ Details: this.campaignForm.value }));
  }

}
